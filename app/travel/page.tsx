import Nav from "@/components/Nav";

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
      <main className="min-h-screen pt-28 pb-20 bg-night">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">Travel</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Places I&apos;ve been</h1>
            <p className="text-slate-400 text-lg max-w-md">Collecting memories across time zones. More stories coming.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trips.map((trip) => (
              <div
                key={trip.location}
                className="border border-white/[0.07] rounded-xl overflow-hidden bg-night-card hover:border-aurora-green/25 transition-colors"
              >
                <div className="h-44 bg-night relative flex items-end p-4 border-b border-white/[0.06]">
                  {/*
                    To add a photo, replace this div's contents with:
                    <img src={trip.image} alt={trip.location}
                      className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  */}
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

            <div className="border-2 border-dashed border-white/[0.07] rounded-xl flex flex-col items-center justify-center h-52 gap-2">
              <div className="w-8 h-8 rounded-full bg-aurora-green/10 border border-aurora-green/30 flex items-center justify-center text-aurora-green text-lg font-bold select-none">+</div>
              <p className="text-slate-600 text-sm">More coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600 bg-night border-t border-white/[0.05]">
        © {new Date().getFullYear()} Mark Li
      </footer>
    </>
  );
}
