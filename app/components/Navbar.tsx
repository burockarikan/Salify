"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Teknelerimiz', path: '/tekneler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] backdrop-blur-md bg-white/80 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <span className="text-blue-600 underline decoration-4 underline-offset-4">SALIFY</span>
          <span className="text-xs bg-slate-900 text-white px-2 py-1 rounded-lg italic">PRO</span>
        </Link>

        {/* Desktop Menü (Masaüstünde görünür, mobilde gizli) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-bold transition-all hover:text-blue-600 ${
                pathname === link.path ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/iletisim" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all">
            Kaptanla Konuş
          </Link>
        </div>

        {/* Mobil Hamburger Butonu (Sadece mobilde görünür) */}
        <button 
          className="md:hidden text-slate-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil Menü Paneli (Sadece isOpen true iken açılır) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)} // Linke tıklayınca menüyü kapat
              className={`text-lg font-bold ${
                pathname === link.path ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white text-center py-4 rounded-2xl font-bold"
          >
            Kaptanla Konuş
          </Link>
        </div>
      )}
    </nav>
  );
}