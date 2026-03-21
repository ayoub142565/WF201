import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white">Get in touch</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">Have questions about a property or need help with your account? Our team is here 24/7.</p>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined p-3 bg-primary/10 text-primary rounded-xl">mail</span>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Email us</p>
                <p className="text-slate-900 dark:text-white font-medium">support@estatefinder.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined p-3 bg-primary/10 text-primary rounded-xl">call</span>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Call us</p>
                <p className="text-slate-900 dark:text-white font-medium">+1 (555) 000-1234</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary" />
            <input type="text" placeholder="Last Name" className="bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary" />
          <textarea placeholder="Your Message" rows="5" className="w-full bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary"></textarea>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}