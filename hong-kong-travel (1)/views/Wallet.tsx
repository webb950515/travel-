import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { DATA } from '../constants';
import { Language } from '../types';
import { RefreshCw, Calculator as CalcIcon, Delete, ArrowRightLeft } from 'lucide-react';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

type Currency = 'TWD' | 'SGD' | 'HKD' | 'CNY';

export const Wallet: React.FC<Props> = ({ language, setLanguage }) => {
  const [inputExpression, setInputExpression] = useState('');
  const [total, setTotal] = useState<number>(0);
  
  // Default: RMB/HKD (Target) -> TWD/SGD (Home)
  // Usually travelers see price in local currency (Target) and want to know home currency (Source)
  // Let's call them Local (Price Tag) and Home (Wallet).
  const [localCurrency, setLocalCurrency] = useState<Currency>('HKD');
  const [homeCurrency, setHomeCurrency] = useState<Currency>('TWD');
  const [exchangeRate, setExchangeRate] = useState<number>(4.1); // Default HKD -> TWD
  const [isRateEditing, setIsRateEditing] = useState(false);

  // Load rate from local storage
  useEffect(() => {
    const savedRate = localStorage.getItem(`rate_${localCurrency}_${homeCurrency}`);
    if (savedRate) {
      setExchangeRate(parseFloat(savedRate));
    } else {
       // Defaults
       if (localCurrency === 'HKD' && homeCurrency === 'TWD') setExchangeRate(4.1);
       if (localCurrency === 'HKD' && homeCurrency === 'SGD') setExchangeRate(0.17);
       if (localCurrency === 'CNY' && homeCurrency === 'TWD') setExchangeRate(4.5);
       if (localCurrency === 'CNY' && homeCurrency === 'SGD') setExchangeRate(0.19);
    }
  }, [localCurrency, homeCurrency]);

  // Save rate to local storage
  const handleRateChange = (newRate: string) => {
    const rate = parseFloat(newRate);
    if (!isNaN(rate)) {
      setExchangeRate(rate);
      localStorage.setItem(`rate_${localCurrency}_${homeCurrency}`, rate.toString());
    }
  };

  const handleInput = (val: string) => {
    setInputExpression(prev => prev + val);
  };

  const handleClear = () => {
    setInputExpression('');
    setTotal(0);
  };

  const handleBackspace = () => {
    setInputExpression(prev => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      if (/[^0-9+\-*/().\s]/.test(inputExpression)) {
        return;
      }
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + inputExpression)();
      if (!isNaN(result) && isFinite(result)) {
        setTotal(result);
      }
    } catch (e) {
    }
  };

  const handleEqual = () => {
    calculate();
  };

  return (
    <div className="min-h-screen pb-24 bg-muji-bg">
      <Header title={DATA[language].nav.WALLET} language={language} setLanguage={setLanguage} />

      <div className="p-4 max-w-md mx-auto">
        {/* Currency Selectors */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-muji-border mb-4 flex justify-between items-center text-sm">
           <div className="flex-1 text-center">
             <div className="text-[10px] text-muji-muted uppercase mb-1">{language === 'en' ? 'Price In' : '當地價格'}</div>
             <select 
               value={localCurrency} 
               onChange={(e) => setLocalCurrency(e.target.value as Currency)}
               className="font-bold text-muji-text bg-transparent text-center focus:outline-none w-full"
             >
               <option value="HKD">HKD (港幣)</option>
               <option value="CNY">CNY (人民幣)</option>
             </select>
           </div>
           
           <div className="text-muji-muted px-2">
             <ArrowRightLeft size={16} />
           </div>

           <div className="flex-1 text-center">
             <div className="text-[10px] text-muji-muted uppercase mb-1">{language === 'en' ? 'Convert To' : '換算成'}</div>
             <select 
               value={homeCurrency} 
               onChange={(e) => setHomeCurrency(e.target.value as Currency)}
               className="font-bold text-muji-text bg-transparent text-center focus:outline-none w-full"
             >
               <option value="TWD">TWD (台幣)</option>
               <option value="SGD">SGD (新幣)</option>
             </select>
           </div>
        </div>

        {/* Display Screen */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-muji-border mb-4">
          <div className="text-right">
            <div className="text-muji-muted text-sm h-6 mb-1 overflow-hidden">{inputExpression || '0'}</div>
            <div className="text-4xl font-bold text-muji-text mb-4 truncate">
              <span className="text-lg mr-2 font-normal text-muji-muted">{localCurrency}</span>
              {total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            
            <div className="pt-4 border-t border-dashed border-muji-border flex justify-between items-end">
              <div className="text-left">
                <div className="text-[10px] text-muji-muted uppercase tracking-wide">
                   {language === 'en' ? 'Equals' : '約等於'} {homeCurrency}
                </div>
                <div className="text-2xl font-serif font-bold text-muji-accent">
                  $ {(total * exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 1 })}
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                 <button 
                   onClick={() => setIsRateEditing(!isRateEditing)}
                   className="flex items-center text-[10px] text-muji-muted hover:text-muji-accent"
                 >
                   <RefreshCw size={10} className="mr-1" />
                   Rate: {exchangeRate}
                 </button>
                 {isRateEditing && (
                   <input 
                    type="number" 
                    step="0.01"
                    className="w-16 text-right text-xs border-b border-muji-accent focus:outline-none mt-1 bg-transparent"
                    value={exchangeRate}
                    onChange={(e) => handleRateChange(e.target.value)}
                    autoFocus
                   />
                 )}
              </div>
            </div>
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-3">
          {['C', '(', ')', '/'].map(btn => (
             <button key={btn} onClick={() => btn === 'C' ? handleClear() : handleInput(btn)} className="h-14 rounded-lg bg-stone-200 text-muji-text font-bold text-lg hover:bg-stone-300 transition-colors flex items-center justify-center">
               {btn}
             </button>
          ))}
          {['7', '8', '9', '*'].map(btn => (
             <button key={btn} onClick={() => handleInput(btn)} className={`h-14 rounded-lg font-bold text-xl hover:brightness-95 transition-colors ${['*'].includes(btn) ? 'bg-stone-200 text-muji-text' : 'bg-white text-muji-text shadow-sm'}`}>
               {btn}
             </button>
          ))}
          {['4', '5', '6', '-'].map(btn => (
             <button key={btn} onClick={() => handleInput(btn)} className={`h-14 rounded-lg font-bold text-xl hover:brightness-95 transition-colors ${['-'].includes(btn) ? 'bg-stone-200 text-muji-text' : 'bg-white text-muji-text shadow-sm'}`}>
               {btn}
             </button>
          ))}
          {['1', '2', '3', '+'].map(btn => (
             <button key={btn} onClick={() => handleInput(btn)} className={`h-14 rounded-lg font-bold text-xl hover:brightness-95 transition-colors ${['+'].includes(btn) ? 'bg-stone-200 text-muji-text' : 'bg-white text-muji-text shadow-sm'}`}>
               {btn}
             </button>
          ))}
          
          <button onClick={() => handleInput('0')} className="col-span-1 h-14 rounded-lg bg-white text-muji-text shadow-sm font-bold text-xl hover:brightness-95 transition-colors">0</button>
          <button onClick={() => handleInput('.')} className="h-14 rounded-lg bg-white text-muji-text shadow-sm font-bold text-xl hover:brightness-95 transition-colors">.</button>
          <button onClick={handleBackspace} className="h-14 rounded-lg bg-stone-200 text-muji-text font-bold text-lg hover:bg-stone-300 transition-colors flex items-center justify-center">
            <Delete size={20} />
          </button>
          <button onClick={handleEqual} className="h-14 rounded-lg bg-muji-accent text-white font-bold text-xl hover:bg-opacity-90 transition-colors shadow-sm">
            =
          </button>
        </div>
      </div>
    </div>
  );
};
