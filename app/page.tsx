import clientPromise from "@/lib/mongodb";
import Link from 'next/link';

// Sayfanın her zaman güncel kalmasını sağlar (Cache'i kapatır)
export const dynamic = 'force-dynamic';

export default async function Home() {
  // 1. VERİ ÇEKME: MongoDB'ye bağlanıp tekneleri alıyoruz
  let tekneler = [];
  try {
    const client = await clientPromise;
    const db = client.db("salify");
    tekneler = await db.collection("tekneler").find({}).toArray();
  } catch (error) {
    console.error("MongoDB Bağlantı Hatası:", error);
  }

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
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-7xl md:text-[9rem] font-black mb-8 tracking-tighter leading-none text-white drop-shadow-2xl">
            SALIFY <span className="text-[#cdaa51] italic ml-4">PRO</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl font-medium drop-shadow-md">
            Maviliklere açılan en seçkin yol. Hayalinizdeki lüks tatili seçkin teknelerimizle bugünden planlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/tekneler" className="px-12 py-5 font-black text-white bg-[#0a2540] rounded-[2rem] text-xl uppercase">
              Tekneleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: DİNAMİK FİLO (Gerçek Veriler Buraya Geliyor) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 uppercase">Öne Çıkan <span className="text-[#cdaa51]">Teknelerimiz</span></h2>
            <div className="w-24 h-1 bg-[#cdaa51] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tekneler.length > 0 ? (
              tekneler.map((tekne: any) => (
                <div key={tekne._id.toString()} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={tekne.resim || "/tekneler/tekneler-1.jpg"} 
                      alt={tekne.ad} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-black text-slate-900 uppercase tracking-widest">
                      {tekne.tip || 'Luxury'}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic">{tekne.ad || tekne.name}</h3>
                    <div className="flex items-center mt-4 text-[#cdaa51] font-black text-xl">
                      {tekne.fiyat} TL <span className="text-slate-400 text-sm font-bold ml-2">/ Günlük</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">Henüz tekne eklenmemiş...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. BÖLÜM: ROTALAR (Senin Orijinal Tasarımın) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
             <h3 className="text-3xl font-black italic text-slate-300">Rotalar Hazırlanıyor...</h3>
        </div>
      </section>
    </main>
  );
}