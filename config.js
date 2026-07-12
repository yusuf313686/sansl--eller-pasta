/*
  Şanslı Eller Butik Pasta — Melek Razi — Ankara
  Demo config.js — Butik pastacı modu (menu: [])
*/
const CONFIG = {

/* ── BÖLÜM 1 — SIK GÜNCELLENEN ── */

  priceUpdated: "",
  announcement: "",
  vacationNote: "",
  vacationLock: false,

  siteDiscount: 0,
  paymentMethods: [],

  products: [
    { name: "Birthday Princess", desc: "Beyaz yaprak detaylı taçlı pasta", img: "fto1.jpg" },
    { name: "1 Yaş Pastası", desc: "Figürlü özel tasarım doğum günü", img: "fto2.jpg" },
    { name: "Big Boss", desc: "Siyah & altın kral temalı pasta", img: "fto3.jpg" },
    { name: "Tatil Pastası", desc: "Eğlenceli emeklilik & tatil teması", img: "fto4.jpg" },
    { name: "Queen", desc: "Zarif çiçek detaylı altın pasta", img: "fto5.jpg" }
  ],

  menuNote: "",
  menu: [],   // ← Butik pastacı modu: sabit menü yok

  orderForm: {
    portions: ["8", "10", "12", "15", "20"],
    weddingPortions: [],
    portionPrices: {},
    flavorExtras: {},
    priceNote: "",
    photoNote: "Aklınızdaki pastanın fotoğrafını sipariş sonrası WhatsApp üzerinden göndermeyi unutmayın!",
    rules: [
      "En küçük pasta 8-10 kişiliktir.",
      "Kilo ile pasta satışı yapılmamaktadır.",
      "Kaporalı çalışılmaktadır.",
      "Ankara içi ücretli teslimat mevcuttur."
    ],
    minDaysAhead: 3,
    deliveryMethods: [
      { name: "Gel Al" },
      { name: "Adrese Teslimat (Ücretli)", address: true }
    ],
    deliveryTimeRange: "",
    candles: [],
    flavors: [
      "Karışık Meyve", "Çilek", "Muz", "Frambuaz",
      "Orman Meyvesi", "Yaban Mersini", "Lotus", "Karamel",
      "Beyaz Çikolata", "Bitter Çikolata", "Antep Fıstığı"
    ],
    creams: ["Vanilya", "Çikolata", "Karamel", "Meyveli", "Peynirli (Cheesecake)"],
    notes: []
  },

/* ── BÖLÜM 2 — KURULUMDA BİR KEZ ── */

  name: "Şanslı Eller Butik Pasta",
  tagline: "Afiyet Bal olsun — Ankara",
  about: "Afiyet bal olsun! Şanslı Eller Butik Pasta olarak Ankara'da kişiye özel tasarım pastalar hazırlıyoruz. Her pasta sevgiyle, özenle ve en kaliteli malzemelerle üretilir. Doğum günleri, nişanlar, baby shower'lar ve tüm özel günleriniz için hayalinizdeki pastayı birlikte tasarlayalım.",

  logo: "logo.jpg",

  colors: {
    primary:   "#9A7425",
    secondary: "#1C150E",
    accent:    "#D4AF37",
    bg:        "#FFFAF3",
    text:      "#1C150E"
  },

  decor: { img: "", opacity: 0.2, side: "both" },

  intro: true,
  particles: "auto",
  cartEnabled: false,

  faq: [
    { q: "En küçük pasta kaç kişilik?", a: "En küçük pastamız 8-10 kişiliktir." },
    { q: "Kilo ile pasta satışı var mı?", a: "Hayır, kilo ile pasta satışımız bulunmamaktadır. Tüm pastalarımız kişilik olarak hazırlanır." },
    { q: "Teslimat yapıyor musunuz?", a: "Evet, Ankara içi ücretli teslimat hizmetimiz mevcuttur." },
    { q: "Sipariş için kapora gerekli mi?", a: "Evet, kaporalı çalışmaktayız. Siparişiniz kapora ile kesinleşir." }
  ],

  branches: [
    {
      name: "Şanslı Eller Butik Pasta",
      address: "Ankara içi sipariş ve teslimat",
      mapsUrl: "",
      phone: "+905415424860",
      hours: "Sipariş için WhatsApp ile iletişime geçin"
    }
  ],

/* ── BÖLÜM 3 — SABİT ── */

  phone: "+905415424860",
  whatsapp: "905415424860",
  instagram: "sansliellerbutikpasta",
  sheetsUrl: ""
};
