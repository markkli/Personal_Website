import Nav from "@/components/Nav";

/*
  Travel page — add your photos and stories here.

  To add a trip:
  1. Add an entry to the trips array below
  2. Drop your photo into /public/travel/<filename>.jpg
  3. Set the image field to "/travel/<filename>.jpg"
*/

interface TravelEntry {
  location: string;
  date: string;
  description: string;
  image: string | null; // e.g. "/travel/sao-paulo.jpg"
}

const trips: TravelEntry[] = [
  {
    location: "São Paulo, Brazil",
    date: "Summer 2018",
    description: "Interned at Santander Brasil — my first time in South America.",
    image: null, // → /public/travel/sao-paulo.jpg
  },
  {
    location: "Beijing, China",
    date: "2022 – 2024",
    description: "Multiple internships and research stints across a few summers.",
    image: null, // → /public/travel/beijing.jpg
  },
  {
    location: "San Francisco & Berkeley",
    date: "2024 – 2025",
    description: "Master's at UC Berkeley. Best burritos I've had.",
    image: null, // → /public/travel/sf.jpg
  },
];

export default function TravelPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Travel</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3">Places I&apos;ve been</h1>
            <p className="text-slate-500 text-lg max-w-md">
              Collecting memories across time zones. More stories coming.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trips.map((trip) => (
              <div
                key={trip.location}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-slate-400 hover:shadow-md transition-all duration-200"
              >
                {/* Photo or dark placeholder */}
                <div className="h-44 bg-slate-900 relative flex items-end p-4">
                  {/*
                    When you have a photo, replace this div's contents with:
                    <img src={trip.image} alt={trip.location} className="absolute inset-0 w-full h-full object-cover opacity-70" />
                  */}
                  <div className="relative z-10">
                    <p className="text-white font-bold text-base">{trip.location}</p>
                    <p className="text-slate-400 text-sm">{trip.date}</p>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed">{trip.description}</p>
                </div>
              </div>
            ))}

            <div className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center h-52 gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-lg font-bold select-none">+</div>
              <p className="text-slate-400 text-sm">More coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-100">
        © {new Date().getFullYear()} Mark Li
      </footer>
    </>
  );
}
