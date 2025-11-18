// ========== CONFIGURATION ASPEK PENILAIAN PER CABANG ==========
const ASPEK_PENILAIAN_CONFIG = {
    // A. CABANG TILAWAH
    'Tartil Al Qur\'an': {
        kategori: 'Tilawah',
        aspek: [
            { nama: 'Tajwid', persentase: 40, deskripsi: 'Ketepatan makhraj, sifat huruf, hukum bacaan, waqaf & ibtida\'' },
            { nama: 'Fasahah', persentase: 20, deskripsi: 'Kelancaran, ketepatan harakat & struktur kata' },
            { nama: 'Suara', persentase: 20, deskripsi: 'Kualitas, kekuatan, kontrol nada, vibrasi' },
            { nama: 'Lagu/Irama', persentase: 20, deskripsi: 'Keindahan nagham, variasi melodi (irama sederhana)' }
        ]
    },
    'Tilawah Anak-anak': {
        kategori: 'Tilawah',
        aspek: [
            { nama: 'Tajwid', persentase: 40, deskripsi: 'Ketepatan makhraj, sifat huruf, hukum bacaan, waqaf & ibtida\'' },
            { nama: 'Fasahah', persentase: 20, deskripsi: 'Kelancaran, ketepatan harakat & struktur kata' },
            { nama: 'Suara', persentase: 20, deskripsi: 'Kualitas, kekuatan, kontrol nada, vibrasi' },
            { nama: 'Lagu/Irama', persentase: 20, deskripsi: 'Keindahan nagham, variasi melodi sesuai maqamat' }
        ]
    },
    'Tilawah Remaja': {
        kategori: 'Tilawah',
        aspek: [
            { nama: 'Tajwid', persentase: 40, deskripsi: 'Ketepatan makhraj, sifat huruf, hukum bacaan, waqaf & ibtida\'' },
            { nama: 'Fasahah', persentase: 20, deskripsi: 'Kelancaran, ketepatan harakat & struktur kata' },
            { nama: 'Suara', persentase: 20, deskripsi: 'Kualitas, kekuatan, kontrol nada, vibrasi' },
            { nama: 'Lagu/Irama', persentase: 20, deskripsi: 'Keindahan nagham, variasi melodi sesuai maqamat' }
        ]
    },
    'Tilawah Dewasa': {
        kategori: 'Tilawah',
        aspek: [
            { nama: 'Tajwid', persentase: 40, deskripsi: 'Ketepatan makhraj, sifat huruf, hukum bacaan, waqaf & ibtida\'' },
            { nama: 'Fasahah', persentase: 20, deskripsi: 'Kelancaran, ketepatan harakat & struktur kata' },
            { nama: 'Suara', persentase: 20, deskripsi: 'Kualitas, kekuatan, kontrol nada, vibrasi' },
            { nama: 'Lagu/Irama', persentase: 20, deskripsi: 'Keindahan nagham, variasi melodi sesuai maqamat' }
        ]
    },
    'Qira\'at Mujawwad': {
        kategori: 'Tilawah',
        aspek: [
            { nama: 'Tajwid', persentase: 40, deskripsi: 'Ketepatan makhraj, sifat huruf, hukum bacaan, waqaf & ibtida\'' },
            { nama: 'Fasahah', persentase: 20, deskripsi: 'Kelancaran, ketepatan harakat & struktur kata' },
            { nama: 'Suara', persentase: 20, deskripsi: 'Kualitas, kekuatan, kontrol nada, vibrasi' },
            { nama: 'Lagu/Irama', persentase: 20, deskripsi: 'Variasi nagham kompleks, penguasaan maqamat' }
        ]
    },
    
    // B. CABANG HAFALAN
    'Hafalan 1 Juz': {
        kategori: 'Hafalan',
        aspek: [
            { nama: 'Ketepatan Hafalan', persentase: 60, deskripsi: 'Mutqin: tidak lupa/salah ayat, lancar tanpa jeda' },
            { nama: 'Tajwid', persentase: 20, deskripsi: 'Penerapan hukum bacaan, ketepatan makhraj & sifat' },
            { nama: 'Fasahah', persentase: 10, deskripsi: 'Kelancaran lafadz, ketepatan baris & kata' },
            { nama: 'Respon Hakim', persentase: 10, deskripsi: 'Menyambung ayat, menjawab posisi ayat dengan tepat' }
        ]
    },
    'Hafalan 5 Juz': {
        kategori: 'Hafalan',
        aspek: [
            { nama: 'Ketepatan Hafalan', persentase: 60, deskripsi: 'Mutqin: tidak lupa/salah ayat, lancar tanpa jeda' },
            { nama: 'Tajwid', persentase: 20, deskripsi: 'Penerapan hukum bacaan, ketepatan makhraj & sifat' },
            { nama: 'Fasahah', persentase: 10, deskripsi: 'Kelancaran lafadz, ketepatan baris & kata' },
            { nama: 'Respon Hakim', persentase: 10, deskripsi: 'Menyambung ayat, menjawab posisi ayat dengan tepat' }
        ]
    },
    'Hafalan 10 Juz': {
        kategori: 'Hafalan',
        aspek: [
            { nama: 'Ketepatan Hafalan', persentase: 60, deskripsi: 'Mutqin: tidak lupa/salah ayat, lancar tanpa jeda' },
            { nama: 'Tajwid', persentase: 20, deskripsi: 'Penerapan hukum bacaan, ketepatan makhraj & sifat' },
            { nama: 'Fasahah', persentase: 10, deskripsi: 'Kelancaran lafadz, ketepatan baris & kata' },
            { nama: 'Respon Hakim', persentase: 10, deskripsi: 'Menyambung ayat, menjawab posisi ayat dengan tepat' }
        ]
    },
    'Hafalan 20 Juz': {
        kategori: 'Hafalan',
        aspek: [
            { nama: 'Ketepatan Hafalan', persentase: 60, deskripsi: 'Mutqin: tidak lupa/salah ayat, lancar tanpa jeda' },
            { nama: 'Tajwid', persentase: 20, deskripsi: 'Penerapan hukum bacaan, ketepatan makhraj & sifat' },
            { nama: 'Fasahah', persentase: 10, deskripsi: 'Kelancaran lafadz, ketepatan baris & kata' },
            { nama: 'Respon Hakim', persentase: 10, deskripsi: 'Menyambung ayat, menjawab posisi ayat dengan tepat' }
        ]
    },
    'Hafalan 30 Juz': {
        kategori: 'Hafalan',
        aspek: [
            { nama: 'Ketepatan Hafalan', persentase: 60, deskripsi: 'Mutqin: tidak lupa/salah ayat, lancar tanpa jeda' },
            { nama: 'Tajwid', persentase: 20, deskripsi: 'Penerapan hukum bacaan, ketepatan makhraj & sifat' },
            { nama: 'Fasahah', persentase: 10, deskripsi: 'Kelancaran lafadz, ketepatan baris & kata' },
            { nama: 'Respon Hakim', persentase: 10, deskripsi: 'Menyambung ayat, menjawab posisi ayat dengan tepat' }
        ]
    },
    
    // C. CABANG TAFSIR
    'Tafsir Arab': {
        kategori: 'Tafsir',
        aspek: [
            { nama: 'Penguasaan Tafsir', persentase: 40, deskripsi: 'Ketepatan makna, pemahaman konteks, kandungan ayat' },
            { nama: 'Kedalaman Materi', persentase: 20, deskripsi: 'Analisis mendalam, argumentasi ilmiah' },
            { nama: 'Bahasa', persentase: 20, deskripsi: 'Bahasa Arab baku, struktur bahasa tepat, penyampaian jelas' },
            { nama: 'Retorika & Penyampaian', persentase: 20, deskripsi: 'Intonasi, vokal, runtut, penguasaan panggung' }
        ]
    },
    'Tafsir Indonesia': {
        kategori: 'Tafsir',
        aspek: [
            { nama: 'Penguasaan Tafsir', persentase: 40, deskripsi: 'Ketepatan makna, pemahaman konteks, kandungan ayat' },
            { nama: 'Kedalaman Materi', persentase: 20, deskripsi: 'Analisis mendalam, argumentasi ilmiah' },
            { nama: 'Bahasa', persentase: 20, deskripsi: 'Bahasa Indonesia baik, struktur tepat, penyampaian jelas' },
            { nama: 'Retorika & Penyampaian', persentase: 20, deskripsi: 'Intonasi, vokal, runtut, penguasaan panggung' }
        ]
    },
    'Tafsir Inggris': {
        kategori: 'Tafsir',
        aspek: [
            { nama: 'Penguasaan Tafsir', persentase: 40, deskripsi: 'Ketepatan makna, pemahaman konteks, kandungan ayat' },
            { nama: 'Kedalaman Materi', persentase: 20, deskripsi: 'Analisis mendalam, argumentasi ilmiah' },
            { nama: 'Bahasa', persentase: 20, deskripsi: 'Bahasa Inggris baik, struktur tepat, penyampaian jelas' },
            { nama: 'Retorika & Penyampaian', persentase: 20, deskripsi: 'Intonasi, vokal, runtut, penguasaan panggung' }
        ]
    },
    
    // D. CABANG KALIGRAFI
    'Kaligrafi Naskah': {
        kategori: 'Kaligrafi',
        aspek: [
            { nama: 'Kaidah Tulisan', persentase: 35, deskripsi: 'Kesesuaian jenis khat, ketepatan bentuk & sambungan huruf' },
            { nama: 'Kerapihan & Keterbacaan', persentase: 20, deskripsi: 'Proporsi huruf, keserasian, konsistensi ukuran' },
            { nama: 'Estetika & Komposisi', persentase: 30, deskripsi: 'Keseimbangan layout, keindahan warna, harmonisasi ornamen' },
            { nama: 'Kreativitas', persentase: 15, deskripsi: 'Inovasi visual, gaya baru sesuai kaidah' }
        ]
    },
    'Kaligrafi Hiasan': {
        kategori: 'Kaligrafi',
        aspek: [
            { nama: 'Kaidah Tulisan', persentase: 35, deskripsi: 'Kesesuaian jenis khat, ketepatan bentuk & sambungan huruf' },
            { nama: 'Kerapihan & Keterbacaan', persentase: 20, deskripsi: 'Proporsi huruf, keserasian, konsistensi ukuran' },
            { nama: 'Estetika & Komposisi', persentase: 30, deskripsi: 'Keseimbangan layout, keindahan warna, harmonisasi ornamen' },
            { nama: 'Kreativitas', persentase: 15, deskripsi: 'Inovasi visual, gaya baru sesuai kaidah' }
        ]
    },
    'Kaligrafi Dekorasi': {
        kategori: 'Kaligrafi',
        aspek: [
            { nama: 'Kaidah Tulisan', persentase: 35, deskripsi: 'Kesesuaian jenis khat, ketepatan bentuk & sambungan huruf' },
            { nama: 'Kerapihan & Keterbacaan', persentase: 20, deskripsi: 'Proporsi huruf, keserasian, konsistensi ukuran' },
            { nama: 'Estetika & Komposisi', persentase: 30, deskripsi: 'Keseimbangan layout, keindahan warna, harmonisasi ornamen' },
            { nama: 'Kreativitas', persentase: 15, deskripsi: 'Inovasi visual, gaya baru sesuai kaidah' }
        ]
    },
    'Kaligrafi Kontemporer': {
        kategori: 'Kaligrafi',
        aspek: [
            { nama: 'Kaidah Tulisan', persentase: 35, deskripsi: 'Kesesuaian jenis khat, ketepatan bentuk & sambungan huruf' },
            { nama: 'Kerapihan & Keterbacaan', persentase: 20, deskripsi: 'Proporsi huruf, keserasian, konsistensi ukuran' },
            { nama: 'Estetika & Komposisi', persentase: 30, deskripsi: 'Keseimbangan layout, keindahan warna, harmonisasi ornamen' },
            { nama: 'Kreativitas', persentase: 15, deskripsi: 'Inovasi visual, gaya baru sesuai kaidah' }
        ]
    },
    
    // E. CABANG LAINNYA
    'KTIQ': {
        kategori: 'Lainnya',
        aspek: [
            { nama: 'Substansi Karya', persentase: 40, deskripsi: 'Relevansi tema, ketepatan tafsir, kedalaman kajian, orisinalitas' },
            { nama: 'Metodologi & Data', persentase: 30, deskripsi: 'Metode penelitian, validitas referensi, sistematika kajian' },
            { nama: 'Teknik Penulisan', persentase: 30, deskripsi: 'Struktur ilmiah, kaidah penulisan, gaya bahasa, kutipan & referensi' }
        ]
    },
    'Fahm Al Qur\'an': {
        kategori: 'Lainnya',
        aspek: [
            { nama: 'Penguasaan Materi', persentase: 50, deskripsi: 'Al-Qur\'an, Hadis, Fiqih, Sejarah Islam, Pengetahuan Keislaman' },
            { nama: 'Ketepatan Jawaban', persentase: 30, deskripsi: 'Jawaban benar & lengkap, sesuai rujukan standar' },
            { nama: 'Kecepatan & Ketangkasan', persentase: 10, deskripsi: 'Kecepatan respons, ketepatan dalam kondisi cepat' },
            { nama: 'Kerjasama Tim', persentase: 10, deskripsi: 'Koordinasi antar anggota, strategi, etika & sportivitas' }
        ]
    },
    'Syarh Al Qur\'an': {
        kategori: 'Lainnya',
        aspek: [
            { nama: 'Penguasaan Materi', persentase: 50, deskripsi: 'Al-Qur\'an, Hadis, Fiqih, Sejarah Islam, Pengetahuan Keislaman' },
            { nama: 'Ketepatan Jawaban', persentase: 30, deskripsi: 'Jawaban benar & lengkap, sesuai rujukan standar' },
            { nama: 'Kecepatan & Ketangkasan', persentase: 10, deskripsi: 'Kecepatan respons, ketepatan dalam kondisi cepat' },
            { nama: 'Kerjasama Tim', persentase: 10, deskripsi: 'Koordinasi antar anggota, strategi, etika & sportivitas' }
        ]
    }
};

// Helper function untuk mendapatkan aspek penilaian berdasarkan cabang
function getAspekPenilaian(cabangLomba) {
    // Hapus suffix Putra/Putri untuk matching
    const cabangBase = cabangLomba.replace(/\s+(Putra|Putri)$/i, '').trim();
    
    const config = ASPEK_PENILAIAN_CONFIG[cabangBase];
    
    if (!config) {
        console.warn(`Aspek penilaian tidak ditemukan untuk cabang: ${cabangBase}`);
        return null;
    }
    
    return config;
}