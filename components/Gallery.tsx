"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryItems } from "@/lib/data";
import { track } from "@/lib/analytics";
import Reveal from "./ui/Reveal";

type Category = (typeof galleryCategories)[number]["id"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === activeCategory),
    [activeCategory],
  );

  const isOpen = openIndex !== null;
  const current = openIndex !== null ? filtered[openIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => ((i ?? 0) + 1) % filtered.length);
      if (e.key === "ArrowLeft")
        setOpenIndex(
          (i) => ((i ?? 0) - 1 + filtered.length) % filtered.length,
        );
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, filtered.length]);

  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory]);

  function open(i: number) {
    setOpenIndex(i);
    track({
      action: "gallery_view",
      category: "engagement",
      label: filtered[i].category,
    });
  }

  const hasAnyPhotos = galleryItems.length > 0;

  return (
    <section id="gallery" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Real People, Real Journeys
          </h2>
          <p className="mt-4 text-slate-600">
            A look at the workers we&apos;ve deployed, the tourists we&apos;ve
            hosted, and the team behind every placement.
          </p>
        </Reveal>

        {/* Filter pills */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-1.5">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-slate-500 hover:bg-slate-200/60 hover:text-brand"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </Reveal>

        {hasAnyPhotos ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => open(i)}
                aria-label={`View photo: ${item.alt}`}
                className={`group relative overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200 transition-all duration-300 hover:ring-brand/40 ${
                  item.featured
                    ? "col-span-2 row-span-2 aspect-square sm:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="m-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1.5 text-[11px] font-semibold text-brand shadow-sm">
                    <Camera size={12} />
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-md rounded-lg border-2 border-dashed border-slate-300 bg-white p-12 text-center">
              <Camera size={32} className="mx-auto text-slate-400" />
              <p className="mt-4 text-sm font-semibold text-slate-700">
                Photos coming soon
              </p>
              <p className="mt-1 text-xs text-slate-500">
                We&apos;re curating images from our recent placements and tours.
              </p>
            </div>
          </Reveal>
        )}

        {hasAnyPhotos && filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-slate-500">
            No photos in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-slate-900/90 p-4 backdrop-blur-md"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(
                (i) => ((i ?? 0) - 1 + filtered.length) % filtered.length,
              );
            }}
            aria-label="Previous photo"
            className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) + 1) % filtered.length);
            }}
            aria-label="Next photo"
            className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] max-h-[78vh] w-full overflow-hidden rounded-lg bg-slate-800">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 900px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-sm font-medium">{current.alt}</p>
              <p className="mt-1 text-xs text-white/50">
                {(openIndex ?? 0) + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}