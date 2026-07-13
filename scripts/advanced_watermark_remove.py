"""
Advanced PDF Watermark Remover using fitz (PyMuPDF).
Strategy:
  1. Find all instances of target text strings (mujstella, nearcampus, footer text).
  2. Use redact_annot with the actual text area — BUT we set the fill color to None
     so we DON'T draw any white rectangle. We use whiteout=False.
  3. The text is physically removed from the PDF's content stream.
  4. Then add clean nearcampus.in watermarks in corners as text overlays.
  
This approach removes text WITHOUT covering other content.
"""

import fitz  # PyMuPDF
import os
import sys

# Directories to process
RESOURCE_DIR = r"C:\Users\Admin\Desktop\study-material-resources"

# Watermark texts to search and remove
REMOVE_TEXTS = [
    "mujstella.in",
    "mujstella",
    "MUJstella",
    "Mujstella",
    "MUJSTELLA",
    "For more material and PYQs, checkout mujstella.in website and MUJstella app on Playstore",
    "For more material and PYQs, checkout",
    "website and MUJstella app on Playstore",
    "nearcampus.in",  # Remove old ones so we re-add cleanly
    "NearCampus",
    "near campus",
]

FOOTER_KEYWORDS = [
    "For more material",
    "checkout mujstella",
    "MUJstella app",
    "Playstore",
]


def process_pdf(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        modified = False

        for page_num, page in enumerate(doc):
            page_modified = False

            # ── Step 1: Find and remove watermark text using redaction ──
            for search_term in REMOVE_TEXTS:
                # Search case-insensitively
                instances = page.search_for(search_term, quads=True)
                if instances:
                    for quad in instances:
                        # Add a redaction annotation
                        # fill=None means no fill color -> transparent background
                        # text="" means no replacement text
                        annot = page.add_redact_annot(quad, fill=None)
                    page_modified = True

            # ── Step 2: Search for footer sentences that span wider areas ──
            for kw in FOOTER_KEYWORDS:
                instances = page.search_for(kw, quads=True)
                if instances:
                    for quad in instances:
                        # Expand the rect slightly to capture full line
                        rect = quad.rect
                        # Expand horizontally to cover full line
                        expanded = fitz.Rect(0, rect.y0 - 2, page.rect.width, rect.y1 + 2)
                        page.add_redact_annot(expanded, fill=None)
                    page_modified = True

            if page_modified:
                # Apply all redactions - fill=False means don't fill with white
                page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE)
                modified = True

            # ── Step 3: Add nearcampus.in in 4 corners as subtle text ──
            w = page.rect.width
            h = page.rect.height
            
            wm_text = "nearcampus.in"
            font_size = 7
            wm_color = (0.5, 0.5, 0.5)  # medium gray
            
            # Bottom-left
            page.insert_text(
                fitz.Point(6, h - 5),
                wm_text, fontsize=font_size, color=wm_color
            )
            # Bottom-right
            tw = fitz.get_text_length(wm_text, fontsize=font_size)
            page.insert_text(
                fitz.Point(w - tw - 6, h - 5),
                wm_text, fontsize=font_size, color=wm_color
            )
            # Top-left
            page.insert_text(
                fitz.Point(6, 12),
                wm_text, fontsize=font_size, color=wm_color
            )
            # Top-right
            page.insert_text(
                fitz.Point(w - tw - 6, 12),
                wm_text, fontsize=font_size, color=wm_color
            )
            modified = True

        if modified:
            # Save to temp then replace original
            tmp_path = pdf_path + ".tmp"
            doc.save(tmp_path, deflate=True, garbage=4)
            doc.close()
            os.replace(tmp_path, pdf_path)
            print(f"  [OK] Processed: {os.path.basename(pdf_path)}")
        else:
            doc.close()
            print(f"  [SKIP] No watermarks found: {os.path.basename(pdf_path)}")

    except Exception as e:
        print(f"  [ERROR] {pdf_path}: {e}")


def walk_and_process(root_dir):
    pdf_count = 0
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for fname in filenames:
            if fname.lower().endswith('.pdf'):
                full_path = os.path.join(dirpath, fname)
                print(f"Processing: {full_path}")
                process_pdf(full_path)
                pdf_count += 1
    return pdf_count


if __name__ == '__main__':
    print("=" * 60)
    print("Advanced PDF Watermark Remover")
    print("=" * 60)
    
    if not os.path.isdir(RESOURCE_DIR):
        print(f"ERROR: Resource directory not found: {RESOURCE_DIR}")
        sys.exit(1)

    total = walk_and_process(RESOURCE_DIR)
    print("=" * 60)
    print(f"Done! Processed {total} PDF files.")
