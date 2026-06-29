import Nav from "@/components/Nav";
import Globe from "@/components/Globe";
import TravelGrid, { type TravelEntry } from "@/components/TravelGrid";

const trips: TravelEntry[] = [
  {
    location: "Alaska",
    date: "Mar 2025",
    description: "Aurora hunting",
    image: "/travel/alaska/cover.jpg",
    slug: "alaska",
  },
  {
    location: "Utah",
    date: "Mar 2024 & Jan 2025",
    description: "Revisited because I loved Utah",
    image: "/travel/utah/cover.jpg",
    slug: "utah",
  },
  {
    location: "Arizona",
    date: "April 2026",
    description: "Sedona retreat",
    image: "/travel/arizona/cover.jpg",
    slug: "arizona",
  },
  {
    location: "Wyoming",
    date: "Sep 2025",
    description: "Bear, mountains, and the milkyway",
    image: "/travel/wyoming/cover.jpg",
    slug: "wyoming",
  },
  {
    location: "Oregon",
    date: "Dec 2024",
    description: "Underrated coastline",
    image: "/travel/oregon/cover.jpg",
    slug: "oregon",
  },
  {
    location: "California",
    date: "2024 – 2025",
    description: "Meh",
    image: "/travel/california/cover.jpg",
    slug: "california",
  },
  {
    location: "Massachusetts",
    date: "2021-2024",
    description: "Boston is my favorite city",
    image: "/travel/massachusetts/cover.jpg",
    slug: "massachusetts",
  },
  {
    location: "Maine",
    date: "Jun 2024",
    description: "Best NP in New England",
    image: "/travel/maine/cover.jpg",
    slug: "maine",
  },
];

export default function TravelPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header + globe */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">
                Travel
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
                Places I&apos;ve been
              </h1>
              <p className="text-slate-400 text-lg max-w-md">
                A data scientist who collects time zones. Drag the globe to spin
                it — each glowing dot is somewhere I&apos;ve lived, worked, or wandered.
              </p>
            </div>
            <Globe />
          </div>

          {/* Trip cards */}
          <TravelGrid trips={trips} />
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600 border-t border-white/[0.05]">
        © {new Date().getFullYear()} Mark Li
      </footer>
    </>
  );
}
