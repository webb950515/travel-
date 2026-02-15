import React from 'react';
import { DATA } from '../constants';
import { Header } from '../components/Header';
import { Map } from 'lucide-react';
import { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Guide: React.FC<Props> = ({ language, setLanguage }) => {
  const { guides } = DATA[language];
  
  return (
    <div className="min-h-screen pb-24 bg-muji-bg">
      <Header 
        title={DATA[language].nav.GUIDE} 
        subtitle={language === 'en' ? "Curated Insights" : "精選導覽"} 
        language={language}
        setLanguage={setLanguage}
      />

      <div className="px-4 py-4 space-y-6">
        {guides.map((guide) => (
          <article key={guide.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-muji-border/50">
            <div className="h-48 overflow-hidden relative">
               <img 
                 src={guide.imageUrl} 
                 alt={guide.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-4 left-4 text-white">
                 <h3 className="font-serif text-xl font-bold">{guide.title}</h3>
                 <p className="text-xs font-sans opacity-90 tracking-wider uppercase mt-1">{guide.subtitle}</p>
               </div>
            </div>
            
            <div className="p-5">
              <p className="text-sm text-muji-text leading-7 font-sans text-justify">
                {guide.content}
              </p>

              {guide.location && (
                <div className="mt-4 pt-4 border-t border-muji-border">
                  <div className="flex items-center gap-2 mb-2 text-muji-accent font-bold text-xs">
                    <Map size={14} />
                    <span>LOCATION MAP</span>
                  </div>
                  <div className="rounded-lg overflow-hidden h-40 bg-gray-100">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0} 
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${guide.location.lng-0.01}%2C${guide.location.lat-0.01}%2C${guide.location.lng+0.01}%2C${guide.location.lat+0.01}&amp;layer=mapnik&amp;marker=${guide.location.lat}%2C${guide.location.lng}`}
                    >
                    </iframe>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
        
        <div className="text-center py-6 text-muji-muted text-xs italic">
          {language === 'en' ? 'Keep exploring.' : '旅途愉快。'}
        </div>
      </div>
    </div>
  );
};
