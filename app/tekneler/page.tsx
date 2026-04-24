"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEKNELER } from '../backend/tekneler';
import { Anchor, Users, BedDouble, Ruler, CheckCircle2 } from 'lucide-react';

export default function TeknelerPage() {
  const [filtre, setFiltre] = useState('Hepsi');
  const filtrelenmişTekneler = filtre === 'Hepsi' ? TEKNELER : TEKNELER.filter(t => t.tip === filtre);
  const kategoriler = ['Hepsi', 'Motoryat', 'Gulet', 'Katamaran'];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 uppercase italic">
            ÖZEL <span className="text-blue-600">FİLOMUZ</span>
          </h1>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {kategoriler.map((kat) => (
            <button
              key={kat}
              onClick={() => setFiltre(kat)}
              className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 ${
                filtre === kat 
                ? 'bg-[#0a2540] text-white shadow-2xl scale-105' 
                : 'bg-white text-slate-400 border border-slate-100 hover:border-blue-400'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filtrelenmişTekneler.map((tekne) => (
              <motion.div
                key={tekne.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-50 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={tekne.resim} 
                    alt={tekne.isim} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {tekne.etiket && (
                    <div className="absolute top-6 left-6 bg-[#cdaa51] text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">
                      {tekne.etiket}
                    </div>
                  )}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                    <span className="text-slate-900 font-black text-xl">{tekne.fiyat}</span>
                    <span className="text-slate-500 text-xs font-bold ml-1">/gün</span>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">{tekne.tip}</span>
                      <h3 className="text-2xl font-black text-slate-900 mt-2 uppercase italic">{tekne.isim}</h3>
                    </div>
                    <Anchor className="text-slate-100" size={40} />
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-50 mb-8 text-center">
                    <div>
                      <Ruler className="text-blue-500 mx-auto mb-2" size={20} />
                      <span className="text-[11px] font-black text-slate-900 uppercase">{tekne.boy}</span>
                    </div>
                    <div className="border-x border-slate-100">
                      <Users className="text-blue-500 mx-auto mb-2" size={20} />
                      <span className="text-[11px] font-black text-slate-900 uppercase">{tekne.kapasite} KİŞİ</span>
                    </div>
                    <div>
                      <BedDouble className="text-blue-500 mx-auto mb-2" size={20} />
                      <span className="text-[11px] font-black text-slate-900 uppercase">{tekne.kamara} KABİN</span>
                    </div>
                  </div>

                  <Link 
  href={`/tekneler/${tekne.id}`} 
  className="block w-full py-5 bg-[#0a2540] text-white font-black rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest text-xs shadow-xl text-center"
>
  TEKNEYİ İNCELE
</Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}