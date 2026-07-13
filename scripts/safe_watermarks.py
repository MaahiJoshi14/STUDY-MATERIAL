import os
import fitz  # PyMuPDF
import sys

def safe_watermark_pdf(pdf_path):
    print(f"Applying safe watermarks to: {pdf_path}")
    doc = fitz.open(pdf_path)
    
    for page in doc:
        rect = page.rect
        width = rect.width
        height = rect.height
        f_size = 10
        color = (0.7, 0.7, 0.7)  # Light gray
        
        # Insert safe watermarks in corners without touching any existing text
        page.insert_text((30, height - 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
        page.insert_text((width - 100, height - 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)
        page.insert_text((width - 100, 30), "nearcampus.in", fontsize=f_size, color=color, rotate=0)

    # Save over original safely
    temp_path = pdf_path + ".safe.tmp.pdf"
    doc.save(temp_path)
    doc.close()
    os.replace(temp_path, pdf_path)
    print(f"  -> Watermarked and saved safely.")

def main():
    target_dir = r"C:\Users\Admin\Desktop\study-material-resources\2nd year btech"
    if not os.path.exists(target_dir):
        return

    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.lower().endswith('.pdf'):
                pdf_path = os.path.join(root, file)
                try:
                    safe_watermark_pdf(pdf_path)
                except Exception as e:
                    print(f"Error on {pdf_path}: {e}")

if __name__ == "__main__":
    main()
