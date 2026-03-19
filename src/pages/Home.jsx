import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';
import FadeUp from '../animations/FadeUp';

export default function Home() {
  const [index, setIndex] = useState(0);

  const allvideos = [
    "https://www.pexels.com/download/video/7577611.mp4",
    "https://www.pexels.com/download/video/4301618.mp4",
    "https://www.pexels.com/download/video/7578541.mp4",
    "https://www.pexels.com/download/video/6007428.mp4",
  ]


  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full flex items-center justify-center px-6">
          <div className="absolute inset-0 z-0 ">
            <div className="absolute inset-0 bg-dark-900/40 z-10" />
              <AnimatePresence mode="popLayout">
              <motion.video
                key={allvideos[index]} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                autoPlay
                muted
                playsInline
                onEnded={() => setIndex((prev) => (prev + 1) % allvideos.length)}
                className="absolute inset-0 h-full w-full object-cover z-10"
              >
                <source src={allvideos[index]} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
          </div>
          <div className="relative z-20 w-full max-w-4xl text-center flex flex-col items-center gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
                Find Your Dream Home
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Discover the best properties in your favorite cities.
              </p>
            </div>
            {/* Search Bar Component */}
            <div className="w-full bg-white dark:bg-slate-900 p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-400 mr-2">location_on</span>
                <input className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="City or ZIP" type="text" />
              </div>
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-400 mr-2">home</span>
                <select className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white appearance-none">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
              </div>
              <div className="flex-1 flex items-center px-4">
                <span className="material-symbols-outlined text-slate-400 mr-2">payments</span>
                <select className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white appearance-none">
                  <option>Price Range</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $600k</option>
                  <option>$600k+</option>
                </select>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">search</span>
                Search
              </button>
            </div>
          </div>
        </section>
        {/* Featured Listings */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Listings</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Handpicked properties just for you</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <AnimatePresence>
              <FadeUp key="card1">
                <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                  <div className="relative h-64 overflow-hidden">
                    <img alt="White contemporary house with large glass windows" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlqkeQeggXC-ZhQFZCxzCLJu_tZaKDP2GsAWPHkkHYBy8x0KqS5nkEZxGE_B02wTc-3MPjJCCqnJSbtZ_S6QioOZTD4QoYe6WYLEA2m_yuiKC4WVVLXylnUG49crY_cEsN7sN7ihJIgb9w6s9ugvtL3XjmtM6bJpBvcv8llXguMVEV3JDv91mqWTgqILjOzRZ4n4RGfrcMWs51gioszfr7COiZ6XVOy6sda1NTatfrVvtPI0omwBUUAm4pKyPZPA9V0MSGewA_GxI" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">For Sale</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$850,000</h3>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Beverly Hills, CA
                  </p>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> 3 Bed</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> 2 Bath</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> 2,100 sqft</span>
                  </div>
                </div>
              </div>
            </FadeUp>
            </AnimatePresence>
            {/* Card 2 */}
              <AnimatePresence>
            <FadeUp key="card2">
              <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                <div className="relative h-64 overflow-hidden">
                  <img alt="Luxury home with swimming pool and garden" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQaOUL31GLB3HkHINIEWR5b6km6eVbFDH0JWt3B3myTZNRo3V49Z9inypN92mDzhGLnw1OVCoHyUL-uyehPuLpQy4wI8KpFeRPOJH7bYVuT-7-C8c_Tdp1P8ktQ5MbXKg5bwVBOMqd3BfEYhONtieeEfxmELrSVKljpwn6T5TAYifr5PH86Mca3H6unE2UfVIeamgGF2p-vKenbkitKOTdWlfzRDDVUaAcVmr_hDS5DRa4vplc3pDoF6cU90g3zM_voVxRIuCoT5M" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">For Sale</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$1,200,000</h3>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Austin, TX
                  </p>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> 4 Bed</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> 3 Bath</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> 3,500 sqft</span>
                  </div>
                </div>
              </div>
            </FadeUp>
            </AnimatePresence>

            {/* Card 3 */}
              <AnimatePresence>
            <FadeUp key="card3">
              <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                <div className="relative h-64 overflow-hidden">
                  <img alt="Charming suburban house with front yard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjuD9f6iGaSXP2FwrBpdkx5gVnk43gPwe5uojIOY5gfs1uvXJ38G1gY81NUI5VwQucWzfokrDPYx2xlC7zgtMcg0-quRb33MCdwKoWUoIaNlpU71NziJlixdcll3LVH28UZzHelcojAz-w_vTDizFf5_nVLUC6AFqo_v5DjdZTACO0b2AtrKrx2fQkZQ9Ytd2qkbIUo7QNo9-kkI3hN6vUqcZXY9zE08DTfkHxkWkngrEC-OUCo-0MOGuMcf3f4e-6n8hHzEZxOE" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">New Listing</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$540,000</h3>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Orlando, FL
                  </p>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> 2 Bed</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> 2 Bath</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> 1,400 sqft</span>
                  </div>
                </div>
              </div>
            </FadeUp>
            </AnimatePresence>
          </div>
        </section>
        {/* How it Works / Publish Ad */}
        <section className="bg-primary/5 dark:bg-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Ready to sell your property?</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4">Publishing an ad on EstateHub is simple, fast, and reaches thousands of potential buyers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Create Account</h3>
                <p className="text-slate-600 dark:text-slate-400">Sign up in seconds and manage all your listings from a single dashboard.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Post Your Ad</h3>
                <p className="text-slate-600 dark:text-slate-400">Upload photos, details, and set your price. It only takes 5 minutes.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">handshake</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get Offers</h3>
                <p className="text-slate-600 dark:text-slate-400">Buyers will contact you directly through our secure messaging system.</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all">
                Publish an Ad Now
              </button>
            </div>
          </div>
        </section>
      </main>
      
      
    </div>
  );
}
