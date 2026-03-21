export default function PropertyListingsSidebar() {
    return <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold">Filters</h2>
                    <button className="text-primary text-xs font-bold uppercase tracking-wider">Reset</button>
                </div>
                <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">payments</span>
                        Price Range
                    </label>
                    <div className="space-y-3">
                        <input className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                        <div className="flex justify-between gap-2">
                        <input className="w-1/2 p-2 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent" placeholder="Min" type="text" />
                        <input className="w-1/2 p-2 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent" placeholder="Max" type="text" />
                        </div>
                    </div>
                    </div>
                    {/* Property Type */}
                    <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">home</span>
                        Property Type
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                        <span>Single Family</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                        <span>Condo/Apartment</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                        <span>Townhouse</span>
                        </label>
                    </div>
                    </div>
                    {/* Size */}
                    <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">square_foot</span>
                        Square Footage
                    </label>
                    <select className="w-full p-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-primary">
                        <option>Any Size</option>
                        <option>1000+ sqft</option>
                        <option>2000+ sqft</option>
                        <option>3000+ sqft</option>
                    </select>
                    </div>
                    {/* Features */}
                    <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">verified</span>
                        Features
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                        <span>Pool</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                        <span>Garage</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                        <span>Garden</span>
                        </label>
                    </div>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 mt-4">
                    Apply Filters
                    </button>
                </div>
                </div>
            </aside>
}