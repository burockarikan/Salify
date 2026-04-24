"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      {/* 1. BÖLÜM: HERO (Giriş) */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/tekneler/arkaplan-1.png" 
            alt="Salify Pro Luxury Yacht"
            className="w-full h-full object-cover"
          />
          {/* Üstteki karartma duruyor ama alttaki o puslu şeridi sildim */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 py-20 text-center">
          <div className="mt-10 md:mt-20 flex-grow flex flex-col items-center justify-center">
            <div className="inline-block px-5 py-2 mb-8 border border-yellow-300/30 rounded-full bg-yellow-400/10 backdrop-blur-sm shadow-lg">
              <span className="text-xs font-black tracking-[0.25em] text-yellow-300 uppercase italic">Premium Yacht Charter</span>
            </div>

            <h1 className="text-7xl md:text-[9rem] font-black mb-8 tracking-tighter leading-none text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              SALIFY <span className="text-[#cdaa51] italic ml-4">PRO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
              Maviliklere açılan en seçkin yol. Hayalinizdeki lüks tatili 
              seçkin teknelerimizle bugünden planlayın.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Link 
                href="/tekneler" 
                className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-white transition-all duration-300 bg-[#0a2540] rounded-[2rem] hover:bg-[#10355a] shadow-[0_15px_40px_rgba(10,37,64,0.6)] active:scale-95 text-xl uppercase tracking-tight"
              >
                Tekneleri İncele
                <svg className="ml-2.5 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link 
                href="/iletisim" 
                className="px-12 py-5 font-black text-[#0a2540] bg-white rounded-[2rem] hover:bg-slate-50 transition-all hover:scale-105 text-xl shadow-2xl uppercase tracking-tight"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          {/* İstatistikler - Arkasındaki pus kaldırıldı, cam gibi oldu */}
          <div className="w-full max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-3 gap-4 md:gap-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-10 shadow-2xl">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-[#cdaa51] tracking-tighter">150+</div>
                <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mt-2 italic">Lüks Tekne</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-4xl md:text-6xl font-black text-[#cdaa51] tracking-tighter">24/7</div>
                <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mt-2 italic">Hizmet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-[#cdaa51] tracking-tighter uppercase">Premium</div>
                <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mt-2 italic">Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: POPÜLER ROTALAR */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-sm mb-4 block border-l-4 border-blue-600 pl-4">Ege ve Akdeniz'in İncileri</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                EN POPÜLER <br /> <span className="text-blue-600 italic">ROTALARIMIZ</span>
              </h2>
            </div>
            <p className="text-slate-500 font-bold max-w-sm text-lg leading-relaxed border-l-4 border-blue-100 pl-6">
              Sizin için özenle seçtiğimiz, kristal berraklığındaki koyları keşfetmeye hazır olun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Göcek - ada-2.jpg */}
            <div className="group relative h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform hover:-translate-y-4 duration-500">
              <img src="/tekneler/ada-2.jpg" className="absolute inset-0 w-full h-full object-cover transition-scale duration-700 group-hover:scale-110" alt="Göcek"/>
              <div className="absolute bottom-12 left-10 right-10 z-10">
                <div className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-[0.2em] shadow-xl">Kum & Güneş</div>
                <h3 className="text-4xl font-black text-white mb-2 uppercase italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">GÖCEK</h3>
                <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Sakin sular ve dünyanın en korunaklı koyları.</p>
              </div>
            </div>

            {/* Bodrum - ada-1.jpg */}
            <div className="group relative h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform hover:-translate-y-4 duration-500 md:mt-16">
              <img src="/tekneler/ada-1.jpg" className="absolute inset-0 w-full h-full object-cover transition-scale duration-700 group-hover:scale-110" alt="Bodrum"/>
              <div className="absolute bottom-12 left-10 right-10 z-10">
                <div className="bg-[#cdaa51] text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-[0.2em] shadow-xl">Lüks & Gece</div>
                <h3 className="text-4xl font-black text-white mb-2 uppercase italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">BODRUM</h3>
                <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Dünya jet sosyetesinin masmavi buluşma noktası.</p>
              </div>
            </div>

            {/* Selimiye - ada-3.jpg */}
            <div className="group relative h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform hover:-translate-y-4 duration-500">
              <img src="/tekneler/ada-3.jpg" className="absolute inset-0 w-full h-full object-cover transition-scale duration-700 group-hover:scale-110" alt="Selimiye"/>
              <div className="absolute bottom-12 left-10 right-10 z-10">
                <div className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-[0.2em] shadow-xl">Huzur & Doğa</div>
                <h3 className="text-4xl font-black text-white mb-2 uppercase italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">MARMARİS</h3>
                <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Balıkçı kasabaları ve sessizliğin muhteşem uyumu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BÖLÜM: MAVİ YOLCULUK ROADMAP */}
      <section className="py-32 bg-[#0a2540] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#cdaa51] font-black tracking-[0.4em] uppercase text-sm mb-4 block">Deneyim Süreci</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              DENİZE ULAŞAN <span className="italic text-blue-400">YOL HARİTASI</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-1 border-t-2 border-dashed border-blue-400/30 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black mb-8 shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform border-4 border-[#0a2540]">1</div>
                <h3 className="text-white text-2xl font-black mb-4 uppercase italic">Tekne Seçimi</h3>
                <p className="text-slate-400 font-bold leading-relaxed">Filomuzdan size en uygun tekneyi belirleyin.</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-[#cdaa51] rounded-full flex items-center justify-center text-white text-3xl font-black mb-8 shadow-[0_0_30px_rgba(205,170,81,0.3)] group-hover:scale-110 transition-transform border-4 border-[#0a2540]">2</div>
                <h3 className="text-white text-2xl font-black mb-4 uppercase italic">Rota Belirleme</h3>
                <p className="text-slate-400 font-bold leading-relaxed">Kaptanlarımızla size özel rotayı oluşturun.</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black mb-8 shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform border-4 border-[#0a2540]">3</div>
                <h3 className="text-white text-2xl font-black mb-4 uppercase italic">Rezervasyon</h3>
                <p className="text-slate-400 font-bold leading-relaxed">Teklifimizi onaylayın ve yerinizi ayırtın.</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0a2540] text-3xl font-black mb-8 shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform border-4 border-[#0a2540]">⚓</div>
                <h3 className="text-[#cdaa51] text-2xl font-black mb-4 uppercase italic">Vira Bismillah!</h3>
                <p className="text-slate-400 font-bold leading-relaxed">Valiziniz hazırsa lüks tatiliniz başlıyor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}