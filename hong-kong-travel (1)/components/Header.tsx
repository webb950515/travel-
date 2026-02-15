import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
  language?: Language;
  setLanguage?: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, rightAction, language, setLanguage }) => {
  return (
    <header className="sticky top-0 z-30 bg-muji-bg/95 backdrop-blur-sm border-b border-muji-border px-6 py-4 flex justify-between items-center transition-all duration-200">
      <div>
        <h1 className="font-serif text-2xl font-bold text-muji-text tracking-wide">{title}</h1>
        {subtitle && <p className="text-xs text-muji-muted mt-1 font-sans">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        {rightAction}
        {language && setLanguage && (
          <button 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-muji-accent text-white shadow-sm hover:opacity-90 transition-all border border-muji-accent"
            aria-label="Switch Language"
          >
            <span className="text-xs font-bold tracking-wider">{language === 'en' ? '中' : 'EN'}</span>
          </button>
        )}
      </div>
    </header>
  );
};