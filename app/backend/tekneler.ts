// app/backend/tekneler.ts

export interface Tekne {
  id: string;
  isim: string;
  tip: 'Motoryat' | 'Gulet' | 'Katamaran';
  boy: string;
  kapasite: number;
  kamara: number;
  fiyat: string;
  resim: string;
  ozellikler: string[];
  etiket?: string;
}

export const TEKNELER: Tekne[] = [
  {
    id: '1',
    isim: 'SALIFY GRAND ADMIRAL',
    tip: 'Motoryat',
    boy: '45m',
    kapasite: 12,
    kamara: 6,
    fiyat: '4500€',
    resim: '/tekneler/tekne-1.jpg',
    ozellikler: ['Jakuzi', 'VIP Servis', 'Stabilizer', 'Jetski'],
    etiket: 'Premium Choice'
  },
  {
    id: '2',
    isim: 'AEGEAN STAR',
    tip: 'Gulet',
    boy: '35m',
    kapasite: 10,
    kamara: 5,
    fiyat: '2200€',
    resim: '/tekneler/tekne-2.jpg',
    ozellikler: ['Klima', 'Geniş Güverte', 'Dalış Ekipmanları'],
    etiket: 'Best Seller'
  },
  {
    id: '3',
    isim: 'BLUE LAGOON',
    tip: 'Motoryat',
    boy: '38m',
    kapasite: 12,
    kamara: 5,
    fiyat: '3800€',
    resim: '/tekneler/tekne-3.jpg',
    ozellikler: ['Modern Mutfak', 'Su Sporları', 'Sessiz Seyir'],
  },
  {
    id: '4',
    isim: 'BODRUM SPIRIT',
    tip: 'Gulet',
    boy: '28m',
    kapasite: 12,
    kamara: 4,
    fiyat: '1900€',
    resim: '/tekneler/tekne-4.jpg',
    ozellikler: ['Güneşlenme Alanı', 'Trambolin', 'Sessiz Seyir'],
  },
  {
    id: '5',
    isim: 'MEDITERRANEAN PEARL',
    tip: 'Katamaran',
    boy: '18m',
    kapasite: 10,
    kamara: 4,
    fiyat: '1600€',
    resim: '/tekneler/tekne-5.jpg',
    ozellikler: ['Trambolin', 'Açık Hava Barı', 'Geniş Salon']
  },
  {
    id: '6',
    isim: 'SEA BREEZE',
    tip: 'Katamaran',
    boy: '16m',
    kapasite: 8,
    kamara: 3,
    fiyat: '1400€',
    resim: '/tekneler/tekne-6.jpg',
    ozellikler: ['Modern Mutfak', 'Bluetooth Ses', 'Sessiz Seyir'],
    etiket: 'New Arrival'
  }
];
export const YORUMLAR = [
  {
    id: 1,
    isim: "James Harrison",
    ulke: "UK",
    yorum: "Salify Grand Admiral ile Göcek koylarında geçirdiğimiz hafta tek kelimeyle kusursuzdu. Mürettebat ve hizmet kalitesi 7 yıldızlı otel ayarındaydı.",
    puan: 5
  },
  {
    id: 2,
    isim: "Selina Yılmaz",
    ulke: "TR",
    yorum: "Teknenin temizliği ve modernliği bizi çok etkiledi. Rezervasyon sürecinden iniş anına kadar her şey çok profesyonelce yönetildi.",
    puan: 5
  }
];