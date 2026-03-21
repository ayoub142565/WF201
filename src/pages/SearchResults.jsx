import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../store/propertySlice";
import PropertyListingsHeader from "../components/PropertyListingsHeader";
import PropertyListingsSidebar from "../components/PropertyListingsSidebar";
import { Link } from "react-router-dom";

export default function SearchResults() {

  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (list.length === 0) return <p>No results found</p>;

  console.log(list);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header / Navigation */}
      <PropertyListingsHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-6 text-sm font-medium">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a className="text-slate-500 hover:text-primary dark:text-slate-400" href="#">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                <a className="ml-1 text-slate-500 hover:text-primary dark:text-slate-400 md:ml-2" href="#">Properties</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                <span className="ml-1 text-slate-900 dark:text-slate-100 md:ml-2">Search Results</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <PropertyListingsSidebar />
          {/* Main Results Area */}
          <div className="flex-1">
            {/* Sorting and Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold"><span>{list.length}</span> Results found</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Properties for sale in Los Angeles, CA</p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                <span className="text-sm font-medium whitespace-nowrap">Sort by:</span>
                <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-1.5 pl-3 pr-10 text-sm focus:ring-primary">
                  <option>Newest Listings</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Square Footage</option>
                </select>
              </div>
            </div>
            {/* Grid Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {list.map((property, idx) => (
                <Link
                  to={`/properties/${property.propertyCode}`}
                  key={idx}
                >
                  {/* Card */}
                  <div
                    className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        alt={"Property image"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={property.thumbnail} 
                    />
                    <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                      <span className="material-symbols-outlined text-lg">favorite</span>
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-bold">${(property.price)?.toLocaleString('en-US')}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{property.municipality}, {property.address}</p>
                  </div>
                  {/* features */}
                  <div className="flex p-4 items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-base">bed</span>
                        <span>{property.rooms} bd</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                        <span>{property.bathrooms} ba</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                        <span>{property.size} m²</span>
                      </div>
                        </div>
                </div>
                
                </Link>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 gap-2">
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 bg-primary text-white rounded-lg font-bold">1</button>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium">2</button>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium">24</button>
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
