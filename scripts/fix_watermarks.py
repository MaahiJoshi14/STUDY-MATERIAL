import os
import fitz  # PyMuPDF
import sys

def fix_watermark_in_pdf(pdf_path):
    print(f"Processing: {pdf_path}")
    doc = fitz.open(pdf_path)
    modified = False
    
    for page in doc:
        search_terms = ["mujstella", "mujstella.in", "nearcampus", "nearcampus.in", "stella"]
        
        # also we can remove annotations if any were used for watermarks
        for annot in page.annots():
            page.delete_annot(annot)
            modified = True
            
        for term in search_terms:
            text_instances = page.search_for(term)
            for inst in text_instances:
                page.add_redact_annot(inst, fill=(1, 1, 1))
                modified = True
                
        # To be really aggressive against top/bottom watermarks, let's also find all text and check for the string
        text_dict = page.get_text("dict")
        for block in text_dict.get("blocks", []):
            if "lines" in block:
                for line in block["lines"]:
                    for span in line["spans"]:
                        text = span["text"].lower()
                        if "mujstella" in text or "nearcampus" in text or "stella" in text:
                            # Redact this span's bbox
                            page.add_redact_annot(span["bbox"], fill=(1,1,1))
                            modified = True

        if modified:
            page.apply_redactions()

            # Insert 2-3 small watermarks "nearcampus.in"
            # Positions: bottom left, bottom right, and top right
            rect = page.rect
            width = rect.width
            height = rect.height
            
            f_size = 10
            color = (0.7, 0.7, 0.7)  # Light gray
            
            # Bottom left
            page.insert_text((30, height - 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
            # Bottom right
            page.insert_text((width - 100, height - 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
            # Top right
            page.insert_text((width - 100, 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)

    if modified:
        # Save to a temporary file, then replace original
        temp_path = pdf_path + ".tmp.pdf"
        doc.save(temp_path)
        doc.close()
        os.replace(temp_path, pdf_path)
        print(f"  -> Fixed and saved: {pdf_path}")
    else:
        # If we didn't find any, let's forcefully add the new watermarks anyway just in case it was a fresh file
        rect = page.rect
        width = rect.width
        height = rect.height
        f_size = 10
        color = (0.7, 0.7, 0.7)
        page.insert_text((30, height - 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
        page.insert_text((width - 100, height - 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
        page.insert_text((width - 100, 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
        temp_path = pdf_path + ".tmp.pdf"
        doc.save(temp_path)
        doc.close()
        os.replace(temp_path, pdf_path)
        print(f"  -> Processed without removing (didn't match text): {pdf_path}")

def main():
    target_dir = r"C:\Users\Admin\Desktop\study-material-resources\2nd year btech"
    if not os.path.exists(target_dir):
        print(f"Directory not found: {target_dir}")
        return

    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.lower().endswith('.pdf'):
                pdf_path = os.path.join(root, file)
                try:
                    fix_watermark_in_pdf(pdf_path)
                except Exception as e:
                    print(f"  -> Error processing {pdf_path}: {e}")

if __name__ == "__main__":
    main()
