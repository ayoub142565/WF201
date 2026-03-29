export default function PropertyDetailsHeader() {
    return <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 lg:px-40 py-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">domain</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Estately</h2>
            </div>
            <nav className="hidden md:flex flex-1 justify-center gap-8">
            <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-primary text-sm font-bold" href="#">Listings</a>
            <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
            </nav>
            <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">favorite</span>
            </button>
            
            <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-10 w-10 overflow-hidden">
                <img className="h-full w-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjoQfW3L7fTvsLMIyXB4AbgAFkOFjps4lIqEOSV-gKFf-pwHjYA0DL4P8CEYutixo3cUsLFsJAxbDqQrAoMSUD99ThGVoJstf4MSPt94_qBmPkzJzgHrwOW6NgwN6704XsTDU93Nin4B2skSEyKIvcP1fSi8gj4aQxF8OMx01-hAmtWm9MRRfAPTB3bD2hAXE_5-n-nqNqEgugOWi5bRPSkwGlRuIe8rhacKoilYYOR3X9EtisnxnrkN0bLDMKmZ9YMLyQwsYCKWc" />
            </div>
            </div>
        </div>
</header>
}
