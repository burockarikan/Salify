import Link from 'next/link';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1540944158204-287791a9ad04?q=80&w=2000" 
            alt="Yacht Club" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">BİZ KİMİZ?</h1>
          <p className="text-blue-400 text-xl md:text-2xl font-bold italic tracking-widest uppercase">
            Denizde Lüksün Yeni Adresi
          </p>
        </div>
      </section>

      {/* Hikayemiz Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Hikayemiz</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8 leading-tight">
              20 Yıllık Deniz Tutkusunu <br /> Profesyonellikle Birleştirdik.
            </h2>
            <div className="space-y-6 text-slate-500 font-medium text-lg leading-relaxed">
              <p>
                Salify Pro, sadece bir tekne kiralama platformu değil, bir yaşam tarzı mimarıdır. 
                Ege ve Akdeniz'in en gizli koylarını, en lüks teknelerimizle keşfetmeniz için yola çıktık.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600" className="rounded-[2rem] shadow-lg" alt="Luxury" />
              <div className="bg-blue-600 p-8 rounded-[2rem] text-white">
                <div className="text-4xl font-black mb-2">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 font-sans">Yıllık Tecrübe</div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-slate-100 p-8 rounded-[2rem] text-slate-900">
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 font-sans">Mutlu Kaptan</div>
              </div>
              <img src="https://images.unsplash.com/photo-1605281317010-fe5ffe798156?q=80&w=600" className="rounded-[2rem] shadow-lg" alt="Yacht Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* 🌑 KOYU RENK YAPILAN "NEDEN BİZ" BÖLÜMÜ 🌑 */}
      <section className="bg-slate-900 py-32 overflow-hidden relative">
        {/* Arka plana hafif bir mavi ışık sızması ekleyelim ki çok boğmasın */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-20 tracking-tight">NEDEN SALIFY PRO?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Güvenli Seyir Koyu Kart */}
            <div className="p-12 bg-slate-800/50 backdrop-blur-xl rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="text-blue-400 mb-8 flex justify-center group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest font-sans">Güvenli Seyir</h4>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">Tüm teknelerimiz düzenli olarak denetlenir ve uluslararası güvenlik sertifikalarına sahiptir.</p>
            </div>

            {/* Kişiye Özel Koyu Kart */}
            <div className="p-12 bg-slate-800/50 backdrop-blur-xl rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="text-blue-400 mb-8 flex justify-center group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest font-sans">VVIP Deneyim</h4>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">Rotalarımızı ve menülerimizi tamamen sizin yaşam tarzınıza göre kişiselleştiriyoruz.</p>
            </div>

            {/* Destek Koyu Kart */}
            <div className="p-12 bg-slate-800/50 backdrop-blur-xl rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="text-blue-400 mb-8 flex justify-center group-hover:scale-110 transition-transform">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest font-sans">Kaptanlı Hizmet</h4>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">Denizdeki her anınızda profesyonel ekibimizle kusursuz bir tatil garantisi veriyoruz.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10">Maceraya Hazır mısın?</h2>
        <Link 
          href="/tekneler" 
          className="inline-block bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-blue-700 shadow-2xl shadow-blue-100 active:scale-95 transition-all"
        >
          Filomuzu Keşfedin
        </Link>
      </section>
    </div>
  );
}