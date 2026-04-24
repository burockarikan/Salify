"use client";
import { useState } from 'react';
import { TEKNELER } from '../backend/tekneler';
import { Plus, Trash2, Edit3, Anchor, LayoutDashboard, Settings, X, Camera } from 'lucide-react';

export default function AdminPanel() {
  const [sifre, setSifre] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [modalAcik, setModalAcik] = useState(false);
  const [tekneler, setTekneler] = useState(TEKNELER);

  // --- FORM STATE (RESİM ALANI EKLENDİ) ---
  const [formData, setFormData] = useState({
    isim: '',
    tip: 'Motoryat',
    fiyat: '',
    boy: '24m',
    resim: '' // Seçilen resim buraya dolacak
  });

  // --- RESİM SEÇME FONKSİYONU ---
  const resimSec = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dosya = e.target.files?.[0];
    if (dosya) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Resmi bilgisayardan okuyup koda çeviriyoruz
        setFormData({ ...formData, resim: reader.result as string });
      };
      reader.readAsDataURL(dosya);
    }
  };

  const tekneKaydet = async () => {
    if(!formData.isim || !formData.fiyat) return alert("Eksik alanları doldur kanka!");

    try {
      const response = await fetch('/api/tekneler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const yeniVeri = await response.json();
        alert(`BAŞARILI: ${yeniVeri.isim} sisteme işlendi!`);
        setTekneler([...tekneler, yeniVeri]);
        setModalAcik(false); 
        setFormData({ isim: '', tip: 'Motoryat', fiyat: '', boy: '24m', resim: '' }); 
      }
    } catch (error) {
      alert("API hatası oluştu!");
    }
  };

  if (!girisYapildi) {
    return (
      <div className="min-h-screen bg-[#0a2540] flex items-center justify-center p-6 text-slate-900">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl w-full max-w-md text-center">
          <h2 className="text-3xl font-black italic mb-8 uppercase tracking-tighter">ADMIN <span className="text-blue-600">GİRİŞİ</span></h2>
          <input 
            type="password" 
            placeholder="Yönetici Şifresi"
            className="w-full bg-slate-50 border-none rounded-2xl p-5 mb-6 text-sm font-black outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setSifre(e.target.value)}
          />
          <button 
            onClick={() => sifre === "salify123" ? setGirisYapildi(true) : alert("Hatalı Şifre!")}
            className="w-full bg-[#0a2540] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs"
          >
            SİSTEME GİRİŞ YAP
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 flex text-slate-900">
      <div className="w-64 bg-[#0a2540] text-white p-8 hidden lg:block">
        <h2 className="text-2xl font-black italic mb-12 tracking-tighter">SALIFY <span className="text-blue-400 text-xs uppercase block">Admin Panel</span></h2>
        <nav className="space-y-6 italic font-bold">
           <p className="text-blue-400 cursor-pointer">● Dashboard</p>
           <p className="text-slate-400 hover:text-white cursor-pointer transition-all">● Teknelerim</p>
           <p className="text-slate-400 hover:text-white cursor-pointer transition-all">● Rezervasyonlar</p>
        </nav>
      </div>

      <div className="flex-1 p-8 md:p-12 relative">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase italic">FİLO YÖNETİMİ</h1>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Sistemdeki {tekneler.length} tekne yayında</p>
          </div>
          <button 
            onClick={() => setModalAcik(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#0a2540] transition-all flex items-center gap-2"
          >
            <Plus size={18} /> YENİ TEKNE EKLE
          </button>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tekne</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tip / Boy</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fiyat</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {tekneler.map((tekne) => (
                <tr key={tekne.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <img src={tekne.resim} className="w-16 h-12 rounded-xl object-cover shadow-sm bg-slate-100" alt="" />
                      <span className="font-black text-slate-900 uppercase italic tracking-tighter">{tekne.isim}</span>
                    </div>
                  </td>
                  <td className="p-6 font-bold text-slate-500 text-sm italic">{tekne.tip} / {tekne.boy}</td>
                  <td className="p-6 font-black text-slate-900 italic">{tekne.fiyat}</td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Edit3 size={16} /></button>
                      <button onClick={() => setTekneler(tekneler.filter(t => t.id !== tekne.id))} className="p-3 bg-slate-100 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalAcik && (
          <div className="fixed inset-0 bg-[#0a2540]/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative">
              <button onClick={() => setModalAcik(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={32} /></button>
              <div className="p-12">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8">YENİ <span className="text-blue-600">TEKNE KAYDI</span></h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* FOTOĞRAF YÜKLEME ALANI (BURASI YENİ) */}
                  <div className="col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Tekne Fotoğrafı</label>
                    <div className="mt-2 relative h-32 rounded-[2rem] border-2 border-dashed border-slate-200 overflow-hidden group hover:border-blue-500 transition-all">
                      {formData.resim ? (
                        <img src={formData.resim} className="w-full h-full object-cover" alt="Önizleme" />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 cursor-pointer">
                          <Camera className="text-slate-300" size={30} />
                          <p className="text-[10px] font-black text-slate-400 uppercase italic">Fotoğraf Seç</p>
                        </div>
                      )}
                      <input type="file" accept="image/*" onChange={resimSec} className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Tekne İsmi</label>
                    <input type="text" value={formData.isim} onChange={(e) => setFormData({...formData, isim: e.target.value})} placeholder="Örn: Salify Star" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Tip</label>
                    <select value={formData.tip} onChange={(e) => setFormData({...formData, tip: e.target.value})} className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold outline-none cursor-pointer">
                      <option value="Motoryat">Motoryat</option>
                      <option value="Gulet">Gulet</option>
                      <option value="Katamaran">Katamaran</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Fiyat</label>
                    <input type="text" value={formData.fiyat} onChange={(e) => setFormData({...formData, fiyat: e.target.value})} placeholder="2500€" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                </div>
                <button onClick={tekneKaydet} className="w-full mt-10 bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-[#0a2540] transition-all">SİSTEME KAYDET</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}