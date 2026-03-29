export default function DetailsSection({property}) {
  return <div className="lg:col-span-2 space-y-8">
                {/* Title and Basic Info */}
                <div>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-2">{property.propertyType}</h1>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <p className="text-base">{property.municipality}, {property.address}</p>
                    </div>
                    </div>
                    <div className="bg-primary/10 text-primary px-6 py-4 rounded-xl">
                    <p className="text-sm font-bold uppercase tracking-wider mb-1">Price</p>
                    <p className="text-3xl font-black">${(property.price)?.toLocaleString('en-US')}</p>
                    </div>
                </div>
                {/* Key Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                        <span className="material-symbols-outlined">bed</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Bedrooms</p>
                        <p className="text-lg font-bold">{property.rooms}</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                        <span className="material-symbols-outlined">bathtub</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Bathrooms</p>
                        <p className="text-lg font-bold">{property.bathrooms}</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                        <span className="material-symbols-outlined">square_foot</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Living Area</p>
                        <p className="text-lg font-bold">{property.size} m²</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                        <span className="material-symbols-outlined">garage</span>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Parking</p>
                        <p className="text-lg font-bold">1 Car</p>
                    </div>
                    </div>
                </div>
                </div>
                {/* Description */}
                <section>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">About this property</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {property.description}
                </p>
                </section>
                {/* Features/Amenities */}
                <section>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Features &amp; Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">wifi</span>
                    <span className="text-slate-700 dark:text-slate-300">High-speed WiFi</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">pool</span>
                    <span className="text-slate-700 dark:text-slate-300">Infinity Pool</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">ac_unit</span>
                    <span className="text-slate-700 dark:text-slate-300">Central Cooling</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">security</span>
                    <span className="text-slate-700 dark:text-slate-300">24/7 Security</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">kitchen</span>
                    <span className="text-slate-700 dark:text-slate-300">Gourmet Kitchen</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">fitness_center</span>
                    <span className="text-slate-700 dark:text-slate-300">Home Gym</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">directions_boat</span>
                    <span className="text-slate-700 dark:text-slate-300">Private Dock</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">solar_power</span>
                    <span className="text-slate-700 dark:text-slate-300">Solar Panels</span>
                    </div>
                </div>
                </section>
                
            </div>
}
