import Nav from "@/components/Nav";

/*
  Travel page — add your photos and stories here.

  Each TravelEntry has:
    - location: city/country name
    - date: when you visited
    - description: a short note
    - image: path to /public/travel/<filename>.jpg  (null = shows placeholder)

  To add a photo: drop the image into /public/travel/ and set the image field.
*/

interface TravelEntry {
  location: string;
  date: string;
  description: string;
  image: string | null;
  gradient: string;
}

const trips: TravelEntry[] = [
  // Add your trips here — example entries below:
  {
    location: "São Paulo, Brazil",
    date: "Summer 2018",
    description: "Interned at Santander Brasil — my first time in South America.",
    image: null, // → /public/travel/sao-paulo.jpg
    gradient: "from-green-400 to-emerald-600",
  },
  {
    location: "Beijing, China",
    date: "2022 – 2024",
    description: "Multiple internships and research stints in the city.",
    image: null, // → /public/travel/beijing.jpg
    gradient: "from-red-400 to-orange-500",
  },
  {
    location: "San Francisco / Berkeley",
    date: "2024 – 2025",
    description: "Master's at UC Berkeley. Best burritos I've ever had.",
    image: null, // → /public/travel/sf.jpg
    gradient: "from-cyan-400 to-blue-500",
  },
  // Add more trips below...
];

export default function TravelPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-20 aurora-bg">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-14">
            <p className="text-slate-500 font-medium text-base mb-2">places I&apos;ve been</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold aurora-text mb-3">Travel</h1>
            <p className="text-slate-500 text-lg max-w-lg">
              Collecting memories across time zones. This page is a work in progress — more stories coming.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div
                key={trip.location}
                className="group border border-slate-200 rounded-2xl bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
              >
                {/* Photo or gradient placeholder */}
                <div className={`h-48 bg-gradient-to-br ${trip.gradient} relative flex items-end p-4`}>
                  {/* Replace with <Image src={trip.image} fill className="object-cover" /> when you have photos */}
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <p className="text-white font-bold text-lg leading-tight drop-shadow">{trip.location}</p>
                    <p className="text-white/80 text-sm font-medium">{trip.date}</p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{trip.description}</p>
                </div>
              </div>
            ))}

            {/* "More coming" placeholder */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center h-60 text-center px-6 gap-2">
              <div className="w-10 h-10 rounded-full gradient-aurora flex items-center justify-center text-white text-xl font-bold select-none">+</div>
              <p className="text-slate-400 text-sm font-medium">More trips coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-400 bg-slate-50 border-t border-slate-100">
        © {new Date().getFullYear()} Mark Li
      </footer>
    </>
  );
}
