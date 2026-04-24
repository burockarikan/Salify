import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Salify Pro | Lüks Tekne Kiralama',
  description: 'Ege ve Akdeniz’in en seçkin tekne filosu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter">
              SALIFY <span className="text-blue-600">PRO</span>
            </Link>

            {/* Menü Linkleri */}
            <div className="hidden md:flex items-center gap-10">
              <Link href="/tekneler" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-all uppercase tracking-widest">Filomuz</Link>
              <Link href="/hakkimizda" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-all uppercase tracking-widest">Hakkımızda</Link>
              <Link href="/iletisim" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-all uppercase tracking-widest">İletişim</Link>
            </div>

            {/* Hızlı İletişim Butonu */}
            <Link href="https://wa.me/905550000000" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg">
              Rezervasyon
            </Link>
          </div>
        </nav>

        {/* Sayfa İçerikleri (Navbar yüksekliği kadar padding-top verdik) */}
        <div className="pt-20">
          {children}
        </div>

        {/* --- FOOTER --- */}
        <footer className="bg-slate-50 border-t border-slate-200 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Marka */}
              <div className="col-span-1 md:col-span-1">
                <div className="text-xl font-black text-slate-900 tracking-tighter mb-6">
                  SALIFY <span className="text-blue-600">PRO</span>
                </div>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Deniz tutkunları için en seçkin rotaları ve lüks tekneleri bir araya getiriyoruz.
                </p>
              </div>

              {/* Hızlı Linkler */}
              <div>
                <h5 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-6">Keşfet</h5>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li><Link href="/tekneler" className="hover:text-blue-600">Tüm Tekneler</Link></li>
                  <li><Link href="/hakkimizda" className="hover:text-blue-600">Hikayemiz</Link></li>
                  <li><Link href="/iletisim" className="hover:text-blue-600">Sıkça Sorulanlar</Link></li>
                </ul>
              </div>

              {/* Ofisler */}
              <div>
                <h5 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-6">Lokasyon</h5>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Bodrum Marina, No: 42 <br /> Muğla, Türkiye
                </p>
              </div>

              {/* Bülten */}
              <div>
                <h5 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-6">Bizi Takip Edin</h5>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 cursor-pointer transition-all">IG</div>
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 cursor-pointer transition-all">FB</div>
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 cursor-pointer transition-all">YT</div>
                </div>
              </div>
            </div>

            {/* Telif Hakları */}
            <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                © 2026 SALIFY PRO YACHTING. TÜM HAKLARI SAKLIDIR.
              </p>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest space-x-6">
                <a href="#">Gizlilik</a>
                <a href="#">Kullanım Koşulları</a>
              </div>
            </div>
          </div>
        </footer>
{/* WhatsApp Floating Button */}
<a 
  href="https://wa.me/905550000000" // Buraya kendi numaranı yaz kral
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-50 group flex items-center"
>
  {/* Hover'da çıkan yazı balonu */}
  <span className="mr-3 bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-xl font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
    Hemen Bilgi Alın! ⚓
  </span>
  
  {/* Butonun kendisi */}
  <div className="bg-[#25D366] p-4 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-white/20">
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="white" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM7.5 7.47c.28 0 .47.01.69.02.22.01.47.04.72.6.25.56.86 2.1.94 2.24.08.14.13.31.04.49-.09.19-.13.31-.27.47-.14.15-.29.33-.41.45-.14.14-.29.29-.12.59.17.29.75 1.24 1.6 2 1.1 1 2.03 1.31 2.32 1.45.3.14.47.11.64-.08.17-.19.72-.83.91-1.11.19-.28.39-.23.65-.13.26.09 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.69-.17 1.36-.25.68-1.45 1.11-2 1.14-.54.03-1.04-.15-3.32-1.05-2.73-1.08-4.5-3.83-4.63-4.02-.14-.19-1.1-1.46-1.1-2.79 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33z"/>
    </svg>
  </div>
</a>
      </body>
    </html>
  );
}
<footer className="bg-[#0a2540] mt-32 pt-20 pb-10 text-white rounded-t-[5rem]">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
    <div>
      <h4 className="text-3xl font-black italic mb-6">SALIFY<span className="text-blue-400 text-sm">.YACHTING</span></h4>
      <p className="text-slate-400 font-bold text-sm leading-relaxed">
        Bodrum'un en seçkin yat filosuyla, denizin ortasında ev konforunu ve lüksü keşfedin.
      </p>
    </div>
    <div>
      <h5 className="font-black mb-6 uppercase tracking-widest text-xs text-blue-400">Hızlı Linkler</h5>
      <ul className="space-y-4 font-bold text-sm text-slate-300">
        <li className="hover:text-white transition-colors cursor-pointer italic">Tüm Teknelerimiz</li>
        <li className="hover:text-white transition-colors cursor-pointer italic">Rotalar & Destinasyonlar</li>
        <li className="hover:text-white transition-colors cursor-pointer italic">Hakkımızda</li>
      </ul>
    </div>
    <div>
      <h5 className="font-black mb-6 uppercase tracking-widest text-xs text-blue-400">İletişim</h5>
      <p className="font-bold text-sm mb-2 text-slate-300">Neyzen Tevfik Cad. No:45</p>
      <p className="font-black text-xl mb-6 italic tracking-tighter">Bodrum, MUĞLA</p>
      <div className="flex gap-4">
        <button className="bg-white/10 p-3 rounded-xl hover:bg-blue-600 transition-all">IG</button>
        <button className="bg-white/10 p-3 rounded-xl hover:bg-blue-600 transition-all">WA</button>
      </div>
    </div>
  </div>
  <div className="text-center pt-10 border-t border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
    © 2026 SALIFY YACHTING - TÜM HAKLARI SAKLIDIR.
  </div>
</footer>