import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

// 1. GET: Veritabanındaki tüm tekneleri getirir
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("salify");
    const tekneler = await db.collection("tekneler").find({}).toArray();
    return NextResponse.json(tekneler);
  } catch (error) {
    return NextResponse.json({ error: "Veriler çekilemedi" }, { status: 500 });
  }
}

// 2. POST: Yeni bir tekneyi veritabanına kaydeder
export async function POST(request: Request) {
  try {
    const yeniTekne = await request.json();
    const client = await clientPromise;
    const db = client.db("salify");

    const kayitEdilecekTekne = {
      ...yeniTekne,
      createdAt: new Date(), // Ne zaman eklendiğini bilelim
      resim: yeniTekne.resim || '/tekneler/tekneler-1.jpg',
    };

    const result = await db.collection("tekneler").insertOne(kayitEdilecekTekne);

    return NextResponse.json({ ...kayitEdilecekTekne, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Kayıt sırasında hata oluştu" }, { status: 500 });
  }
}