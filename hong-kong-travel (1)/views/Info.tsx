import React from 'react';
import { DATA } from '../constants';
import { Header } from '../components/Header';
import { Phone, AlertTriangle, Sun, Globe } from 'lucide-react';
import { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Info: React.FC<Props> = ({ language, setLanguage }) => {
  const { info } = DATA[language];

  return (
    <div className="min-h-screen pb-24 bg-muji-bg">
      <Header title={DATA[language].nav.INFO} language={language} setLanguage={setLanguage} />

      <div className="px-4 py-4 space-y-4">
        
        {/* Weather Widget Link */}
        <a 
          href={info.weather.url}
          target="_blank" 
          rel="noreferrer"
          className="block bg-white p-5 rounded-xl shadow-sm border border-muji-border hover:bg-stone-50 transition-colors"
        >
           <div className="flex items-center gap-3">
             <div className="bg-orange-100 p-2 rounded-full text-orange-600">
               <Sun size={24} />
             </div>
             <div>
               <h3 className="font-bold text-muji-text">{info.weather.title}</h3>
               <p className="text-xs text-muji-muted">{info.weather.subtitle}</p>
             </div>
             <ExternalLinkIcon className="ml-auto text-muji-muted" />
           </div>
        </a>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-muji-border overflow-hidden">
          <div className="bg-red-50 px-5 py-3 border-b border-red-100 flex items-center gap-2">
            <AlertTriangle size={16} className="text-red-500" />
            <h3 className="font-bold text-red-700 text-sm">{info.emergency.title}</h3>
          </div>
          <div className="divide-y divide-muji-border">
            <div className="p-4 flex justify-between items-center">
               <div>
                 <div className="font-bold text-muji-text">{language === 'en' ? 'Police' : '警察'}</div>
                 <div className="text-xs text-muji-muted">{info.emergency.police}</div>
               </div>
               <a href="tel:999" className="bg-stone-100 px-4 py-2 rounded-lg font-mono font-bold text-lg text-muji-accent flex items-center gap-2">
                 <Phone size={16} />
               </a>
            </div>
            <div className="p-4 flex justify-between items-center">
               <div>
                 <div className="font-bold text-muji-text">{language === 'en' ? 'Ambulance' : '救護車'}</div>
                 <div className="text-xs text-muji-muted">{info.emergency.ambulance}</div>
               </div>
               <a href="tel:999" className="bg-stone-100 px-4 py-2 rounded-lg font-mono font-bold text-lg text-muji-accent flex items-center gap-2">
                 <Phone size={16} />
               </a>
            </div>
            <div className="p-4">
               <div className="font-bold text-muji-text mb-1">{info.emergency.office}</div>
               <p className="text-xs text-muji-muted mb-2">{info.emergency.officeName}</p>
               <a href="tel:+852-2522-0196" className="text-muji-accent font-mono text-sm underline decoration-1">
                 +852-2522-0196
               </a>
            </div>
          </div>
        </div>

        {/* Rules / Warnings */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-muji-border">
          <div className="flex items-center gap-2 mb-3 text-muji-text">
            <Globe size={18} />
            <h3 className="font-bold text-sm">{info.rules.title}</h3>
          </div>
          <ul className="space-y-3">
             {info.rules.items.map((rule, i) => (
               <li key={i} className="flex items-start gap-2 text-sm text-muji-muted">
                 <span className="text-muji-highlight">•</span>
                 <span>{rule}</span>
               </li>
             ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

const ExternalLinkIcon = ({className}: {className?: string}) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)
