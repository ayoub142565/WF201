import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Terms of Service</h1>
        <div className="prose dark:prose-invert prose-slate">
          <p className="mb-4 text-slate-600 dark:text-slate-400">By using EstateFinder, you agree to the following terms:</p>
          <ul className="list-disc pl-5 space-y-4 text-slate-600 dark:text-slate-400">
            <li><strong>Accuracy:</strong> All property listings must contain truthful information.</li>
            <li><strong>Conduct:</strong> Users must communicate professionally with agents.</li>
            <li><strong>Liability:</strong> EstateFinder is a marketplace and does not own the properties listed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}