export default function PropertyDetailsHeader() {
    return <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 gap-4">
                <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-3xl font-bold">domain</span>
                    <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">EstateFinder</h2>
                </div>
                <div className="hidden md:flex items-center flex-1 min-w-[300px]">
                    <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Search by city, neighborhood, or ZIP" type="text" />
                    </div>
                </div>
                </div>
                <div className="flex items-center gap-3">
                <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <span className="material-symbols-outlined">favorite</span>
                </button>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1" />
                <button className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <img alt="User profile avatar circle" className="h-8 w-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvLTNDwX0pZGn4uGsF2TMcDV9YBgmmw-21p5FY8yW-v4fQ2rkDgBCs2XMiInHHCP1X3CdlVYyOw29tcd_XU1EKMqYRM3vJTiM6k0IqtRkHU8dd4Mq6X6eYxoJRpK25Yq0e0b5QTMNuuJQzJ4_OzsFJv_GoJBeFpjfWa3fyQIklDXF2SLqNJZy5psS0KdY6vbNODJs7cXIcqWfYX40cnvkASiI0MwfdK3LzDoK-agS_FF3dTacQaq8jk2uePKZlwG0oyAXjp4wCRZQ" />
                    <span className="text-sm font-medium hidden sm:block">John Doe</span>
                </button>
                </div>
            </div>
            </div>
        </header>
}