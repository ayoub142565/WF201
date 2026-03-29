import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">domain</span>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">EstateHub</h2>
            </div>
            <div className="flex gap-6">
                <Link to="/screen-2" className="text-slate-600 hover:text-blue-600">Home</Link>
                <Link to="/properties" className="text-slate-600 hover:text-blue-600">Search</Link>
                <Link to="/screen-7" className="text-slate-600 hover:text-blue-600">Profile</Link>
                <Link to="/screen-8" className="text-slate-600 hover:text-blue-600">Categories</Link>
            </div>
            <div className="flex items-center gap-3">
                <button className="hidden sm:block text-sm font-semibold px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" onClick={() => navigate('/screen-5')}>Login</button>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-shadow shadow-md" onClick={() => navigate('/screen-6')}>Register</button>
            </div>
            </div>
        </header>
        </>
    )
}
export default Navbar;