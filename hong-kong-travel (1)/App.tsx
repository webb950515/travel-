import React, { useState } from 'react';
import { Plan } from './views/Plan';
import { Guide } from './views/Guide';
import { Wallet } from './views/Wallet';
import { Lists } from './views/Lists';
import { Info } from './views/Info';
import { BottomNav } from './components/BottomNav';
import { Tab, Language } from './types';
import { DATA } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PLAN);
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese

  const renderContent = () => {
    const props = { language, setLanguage };
    switch (activeTab) {
      case Tab.PLAN:
        return <Plan {...props} />;
      case Tab.GUIDE:
        return <Guide {...props} />;
      case Tab.WALLET:
        return <Wallet {...props} />;
      case Tab.LISTS:
        return <Lists {...props} />;
      case Tab.INFO:
        return <Info {...props} />;
      default:
        return <Plan {...props} />;
    }
  };

  return (
    <div className="font-sans text-muji-text bg-muji-bg min-h-screen">
      <main className="max-w-md mx-auto min-h-screen bg-muji-bg shadow-2xl overflow-hidden relative">
        {renderContent()}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} labels={DATA[language].nav} />
      </main>
    </div>
  );
};

export default App;
