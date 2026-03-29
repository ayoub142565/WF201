import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BrowseCities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  const getCityStats = () => {
    const cityMap = {};
    
    properties.forEach(prop => {
      const city = prop.municipality || "Unknown";
      if (!cityMap[city]) {
        cityMap[city] = {
          name: city,
          count: 0,
          thumbnail: prop.thumbnail || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
        };
      }
      cityMap[city].count += 1;
    });

    let cityList = Object.values(cityMap);
    cityList = cityList.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortBy === "popular") {
      cityList.sort((a, b) => b.count - a.count); 
    } else if (sortBy === "alphabetical") {
      cityList.sort((a, b) => a.name.localeCompare(b.name)); 
    }

    return cityList;
  };

  const cities = getCityStats();

  if (loading) return <div className="p-10 text-center dark:text-white">Loading Cities...</div>;

  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">domain</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" to="/post">Sell</Link>
                <Link className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" to="/contact">Agents</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-lg">search</span>
                </span>
                <input 
                  className="w-64 rounded-lg border-none bg-slate-100 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white" 
                  placeholder="Search cities or areas..." 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Link to="/profile" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
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
                Explore Our <span className="text-primary">Best Cities</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover high-end apartments, historic townhouses, and modern villas across the most vibrant urban centers.
              </p>
            </div>
            <div className="flex gap-2">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 outline-none"
              >
                <option value="popular">Sort: Most Listings</option>
                <option value="alphabetical">Sort: A-Z</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <Link 
              key={index}
              to={`/properties?city=${city.name}`}
              className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('${city.thumbnail}')` 
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{city.name}</h3>
                <div className="mt-1 flex items-center gap-1.5 opacity-90">
                  <span className="material-symbols-outlined text-sm">apartment</span>
                  <span className="text-sm font-medium">{city.count} Listings</span>
                </div>
              </div>
              {city.count > 5 && (
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
              <p className="mt-2 text-slate-600 dark:text-slate-400">We have listings in over 200 cities and regions.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/properties" className="rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90">View All Listings</Link>
              <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-bold text-primary shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 dark:bg-slate-800 dark:ring-slate-700">Request a Location</Link>
            </div>
          </div>
        </div>
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
          <Link to="/search" className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:scale-105 dark:bg-primary">
            <span className="material-symbols-outlined">map</span>
            View on Map
          </Link>
        </div>
      </main>
    </div>
  );
}