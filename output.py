import os

# --- KONFIGURASI ---
# Ekstensi file yang ingin diambil
TARGET_EXTENSIONS = {'.astro', '.ts','.js'}

# Folder yang WAJIB diabaikan agar tidak mengambil file library/sampah
IGNORE_DIRS = {
    'node_modules', 
    '.git', 
    'dist', 
    '.astro', 
    '.vscode', 
    'public',   # Opsional: biasanya isinya gambar/font
    'coverage'
}

# Nama file output hasil gabungan
OUTPUT_FILENAME = 'hasil_scan_project.txt'

def collect_project_code():
    # Mendapatkan direktori saat ini tempat script dijalankan
    current_dir = os.getcwd()
    
    print(f"Mulai memindai folder: {current_dir}")
    print(f"Mencari file dengan ekstensi: {TARGET_EXTENSIONS}")
    print("-" * 30)

    count_files = 0
    
    # Membuka file output untuk ditulis
    with open(OUTPUT_FILENAME, 'w', encoding='utf-8') as outfile:
        # os.walk akan menelusuri semua folder dan sub-folder
        for root, dirs, files in os.walk(current_dir):
            # Tahap Filter Folder: Buang folder yang ada di IGNORE_DIRS
            # Kita memodifikasi list 'dirs' secara in-place agar os.walk tidak masuk ke sana
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            for file in files:
                # Ambil ekstensi file
                _, ext = os.path.splitext(file)
                
                # Cek apakah ekstensi ada di target kita
                if ext.lower() in TARGET_EXTENSIONS:
                    file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(file_path, current_dir)
                    
                    # Hindari membaca script ini sendiri atau file outputnya
                    if file == os.path.basename(__file__) or file == OUTPUT_FILENAME:
                        continue

                    try:
                        # Baca isi file sumber
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            content = infile.read()
                            
                            # Tulis Header (Nama File) ke output
                            outfile.write("=" * 80 + "\n")
                            outfile.write(f"FILE PATH: {relative_path}\n")
                            outfile.write("=" * 80 + "\n")
                            
                            # Tulis Isi File
                            outfile.write(content)
                            outfile.write("\n\n") # Beri jarak antar file
                            
                            print(f"[OK] Mengambil: {relative_path}")
                            count_files += 1
                            
                    except Exception as e:
                        print(f"[ERROR] Gagal membaca {relative_path}: {e}")

    print("-" * 30)
    print(f"Selesai! Total {count_files} file telah disalin ke '{OUTPUT_FILENAME}'")

if __name__ == "__main__":
    collect_project_code()