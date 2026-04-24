
"use client";

import Link from 'next/link';

export default function Iletisim() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a2540] overflow-hidden">
      {/* Arkaplan Dokusu */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="/tekneler/arkaplan-1.png" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Üst Başlık Kısmı */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-8 text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-sm">
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            BİZE <span className="text-[#cdaa51] italic uppercase">Ulaşın</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-bold italic">
            Hayalinizdeki mavi yolculuk için bir adım kaldı.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* SOL TARAF: İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight border-b border-white/10 pb-4">
                İletişim Bilgilerimiz
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-1">Bizi Arayın</p>
                    <p className="text-white text-2xl font-black tracking-tight">+90 (5xx) xxx xx xx</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-1">E-Posta Gönderin</p>
                    <p className="text-white text-2xl font-black tracking-tight">info@salifypro.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Hızlı Destek */}
            <a href="https://wa.me/numaran" className="block p-8 bg-green-500/10 border-2 border-green-500/20 rounded-[2.5rem] hover:bg-green-500/20 transition-all group shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-green-500 font-black text-2xl italic uppercase tracking-tighter">Hızlı WhatsApp Hattı</h3>
                  <p className="text-green-500/70 font-bold">Anında teklif ve bilgi alın.</p>
                </div>
                <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-green-500/50 shadow-lg">
                   <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.197 1.411 4.757 1.412 5.228 0 9.482-4.254 9.485-9.483.002-2.531-1.001-4.912-2.822-6.733-1.823-1.822-4.205-2.821-6.738-2.821-5.231 0-9.486 4.254-9.488 9.484-.001 1.869.55 3.616 1.591 5.059l-1.05 3.829 3.931-1.031z"/></svg>
                </div>
              </div>
            </a>
          </div>

          {/* SAĞ TARAF: Gelişmiş Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-t-[10px] border-blue-600">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-900 font-black uppercase text-xs tracking-[0.15em] mb-3 border-l-4 border-blue-600 pl-3">Adınız Soyadınız</label>
                  <input type="text" className="w-full bg-slate-100 border-2 border-slate-200 rounded-2xl px-6 py-5 focus:border-blue-600 focus:bg-white outline-none transition-all font-black text-slate-900 placeholder:text-slate-400 text-lg" placeholder="Burak Arıkan" />
                </div>
                <div>
                  <label className="block text-slate-900 font-black uppercase text-xs tracking-[0.15em] mb-3 border-l-4 border-blue-600 pl-3">Telefon</label>
                  <input type="tel" className="w-full bg-slate-100 border-2 border-slate-200 rounded-2xl px-6 py-5 focus:border-blue-600 focus:bg-white outline-none transition-all font-black text-slate-900 placeholder:text-slate-400 text-lg" placeholder="05xx xxx xx xx" />
                </div>
              </div>

              <div>
                <label className="block text-slate-900 font-black uppercase text-xs tracking-[0.15em] mb-3 border-l-4 border-blue-600 pl-3">Hangi Tekne İle İlgileniyorsunuz?</label>
                <div className="relative">
                  <select className="w-full bg-slate-100 border-2 border-slate-200 rounded-2xl px-6 py-5 focus:border-blue-600 focus:bg-white outline-none transition-all font-black text-slate-900 appearance-none cursor-pointer text-lg">
                    <option>Lüks Motoryat - Salify 1</option>
                    <option>Mega Yat - Salify Pro</option>
                    <option>Katamaran - Salify Comfort</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24 font-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-900 font-black uppercase text-xs tracking-[0.15em] mb-3 border-l-4 border-blue-600 pl-3">Mesajınız</label>
                <textarea rows={4} className="w-full bg-slate-100 border-2 border-slate-200 rounded-2xl px-6 py-5 focus:border-blue-600 focus:bg-white outline-none transition-all font-black text-slate-900 placeholder:text-slate-400 text-lg" placeholder="Nasıl bir deneyim hayal ediyorsunuz?"></textarea>
              </div>

              <button className="w-full py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-[#0a2540] transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-xl flex items-center justify-center gap-4">
                TALEBİ GÖNDER
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}