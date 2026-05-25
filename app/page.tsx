"use client";

import { useMemo, useState } from "react";

type Gender = "Kadın" | "Erkek" | "Unisex";

type Perfume = {
  name: string;
  gender: Gender;
  fragrantica: string;
};

const whatsappNumber = "905382982055";

const perfumes: Perfume[] = [
  {
    name: "Hugo Boss Scent Elixir for Her",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Hugo-Boss/Boss-The-Scent-Elixir-For-Her-88880.html",
  },
  {
    name: "By Kilian Black Phantom",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Black-Phantom-43632.html",
  },
  {
    name: "Armani Si",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Giorgio-Armani/Si-18453.html",
  },
  {
    name: "Xerjoff Kind of Blue",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Xerjoff/Kind-of-Blue-16444.html",
  },
  {
    name: "YSL Libre Intense",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Libre-Intense-62318.html",
  },
  {
    name: "VS Bare",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Victoria-s-Secret/Bare-75277.html",
  },
  {
    name: "MFK Gentle Fluidity Gold",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Gentle-Fluidity-Gold-53401.html",
  },
  {
    name: "Paco Rabanne Olympea",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Rabanne/Olympea-31666.html",
  },
  {
    name: "Kenzo Homme EDP",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Kenzo/Kenzo-Homme-Eau-de-Parfum-35396.html",
  },
  {
    name: "Penhaligon's Violetta",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Violetta-4035.html",
  },
  {
    name: "Mancera Amorre Caffe",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Mancera/Amore-Caffe-87409.html",
  },
  {
    name: "Gucci Intense Oud",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Gucci/Intense-Oud-32743.html",
  },
  {
    name: "Profumum Roma Acqua e Zucchero",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Profumum-Roma/Acqua-e-Zucchero-3887.html",
  },
  {
    name: "Tom Ford Black Orchid",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Black-Orchid-1018.html",
  },
  {
    name: "Burberry Burberry Woman",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Burberry/Burberry-Women-818.html",
  },
  {
    name: "Penhaligon's Endymion",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Endymion-5674.html",
  },
  {
    name: "Creed Green Irish Tweed",
    gender: "Erkek",
    fragrantica:
      "https://www.fragrantica.com/perfume/Creed/Green-Irish-Tweed-474.html",
  },
  {
    name: "Penhaligon's Tralala",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Penhaligon-s/Tralala-23081.html",
  },
  {
    name: "Acqua di Parma Fico di Amalfi",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Acqua-di-Parma/Acqua-di-Parma-Blu-Mediterraneo-Fico-di-Amalfi-1687.html",
  },
  {
    name: "Tom Ford Mandarino di Amalfi",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Mandarino-di-Amalfi-25481.html",
  },
  {
    name: "By Kilian Love Don't be Shy Extreme",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Love-Don-t-Be-Shy-Extreme-64761.html",
  },
  {
    name: "Diptyque Olene",
    gender: "Kadın",
    fragrantica:
      "https://www.fragrantica.com/perfume/Diptyque/Olene-Eau-de-Toilette-3960.html",
  },
  {
    name: "By Kilian Vodka on the Rocks",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Vodka-on-the-Rocks-23899.html",
  },
  {
    name: "Tom Ford Cherry Smoke",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/Tom-Ford/Cherry-Smoke-78578.html",
  },
  {
    name: "By Kilian Blue Moon Ginger Dash",
    gender: "Unisex",
    fragrantica:
      "https://www.fragrantica.com/perfume/By-Kilian/Blue-Moon-Ginger-Dash-79731.html",
  },
];

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
      const searchableText = `${perfume.name} ${perfume.gender}`.toLocaleLowerCase(
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
                className="flex min-h-[300px] flex-col rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/12 transition hover:border-[#e2543f]/70"
              >
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

                <div className="mt-auto pt-7">
                  <p className="text-2xl font-bold text-[#f3dfb8]">
                    50 ML 600 TL
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={perfume.fragrantica}
                      target="_blank"
                      className="rounded-lg border border-white/12 px-4 py-3 text-center text-sm font-bold text-white transition hover:border-[#f3dfb8] hover:text-[#f3dfb8]"
                    >
                      Fragrantica
                    </a>
                    <a
                      href={`https://wa.me/${905382982055}?text=${message}`}
                      target="_blank"
                      className="rounded-lg bg-emerald-400 px-4 py-3 text-center text-sm font-bold text-emerald-950 transition hover:bg-emerald-300"
                    >
                      Bilgi Al
                    </a>
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
