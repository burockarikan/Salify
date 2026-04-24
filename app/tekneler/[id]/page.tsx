"use client";
import { TEKNELER, YORUMLAR } from '../../backend/tekneler';
import { use } from 'react';
import Link from 'next/link';
import { ChevronLeft, Anchor, Users, BedDouble, Ruler, CheckCircle2, CalendarDays, UserPlus } from 'lucide-react';

export default function TekneDetay({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const tekne = TEKNELER.find((t) => t.id === id);

  if (!tekne) return <div className="pt-40 text-center font-black">TEKNE BULUNAMADI!</div>;

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GERİ DÖN NAVİGASYON */}
        <Link href="/tekneler" className="inline-flex items-center text-slate-500 font-black mb-10 hover:text-blue-600 transition-all group tracking-tighter">
          <ChevronLeft className="mr-1 group-hover:-translate-x-2 transition-transform" size={24} /> 
          FİLOYA DÖN
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* SOL: DEV GÖRSEL */}
          <div className="sticky top-32 rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] lg:h-[700px] border-8 border-white">
            <img src={tekne.resim} alt={tekne.isim} className="w-full h-full object-cover" />
            <div className="absolute top-8 left-8 bg-blue-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
              {tekne.tip}
            </div>
          </div>

          {/* SAĞ: DETAYLAR & CANLI FORM */}
          <div className="space-y-10">
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 italic uppercase tracking-tighter leading-[0.85]">
                {tekne.isim}
              </h1>
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
                  <Ruler size={18} className="text-blue-600" />
                  <span className="font-black text-slate-900">{tekne.boy}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
                  <Users size={18} className="text-blue-600" />
                  <span className="font-black text-slate-900">{tekne.kapasite} Misafir</span>
                </div>
              </div>
            </div>

            {/* --- CANLI REZERVASYON PANELİ --- */}
            <div className="bg-white p-10 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-white relative overflow-hidden">
              {/* Arkaplan Süsü */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100">
                  <div>
                    <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-1">GÜNLÜK CHARTER</p>
                    <p className="text-5xl font-black text-slate-900 italic tracking-tighter">{tekne.fiyat}</p>
                  </div>
                  <div className="h-14 w-14 bg-green-50 rounded-2xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Tarih Seçimi */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                        <CalendarDays size={14} className="text-blue-600" /> GİRİŞ
                      </label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-black text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner uppercase"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                        <CalendarDays size={14} className="text-blue-600" /> ÇIKIŞ
                      </label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-black text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner uppercase"
                      />
                    </div>
                  </div>

                  {/* Misafir Sayısı */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest ml-1">
                      <UserPlus size={14} className="text-blue-600" /> MİSAFİR SAYISI
                    </label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-black text-slate-900 outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer shadow-inner">
                        {[...Array(tekne.kapasite)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1} KİŞİ (MAX)</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 font-black italic">▼</div>
                    </div>
                  </div>

                  {/* Buton */}
                  <button className="w-full mt-6 bg-[#0a2540] text-white py-7 rounded-[2rem] font-black shadow-2xl hover:bg-blue-600 transition-all uppercase tracking-[0.25em] text-xs active:scale-[0.98] group">
                    REZERVASYON <span className="group-hover:ml-2 transition-all italic underline decoration-blue-400">TALEBİ GÖNDER</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Özellikler İkonları */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {tekne.ozellikler.map((oz, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 font-bold text-xs uppercase tracking-tight">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  {oz}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* MÜŞTERİ YORUMLARI */}
<section className="mt-32 border-t border-slate-100 pt-20">
  <h3 className="text-4xl font-black text-slate-900 mb-12 italic uppercase tracking-tighter">
    MİSAFİR <span className="text-blue-600">DENEYİMLERİ</span>
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Örnek Yorum Kartı */}
    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-50 relative">
      <div className="text-[#cdaa51] flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
      </div>
      <p className="text-slate-600 font-bold italic mb-6 leading-relaxed">
        "Salify ile yaptığımız mavi yolculuk hayatımızın en unutulmaz tatiliydi. Her detay düşünülmüştü."
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-blue-600">JH</div>
        <div>
          <p className="text-sm font-black text-slate-900">James Harrison</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-xs">United Kingdom</p>
        </div>
      </div>
    </div>
    {/* ... Diğer yorumlar */}
  </div>
</section>
{/* --- MİSAFİR DENEYİMLERİ (YORUMLAR) --- */}
        <section className="mt-32 border-t border-slate-100 pt-20">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4">GÜVEN VE KONFOR</p>
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 italic uppercase tracking-tighter">
                MİSAFİR <span className="text-blue-600">DENEYİMLERİ</span>
              </h3>
            </div>
            <div className="hidden md:block text-slate-300 font-black text-8xl opacity-20 italic underline decoration-blue-500">
              05
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {YORUMLAR.map((yorum) => (
              <div key={yorum.id} className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-50 relative group hover:shadow-2xl transition-all duration-500">
                {/* Tırnak İşareti Süsü */}
                <span className="absolute top-10 right-12 text-8xl text-slate-50 font-serif leading-none select-none group-hover:text-blue-50 transition-colors">“</span>
                
                <div className="relative">
                  <div className="flex gap-1 mb-6 text-[#cdaa51]">
                    {[...Array(yorum.puan)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 font-bold italic text-lg mb-10 leading-relaxed relative z-10">
                    "{yorum.yorum}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-[#0a2540] rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                      {yorum.isim.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg uppercase">{yorum.isim}</h4>
                      <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">{yorum.ulke} • VERIFIED GUEST</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-40 bg-[#0a2540] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Arkaplan Süsü */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic tracking-tighter">SALIFY<span className="text-blue-400">.</span></h2>
              <p className="text-slate-400 font-bold leading-relaxed max-w-xs">
                Denizin ortasında kusursuz bir kaçış. Bodrum ve Göcek'in en seçkin filosuyla tanışın.
              </p>
              <div className="flex gap-4">
                {['IG', 'WA', 'FB'].map(s => (
                  <button key={s} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-black hover:bg-blue-600 transition-all border border-white/10">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-6">
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest">HIZLI MENÜ</p>
                <ul className="space-y-4 font-bold text-sm">
                  <li className="hover:text-blue-400 cursor-pointer transition-colors uppercase italic">Filomuz</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors uppercase italic">Destinasyonlar</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors uppercase italic">Hakkımızda</li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest">YARDIM</p>
                <ul className="space-y-4 font-bold text-sm text-slate-400">
                  <li className="hover:text-white cursor-pointer transition-colors">S.S.S</li>
                  <li className="hover:text-white cursor-pointer transition-colors">İletişim</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Kaptanlı Kiralama</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">MERKEZ OFİS</p>
              <p className="font-black text-2xl italic mb-2">Bodrum Marina</p>
              <p className="text-slate-400 font-bold text-sm mb-8">Neyzen Tevfik Caddesi, No:45 Muğla / Türkiye</p>
              <button className="w-full py-4 bg-blue-600 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:bg-white hover:text-slate-900 transition-all">
                YOL TARİFİ AL
              </button>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">© 2026 SALIFY YACHTING - ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <span className="hover:text-white cursor-pointer transition-colors">Gizlilik</span>
              <span className="hover:text-white cursor-pointer transition-colors">KVKK</span>
            </div>
          </div>
        </footer>
    </main>
  );
}