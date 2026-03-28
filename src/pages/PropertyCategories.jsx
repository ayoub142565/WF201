import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCategories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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

  const getProcessedProperties = () => {
    let result = properties.filter(item => 
      item.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.municipality?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "size") {
      result.sort((a, b) => b.size - a.size);
    }

    return result;
  };

  const filteredProperties = getProcessedProperties();

  if (loading) return <div className="p-10 text-center dark:text-white">Loading properties...</div>;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">domain</span></Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/post">Sell</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/cities">Projects</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                <div className="text-slate-500 bg-slate-100 dark:bg-slate-800 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input 
                  className="w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-500 pl-2 text-sm font-normal" 
                  placeholder="Search locations..." 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </label>
            <Link to="/dashboard" className="flex items-center justify-center p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </Link>
            <Link to="/profile">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://ui-avatars.com/api/?name=User")' }} />
            </Link>
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] px-6 py-8 md:py-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-lg">explore</span>
                        <span>Browse our collection</span>
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Madrid Properties</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Discover your next investment or dream home.</p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-500">Sort by:</span>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-primary outline-none"
                    >
                        <option value="default">Newest</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="size">Largest Size</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <Link key={property.propertyCode || index} to={`/properties/${property.propertyCode}`} className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                  <div className="relative h-60 w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                      style={{ backgroundImage: `url("${property.thumbnail}")` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="material-symbols-outlined text-3xl mb-1">
                        {property.propertyType === 'flat' ? 'apartment' : 'home'}
                      </span>
                      <h3 className="text-xl font-bold truncate max-w-[200px]">{property.address}</h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {property.price?.toLocaleString()} €
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                      Beautiful property in {property.municipality} with {property.rooms} rooms and {property.bathrooms} bathrooms.
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-primary font-semibold text-sm">{property.size} m² area</span>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              <Link to="/post" className="group cursor-pointer flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl h-full min-h-[360px] hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center gap-4 text-slate-400 group-hover:text-primary">
                  <span className="material-symbols-outlined text-5xl">add_circle</span>
                  <p className="font-bold text-lg">Suggest Category</p>
                  <p className="text-sm text-center px-10">Don't see what you're looking for?</p>
                </div>
              </Link>
            </div>

            <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="flex flex-col gap-4 z-10">
                <h2 className="text-white text-3xl font-bold">Need personalized assistance?</h2>
                <p className="text-white/80 text-lg max-w-md">Our real estate experts are here to help you find exactly what you need.</p>
              </div>
              <div className="flex gap-4 z-10 w-full md:w-auto">
                <Link to="/contact" className="flex-1 md:flex-none bg-white text-primary text-center font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-50 transition-colors">Contact Agent</Link>
                <Link to="/cities" className="flex-1 md:flex-none border border-white/40 text-white text-center font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Learn More</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}