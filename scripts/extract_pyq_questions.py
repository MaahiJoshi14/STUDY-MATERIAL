# -*- coding: utf-8 -*-
"""
extract_pyq_questions.py
========================
Scans the actual PYQ PDF files from study-material-resources,
extracts REAL questions with marks/weightage and year of appearance,
calculates frequency across years, then appends/updates quizData.json.

Usage:
    python scripts/extract_pyq_questions.py

Requirements:
    pip install pymupdf
"""

import json, re, sys
from pathlib import Path

try:
    import fitz
except ImportError:
    print("PyMuPDF not installed. Run:  pip install pymupdf")
    sys.exit(1)

RESOURCES_ROOT = Path(r"C:\Users\Admin\Desktop\study-material-resources")
QUIZ_DATA_PATH = Path(r"C:\Users\Admin\study-material\src\data\quizData.json")

SUBJECTS = {
    "data-visualization":               ("1st year btech/chemistry-cycle", "data-visualization"),
    "communication-skills":             ("1st year btech/chemistry-cycle", "communication-skills"),
    "digital-systems":                  ("1st year btech/chemistry-cycle", "digital-systems"),
    "electrical-and-electronic-systems":("1st year btech/chemistry-cycle", "electrical-and-electronic-systems"),
    "electronic-circuits":              ("1st year btech/chemistry-cycle", "electronic-circuits"),
    "engineering-chemistry":            ("1st year btech/chemistry-cycle", "engineering-chemistry"),
    "engineering-graphics":             ("1st year btech/chemistry-cycle", "engineering-graphics"),
    "manufacturing-products":           ("1st year btech/chemistry-cycle", "manufacturing-products"),
    "technical-writing-clinic":         ("1st year btech/chemistry-cycle", "technical-writing-clinic"),
    "applied-mathematics":              ("1st year btech/chemistry-cycle", "applied-mathematics"),
    "basic-mechanical-engineering":     ("1st year btech/chemistry-cycle", "basic-mechanical-engineering"),
    "fundamentals-data-structures":     ("1st year btech/physics-cycle", "fundamentals-data-structures"),
    "biology-for-engineers":            ("1st year btech/physics-cycle", "biology-for-engineers"),
    "engineering-material-mechanics":   ("1st year btech/physics-cycle", "engineering-material-mechanics"),
    "calculus-and-matrices":            ("1st year btech/physics-cycle", "calculus-and-matrices"),
}

def year_from_name(stem):
    m = re.search(r'(20\d{2}[-_]?\d{2,4})', stem)
    if m: return m.group(1).replace('_', '-')
    if 'ETE' in stem.upper(): return 'ETE'
    if 'MTE' in stem.upper(): return 'MTE'
    return 'Unknown'

def marks_from_text(txt):
    m = re.search(r'\[?\(?(\d+)\s*[Mm]arks?\)?\]?', txt)
    if m: return int(m.group(1))
    m = re.search(r'\[(\d+)\]', txt)
    if m: return int(m.group(1))
    return 0

def clean_q(q):
    q = re.sub(r'^\s*[Qq]\.?\s*\d+[\.\)a-z]?\s*', '', q)
    q = re.sub(r'^\s*[\da-z][\.\)]\s*', '', q)
    return re.sub(r'\s+', ' ', q).strip()

def valid_q(txt):
    if len(txt) < 25: return False
    t = txt.lower().strip()
    for p in [r'^(note|instruction|time|marks|attempt|section|part|roll|answer all|answer any)',
              r'^\d+\s*$', r'^[a-z\s]{1,6}$']:
        if re.match(p, t): return False
    return bool(re.search(r'[a-zA-Z]{4,}', txt))

