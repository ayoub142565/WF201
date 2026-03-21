export default function GalleryImages({ property, first10Images }) {
    return <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px] mb-8 overflow-hidden rounded-xl">
        {/* Main image */}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
            <img
            src={property.thumbnail}
            alt="Main property image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
        
        {/* Smaller images */}
        {first10Images.slice(1, 5).map((imgSrc, idx) => (
            <div key={idx} className="hidden md:block relative group overflow-hidden rounded-xl">
            <img
                src={imgSrc.url}
                alt={`Property image ${idx + 2}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {idx === 3 && (
                <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">grid_view</span> Show all photos
                </button>
            )}
            </div>
        ))}
    </div>
}