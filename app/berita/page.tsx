import Image from "next/image";
import Link from "next/link";

export default function Berita() {
  // Data berita contoh
  const berita = [
    {
      id: 1,
      judul: "Mobil Listrik Makin Populer di Indonesia",
      deskripsi: "Artificial Intelligence mulai diterapkan secara luas dalam sistem transportasi di Indonesia.",
      gambar: "/news1.jpg",
      tanggal: "15 Desember 2024",
      kategori: "Teknologi",
      penulis: "Admin"
    },
    {
      id: 2,
      judul: "Inovasi Renewable Energy di Indonesia",
      deskripsi: "Indonesia mulai mengembangkan sumber energi terbarukan untuk mencapai target net zero emission.",
      gambar: "/news2.jpg",
      tanggal: "14 Desember 2024",
      kategori: "Energi",
      penulis: "Reporter"
    },
    {
      id: 3,
      judul: "Trend Startup Digital di Tahun 2024",
      deskripsi: "Startup di bidang healthtech dan edtech menjadi primadona investor di kuartal terakhir tahun 2024.",
      gambar: "/news3.jpg",
      tanggal: "13 Desember 2024",
      kategori: "Bisnis",
      penulis: "Editor"
    },
    {
      id: 4,
      judul: "Pembangunan Infrastruktur Nasional Capai 75%",
      deskripsi: "Proyek infrastruktur strategis nasional menunjukkan progress signifikan di akhir tahun.",
      gambar: "/news4.jpg",
      tanggal: "12 Desember 2024",
      kategori: "Infrastruktur",
      penulis: "Kontributor"
    },
    {
      id: 5,
      judul: "Pembangunan Infrastruktur Nasional Capai 75%",
      deskripsi: "Proyek infrastruktur strategis nasional menunjukkan progress signifikan di akhir tahun.",
      gambar: "/news4.jpg",
      tanggal: "12 Desember 2024",
      kategori: "Infrastruktur",
      penulis: "Kontributor"
    },
    {
      id: 6,
      judul: "Pembangunan Infrastruktur Nasional Capai 75%",
      deskripsi: "Proyek infrastruktur strategis nasional menunjukkan progress signifikan di akhir tahun.",
      gambar: "/news4.jpg",
      tanggal: "12 Desember 2024",
      kategori: "Infrastruktur",
      penulis: "Kontributor"
    },
    {
      id: 7,
      judul: "Pembangunan Infrastruktur Nasional Capai 75%",
      deskripsi: "Proyek infrastruktur strategis nasional menunjukkan progress signifikan di akhir tahun.",
      gambar: "/news4.jpg",
      tanggal: "12 Desember 2024",
      kategori: "Infrastruktur",
      penulis: "Kontributor"
    },

  ];

  const beritaUtama = berita[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Hero Section - Berita Utama */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {beritaUtama.kategori}
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">{beritaUtama.judul}</h2>
          <p className="text-xl mb-6 opacity-90">{beritaUtama.deskripsi}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span>{beritaUtama.tanggal}</span>
              <span>•</span>
              <span>Oleh: {beritaUtama.penulis}</span>
            </div>
            <Link 
              href={`/berita/${beritaUtama.id}`}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* Daftar Berita */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Berita Terbaru</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">Semua</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Teknologi</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Bisnis</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Lainnya</button>
          </div>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.slice(1).map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={item.gambar}
                  alt={item.judul}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {item.kategori}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.deskripsi}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{item.tanggal}</span>
                  <span>Oleh: {item.penulis}</span>
                </div>
                <Link 
                  href={`/berita/${item.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}