def parse_page(text):
    results = []
    chunks = re.split(
        r'(?m)^\s*(?:[Qq]\.?\s*\d+[\.\)]\s|(?<!\d)\d{1,2}[\.\)]\s(?=[A-Z])|[a-z]\)\s(?=[A-Z]))',
        text)
    for chunk in chunks:
        first = chunk.split('\n')[0].strip()
        if valid_q(first):
            results.append({'text': clean_q(first), 'marks': marks_from_text(chunk)})
    return results

def from_pdf(path, year):
    qs = []
    try:
        doc = fitz.open(str(path))
        for pg in doc:
            for q in parse_page(pg.get_text("text")):
                q['year'] = year
                qs.append(q)
        doc.close()
    except Exception as e:
        print(f"  [ERROR] {path.name}: {e}")
    return qs

def dedup(raw):
    canon = {}
    for q in raw:
        key = re.sub(r'\W+', ' ', q['text'][:60].lower()).strip()
        if not key: continue
        if key not in canon:
            canon[key] = {'text': q['text'], 'marks': q['marks'], 'years': set(), 'frequency': 0}
        canon[key]['years'].add(q.get('year', '?'))
        canon[key]['frequency'] += 1
        if len(q['text']) > len(canon[key]['text']): canon[key]['text'] = q['text']
        if q['marks'] > canon[key]['marks']: canon[key]['marks'] = q['marks']
    result = []
    for e in canon.values():
        result.append({'text': e['text'], 'marks': e['marks'] if e['marks'] else 5,
                       'years': sorted(e['years']), 'frequency': e['frequency']})
    result.sort(key=lambda x: (-x['frequency'], -x['marks']))
    return result[:30]

def build(sid, q, i):
    yrs = q['years']
    freq = q['frequency']
    return {
        "id": f"{sid}-pyq-{i+1:03d}",
        "subjectId": sid,
        "question": q['text'],
        "type": "descriptive",
        "marks": q['marks'],
        "years": yrs,
        "frequency": freq,
        "frequencyLabel": f"Appeared {freq}x" if freq > 1 else f"Appeared in {', '.join(yrs)}",
        "yearLabel": ', '.join(yrs),
        "source": "PYQ",
        "topic": "",
    }

def main():
    print("=" * 60)
    print("PYQ Extractor — Real Data from Your PDFs")
    print("=" * 60)
    with open(QUIZ_DATA_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)

    new_entries = []
    stats = {}

    for sid, (cycle, subj) in SUBJECTS.items():
        pyq_dir = RESOURCES_ROOT / cycle / subj / "pyqs"
        if not pyq_dir.exists():
            print(f"[SKIP] {sid}  —  folder not found: {pyq_dir}")
            stats[sid] = 0; continue

        pdfs = sorted(pyq_dir.glob("*.pdf"))
        if not pdfs:
            print(f"[SKIP] {sid}  —  no PDFs in {pyq_dir}")
            stats[sid] = 0; continue

        print(f"\n[PROCESSING] {sid}  ({len(pdfs)} PDFs)")
        raw = []
        for p in pdfs:
            yr = year_from_name(p.stem)
            qs = from_pdf(p, yr)
            print(f"  {p.name[:55]:<55}  ? {len(qs)} questions")
            raw.extend(qs)

        deduped = dedup(raw)
        stats[sid] = len(deduped)
        if not deduped:
            print(f"  [WARNING] No parseable questions for {sid}")
            continue

        data = [e for e in data if e.get('subjectId') != sid]
        for i, q in enumerate(deduped):
            new_entries.append(build(sid, q, i))

    final = data + new_entries
    with open(QUIZ_DATA_PATH, 'w', encoding='utf-8') as f:
        json.dump(final, f, indent=2, ensure_ascii=False)

    print("\n" + "=" * 60)
    print("DONE")
    for sid, n in stats.items():
        print(f"  {sid:<48}  {n} questions" if n else f"  {sid:<48}  SKIPPED")
    print(f"\nTotal new entries: {len(new_entries)}")
    print(f"Total in quizData.json: {len(final)}")

if __name__ == "__main__":
    main()
