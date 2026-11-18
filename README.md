# 🌿 ECO Enzyme Website

Website edukasi interaktif dan responsif bertema lingkungan yang membahas pemanfaatan limbah organik dapur menjadi **Eco Enzyme** — cairan hasil fermentasi alami yang serbaguna dan ramah lingkungan.

---

## 👥 Tim Pengembang

**Nama Tim:** **Titan Logic**

**Anggota Tim:**
- **Alnuh Hidayutallah**
- **Sifa Nazwa**
- **Tiara Salsabila**

---

## 📄 Halaman & Bagian Utama Website

Website ini dirancang dalam format *single-page* modern dengan navigasi halus (*smooth scrolling*) yang terdiri dari bagian-bagian utama berikut:

1. **Beranda (`#home`)**  
   Tampilan pembuka (*hero section*) berisi pengenalan singkat Eco Enzyme, statistik ringkas (`3` bahan utama, `90+` hari fermentasi), ilustrasi animasi toples fermentasi, serta tombol pintas menuju kalkulator takaran.
2. **Tentang (`#about`)**  
   Penjelasan santai dan mudah dipahami mengenai apa itu Eco Enzyme, cerita asal-usulnya yang dipopulerkan oleh Dr. Rosukon Poompanvong, serta formula rasio dasar `3 : 1 : 10`.
3. **Manfaat (`#benefits`)**  
   Uraian manfaat nyata pembuatan Eco Enzyme mulai dari mengurangi sampah dapur, mengolah sisa buah dan sayur, membangun gaya hidup hijau, hingga kegunaannya sebagai cairan serbaguna alami.
4. **Cara Membuat & Kalkulator Takaran (`#how` & `#calculator`)**  
   - **Panduan 5 Langkah:** Tahapan pembuatan Eco Enzyme dari persiapan bahan hingga proses panen.
   - **Kalkulator Takaran Otomatis:** Fitur interaktif untuk memilih jenis sampah organik (kulit buah aromatik, sisa sayuran, kulit buah manis, atau campuran), memilih preset berat cepat, serta menghitung otomatis kebutuhan gula merah/molase, air bersih, dan kapasitas wadah ideal (termasuk ruang gas 30%).
5. **Galeri (`#gallery`)**  
   Dokumentasi visual tahapan pengolahan limbah dapur mulai dari bahan baku, pencampuran takaran `3 : 1 : 10`, proses fermentasi 90 hari, hingga cairan Eco Enzyme siap panen.
6. **Tips Ramah Lingkungan (`#tips`)**  
   Empat kebiasaan sederhana sehari-hari untuk mendukung pengelolaan sampah organik dari rumah.
7. **Tim Kami (`#team`)**  
   Profil tim pengembang **Titan Logic** beserta daftar anggota yang berkontribusi dalam pembuatan project ini.

---

## 🗂️ Struktur Folder Project

```text
eco-enzyme-website/
├── index.html      # Struktur utama halaman dan konten website
├── style.css       # Styling responsif, palet warna alam, grid layout, dan animasi CSS
├── script.js       # Interaktivitas navbar, scroll reveal, pemilih jenis sampah, dan logika kalkulator
├── README.md       # Dokumentasi project
└── assets/         # Folder penyimpanan aset tambahan (gambar/ikon)
```

---

## 🚀 Cara Menjalankan Project

Project ini dibangun menggunakan teknologi web standar (**HTML5, CSS3, dan Vanilla JavaScript**) tanpa memerlukan proses *build* atau instalasi *dependency* tambahan.

### Opsi 1: Buka Langsung di Browser
1. Ekstrak folder project `eco-enzyme-website`.
2. Klik dua kali pada file `index.html` atau klik kanan lalu pilih **Open with** → browser pilihan Anda (Chrome, Edge, Firefox, atau Safari).

### Opsi 2: Menggunakan Live Server (Disarankan untuk Pengembangan)
1. Buka folder `eco-enzyme-website` di **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** sudah terpasang.
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server**.
4. Website akan otomatis terbuka di `http://127.0.0.1:5500/`.

---

## ⚙️ Catatan Teknis & Catatan Tambahan

- **Tanpa Framework Eksternal:** Seluruh tampilan dan interaktivitas dibuat murni dengan HTML, CSS, dan JavaScript sehingga ringan dan cepat dimuat.
- **Tipografi & Aset Visual:** Menggunakan Google Fonts (`Plus Jakarta Sans` & `DM Sans`) serta gambar dokumentasi eksternal pada bagian galeri, sehingga koneksi internet disarankan agar font dan gambar galeri tampil optimal.
- **Logika Kalkulator (`script.js`):** Perhitungan takaran menggunakan rasio standar `3 : 1 : 10` (Sampah Organik : Gula : Air) dan otomatis menyarankan kapasitas wadah minimal dengan menyisakan **30% ruang kosong** untuk menampung gas hasil fermentasi.
- **Aksesibilitas & Responsivitas:** Mendukung tampilan *desktop*, *tablet*, hingga *mobile*, serta dilengkapi aturan `@media (prefers-reduced-motion: reduce)` bagi pengguna yang membatasi animasi gerak.
