"use client";

import { useMemo, useState } from "react";

type Gender = "Kadın" | "Erkek" | "Unisex";

type Perfume = {
  name: string;
  gender: Gender;
  fragrantica: string;
  notes: string;
  price?: string;
  isOutOfStock?: boolean; 
};

const whatsappNumber = "905382982055";

const perfumes: Perfume[] = [
  {
    name: "Hugo Boss Scent Elixir for Her",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Hugo-Boss/Boss-The-Scent-Elixir-For-Her-88880.html",
    notes: "Üst: pembe biber. Orta: belladonna. Alt: ambergris.",
    isOutOfStock: false
  },
  {
    name: "By Kilian Black Phantom",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Black-Phantom-43632.html",
    notes:
      "Üst: rom. Orta: bitter çikolata, kahve, badem, heliotrope. Alt: karamel, şeker kamışı, sandal ağacı, vanilya, tonka, vetiver.",
      isOutOfStock: false
  },
  {
    name: "Armani Si",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Giorgio-Armani/Si-18453.html",
    notes:
      "Üst: cassis. Orta: Mayıs gülü, frezya. Alt: vanilya, paçuli, odunsu notalar, ambroxan.",
      isOutOfStock: false
  },
  {
    name: "Xerjoff Kind of Blue",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Xerjoff/Kind-of-Blue-16444.html",
    notes:
      "Notalar: aldehitler, pudralı notalar, karanfil, nergis, iris, portakal çiçeği, sandal ağacı, baharatlı notalar, gül, kakule.",
      isOutOfStock: false
  },
  {
    name: "YSL Libre Intense",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Libre-Intense-62318.html",
    notes:
      "Üst: lavanta, mandalina, bergamot. Orta: lavanta, portakal çiçeği, yasemin sambac, orkide. Alt: Madagaskar vanilyası, tonka, ambergris, vetiver.",
    isOutOfStock: false
  },
  {
    name: "VS Bare",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Victoria-s-Secret/Bare-75277.html",
    notes: "Notalar: Avustralya sandal ağacı, menekşe, mandalina.",
    isOutOfStock: false
  },
  {
    name: "MFK Gentle Fluidity Gold",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Gentle-Fluidity-Gold-53401.html",
    notes:
      "Üst: ardıç meyveleri, muskat. Orta: kişniş. Alt: vanilya, misk, karamel, amberwood.",
    isOutOfStock: false
  },
  {
    name: "Paco Rabanne Olympea",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Rabanne/Olympea-31666.html",
    notes:
      "Üst: su yasemini, yeşil mandalina, zencefil çiçeği. Orta: vanilya, tuz. Alt: kaşmir ağacı, ambergris, sandal ağacı.",
    isOutOfStock: false
  },
  {
    name: "Kenzo Homme EDP",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Kenzo/Kenzo-Homme-Eau-de-Parfum-35396.html",
    notes:
      "Üst: nane, narenciye, kakule. Orta: deniz notaları, adaçayı, baharatlar. Alt: sandal ağacı, vetiver, sedir, vanilya.",
      isOutOfStock: false
  },
  {
    name: "Penhaligon's Violetta",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Violetta-4035.html",
    notes:
      "Üst: sardunya, narenciye. Orta: menekşe. Alt: misk, sandal ağacı, sedir.",
      isOutOfStock: false
  },
  {
    name: "Mancera Amorre Caffe",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Mancera/Amore-Caffe-87409.html",
    notes:
      "Üst: kahve, amaretto. Orta: dondurma, speculoos. Alt: esmer şeker, vanilya, ambergris.",
      isOutOfStock: false
  },
  {
    name: "Gucci Intense Oud",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Gucci/Intense-Oud-32743.html",
    notes:
      "Üst: tütsü, ahududu, safran, armut. Orta: Şam gülü, misk, portakal çiçeği. Alt: öd ağacı, deri, paçuli, ambergris.",
      isOutOfStock: false
  },
  {
    name: "Profumum Roma Acqua e Zucchero",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Profumum-Roma/Acqua-e-Zucchero-3887.html",
    notes: "Notalar: vanilya, orman meyveleri, portakal çiçeği.",
    isOutOfStock: false
  },
  {
    name: "Tom Ford Black Orchid",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Black-Orchid-1018.html",
    notes:
      "Üst: trüf, gardenya, siyah frenk üzümü, ylang-ylang, yasemin, bergamot, mandalina, Amalfi limonu. Orta: orkide, baharatlar, meyveli notalar, lotus. Alt: çikolata, paçuli, vanilya, tütsü, amber, sandal ağacı, vetiver, beyaz misk.",
    isOutOfStock: true
  },
  {
    name: "Burberry Burberry Woman",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Burberry/Burberry-Women-818.html",
    notes:
      "Üst: şeftali, kayısı, armut, siyah frenk üzümü, yeşil elma. Orta: sandal ağacı, yasemin, yosun. Alt: vanilya, sedir, misk.",
      isOutOfStock: false
  },
  {
    name: "Penhaligon's Endymion",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Endymion-5674.html",
    notes:
      "Üst: lavanta, bergamot, adaçayı, mandalina. Orta: kahve, sardunya. Alt: deri, kakule, sandal ağacı, vetiver, muskat, mür, karabiber, misk, tütsü.",
    isOutOfStock: false
  },
  {
    name: "Creed Green Irish Tweed",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Creed/Green-Irish-Tweed-474.html",
    notes:
      "Üst: iris, mine çiçeği. Orta: menekşe yaprağı. Alt: ambergris, sandal ağacı.",
  },
  {
    name: "Penhaligon's Tralala",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Tralala-23081.html",
    notes:
      "Üst: viski, menekşe, safran, aldehitler. Orta: deri, tütsü, karanfil, tuberoz. Alt: vanilya, misk, paçuli, vetiver.",
      isOutOfStock: false
  },
  {
    name: "Acqua di Parma Fico di Amalfi",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Acqua-di-Parma/Acqua-di-Parma-Blu-Mediterraneo-Fico-di-Amalfi-1687.html",
    notes:
      "Üst: greyfurt, bergamot, citron, limon. Orta: incir nektarı, yasemin, pembe biber. Alt: incir ağacı, sedir, benzoin.",
    isOutOfStock: false
  },
  {
    name: "Tom Ford Mandarino di Amalfi",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Mandarino-di-Amalfi-25481.html",
    notes:
      "Üst: limon, greyfurt, nane, fesleğen, tarhun, siyah frenk üzümü. Orta: portakal çiçeği, yasemin, adaçayı, shiso, kişniş, karabiber. Alt: misk, vetiver, amber, labdanum.",
    isOutOfStock: false
  },
  {
    name: "By Kilian Love Don't be Shy Extreme",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Love-Don-t-Be-Shy-Extreme-64761.html",
    notes:
      "Üst: neroli, bergamot. Orta: portakal çiçeği, Bulgar gülü. Alt: marshmallow, vanilya, misk, nar.",
    isOutOfStock: false
  },
  {
    name: "Diptyque Olene",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Diptyque/Olene-Eau-de-Toilette-3960.html",
    notes:
      "Üst: nergis, hanımeli. Orta: yasemin, morsalkım. Alt: beyaz çiçekler, yeşil notalar.",
    isOutOfStock: false
  },
  {
    name: "By Kilian Vodka on the Rocks",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Vodka-on-the-Rocks-23899.html",
    notes:
      "Üst: aldehitler, kişniş, kakule. Orta: ravent, müge, pembe gül. Alt: ambroxan, meşe yosunu, sandal ağacı.",
    isOutOfStock: false
  },
  {
    name: "Tom Ford Cherry Smoke",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Cherry-Smoke-78578.html",
    notes:
      "Üst: vişne, safran. Orta: deri, osmanthus, zeytin, kayısı. Alt: duman, odunsu notalar, cypriol.",
    isOutOfStock: false
  },
  {
    name: "By Kilian Blue Moon Ginger Dash",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Blue-Moon-Ginger-Dash-79731.html",
    notes:
      "Üst: limon, calone, nane, aldehitler. Orta: votka, zencefil. Alt: ambroxan, beyaz misk.",
    isOutOfStock: false
  },
  {
    name: "Versace Eros",
    gender: "Erkek",
    fragrantica: "https://www.fragrantica.com/perfume/Versace/Eros-16657.html",
    notes:
      "Üst: nane, yeşil elma, limon. Orta: tonka fasulyesi, ambroxan, sardunya. Alt: Madagaskar vanilyası, sedir, vetiver, meşe yosunu.",
    isOutOfStock: false
  },
  {
    name: "Tom Ford Bitter Peach",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Bitter-Peach-62707.html",
    notes:
      "Üst: şeftali, kan portakalı, kakule, heliotrope. Orta: rom, konyak, davana, yasemin. Alt: vanilya, paçuli, tonka, sandal ağacı, benzoin, cashmeran, labdanum, styrax, vetiver.",
    price: "50 ML 700 TL",
    isOutOfStock: false
  },
  {
    name: "Lorenzo Pazzaglia Black Sea",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Lorenzo-Pazzaglia/Black-Sea-69652.html",
    notes:
      "Üst: tuz, ozonik notalar, su notaları, mersin, bergamot. Orta: deniz notaları, tuz, ylang-ylang, portakal çiçeği. Alt: ambergris, yosun, beyaz misk, meşe yosunu, paçuli.",
    price: "50 ML 700 TL",
    isOutOfStock: false
  },
  {
    name: "Tiziana Terenzi Kirke",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tiziana-Terenzi/Kirke-32172.html",
    notes:
      "Üst: :Çarkıfelek meyvesi, Şeftali, armut. Orta: zambak. Alt: Misk, sandal ağacı, paçuli, vanilya, kediotu.",
    price: "50 ML 750 TL",
    isOutOfStock: false
  },
  {
    name: "Kenzo Homme Marine",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Kenzo/Kenzo-Homme-Marine-80042.html",
    notes:
      "Üst: :deniz notaları. Orta: ylang ylang. Alt: Misk, sandal ağacı.",
    price: "50 ML 600 TL",
    isOutOfStock: false
  },
  {
    name: "Creed Aventus Absolu",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Creed/Absolu-Aventus-2023-84112.html",
    notes:
      "Üst: :greyfurt, bergamot, pembe biber,ananas. Orta: zencefil, tarçın, limon, gül. Alt:paçuli,vetiver,meşe yosunu,ambroxan,tonka.",
    price: "50 ML 600 TL",
    isOutOfStock: false
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
  "Mancera Amorre Caffe": "/perfumes/mancera-amorre-caffe.png",
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
};

const filters: Array<Gender | "Tümü"> = ["Tümü", "Kadın", "Erkek", "Unisex"];

function genderClasses(gender: Gender) {
  if (gender === "Kadın") {
    return "border-rose-300/40 bg-rose-300/12 text-rose-100";
  }

  if (gender === "Erkek") {
    return "border-sky-300/40 bg-sky-300/12 text-sky-100";
  }

  return "border-emerald-300/40 bg-emerald-300/12 text-emerald-100";
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Gender | "Tümü">("Tümü");

  const filteredPerfumes = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("tr-TR");

    return perfumes.filter((perfume) => {
      const searchableText =
        `${perfume.name} ${perfume.gender} ${perfume.notes}`.toLocaleLowerCase(
          "tr-TR"
        );

      const matchesSearch = query ? searchableText.includes(query) : true;
      const matchesFilter = filter === "Tümü" ? true : perfume.gender === filter;

      return matchesSearch && matchesFilter;
    });
  }, [filter, search]);

  const totals = {
    all: perfumes.length,
    women: perfumes.filter((perfume) => perfume.gender === "Kadın").length,
    men: perfumes.filter((perfume) => perfume.gender === "Erkek").length,
    unisex: perfumes.filter((perfume) => perfume.gender === "Unisex").length,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#101615] text-stone-50">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(201,72,55,0.22),transparent_30%),radial-gradient(circle_at_18%_15%,rgba(244,231,190,0.14),transparent_26%),linear-gradient(120deg,rgba(35,48,47,0.92),rgba(16,22,21,0.98))]" />
        <div className="relative mx-auto grid min-h-[48vh] max-w-7xl items-center gap-8 px-5 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#f3dfb8]">
              Ember Perfumery
            </p>
            <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              Özenle seçilmiş parfümleri keşfedin.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300 md:text-base">
              Kadın, erkek ve unisex kokular arasından beğendiğiniz ürün için
              WhatsApp üzerinden hızlıca bilgi alabilirsiniz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="rounded-full bg-[#e2543f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#f06b55]"
              >
                Kataloğu İncele
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Merhaba, parfüm seçenekleri hakkında bilgi almak istiyorum."
                )}`}
                target="_blank"
                className="rounded-full border border-[#f3dfb8]/35 px-6 py-3 text-sm font-bold text-white transition hover:border-[#f3dfb8] hover:text-[#f3dfb8]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
            <div className="absolute h-[72%] w-[72%] rounded-full bg-[#e2543f]/18 blur-3xl" />
            <img
              src="/ember-logo.png"
              alt="Ember Perfumery logosu"
              className="relative z-10 w-full max-w-[360px] drop-shadow-[0_22px_48px_rgba(0,0,0,0.38)] md:max-w-[420px]"
            />
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Parfüm Kataloğu</h2>
            <p className="mt-2 text-sm text-stone-400">
              {totals.all} ürün: {totals.women} kadın, {totals.men} erkek,{" "}
              {totals.unisex} unisex.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              placeholder="Parfüm adı ara"
              className="h-12 w-full rounded-lg border border-white/12 bg-white/6 px-4 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-[#e2543f] sm:w-72"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <select
              className="h-12 rounded-lg border border-white/12 bg-white/6 px-4 text-sm text-white outline-none transition focus:border-[#e2543f]"
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value as Gender | "Tümü")
              }
            >
              {filters.map((item) => (
                <option key={item} className="bg-stone-950">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {filteredPerfumes.map((perfume) => {
            const message = encodeURIComponent(
              `Merhaba, ${perfume.name} hakkında bilgi almak istiyorum.`
            );

            return (
              <article
                key={perfume.name}
                className={`flex min-h-[470px] flex-col rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/12 transition ${
                  perfume.isOutOfStock ? "opacity-60" : "hover:border-[#e2543f]/70"
                }`}
              >
                <div className="relative mb-5 flex h-48 items-center justify-center rounded-lg border border-white/10 bg-[#f3dfb8]/8 p-4">
                  <img
                    src={perfumeImages[perfume.name]}
                    alt={`${perfume.name} parfüm şişesi`}
                    className="max-h-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"
                  />
                  {perfume.isOutOfStock && (
                    <span className="absolute rounded bg-red-600 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      Tükendi
                    </span>
                  )}
                </div>

                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f3dfb8]">
                      Seçili koku
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-white">
                      {perfume.name}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${genderClasses(
                      perfume.gender
                    )}`}
                  >
                    {perfume.gender}
                  </span>
                </div>

                <p className="text-sm leading-6 text-stone-300">
                  Stok, fiyat ve ürün detayı için WhatsApp üzerinden hızlıca
                  bilgi alabilirsiniz.
                </p>

                <div className="mt-4 rounded-lg border border-white/10 bg-black/15 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f3dfb8]">
                    Notalar
                  </p>
                  <p className="mt-2 text-sm text-stone-300">
                    {perfume.notes}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <p className={`text-2xl font-bold ${perfume.isOutOfStock ? "text-stone-500 line-through" : "text-[#f3dfb8]"}`}>
                    {perfume.price ?? "50 ML 600 TL"}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={perfume.fragrantica}
                      target="_blank"
                      className="rounded-lg border border-white/12 px-4 py-3 text-center text-sm font-bold text-white transition hover:border-[#f3dfb8] hover:text-[#f3dfb8]"
                    >
                      İncele
                    </a>
                    {perfume.isOutOfStock ? (
                      <button
                        disabled
                        className="cursor-not-allowed rounded-lg bg-stone-700 px-4 py-3 text-center text-sm font-bold text-stone-400"
                      >
                        Tükendi
                      </button>
                    ) : (
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        className="rounded-lg bg-emerald-400 px-4 py-3 text-center text-sm font-bold text-emerald-950 transition hover:bg-emerald-300"
                      >
                        Bilgi Al
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPerfumes.length === 0 ? (
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] p-6 text-center text-stone-300">
            Bu aramayla eşleşen parfüm bulunamadı.
          </div>
        ) : null}
      </section>
    </main>
  );
}