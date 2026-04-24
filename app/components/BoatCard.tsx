import Image from 'next/image';
import Link from 'next/link';

export default function BoatCard({ boat }: any) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={boat.image} 
          alt={boat.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-slate-900">
          {boat.price}₺ / GÜN
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{boat.name}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{boat.description}</p>
        <Link href={`/tekneler/${boat.id}`} className="block text-center bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
          Detayları Gör
        </Link>
      </div>
    </div>
  );
}