import React from 'react';

export default function PrivacyPolicy() {
  const sections = [
    { title: "1. Data Collection", content: "We collect information you provide directly to us when searching for properties or contacting agents." },
    { title: "2. How We Use Data", content: "Your data helps us personalize your property recommendations and improve our platform security." },
    { title: "3. Cookie Policy", content: "We use cookies to remember your preferences and keep you logged in across sessions." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-10 italic text-sm">Last updated: March 2024</p>
        
        <div className="space-y-8">
          {sections.map((sec, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{sec.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{sec.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}