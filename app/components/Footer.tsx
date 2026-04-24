import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Marka Bilgisi */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-4">
              SALIFY<span className="text-blue-500">PRO</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ege Akdeniz ve Marmaranın en seçkin tekneleriyle, hayalinizdeki mavi yolculuğu gerçeğe dönüştürüyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="font-bold mb-6 text-blue-400">Keşfet</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/tekneler" className="hover:text-white transition-colors">Tüm Tekneler</Link></li>
              <li><Link href="/populer" className="hover:text-white transition-colors">En Çok Tercih Edilenler</Link></li>
              <li><Link href="/indirimler" className="hover:text-white transition-colors">Fırsatlar</Link></li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-bold mb-6 text-blue-400">Kurumsal</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
              <li><Link href="/kvkk" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
            </ul>
          </div>

          {/* Bülten Kayıt */}
          <div>
            <h4 className="font-bold mb-6 text-blue-400">Bize Katılın</h4>
            <p className="text-xs text-slate-400 mb-4">Yeni gelen teknelerden ilk siz haberdar olun.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition-all">
                Kayıt
              </button>
            </div>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Salify Pro. Tüm Hakları Saklıdır.</p>
          <p className="font-medium tracking-wide">
            Designed & Developed by <span className="text-blue-400 font-bold">3B Yazılım Ajansı</span> ⚓
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}