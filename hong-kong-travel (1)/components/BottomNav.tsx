import React from 'react';
import { Calendar, BookOpen, Wallet, CheckSquare, Info } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  labels: Record<Tab, string>;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, labels }) => {
  const navItems = [
    { id: Tab.PLAN, icon: Calendar },
    { id: Tab.GUIDE, icon: BookOpen },
    { id: Tab.WALLET, icon: Wallet },
    { id: Tab.LISTS, icon: CheckSquare },
    { id: Tab.INFO, icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-muji-border pb-safe pt-2 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.02)] z-40">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                isActive ? 'text-muji-accent' : 'text-muji-muted'
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-muji-accent' : 'text-muji-muted'}`}>
                {labels[item.id]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
