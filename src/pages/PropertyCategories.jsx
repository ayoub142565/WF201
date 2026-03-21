import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCategories() {
  const categories = [
  {
    id: 1,
    title: "Apartments",
    icon: "apartment",
    listings: "1,240",
    price: "$150k",
    desc: "Modern luxury apartments in Casablanca Finance City and Marina.",
    img: "https://images.unsplash.com/photo-1570535749216-512c3b86561e?q=80&w=1000", 
    slug: "apartments"
  },
  {
    id: 2,
    title: "Houses & Riads",
    icon: "home",
    listings: "850",
    price: "$250k",
    desc: "Traditional Moroccan Riads and family homes in the heart of the Medina.",
    img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1000", 
    slug: "houses"
  },
  {
    id: 3,
    title: "Villas",
    icon: "holiday_village",
    listings: "430",
    price: "$800k",
    desc: "Exclusive villas with gardens in Palmeraie or beachfront in Tangier.",
    img: "https://images.unsplash.com/photo-1541423408854-5df732b6f6d1?q=80&w=1000", 
    slug: "villas"
  },
  {
    id: 4,
    title: "Commercial",
    icon: "business_center",
    listings: "210",
    price: "High yield",
    desc: "Strategic office spaces and retail shops in Morocco's business hubs.",
    img: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1000", 
    slug: "commercial"
  },
  {
    id: 5,
    title: "Land",
    icon: "landscape",
    listings: "150",
    price: "Investment ready",
    desc: "Prime investment land for agriculture or tourism development.",
    img: "https://images.unsplash.com/photo-1536224701267-3474966606a5?q=80&w=1000", 
    slug: "land"
  }
];
const [serch,setSerch]=useState("");
const SerchCategories=categories.filter((categorie)=>
categorie.slug.toLowerCase().includes(serch.toLowerCase())
)
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 md:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">domain</span>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">EstateFinder</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/SearchResults">Buy</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/SearchResults">Rent</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/PostManagement">Sell</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/MyAds">My Ads</Link>
            </nav>
          </div>
          
          <div className="flex flex-1 justify-end gap-4 items-center">
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64">
              <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm w-full dark:text-white" 
                placeholder="Search categories..." 
                type="text" 
                onChange={(e)=>setSerch(e.target.value)}
              />
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
            </button>
            <Link to="/UserProfile" className="h-10 w-10 rounded-full ring-2 ring-primary/20 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User" />
            </Link>
          </div>
        </header>
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase mb-3">
                <span className="material-symbols-outlined text-lg">explore</span>
                <span>Browse our collection</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Property Categories</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                Discover your next investment or dream home from over 12,000 listings curated across the most sought-after property types.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SerchCategories.map((cat) => (
                <Link 
                  key={cat.id}
                  to={`/SearchResults?category=${cat.slug}`}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url('${cat.img}')` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <span className="material-symbols-outlined text-3xl mb-1">{cat.icon}</span>
                      <h3 className="text-2xl font-bold">{cat.title}</h3>
                    </div>
                    <div className="absolute top-5 right-5 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
                      {cat.listings} LISTINGS
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{cat.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                      <span className="text-primary font-bold text-sm">Starting from {cat.price}</span>
                      <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/40 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center group hover:border-primary/50 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-5xl text-slate-400 group-hover:text-primary mb-4">add_circle</span>
                <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">Suggest Category</h3>
                <p className="text-sm text-slate-500 mt-2">Don't see what you're looking for? Let us know!</p>
              </div>
            </div>
            <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden text-white shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Need personalized assistance?</h2>
                  <p className="text-primary-foreground/80 text-lg">Our real estate experts are here to help you find exactly what you need based on your specific requirements.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <Link to="/contact" className="flex-1 md:flex-none bg-white text-primary text-center font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg">Contact Agent</Link>
                  <button className="flex-1 md:flex-none border border-white/30 font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-primary opacity-80">
              <span className="material-symbols-outlined text-2xl font-bold">domain</span>
              <h2 className="text-slate-900 dark:text-white text-base font-bold">EstateFinder</h2>
            </div>
            <div className="flex gap-8 text-slate-500 text-sm">
              <Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
              <Link className="hover:text-primary transition-colors" to="/terms">Terms</Link>
              <Link className="hover:text-primary transition-colors" to="/contact">Support</Link>
            </div>
            <p className="text-slate-400 text-sm">© 2024 EstateFinder. High-end Real Estate.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}