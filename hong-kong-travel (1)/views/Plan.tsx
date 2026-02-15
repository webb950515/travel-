import React, { useState, useRef, useEffect } from 'react';
import { DATA } from '../constants';
import { MapPin, Utensils, Info, Plane, Home, CloudSun } from 'lucide-react';
import { Header } from '../components/Header';
import { FlightOrigin, Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Plan: React.FC<Props> = ({ language, setLanguage }) => {
  const [activeDay, setActiveDay] = useState(0);
  const [flightOrigin, setFlightOrigin] = useState<FlightOrigin>('TW');
  const scrollRef = useRef<HTMLDivElement>(null);
  const dayRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { flights, hotel, itinerary } = DATA[language];

  // Auto-scroll to selected day
  useEffect(() => {
    if (dayRefs.current[activeDay] && scrollRef.current) {
      const button = dayRefs.current[activeDay];
      const container = scrollRef.current;
      
      const scrollLeft = button!.offsetLeft - container.offsetWidth / 2 + button!.offsetWidth / 2;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeDay]);

  return (
    <div className="min-h-screen pb-24 bg-muji-bg">
      <Header 
        title={DATA[language].nav.PLAN} 
        subtitle="2026 CN/HK/MO" 
        language={language}
        setLanguage={setLanguage}
      />

      {/* Overview Cards */}
      <div className="p-4 space-y-4">
        {/* Flight Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-muji-border/50 relative">
          <div className="flex justify-between items-start mb-3">
             <div className="flex items-center gap-2 text-muji-accent">
               <Plane size={18} />
               <h3 className="font-serif font-bold text-sm">
                 {language === 'en' ? 'FLIGHTS' : '航班資訊'}
               </h3>
             </div>
             {/* Flight Origin Switcher */}
             <div className="bg-stone-100 p-0.5 rounded-lg flex text-[10px] font-bold">
               <button 
                 onClick={() => setFlightOrigin('TW')}
                 className={`px-2 py-1 rounded-md transition-all ${flightOrigin === 'TW' ? 'bg-white shadow-sm text-muji-text' : 'text-muji-muted'}`}
               >
                 {language === 'en' ? 'TW' : '台灣'}
               </button>
               <button 
                 onClick={() => setFlightOrigin('SG')}
                 className={`px-2 py-1 rounded-md transition-all ${flightOrigin === 'SG' ? 'bg-white shadow-sm text-muji-text' : 'text-muji-muted'}`}
               >
                 {language === 'en' ? 'SG' : '新加坡'}
               </button>
             </div>
          </div>
          
          <div className="space-y-3">
            {flights[flightOrigin].map((flight, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm border-l-2 border-muji-highlight pl-3">
                <div>
                  <div className="font-bold text-muji-text">{flight.airport}</div>
                  <div className="text-muji-muted text-xs">{flight.date} • {flight.time}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-muji-text">{flight.flightNumber}</div>
                  <div className="text-muji-muted text-xs">{flight.terminal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-muji-border/50">
          <div className="flex items-center gap-2 mb-3 text-muji-accent">
            <Home size={18} />
            <h3 className="font-serif font-bold text-sm">
              {language === 'en' ? 'STAY' : '住宿資訊'}
            </h3>
          </div>
          <div className="text-sm">
            <div className="font-bold text-muji-text text-base mb-1">{hotel.name}</div>
            <div className="text-muji-muted mb-3">{hotel.address}</div>
            <a 
              href={hotel.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full py-2 bg-muji-bg border border-muji-border rounded-lg text-xs font-bold text-muji-text hover:bg-stone-100 transition-colors"
            >
              <MapPin size={14} className="mr-1" />
              {language === 'en' ? 'Open Map' : '開啟地圖'}
            </a>
          </div>
        </div>
      </div>

      {/* Day Selector */}
      <div 
        ref={scrollRef}
        className="sticky top-[72px] z-20 bg-muji-bg/95 backdrop-blur-sm border-b border-muji-border overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex px-4 py-3 gap-3 min-w-max">
          {itinerary.map((day, idx) => (
            <button
              key={day.day}
              ref={(el) => { dayRefs.current[idx] = el; }}
              onClick={() => setActiveDay(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                activeDay === idx
                  ? 'bg-muji-accent text-white shadow-md transform scale-105'
                  : 'bg-white text-muji-muted border border-muji-border'
              }`}
            >
              {day.day} <span className="font-normal opacity-80 ml-1">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Weather Info Bar */}
      <div className="bg-white/50 border-b border-muji-border p-2 text-center text-xs font-medium text-muji-text flex items-center justify-center gap-2 animate-fadeIn">
        <CloudSun size={14} className="text-orange-400"/>
        <span>{itinerary[activeDay].weather}</span>
      </div>

      {/* Timeline */}
      <div className="px-4 py-6">
        <div className="relative border-l border-muji-border ml-3 space-y-8">
          {itinerary[activeDay].items.map((item, idx) => (
            <div key={item.id} className="relative pl-6">
              {/* Timeline Dot */}
              <div 
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ${
                  item.isImportant ? 'bg-red-500 ring-2 ring-red-100' : 'bg-muji-accent'
                }`} 
              />
              
              {/* Content */}
              <div className={`p-4 rounded-xl border transition-all ${
                item.isImportant 
                  ? 'bg-white border-red-100 shadow-sm' 
                  : 'bg-white border-muji-border/40 shadow-sm'
              }`}>
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    item.isImportant ? 'bg-red-50 text-red-600' : 'bg-stone-100 text-muji-accent'
                  }`}>
                    {item.time}
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-muji-text mb-1">{item.title}</h4>
                {item.description && (
                  <p className="text-sm text-muji-muted leading-relaxed mb-3">{item.description}</p>
                )}

                {/* Action Buttons */}
                {item.links && (
                  <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-dashed border-muji-border">
                    {item.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-muji-bg rounded-md text-muji-text border border-muji-border hover:bg-stone-100"
                      >
                        {link.type === 'map' && <MapPin size={12} />}
                        {link.type === 'food' && <Utensils size={12} />}
                        {link.type === 'info' && <Info size={12} />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
