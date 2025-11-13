"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";

type SidebarProps = {
  children: ReactNode;
  title: string;
};

export default function Sidebar({ children, title }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <nav className="bg-blue-950 text-white flex justify-between items-center px-6 py-4 shadow-md">
          <span className="text-xl font-semibold">{title}</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl font-bold"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </nav>

        {isOpen && (
          <div className="bg-blue-950 text-white flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="text-lg font-semibold hover:text-gray-200">
              Home
            </Link>
            <Link
              href="/profil"
              className="text-lg font-semibold hover:text-gray-200"
            >
                Profil
            </Link>
            <Link
              href="/berita"
              className="text-lg font-semibold hover:text-gray-200"
            >
              Berita
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-blue-950 text-white justify-center items-center gap-8 py-6 shadow-md">
        <Link
          href="/"
          className="relative text-xl font-semibold hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>

        <Link
          href="/berita"
          className="relative text-xl font-semibold hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Berita
        </Link>

        <Link
          href="/profil"
          className="relative text-xl font-semibold hover:text-gray-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Profil
        </Link>
      </nav>

    

      {/* 🔹 Content Section */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
        <div className="text-lg text-gray-800">{children}</div>
      </main>

       {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portal Berita</h3>
              <p className="text-gray-400">Sumber berita terpercaya dan terupdate untuk Anda.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Teknologi</Link></li>
                <li><Link href="#" className="hover:text-white">Bisnis</Link></li>
                <li><Link href="#" className="hover:text-white">Politik</Link></li>
                <li><Link href="#" className="hover:text-white">Olahraga</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
                <li><Link href="/tentang" className="hover:text-white">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@portalberita.com</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Portal Berita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}