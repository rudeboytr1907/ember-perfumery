"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Gender = "Kadın" | "Erkek" | "Unisex";

type Perfume = {
  name: string;
  gender: Gender;
  fragrantica: string;
  notes: string;
  price?: string;
  isOutOfStock?: boolean;
  isPreOrder?: boolean;
  isNew?: boolean;
};

const whatsappNumber = "905382982055";
const itemsPerPage = 12;

const perfumes: Perfume[] = [
  {
    name: "Hugo Boss Scent Elixir for Her",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Hugo-Boss/Boss-The-Scent-Elixir-For-Her-88880.html",
    notes: "Üst: pembe biber. Orta: belladonna. Alt: ambergris.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "By Kilian Black Phantom",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Black-Phantom-43632.html",
    notes:
      "Üst: rom. Orta: bitter çikolata, kahve, badem, heliotrope. Alt: karamel, şeker kamışı, sandal ağacı, vanilya, tonka, vetiver.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Armani Si",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Giorgio-Armani/Si-18453.html",
    notes:
      "Üst: cassis. Orta: Mayıs gülü, frezya. Alt: vanilya, paçuli, odunsu notalar, ambroxan.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Xerjoff Kind of Blue",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Xerjoff/Kind-of-Blue-16444.html",
    notes:
      "Notalar: aldehitler, pudralı notalar, karanfil, nergis, iris, portakal çiçeği, sandal ağacı, baharatlı notalar, gül, kakule.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "YSL Libre Intense",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Libre-Intense-62318.html",
    notes:
      "Üst: lavanta, mandalina, bergamot. Orta: lavanta, portakal çiçeği, yasemin sambac, orkide. Alt: Madagaskar vanilyası, tonka, ambergris, vetiver.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "VS Bare",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Victoria-s-Secret/Bare-75277.html",
    notes: "Notalar: Avustralya sandal ağacı, menekşe, mandalina.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "MFK Gentle Fluidity Gold",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Gentle-Fluidity-Gold-53401.html",
    notes:
      "Üst: ardıç meyveleri, muskat. Orta: kişniş. Alt: vanilya, misk, karamel, amberwood.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Paco Rabanne Olympea",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Rabanne/Olympea-31666.html",
    notes:
      "Üst: su yasemini, yeşil mandalina, zencefil çiçeği. Orta: vanilya, tuz. Alt: kaşmir ağacı, ambergris, sandal ağacı.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Kenzo Homme EDP",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Kenzo/Kenzo-Homme-Eau-de-Parfum-35396.html",
    notes:
      "Üst: nane, narenciye, kakule. Orta: deniz notaları, adaçayı, baharatlar. Alt: sandal ağacı, vetiver, sedir, vanilya.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Penhaligon's Violetta",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Violetta-4035.html",
    notes:
      "Üst: sardunya, narenciye. Orta: menekşe. Alt: misk, sandal ağacı, sedir.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Mancera Amore Caffè",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Mancera/Amore-Caffe-87409.html",
    notes:
      "Üst: kahve, amaretto. Orta: dondurma, speculoos. Alt: esmer şeker, vanilya, ambergris.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Gucci Intense Oud",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Gucci/Intense-Oud-32743.html",
    notes:
      "Üst: tütsü, ahududu, safran, armut. Orta: Şam gülü, misk, portakal çiçeği. Alt: öd ağacı, deri, paçuli, ambergris.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Profumum Roma Acqua e Zucchero",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Profumum-Roma/Acqua-e-Zucchero-3887.html",
    notes: "Notalar: vanilya, orman meyveleri, portakal çiçeği.",
    isOutOfStock: false,
    isPreOrder: false
  },
  
  {
    name: "Burberry Burberry Woman",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Burberry/Burberry-Women-818.html",
    notes:
      "Üst: şeftali, kayısı, armut, siyah frenk üzümü, yeşil elma. Orta: sandal ağacı, yasemin, yosun. Alt: vanilya, sedir, misk.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Penhaligon's Endymion",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Endymion-5674.html",
    notes:
      "Üst: lavanta, bergamot, adaçayı, mandalina. Orta: kahve, sardunya. Alt: deri, kakule, sandal ağacı, vetiver, muskat, mür, karabiber, misk, tütsü.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Creed Green Irish Tweed",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Creed/Green-Irish-Tweed-474.html",
    notes:
      "Üst: iris, mine çiçeği. Orta: menekşe yaprağı. Alt: ambergris, sandal ağacı.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Penhaligon's Tralala",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Tralala-23081.html",
    notes:
      "Üst: viski, menekşe, safran, aldehitler. Orta: deri, tütsü, karanfil, tuberoz. Alt: vanilya, misk, paçuli, vetiver.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Acqua di Parma Fico di Amalfi",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Acqua-di-Parma/Acqua-di-Parma-Blu-Mediterraneo-Fico-di-Amalfi-1687.html",
    notes:
      "Üst: greyfurt, bergamot, citron, limon. Orta: incir nektarı, yasemin, pembe biber. Alt: incir ağacı, sedir, benzoin.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Tom Ford Mandarino di Amalfi",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Mandarino-di-Amalfi-25481.html",
    notes:
      "Üst: limon, greyfurt, nane, fesleğen, tarhun, siyah frenk üzümü. Orta: portakal çiçeği, yasemin, adaçayı, shiso, kişniş, karabiber. Alt: misk, vetiver, amber, labdanum.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "By Kilian Love Don't be Shy Extreme",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Love-Don-t-Be-Shy-Extreme-64761.html",
    notes:
      "Üst: neroli, bergamot. Orta: portakal çiçeği, Bulgar gülü. Alt: marshmallow, vanilya, misk, nar.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Diptyque Olene",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Diptyque/Olene-Eau-de-Toilette-3960.html",
    notes:
      "Üst: nergis, hanımeli. Orta: yasemin, morsalkım. Alt: beyaz çiçekler, yeşil notalar.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "By Kilian Vodka on the Rocks",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Vodka-on-the-Rocks-23899.html",
    notes:
      "Üst: aldehitler, kişniş, kakule. Orta: ravent, müge, pembe gül. Alt: ambroxan, meşe yosunu, sandal ağacı.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Mancera Tonka Cola",
    gender: "Unisex",
    fragrantica:
      "http://fragrantica.com/perfume/Mancera/Tonka-Cola-76893.html",
    notes:
      "Üst: Tarçın, Kiraz, Sicilya limonu, Hindistan cevizi. Orta: Coca-Cola, Paçuli yaprağı, Portakal çiçeği. Alt: Tonka fasulyesi, Vanilya, Benzoin, Labdanum.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Tom Ford Cherry Smoke",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Cherry-Smoke-78578.html",
    notes:
      "Üst: vişne, safran. Orta: deri, osmanthus, zeytin, kayısı. Alt: duman, odunsu notalar, cypriol.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Tom Ford Beau de Jour",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Beau-De-Jour-Eau-de-Parfum-59064.html",
    notes:
      "Üst: Lavanta, Lavanta ekstratı. Orta: Meşe Yosunu, Biberiye, Nane, Reyhan, Sardunya. Alt: Paçuli, Amber.",
    isPreOrder: false 
  },
  {
    name: "By Kilian Blue Moon Ginger Dash",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Blue-Moon-Ginger-Dash-79731.html",
    notes:
      "Üst: limon, calone, nane, aldehitler. Orta: votka, zencefil. Alt: ambroxan, beyaz misk.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Versace Eros",
    gender: "Erkek",
    fragrantica: "https://www.fragrantica.com/perfume/Versace/Eros-16657.html",
    notes:
      "Üst: nane, yeşil elma, limon. Orta: tonka fasulyesi, ambroxan, sardunya. Alt: Madagaskar vanilyası, sedir, vetiver, meşe yosunu.",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Tom Ford Bitter Peach",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Bitter-Peach-62707.html",
    notes:
      "Üst: şeftali, kan portakalı, kakule, heliotrope. Orta: rom, konyak, davana, yasemin. Alt: vanilya, paçuli, tonka, sandal ağacı, benzoin, cashmeran, labdanum, styrax, vetiver.",
    price: "50 ML 700 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Lorenzo Pazzaglia Black Sea",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Lorenzo-Pazzaglia/Black-Sea-69652.html",
    notes:
      "Üst: tuz, ozonik notalar, su notaları, mersin, bergamot. Orta: deniz notaları, tuz, ylang-ylang, portakal çiçeği. Alt: ambergris, yosun, beyaz misk, meşe yosunu, paçuli.",
    price: "50 ML 700 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Tiziana Terenzi Kirke",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tiziana-Terenzi/Kirke-32172.html",
    notes:
      "Üst: çarkıfelek meyvesi, şeftali, armut. Orta: zambak. Alt: misk, sandal ağacı, paçuli, vanilya, kediotu.",
    price: "50 ML 750 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
   {
    name: "Serge Lutens Chergui",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Serge-Lutens/Chergui-2762.html",
    notes:
      "Tütün Yaprağı, Bal, Amber, Tütsü, Sandal Ağacı, iris, Misk, Gül.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Kenzo Homme Marine",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Kenzo/Kenzo-Homme-Marine-80042.html",
    notes:
      "Üst: deniz notaları. Orta: ylang-ylang. Alt: misk, sandal ağacı.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Creed Aventus Absolu",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Creed/Absolu-Aventus-2023-84112.html",
    notes:
      "Üst: greyfurt, bergamot, pembe biber, ananas. Orta: zencefil, tarçın, limon, gül. Alt: paçuli, vetiver, meşe yosunu, ambroxan, tonka.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
   {
    name: "Tom Ford Lost Cherry",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Lost-Cherry-51411.html",
    notes:
      "Üst: badem, siyah vişne, vişne likörü. Orta: ekşi vişne, siyah erik, Türk gülü, zambak. Alt: vanilya, tonka fasulyesi, tarçın, sandal ağacı, karanfil, vetiver.",
    price: "50 ML 750 TL",
    isOutOfStock: true,
    isPreOrder: true 
  },
  {
    name: "Issey Miyake Le Sel d'Issey",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Issey-Miyake/Le-Sel-d-Issey-95642.html",
    notes:
      "Üst: deniz tuzu, zencefil. Orta: deniz yosunu, vetiver. Alt: sedir ağacı, meşe yosunu.",
    price: "50 ML 600 TL",  
    isOutOfStock: true,
    isPreOrder: true
  },
  {
    name: "Amouage Sindbad",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Amouage/Sindbad-116626.html",
    notes:
      "Üst: bergamot, mandalina, tarçın. Orta: tütsü, sardunya, gül. Alt: ambergris, sandal ağacı, meşe yosunu, deri.",
    price: "50 ML 750 TL",
    isOutOfStock: true,
    isPreOrder: true
  },
  {
    name: "Victoria's Secret Tease",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Victoria-s-Secret/Tease-Eau-de-Parfum-50825.html",
    notes:
      "Üst: armut, mandalina, litchi, kırmızı elma. Orta: gardenya, tatlı bezelye, yasemin, frezya, manolya. Alt: vanilya, benzoin, misk, çikolata, amber, sandal ağacı.",
    price: "50 ML 600 TL",
    isOutOfStock: true,
    isPreOrder: true
  },
  {
    name: "Tom Ford Black Orchid",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Black-Orchid-1018.html",
    notes:
      "Üst: trüf, gardenya, siyah frenk üzümü, ylang-ylang, yasemin, bergamot, mandalina, Amalfi limonu. Orta: orkide, baharatlar, meyveli notalar, lotus. Alt: çikolata, paçuli, vanilya, tütsü, amber, sandal ağacı, vetiver, beyaz misk.",
    isOutOfStock: true,
    isPreOrder: true // Sadece Black Orchid için ön sipariş true yapıldı
  },
  {
    name: "Hermès Terre d'Hermès",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Hermes/Terre-d-Hermes-17.html",
    notes: "Üst: Portakal, Greyfurt. Orta: Karabiber, Sardunya, Çakmak Taşı. Alt: Vetiver, Sedir, Paçuli, Benzoin.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  
   {
    name: "Dior Sauvage Elixir",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Dior/Sauvage-Elixir-68415.html",
    notes: "Üst: muskat, tarçın, kakule, greyfurt. Orta: lavanta. Alt: meyan kökü, sandal ağacı, amber, paçuli, Haiti vetiveri.",
    price: "50 ML 650 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Dior J'adore",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Dior/J-adore-210.html",
    notes: "Üst: Armut, Kavun, Manolya, Şeftali, Bergamot. Orta: Yasemin, Tüberoz, Frezya, Gül, Orkide, Menekşe, Erik. Alt: Misk, Vanilya, Sedir, Böğürtlen.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Maison Martin Margiela Lazy Sunday Morning",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Maison-Martin-Margiela/Lazy-Sunday-Morning-20542.html",
    notes: "Üst: Aldehitler, Vadideki Zambak, Armut. Orta: Gül, İris, Portakal Çiçeği. Alt: Beyaz Misk, Ambrette, Paçuli.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Rasasi Rumz Al Rasasi 9325 Pour Lui",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Rasasi/Rumz-Al-Rasasi-9325-Pour-Lui-45687.html",
    notes: "Üst: ananas, misket limonu, limon, bergamot, karabiber. Orta: yasemin, vadi zambağı, frezya. Alt: ambergris, sedir, deri, beyaz misk, meşe yosunu.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Xerjoff 1861 Renaissance",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Xerjoff/XJ-1861-Renaissance-12126.html",
    notes: "Üst: Amalfi Limonu, Mandalina, Bergamot, Petitgrain. Orta: Nane, Vadideki Zambak, Gül. Alt: Misk, Virjinya Sediri, Paçuli, Amber.",
    price: "50 ML 600 TL",
    isOutOfStock: false,
    isPreOrder: false
  },
  {
    name: "Rabanne Invictus",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Rabanne/Invictus-18471.html",
    notes:
      "Üst: deniz notaları, greyfurt, mandalina. Orta: defne yaprağı, yasemin. Alt: ambergris, guaiac ağacı, meşe yosunu, paçuli.",
    price: "50 ML 700 TL",
    isOutOfStock: false,
    isPreOrder: false,
    isNew: true,
  },
  {
    name: "Parfums de Marly Valaya",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Parfums-de-Marly/Valaya-78574.html",
    notes:
      "Üst: aldehitler, beyaz şeftali, bergamot, mandalina. Orta: portakal çiçeği, vadi zambağı, petalia, nympheal, vetiver, mahonia. Alt: misk, ambroxan, akigalawood, vanilya.",
    price: "50 ML 700 TL",
    isOutOfStock: false,
    isPreOrder: false,
    isNew: true,
  },
];

const perfumeImages: Record<string, string> = {
  "Hugo Boss Scent Elixir for Her":
    "/perfumes/hugo-boss-scent-elixir-for-her.png",
  "By Kilian Black Phantom": "/perfumes/by-kilian-black-phantom.jpeg",
  "Armani Si": "/perfumes/armani-si.png",
  "Xerjoff Kind of Blue": "/perfumes/xerjoff-kind-of-blue.png",
  "YSL Libre Intense": "/perfumes/ysl-libre-intense.png",
  "VS Bare": "/perfumes/vs-bare.png",
  "MFK Gentle Fluidity Gold": "/perfumes/mfk-gentle-fluidity-gold.png",
  "Paco Rabanne Olympea": "/perfumes/paco-rabanne-olympea.png",
  "Kenzo Homme EDP": "/perfumes/kenzo-homme-edp.png",
  "Penhaligon's Violetta": "/perfumes/penhaligons-violetta.png",
  "Mancera Amore Caffè": "/perfumes/mancera-amorre-caffe.png",
  "Gucci Intense Oud": "/perfumes/gucci-intense-oud.png",
  "Profumum Roma Acqua e Zucchero":
    "/perfumes/profumum-roma-acqua-e-zucchero.png",
  "Tom Ford Black Orchid": "/perfumes/tom-ford-black-orchid.png",
  "Burberry Burberry Woman": "/perfumes/burberry-burberry-woman.png",
  "Penhaligon's Endymion": "/perfumes/penhaligons-endymion.png",
  "Creed Green Irish Tweed": "/perfumes/creed-green-irish-tweed.png",
  "Penhaligon's Tralala": "/perfumes/penhaligons-tralala.png",
  "Acqua di Parma Fico di Amalfi":
    "/perfumes/acqua-di-parma-fico-di-amalfi.png",
  "Tom Ford Mandarino di Amalfi":
    "/perfumes/tom-ford-mandarino-di-amalfi.png",
  "By Kilian Love Don't be Shy Extreme":
    "/perfumes/by-kilian-love-dont-be-shy-extreme.png",
  "Diptyque Olene": "/perfumes/diptyque-olene.png",
  "By Kilian Vodka on the Rocks":
    "/perfumes/by-kilian-vodka-on-the-rocks.png",
  "Tom Ford Cherry Smoke": "/perfumes/tom-ford-cherry-smoke.png",
  "By Kilian Blue Moon Ginger Dash":
    "/perfumes/by-kilian-blue-moon-ginger-dash.png",
  "Versace Eros": "/perfumes/versace-eros.png",
  "Tom Ford Bitter Peach": "/perfumes/tom-ford-bitter-peach.png",
  "Lorenzo Pazzaglia Black Sea":
    "/perfumes/lorenzo-pazzaglia-black-sea.png",
  "Tiziana Terenzi Kirke" :
    "/perfumes/tiziana-terenzi-kirke.png",
  "Kenzo Homme Marine":
    "/perfumes/kenzo-homme-marine.png",
  "Creed Aventus Absolu":
    "/perfumes/creed-aventus-absolu.png",  
  "Tom Ford Lost Cherry":
    "/perfumes/tom_ford_lost_cherry.png",  
  "Amouage Sindbad":
    "/perfumes/amouage_sindbad.png",
  "Issey Miyake Le Sel d'Issey":
    "/perfumes/le_sel_dissey.png",
  "Victoria's Secret Tease":
    "/perfumes/vs_tease.png",
  "Tom Ford Beau de Jour":
    "/perfumes/beaudejour.png",
  "Serge Lutens Chergui":
  "/perfumes/chergui.png",     
  "Mancera Tonka Cola":
  "/perfumes/tonka_cola.png",
  "Hermès Terre d'Hermès": "/perfumes/terre.png",
  "Dior Sauvage Elixir": "/perfumes/sauvage_elixir.png",
  "Dior J'adore": "/perfumes/dior-jadore.png",
  "Maison Martin Margiela Lazy Sunday Morning": "/perfumes/sundaymorning.png",
  "Rasasi Rumz Al Rasasi 9325 Pour Lui": "/perfumes/zebra.png",
  "Xerjoff 1861 Renaissance": "/perfumes/1861.png",
  "Rabanne Invictus": "/perfumes/rabanne-invictus.png",
  "Parfums de Marly Valaya": "/perfumes/parfums-de-marly-valaya-cutout-v2.png",
};

type CatalogFilter = Gender | "Tümü" | "Yeni Gelenler";
type ScentFamily =
  | "Odunsu"
  | "Çiçeksi"
  | "Deniz"
  | "Tatlı"
  | "Baharatlı"
  | "Narenciye";

const catalogFilters: CatalogFilter[] = [
  "Tümü",
  "Kadın",
  "Erkek",
  "Unisex",
  "Yeni Gelenler",
];
const scentFamilies: ScentFamily[] = [
  "Odunsu",
  "Çiçeksi",
  "Deniz",
  "Tatlı",
  "Baharatlı",
  "Narenciye",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ember Perfumery Parfüm Kataloğu",
  numberOfItems: perfumes.length,
  itemListElement: perfumes.map((perfume, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: perfume.name,
      category: `${perfume.gender} parfüm`,
      image: perfumeImages[perfume.name],
      sameAs: perfume.fragrantica,
      offers: {
        "@type": "Offer",
        priceCurrency: "TRY",
        price: (perfume.price ?? "50 ML 600 TL").match(/(\d+)\s*TL$/)?.[1],
        availability: perfume.isOutOfStock
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
      },
    },
  })),
};

function getScentFamilies(notes: string): ScentFamily[] {
  const normalized = notes.toLocaleLowerCase("tr-TR");
  const matches: ScentFamily[] = [];
  const includesAny = (terms: string[]) =>
    terms.some((term) => normalized.includes(term));

  if (
    includesAny([
      "sandal",
      "sedir",
      "vetiver",
      "paçuli",
      "öd ağacı",
      "guaiac",
      "meşe yosunu",
      "odunsu",
      "akigalawood",
    ])
  )
    matches.push("Odunsu");
  if (
    includesAny([
      "gül",
      "yasemin",
      "çiçek",
      "zambak",
      "menekşe",
      "gardenya",
      "orkide",
      "frezya",
      "nergi",
    ])
  )
    matches.push("Çiçeksi");
  if (includesAny(["deniz", "su notaları", "tuz", "ozonik", "calone"]))
    matches.push("Deniz");
  if (
    includesAny([
      "vanilya",
      "karamel",
      "şeker",
      "çikolata",
      "bal",
      "tonka",
      "marshmallow",
      "dondurma",
    ])
  )
    matches.push("Tatlı");
  if (
    includesAny([
      "biber",
      "tarçın",
      "kakule",
      "muskat",
      "safran",
      "karanfil",
      "baharat",
      "zencefil",
    ])
  )
    matches.push("Baharatlı");
  if (
    includesAny([
      "bergamot",
      "limon",
      "mandalina",
      "portakal",
      "greyfurt",
      "misket limonu",
      "narenciye",
    ])
  )
    matches.push("Narenciye");

  return matches.length ? matches : ["Odunsu"];
}

function genderClasses(gender: Gender) {
  if (gender === "Kadın") return "gender-women";
  if (gender === "Erkek") return "gender-men";
  return "gender-unisex";
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.58 7.46L3 20.5l1.3-4.77A8.5 8.5 0 1 1 20.5 11.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8.3 7.7c.3-.3.75-.18.94.15l1.05 1.82c.14.25.11.56-.08.77l-.66.72c.7 1.45 1.8 2.55 3.28 3.22l.7-.66c.22-.2.54-.23.79-.07l1.76 1.08c.34.2.44.65.2.95-.5.64-1.26 1.03-2.08.96-3.75-.31-6.68-3.25-7-7-.06-.74.3-1.45 1.1-1.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [catalogFilter, setCatalogFilter] =
    useState<CatalogFilter>("Tümü");
  const [scentFilter, setScentFilter] = useState<ScentFamily | "">("");
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const filteredPerfumes = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("tr-TR");

    return perfumes.filter((perfume) => {
      const families = getScentFamilies(perfume.notes);
      const searchableText = `${perfume.name} ${perfume.gender} ${perfume.notes} ${families.join(
        " "
      )}`.toLocaleLowerCase("tr-TR");
      const matchesSearch = query ? searchableText.includes(query) : true;
      const matchesCatalog =
        catalogFilter === "Tümü"
          ? true
          : catalogFilter === "Yeni Gelenler"
            ? perfume.isNew
            : perfume.gender === catalogFilter;
      const matchesScent = scentFilter
        ? families.includes(scentFilter)
        : true;

      return matchesSearch && matchesCatalog && matchesScent;
    });
  }, [catalogFilter, scentFilter, search]);

  const visiblePerfumes = filteredPerfumes.slice(0, visibleCount);
  const hasMorePerfumes = visibleCount < filteredPerfumes.length;
  const hasActiveFilters =
    search.length > 0 || catalogFilter !== "Tümü" || scentFilter !== "";

  const setCategory = (value: CatalogFilter) => {
    setCatalogFilter(value);
    setVisibleCount(itemsPerPage);
  };

  const showNewArrivals = () => {
    setCategory("Yeni Gelenler");
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const generalWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Merhaba, parfüm seçenekleri hakkında bilgi almak istiyorum."
  )}`;

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#07110f] text-[#f8f1e4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a
        href="#catalog"
        className="sr-only z-[100] rounded bg-[#f4dfb6] px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Kataloğa geç
      </a>

      <header className="sticky top-0 z-50 border-b border-[#bd8b50]/25 bg-[#07110f]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Ember Perfumery ana sayfa">
            <Image src="/ember-logo.png" alt="" width={38} height={38} className="h-9 w-9 object-contain" />
            <span className="font-display text-base font-semibold tracking-[0.08em] text-[#f4dfb6] sm:text-lg">
              EMBER PERFUMERY
            </span>
          </a>
          <nav aria-label="Ana menü" className="hidden items-center gap-8 lg:flex">
            <a href="#catalog" className="nav-link">Katalog</a>
            <button type="button" onClick={showNewArrivals} className="nav-link">Yeni Gelenler</button>
            <a href="#families" className="nav-link">Koku Aileleri</a>
            <a href="#contact" className="nav-link">İletişim</a>
          </nav>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-contact"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="ember-hero relative border-b border-[#bd8b50]/30">
        <div className="ember-smoke ember-smoke-left" />
        <div className="ember-smoke ember-smoke-right" />
        <div className="relative mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-6 px-5 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-10">
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c6975c]/25 bg-black/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e8c894]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e2543f] shadow-[0_0_12px_#e2543f]" />
              {perfumes.length} seçili koku
            </div>
            <h1 className="font-display text-4xl font-medium leading-[1.02] text-[#fffaf1] sm:text-5xl md:text-6xl xl:text-7xl">
              <span className="text-[#efc98f]">Özenle seçilmiş</span>
              <br />
              kokuların izini sürün.
            </h1>
            <div className="mx-auto mt-7 flex w-44 items-center gap-3 text-[#c99b61] lg:mx-0">
              <span className="h-px flex-1 bg-current" />
              <span className="h-2 w-2 rotate-45 border border-current" />
              <span className="h-px flex-1 bg-current" />
            </div>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#bbb4a8] sm:text-base lg:mx-0">
              Kadın, erkek ve unisex kokular arasından size eşlik edecek imzayı
              bulun. Stok ve ürün detayları için bize kolayca ulaşın.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#catalog" className="ember-button-primary">
                Kataloğu İncele <span aria-hidden="true">→</span>
              </a>
              <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="ember-button-secondary">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[650px] items-center justify-center lg:justify-end">
            <div className="absolute h-[72%] w-[72%] rounded-full bg-[#d64b36]/18 blur-[90px]" />
            <Image
              src="/ember-logo.png"
              alt="Ember Perfumery logosu"
              width={620}
              height={620}
              preload
              className="hero-logo relative z-10 w-full max-w-[430px] object-contain drop-shadow-[0_25px_65px_rgba(0,0,0,0.55)] lg:max-w-[590px]"
            />
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c89a61]">Koleksiyonu keşfet</p>
            <h2 className="font-display text-4xl font-medium text-[#fff9ee] md:text-5xl">Parfüm Kataloğu</h2>
            <p className="mt-3 text-sm text-[#878982]">
              {filteredPerfumes.length} ürün seçiminizle eşleşiyor.
            </p>
          </div>
          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="perfume-search" className="sr-only">Parfüm adı veya nota ara</label>
            <input
              id="perfume-search"
              type="search"
              placeholder="Parfüm adı veya nota ara..."
              className="catalog-search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(itemsPerPage);
              }}
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#c89a61]">
              <SearchIcon />
            </span>
          </div>
        </div>

        <div className="filter-panel">
          <div className="filter-scroll" aria-label="Katalog kategorileri">
            {catalogFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={catalogFilter === item}
                className={`filter-chip ${catalogFilter === item ? "filter-chip-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div id="families" className="filter-divider" />
          <div className="filter-scroll" aria-label="Koku aileleri">
            {scentFamilies.map((family) => (
              <button
                key={family}
                type="button"
                onClick={() => {
                  setScentFilter((current) => (current === family ? "" : family));
                  setVisibleCount(itemsPerPage);
                }}
                aria-pressed={scentFilter === family}
                className={`scent-chip ${scentFilter === family ? "scent-chip-active" : ""}`}
              >
                <span className="scent-gem" aria-hidden="true" /> {family}
              </button>
            ))}
          </div>
          {hasActiveFilters ? (
            <button
              type="button"
              className="clear-filter"
              onClick={() => {
                setSearch("");
                setCatalogFilter("Tümü");
                setScentFilter("");
                setVisibleCount(itemsPerPage);
              }}
            >
              Temizle
            </button>
          ) : null}
        </div>

        <p className="sr-only" aria-live="polite">{filteredPerfumes.length} parfüm bulundu.</p>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visiblePerfumes.map((perfume) => {
            const families = getScentFamilies(perfume.notes);
            const baseMessage = perfume.isPreOrder
              ? `Merhaba, ön siparişe açık olan ${perfume.name} ürünü için ön sipariş oluşturmak istiyorum.`
              : `Merhaba, ${perfume.name} hakkında bilgi almak istiyorum.`;
            const message = encodeURIComponent(baseMessage);

            return (
              <article key={perfume.name} className={`perfume-card group ${perfume.isOutOfStock && !perfume.isPreOrder ? "perfume-card-muted" : ""}`}>
                <div className="product-stage">
                  <div className="product-glow" />
                  <Image
                    src={perfumeImages[perfume.name]}
                    alt={`${perfume.name} parfüm şişesi`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="product-image object-contain p-5"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    {perfume.isNew ? <span className="status-badge status-new">Yeni</span> : null}
                  </div>
                  <span className={`status-badge absolute right-3 top-3 ${perfume.isPreOrder ? "status-preorder" : perfume.isOutOfStock ? "status-out" : "status-stock"}`}>
                    <span className="status-dot" />
                    {perfume.isPreOrder ? "Ön Sipariş" : perfume.isOutOfStock ? "Tükendi" : "Stokta"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold leading-tight text-[#fff7e8]">{perfume.name}</h3>
                    <span className={`gender-badge ${genderClasses(perfume.gender)}`}>{perfume.gender}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {families.slice(0, 3).map((family) => (
                      <span key={family} className="family-tag">{family}</span>
                    ))}
                  </div>
                  <p className="note-clamp mt-4 text-xs leading-5 text-[#9ea19a]">{perfume.notes}</p>

                  <div className="mt-auto border-t border-[#b8894f]/20 pt-4">
                    <p className={`font-display text-2xl font-semibold tracking-wide ${perfume.isOutOfStock && !perfume.isPreOrder ? "text-stone-600 line-through" : "text-[#efcd96]"}`}>
                      {perfume.price ?? "50 ML 600 TL"}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      <a href={perfume.fragrantica} target="_blank" rel="noopener noreferrer" aria-label={`${perfume.name} parfüm detaylarını incele`} className="card-button card-button-ghost">
                        İncele
                      </a>
                      {perfume.isPreOrder ? (
                        <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`${perfume.name} için ön sipariş ver`} className="card-button card-button-primary">Ön Sipariş <span aria-hidden="true">→</span></a>
                      ) : perfume.isOutOfStock ? (
                        <button disabled className="card-button card-button-disabled">Tükendi</button>
                      ) : (
                        <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`${perfume.name} hakkında bilgi al`} className="card-button card-button-primary">Bilgi Al <span aria-hidden="true">→</span></a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPerfumes.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#ba8d55]/25 bg-[#0c1815] p-10 text-center">
            <p className="font-display text-2xl text-[#f3dfb8]">Bu seçimle eşleşen koku bulunamadı.</p>
            <button type="button" onClick={() => { setSearch(""); setCatalogFilter("Tümü"); setScentFilter(""); }} className="mt-5 text-sm font-semibold text-[#dfab68] underline underline-offset-4">Filtreleri temizle</button>
          </div>
        ) : null}

        {hasMorePerfumes ? (
          <div className="mt-10 flex flex-col items-center gap-3">
            <button type="button" onClick={() => setVisibleCount((count) => count + itemsPerPage)} className="load-more-button">Daha fazla göster <span aria-hidden="true">↓</span></button>
            <p className="text-xs text-[#686f69]">{visiblePerfumes.length} / {filteredPerfumes.length} ürün gösteriliyor</p>
          </div>
        ) : null}
      </section>

      <footer id="contact" className="border-t border-[#bd8b50]/25 bg-[#050c0b]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8 lg:px-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <Image src="/ember-logo.png" alt="" width={58} height={58} className="h-14 w-14 object-contain" />
              <p className="font-display text-xl font-semibold tracking-[0.06em] text-[#efd5a9]">EMBER PERFUMERY</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#777d76]">Özenle seçilmiş kokular, sade bir keşif deneyimi.</p>
          </div>
          <div>
            <p className="footer-title">Keşfet</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#858b84]">
              <a href="#catalog" className="footer-link">Katalog</a>
              <button type="button" onClick={showNewArrivals} className="footer-link text-left">Yeni Gelenler</button>
              <a href="#families" className="footer-link">Koku Aileleri</a>
            </div>
          </div>
          <div>
            <p className="footer-title">Bize ulaşın</p>
            <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-3 text-sm text-[#b7b9b2] transition hover:text-[#efc98f]">
              <WhatsAppIcon /> +90 538 298 20 55
            </a>
          </div>
        </div>
        <div className="border-t border-white/[0.06] px-5 py-5 text-center text-xs text-[#535a55]">© 2026 Ember Perfumery</div>
      </footer>

      <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="WhatsApp üzerinden Ember Perfumery ile iletişime geç">
        <WhatsAppIcon />
      </a>
    </main>
  );
}
