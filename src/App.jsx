import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyAds" element={<MyAds />} />
        <Route path="/SearchResults" element={<SearchResults />} />
        <Route path="/Details" element={<PropertyDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/AdminOverview " element={<AdminOverview />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/PostManagement" element={<PostManagement />} />
        <Route path="/MyFavorites" element={<MyFavorites />} />
        <Route path="/BrowseCities" element={<BrowseCities />} />
        <Route path="/PropertyCategories" element={<PropertyCategories />} /> 
        <Route path="/Privacy" element={<PrivacyPolicy/>} /> 
        <Route path="/terms" element={<TermsOfService/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </Router>
  );
}
