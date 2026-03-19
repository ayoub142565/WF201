import "@lottiefiles/lottie-player";
// import 'tailwindcss/tailwind.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Layout from './components/layout';

import Home from './pages/Home';
import MyAds from './pages/MyAds';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import AdminOverview from './pages/AdminOverview';
import UserDashboard from './pages/UserDashboard';
import PostManagement from './pages/PostManagement';
import MyFavorites from './pages/MyFavorites';
import BrowseCities from './pages/BrowseCities';
import PropertyCategories from './pages/PropertyCategories';

import NotFound from './errors/NotFound';

export default function App() {
  return (
    <>
    
      
      
    
      {/* <Routes> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/screen-2" element={<Home />} />
            <Route path="/screen-1" element={<MyAds />} />
            <Route path="/screen-3" element={<SearchResults />} />
            <Route path="/screen-4" element={<PropertyDetails />} />
            <Route path="/screen-5" element={<Login />} />
            <Route path="/screen-6" element={<SignUp />} />
            <Route path="/screen-7" element={<UserProfile />} />
            <Route path="/screen-8" element={<AdminOverview />} />
            <Route path="/screen-9" element={<UserDashboard />} />
            <Route path="/screen-10" element={<PostManagement />} />
            <Route path="/screen-11" element={<MyFavorites />} />
            <Route path="/screen-12" element={<BrowseCities />} />
            <Route path="/screen-13" element={<PropertyCategories />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </>
  );
}
