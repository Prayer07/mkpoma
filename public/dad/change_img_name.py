import os

def rename_images(base_name="image"):
    count = 1
    for filename in os.listdir("."):
        if os.path.isfile(filename):
            ext = os.path.splitext(filename)[1].lower()
            if ext in [".jpg", ".jpeg", ".png", ".gif", ".bmp"]:
                new_name = f"{base_name}{count}{ext}"
                os.rename(filename, new_name)
                print(f"Renamed {filename} -> {new_name}")
                count += 1

if __name__ == "__main__":
    base_name = input("Enter the new base name (without extension): ")
    rename_images(base_name)
