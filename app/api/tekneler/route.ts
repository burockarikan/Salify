// app/api/tekneler/route.ts
import { NextResponse } from 'next/server';
import { TEKNELER } from '../../backend/tekneler';

// Bu fonksiyon yeni tekne eklemeyi simüle eder
export async function POST(request: Request) {
  try {
    const yeniTekne = await request.json();
    
    // Normalde burada veritabanına kayıt yapılır
    // Şimdilik sadece gelen veriyi ID ekleyerek geri döneceğiz
    const kayıtEdilecekTekne = {
      ...yeniTekne,
      id: (TEKNELER.length + 1).toString(), // Otomatik ID
      resim: yeniTekne.resim || '/tekneler/tekneler-1.jpg', // Varsayılan resim
      ozellikler: ['Yeni Kayıt', 'VIP Hizmet'], // Varsayılan özellikler
    };

    // Konsola yazdıralım ki geldiğini görelim
    console.log("Yeni Tekne Kaydı Geldi:", kayıtEdilecekTekne);

    return NextResponse.json(kayıtEdilecekTekne, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Kayıt sırasında hata oluştu" }, { status: 500 });
  }
}