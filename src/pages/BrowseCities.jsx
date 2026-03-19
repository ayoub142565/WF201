import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BrowseCities() {
  const cities = [
  { id: 1, name: "Paris", slug: "paris", listings: "1,240", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { id: 2, name: "Lyon", slug: "lyon", listings: "850", img: "https://images.unsplash.com/photo-1528690906232-df37340d04c5" },
  { id: 3, name: "Marseille", slug: "marseille", listings: "620", img: "https://images.unsplash.com/photo-1563811771046-ba984ff30900" },
  { id: 4, name: "Bordeaux", slug: "bordeaux", listings: "490", img: "https://images.unsplash.com/photo-1563811771046-ba984ff30900" }, 
];
const [serch,Setserch]=useState("");
const serchRuselta=cities.filter((city)=>
  city.name.toLowerCase().includes(serch.toLowerCase())
)
const [isOpen, setIsOpen] = useState(false); 
const [sortType, setSortType] = useState("Popular");
const sortedCities = [...serchRuselta].sort((a, b) => {
  if (sortType === "Name") return a.name.localeCompare(b.name);
  if (sortType === "Listings") {
    const getCount = (s) => parseInt(s.replace(',', ''));
    return getCount(b.listings) - getCount(a.listings);
  }
  return 0; 
});
  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">domain</span>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">EstateFinder</h2>
              </Link> 
              <nav className="hidden md:flex items-center gap-6">
                <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" to="/SearchResults">Buy</Link>
                <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" to="/SearchResults">Rent</Link>
                <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" to="/PostManagement">Sell</Link>
                <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" to="/Profile">Profile</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-lg">search</span>
                </span>
                <input onChange={(e)=>Setserch(e.target.value)} className="w-64 rounded-lg border-none bg-slate-100 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white" placeholder="Search cities or areas..." type="text" />
              </div>
              <Link to="/Login" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link className="hover:text-primary" to="/">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">Cities</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Explore France's <span className="text-primary">Best Cities</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover high-end apartments, historic townhouses, and modern villas across the most vibrant urban centers in France.
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(!isOpen)}  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Sort:{sortType}
              </button>
              {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-slate-700">
              <div className="py-1">
                {["Popular", "Name", "Listings"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortType(option);
                      setIsOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {option}
            </button>
        ))}
      </div>
    </div>
  )}
            </div>
          </div>
        </div>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {sortedCities.map((city) => (
    <Link 
      key={city.id} 
      className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" 
      to={`/SearchResults?city=${city.slug}`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
          style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('${city.img}')` 
          }}
        ></div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{city.name}</h3>
        <div className="mt-1 flex items-center gap-1.5 opacity-90">
          <span className="material-symbols-outlined text-sm">apartment</span>
          <span className="text-sm font-medium">{city.listings} Listings</span>
        </div>
      </div>
      {city.name === "Paris" && (
        <div className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
          Trending
        </div>
      )}
    </Link>
  ))}
</div>
        <div className="mt-20 rounded-2xl bg-primary/5 p-8 dark:bg-primary/10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Looking for somewhere else?</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">We have listings in over 200 cities across France.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/SearchResults" className="rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90">View All Cities</Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-2xl font-bold">domain</span>
                <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">EstateFinder</h2>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Properties</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-primary" to="/SearchResults">Buy Houses</Link></li>
                <li><Link className="hover:text-primary" to="/SearchResults">Rent Apartments</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
