"use client";

import { useState, useEffect, useCallback } from "react";

export interface TravelEntry {
  location: string;
  date: string;
  description: string;
  image: string | null;
  slug: string;
}

function PhotoModal({
  entry,
  onClose,
}: {
  entry: TravelEntry;
  onClose: () => void;
}) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    fetch(`/api/travel-photos/${entry.slug}`)
      .then((r) => r.json())
      .then((d) => { setPhotos(d.photos ?? []); setLoading(false); });
  }, [entry.slug]);

  const openPhoto = (src: string, idx: number) => {
    setSelected(src);
    setSelectedIdx(idx);
  };

  const prev = useCallback(() => {
    const idx = (selectedIdx - 1 + photos.length) % photos.length;
    setSelected(photos[idx]);
    setSelectedIdx(idx);
  }, [selectedIdx, photos]);

  const next = useCallback(() => {
    const idx = (selectedIdx + 1) % photos.length;
    setSelected(photos[idx]);
    setSelectedIdx(idx);
  }, [selectedIdx, photos]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (selected) setSelected(null); else onClose(); }
      if (e.key === "ArrowLeft" && selected) prev();
      if (e.key === "ArrowRight" && selected) next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, selected, prev, next]);

  return (
    <div className="fixed inset-0 z-50 bg-night/95 backdrop-blur-sm flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex-none flex items-center gap-4 px-6 py-5 border-b border-white/[0.06]">
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
        >
          ← Back
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-white font-bold text-lg leading-tight">{entry.location}</h2>
          <p className="text-slate-500 text-sm">{entry.date}</p>
        </div>
        {photos.length > 0 && (
          <span className="text-slate-600 text-xs">{photos.length} photo{photos.length !== 1 ? "s" : ""}</span>
        )}
      </div>

      {/* Photo grid */}
      <div className="flex-1 overflow-y-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <div className="w-6 h-6 border-2 border-aurora-green/30 border-t-aurora-green rounded-full animate-spin" />
          </div>
        ) : photos.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-3 border-2 border-dashed border-white/[0.08] rounded-xl">
            <p className="text-slate-500 text-sm">No photos yet</p>
            <code className="text-aurora-green text-xs bg-night px-3 py-1.5 rounded-lg border border-white/[0.06]">
              /public/travel/{entry.slug}/
            </code>
            <p className="text-slate-600 text-xs">Drop any .jpg / .png / .webp files in that folder</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {photos.map((src, idx) => (
              <button
                key={src}
                onClick={() => openPhoto(src, idx)}
                className="aspect-square rounded-lg overflow-hidden border border-white/[0.06] hover:border-aurora-green/40 transition-all duration-200 hover:scale-[1.02] group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-screen lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected}
            alt=""
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-night-card/80 border border-white/[0.1] text-white hover:border-aurora-green/40 transition-colors flex items-center justify-center text-lg"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-night-card/80 border border-white/[0.1] text-white hover:border-aurora-green/40 transition-colors flex items-center justify-center text-lg"
              >
                ›
              </button>
              <span className="absolute bottom-4 text-slate-500 text-xs">
                {selectedIdx + 1} / {photos.length}
              </span>
            </>
          )}

          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-night-card/80 border border-white/[0.1] text-slate-400 hover:text-white transition-colors flex items-center justify-center text-sm"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default function TravelGrid({ trips }: { trips: TravelEntry[] }) {
  const [active, setActive] = useState<TravelEntry | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {trips.map((trip) => (
          <button
            key={trip.location}
            onClick={() => setActive(trip)}
            className="text-left border border-white/[0.08] rounded-xl overflow-hidden bg-night-card/70 backdrop-blur-sm hover:border-aurora-green/25 transition-colors group cursor-pointer"
          >
            <div className="h-44 bg-night/60 relative flex items-end p-4 border-b border-white/[0.06]">
              {trip.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={trip.image}
                  alt={trip.location}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 to-transparent" />
              {/* hover hint */}
              <span className="absolute top-3 right-3 text-xs bg-night-card/90 text-aurora-green px-2 py-1 rounded-md border border-aurora-green/20 opacity-0 group-hover:opacity-100 transition-opacity">
                View photos
              </span>
              <div className="relative z-10">
                <p className="text-white font-bold text-base">{trip.location}</p>
                <p className="text-slate-500 text-sm">{trip.date}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-slate-400 text-sm leading-relaxed">{trip.description}</p>
            </div>
          </button>
        ))}

        <div className="border-2 border-dashed border-white/[0.08] rounded-xl flex flex-col items-center justify-center h-52 gap-2">
          <div className="w-8 h-8 rounded-full bg-aurora-green/10 border border-aurora-green/30 flex items-center justify-center text-aurora-green text-lg font-bold select-none">
            +
          </div>
          <p className="text-slate-600 text-sm">More coming soon</p>
        </div>
      </div>

      {active && <PhotoModal entry={active} onClose={() => setActive(null)} />}
    </>
  );
}
