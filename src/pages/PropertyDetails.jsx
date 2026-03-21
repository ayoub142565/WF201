import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../store/propertySlice";
import apartmentFeatures from "../constants";
import { first10Images } from "../constants";
import PropertyDetailsHeader from "../components/PropertyDetailsHeader";
import { useParams } from "react-router-dom";
import DetailsSection from "../components/DetailsSection";
import GalleryImages from "../components/GalleryImages";  


export default function PropertyDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const property = useSelector((state) => state.properties.list.find((p) => p.propertyCode === id));

  useEffect(()=> {
    dispatch(fetchProperties())
  }, [dispatch]);

  if (!property) {
    return <div>No property found</div>;
  }


  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <PropertyDetailsHeader />

      <main className="mx-auto w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-8">

        <GalleryImages property={property} first10Images={first10Images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content Column */}
          <DetailsSection property={property} />
          {/* Sidebar Content */}
          <div className="space-y-8">
            {/* Contact Seller Card */}
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Interested in this property?</h3>
              <div className="flex items-center gap-4 mb-6">
                <img className="size-14 rounded-full object-cover" data-alt="Real estate agent headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTnVMxv9mq7COp7OZADRgt7nRAjhEUezYViqoezrTqvXs7SzCSS90h170l2WKodFNZccGg18hbhGgeEMrFFCpCNgAsswI2iGKFqsrXDuCH8h_V6TC6IxW4_3uyjUGnxH_wzVVQm_N4TYikuMrkyfhfW5ae1gBU1wrlkN0LMT5QbeXJu5w4p8hRv0py1LglkM9iYbk5axWJ8mDFbyKVbrDGqVnBJ7EQSksWM5RK7bUo_UkY3i0Z7AZwWYYLiIOYiGiVOtd3W5a1JGQ" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">Jonathan Reeds</p>
                  <p className="text-sm text-slate-500">Premium Listing Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contact via WhatsApp
                </button>
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                  Send Email
                </button>
              </div>
            </div>
            {/* Similar Properties */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">Similar Properties</h3>
              <div className="space-y-4">
                {/* Property Card 1 */}
                <div className="flex gap-4 group cursor-pointer">
                  <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="Similar modern house thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRlgLmtvs1RtWH7BKn5Y_NEmUNd1SO8J4as5d2LAio2bpYlOgrZx5ra3ORKdHc53uHPj5TsCvSmCm9HCf52jU1KMR6q06GlUmsYAmAeCUOqLEWldqODKjms1G195tyksSV1HE2bVV9Sbs4EXcO7fTyaHUyjLDKEfVi09Z7_lXNn2OBaAOJZMIM6QIDnYH7IfjpwtUjhdPjkT18Ef7WcHs6dutyz3RxCOleuIqLFafdbEY2WCJ2dugYKJoR0nJLtRduEC9gs2IzYwI" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-primary transition-colors">Sunset Luxury Estate</h4>
                    <p className="text-sm text-slate-500">Boca Raton, FL</p>
                    <p className="text-primary font-bold mt-1">$1,850,000</p>
                  </div>
                </div>
                {/* Property Card 2 */}
                <div className="flex gap-4 group cursor-pointer">
                  <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="Luxury villa thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG9tEqPy6DYzL5Yn2q14ywKwoGhh115KJiO0RL8D22r3ggTMayiDcxPuyo877KXMBKV_3UZQj7yf1Gv9jiPZZw6J6fuHyucU041OVexkVbB9JLFL80h4PwZ9RhT2OeVoFJlF2KF9szhmDlWKPd7Vl7oiN-pv11Tw71H6gTdyLtTMsiSvt43al90AgltyE73N-lVR2onjKCUcBI1hMCIHGjbcmpwlC7IdYvOwa9SyOHg6kNG4aPUIZVLIwVHCTRTfeiAlZBDg7qXG8" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-primary transition-colors">Coastal Retreat Villa</h4>
                    <p className="text-sm text-slate-500">Coral Gables, FL</p>
                    <p className="text-primary font-bold mt-1">$2,100,000</p>
                  </div>
                </div>
                {/* Property Card 3 */}
                <div className="flex gap-4 group cursor-pointer">
                  <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="Modern penthouse thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYmZv2pCBIphreSbL3LWipnkKdc8en1dhEkRK5Ga-fn8UwYWJpgfJ8cMBvG9xOpaeIZ4IozpsoZOCp2IuIWnkwhQxysDXPXGP4qTHx_mzo3QPOi0E2xhObVgJHPXKXhvAuWAAMGicjCeOQNJLBcRtQR9DYupKP_71EvaAS-7uIK39m7L4P9JdKveP_QEdvkW-o557kSOz6OnuBJ_Rw_wsPmTv8TXcJoiR9qO5q2g5HSMC7JpaKBjZC4KkxZz6dIMRMB0MLDpRkbI" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-primary transition-colors">Azure Bay Mansion</h4>
                    <p className="text-sm text-slate-500">Miami Beach, FL</p>
                    <p className="text-primary font-bold mt-1">$3,450,000</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View All Listings
              </button>
            </div>
          </div>

        </div>
      </main>
      
    </div>
  );
}
