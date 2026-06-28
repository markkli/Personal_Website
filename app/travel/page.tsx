import Nav from "@/components/Nav";
import Globe from "@/components/Globe";

interface TravelEntry {
  location: string;
  date: string;
  description: string;
  image: string | null;
}

const trips: TravelEntry[] = [
  {
    location: "São Paulo, Brazil",
    date: "Summer 2018",
    description: "Interned at Santander Brasil — my first time in South America.",
    image: null,
  },
  {
    location: "Beijing, China",
    date: "2022 – 2024",
    description: "Multiple internships and research stints across a few summers.",
    image: null,
  },
  {
    location: "San Francisco & Berkeley",
    date: "2024 – 2025",
    description: "Master's at UC Berkeley. Best burritos I've had.",
    image: null,
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
                it — each glowing dot is somewhere I&apos;ve lived or worked.
              </p>
            </div>
            <Globe />
          </div>

          {/* Trip cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trips.map((trip) => (
              <div
                key={trip.location}
                className="border border-white/[0.08] rounded-xl overflow-hidden bg-night-card/70 backdrop-blur-sm hover:border-aurora-green/25 transition-colors"
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
                  {/* gradient keeps the label readable over a photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night/90 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-white font-bold text-base">{trip.location}</p>
                    <p className="text-slate-500 text-sm">{trip.date}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{trip.description}</p>
                </div>
              </div>
            ))}

            <div className="border-2 border-dashed border-white/[0.08] rounded-xl flex flex-col items-center justify-center h-52 gap-2">
              <div className="w-8 h-8 rounded-full bg-aurora-green/10 border border-aurora-green/30 flex items-center justify-center text-aurora-green text-lg font-bold select-none">
                +
              </div>
              <p className="text-slate-600 text-sm">More coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600 border-t border-white/[0.05]">
        © {new Date().getFullYear()} Mark Li
      </footer>
    </>
  );
}
