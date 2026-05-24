import Image from "next/image";
import Link from "next/link";

export default function Showroom() {
  // Data mobil contoh
  const mobil = [
    {
      id: 1,
      nama: "Toyota Supra MK5 2024",
      deskripsi: "Sports car legendaris dengan performa tinggi dan desain aerodinamis yang agresif. Dilengkapi dengan mesin turbocharged 3.0L yang menghasilkan 382 HP.",
      gambar: "/supra.jpg",
      harga: "Rp 1.850.000.000",
      tahun: "2024",
      kategori: "Sports Car",
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      penjual: "Dealer Resmi Toyota"
    },
    {
      id: 2,
      nama: "Honda Civic Type R",
      deskripsi: "Hot hatch dengan handling luar biasa dan mesin turbo 2.0L yang menghasilkan 320 HP. Desain sporty dengan aerokit lengkap.",
      gambar: "/civic1.jpg",
      harga: "Rp 1.250.000.000",
      tahun: "2024",
      kategori: "Hot Hatch",
      transmisi: "Manual",
      bahanBakar: "Bensin",
      penjual: "Honda Premium Dealer"
    },
    {
      id: 3,
      nama: "Mazda CX-5 Signature",
      deskripsi: "SUV premium dengan desain KODO yang elegan. Interior mewah dengan material kulit Nappa dan teknologi keselamatan terbaru.",
      gambar: "/mazda1.jpg",
      harga: "Rp 650.000.000",
      tahun: "2024",
      kategori: "SUV",
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      penjual: "Mazda Luxury Gallery"
    },
    {
      id: 4,
      nama: "Hyundai Ioniq 5",
      deskripsi: "Electric vehicle dengan desain retro-futuristik. Jarak tempuh 480km dengan fast charging 18 menit dari 10% ke 80%.",
      gambar: "/ioniq5.jpg",
      harga: "Rp 750.000.000",
      tahun: "2024",
      kategori: "Electric Vehicle",
      transmisi: "Automatic",
      bahanBakar: "Listrik",
      penjual: "Hyundai EV Center"
    },
    {
      id: 5,
      nama: "Mitsubishi Pajero Sport",
      deskripsi: "SUV tangguh dengan kemampuan off-road luar biasa. Dilengkapi sistem 4WD dan mesin diesel 2.4L yang hemat bahan bakar.",
      gambar: "/pajero.jpg",
      harga: "Rp 580.000.000",
      tahun: "2024",
      kategori: "SUV Off-road",
      transmisi: "Automatic",
      bahanBakar: "Diesel",
      penjual: "Mitsubishi Adventure"
    },
    {
      id: 6,
      nama: "BMW 330i M Sport",
      deskripsi: "Sedan eksekutif dengan performa sporty. Mesin turbo 2.0L dengan 258 HP, interior premium dengan fitur teknologi canggih.",
      gambar: "/bmwe.png",
      harga: "Rp 1.150.000.000",
      tahun: "2024",
      kategori: "Executive Sedan",
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      penjual: "BMW Premium Selection"
    },
    {
      id: 7,
      nama: "Mercedes-Benz E-Class",
      deskripsi: "Mewah dan canggih dengan teknologi autonomous driving. Interior mewah dengan dual screen display dan fitur keselamatan lengkap.",
      gambar: "/mercedes.jpg",
      harga: "Rp 1.450.000.000",
      tahun: "2024",
      kategori: "Luxury Sedan",
      transmisi: "Automatic",
      bahanBakar: "Bensin",
      penjual: "Mercedes-Benz Gallery"
    },
  ];

  const mobilUtama = mobil[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Hero Section - Mobil Utama */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {mobilUtama.kategori}
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">{mobilUtama.nama}</h2>
          <p className="text-xl mb-4 opacity-90">{mobilUtama.deskripsi}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-sm opacity-80">Tahun</p>
              <p className="font-semibold">{mobilUtama.tahun}</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-sm opacity-80">Transmisi</p>
              <p className="font-semibold">{mobilUtama.transmisi}</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-sm opacity-80">Bahan Bakar</p>
              <p className="font-semibold">{mobilUtama.bahanBakar}</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-sm opacity-80">Penjual</p>
              <p className="font-semibold">{mobilUtama.penjual}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              {mobilUtama.harga}
            </div>
            <Link 
              href={`/mobil/${mobilUtama.id}`}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      </section>

      {/* Daftar Mobil */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Koleksi Mobil</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">Semua</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">SUV</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Sedan</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Sport</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Listrik</button>
          </div>
        </div>

        {/* Grid Mobil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobil.slice(1).map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {item.kategori}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {item.tahun}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {item.nama}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.deskripsi}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {item.transmisi}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.bahanBakar}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-blue-600">
                    {item.harga}
                  </div>
                  <div className="text-sm text-gray-500">
                    oleh {item.penjual}
                  </div>
                </div>
                
                <Link 
                  href={`/mobil/${item.id}`}
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block"
                >
                  Lihat Detail Mobil
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Temukan Mobil Impian Anda</h2>
          <p className="text-xl mb-6 opacity-90">Kami memiliki lebih dari 100+ mobil berkualitas siap untuk Anda miliki</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/test-drive"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Jadwalkan Test Drive
            </Link>
            <Link 
              href="/konsultasi"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}