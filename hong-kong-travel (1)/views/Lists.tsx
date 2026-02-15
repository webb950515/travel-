import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ChecklistItem, Language } from '../types';
import { DATA } from '../constants';
import { Plus, Trash2, Check, ExternalLink } from 'lucide-react';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Lists: React.FC<Props> = ({ language, setLanguage }) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'memo'>('checklist');
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');
  const [memo, setMemo] = useState('');

  // Initial Load
  useEffect(() => {
    // Load Checklist
    const savedItems = localStorage.getItem('checklistItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      // Load default based on current language if first time
      const defaults = DATA[language].checklist.map((text, i) => ({
        id: `def-${i}`,
        text,
        checked: false
      }));
      setItems(defaults);
      localStorage.setItem('checklistItems', JSON.stringify(defaults));
    }

    // Load Memo
    const savedMemo = localStorage.getItem('userMemo');
    if (savedMemo) {
      setMemo(savedMemo);
    }
  }, []); // Only load on mount

  // Save Memo
  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    localStorage.setItem('userMemo', e.target.value);
  };

  // Toggle Checkbox
  const toggleItem = (id: string) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updated);
    localStorage.setItem('checklistItems', JSON.stringify(updated));
  };

  // Add Item
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      text: newItemText,
      checked: false
    };
    const updated = [...items, newItem];
    setItems(updated);
    localStorage.setItem('checklistItems', JSON.stringify(updated));
    setNewItemText('');
  };

  // Delete Item
  const deleteItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem('checklistItems', JSON.stringify(updated));
  };

  const renderMemoWithLinks = (text: string) => {
     const urlRegex = /(https?:\/\/[^\s]+)/g;
     return text.split(urlRegex).map((part, i) => {
        if (part.match(urlRegex)) {
           return (
             <a key={i} href={part} target="_blank" rel="noreferrer" className="text-muji-accent underline decoration-1 underline-offset-2 break-all inline-flex items-center gap-0.5">
               {part} <ExternalLink size={10} />
             </a>
           );
        }
        return part;
     });
  };

  return (
    <div className="min-h-screen pb-24 bg-muji-bg">
      <Header title={DATA[language].nav.LISTS} language={language} setLanguage={setLanguage} />
      
      {/* Sub Tabs */}
      <div className="px-4 mb-4">
        <div className="flex bg-stone-200 p-1 rounded-xl">
           <button 
             onClick={() => setActiveTab('checklist')}
             className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'checklist' ? 'bg-white shadow-sm text-muji-text' : 'text-muji-muted'}`}
           >
             {language === 'en' ? 'CHECKLIST' : '檢查清單'}
           </button>
           <button 
             onClick={() => setActiveTab('memo')}
             className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'memo' ? 'bg-white shadow-sm text-muji-text' : 'text-muji-muted'}`}
           >
             {language === 'en' ? 'MEMO' : '備忘錄'}
           </button>
        </div>
      </div>

      <div className="px-4">
        {activeTab === 'checklist' ? (
          <div>
            <form onSubmit={addItem} className="relative mb-6">
              <input
                type="text"
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                placeholder={language === 'en' ? "Add new item..." : "新增項目..."}
                className="w-full bg-white border border-muji-border rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-muji-accent shadow-sm text-sm"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 p-1 bg-muji-accent text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <Plus size={20} />
              </button>
            </form>

            <div className="space-y-2">
              {items.map(item => (
                <div key={item.id} className="group bg-white p-3 rounded-lg border border-transparent hover:border-muji-border transition-colors flex items-center justify-between">
                  <button 
                    onClick={() => toggleItem(item.id)}
                    className="flex items-center gap-3 flex-1 text-left"
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${item.checked ? 'bg-muji-accent border-muji-accent' : 'border-muji-muted bg-transparent'}`}>
                      {item.checked && <Check size={14} className="text-white" />}
                    </div>
                    <span className={`text-sm ${item.checked ? 'text-muji-muted line-through' : 'text-muji-text'}`}>
                      {item.text}
                    </span>
                  </button>
                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="text-stone-300 hover:text-red-400 transition-colors p-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              {items.length === 0 && (
                <div className="text-center py-10 text-muji-muted text-sm">
                  {language === 'en' ? 'Everything is ready!' : '準備就緒！'}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative">
             <div className="bg-white p-4 rounded-xl border border-muji-border shadow-sm min-h-[300px] whitespace-pre-wrap text-sm leading-relaxed text-muji-text relative z-0">
               <div className="absolute inset-0 p-4 pointer-events-none z-10 whitespace-pre-wrap overflow-hidden text-transparent select-none">
               </div>
               
               <div className="mb-2 pb-2 border-b border-muji-border text-xs text-muji-muted font-bold flex justify-between">
                  <span>{language === 'en' ? 'FREE TEXT' : '自由記事'}</span>
                  <span className="font-normal opacity-50">{language === 'en' ? 'Auto-links URLs' : '自動連結網址'}</span>
               </div>
               
               <textarea
                 value={memo}
                 onChange={handleMemoChange}
                 placeholder={language === 'en' ? "Type notes here..." : "在此輸入筆記..."}
                 className="w-full h-32 resize-none focus:outline-none bg-transparent mb-4 text-muji-text"
               />
               
               <div className="pt-4 border-t border-dashed border-muji-border">
                  <h4 className="text-xs font-bold text-muji-muted mb-2">{language === 'en' ? 'PREVIEW' : '預覽'}</h4>
                  <div className="text-sm text-muji-text break-words">
                    {memo ? renderMemoWithLinks(memo) : <span className="text-stone-300 italic">...</span>}
                  </div>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
