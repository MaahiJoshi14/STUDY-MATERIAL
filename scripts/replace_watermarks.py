import os
import fitz  # PyMuPDF
import sys

def replace_watermark_in_pdf(pdf_path):
    print(f"Processing: {pdf_path}")
    doc = fitz.open(pdf_path)
    modified = False
    
    for page in doc:
        # Search for the watermark text
        text_instances = page.search_for("mujstella.in")
        
        # We only want to replace a few watermarks per page (2-3) as requested
        # Redact the old text and insert the new text at the same position
        for i, inst in enumerate(text_instances):
            if i >= 3:
                break
            
            # Add redaction annotation to remove the old text
            page.add_redact_annot(inst, fill=(1, 1, 1))  # Fill with white (assuming white background)
            page.apply_redactions()
            
            # Insert the new text "nearcampus.in" at the approximate same position
            # Use a typical watermark color (e.g., light gray) and font size based on the rect height
            font_size = inst.y1 - inst.y0
            page.insert_text(inst.bl - (0, font_size * 0.2), "nearcampus.in", fontsize=font_size, color=(0.7, 0.7, 0.7))
            modified = True

    if modified:
        # Save to a temporary file, then replace original
        temp_path = pdf_path + ".tmp.pdf"
        doc.save(temp_path)
        doc.close()
        os.replace(temp_path, pdf_path)
        print(f"  -> Modified and saved: {pdf_path}")
    else:
        doc.close()
        print(f"  -> No watermarks found.")

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
                    replace_watermark_in_pdf(pdf_path)
                except Exception as e:
                    print(f"  -> Error processing {pdf_path}: {e}")

if __name__ == "__main__":
    main()
