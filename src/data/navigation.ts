export const menuItems = [
  { 
    title: "Beranda", 
    path: "/" 
  },
  { 
    title: "Profil", 
    path: "/profil", 
    children: [
      { title: "Profil Prodi", path: "/profil" },
      { title: "Visi & Misi", path: "/profil/visi-misi" },
      { title: "Dosen & Staff", path: "/profil/dosen" },
    ]
  },
  { 
    title: "Akademik", 
    path: "/akademik",
    children: [
      { title: "Kurikulum", path: "/akademik/kurikulum" },
      { title: "Jadwal Kuliah", path: "/akademik/jadwal" },
      { title: "Panduan Skripsi", path: "/akademik/skripsi" },
    ]
  },
  { title: "Penelitian", path: "/penelitian" },
  { title: "Berita", path: "/berita" },
];

export const siteConfig = {
  title: "Teknik Informatika",
  subtitle: "UIN Suska Riau",
  siakadUrl: "https://sireg.uin-suska.ac.id"
};