import { useState, useEffect } from 'react';
import { LanguageMode } from './types';
import { allWords, getWordById } from './data/words';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Explore } from './components/Explore';
import { WordDetail } from './components/WordDetail';

const STORAGE_KEY = 'the100_language_mode';

export default function App() {
  // Language mode with localStorage persistence
  const [languageMode, setLanguageMode] = useState<LanguageMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'en_cn') {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'en';
  });

  // View state: 'home' | 'explore' | 'detail'
  const [currentView, setCurrentView] = useState<'home' | 'explore' | 'detail'>('home');
  const [selectedWordId, setSelectedWordId] = useState<string>('grab');

  // Handle hash based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('word/')) {
        const wordId = hash.replace('word/', '');
        if (getWordById(wordId)) {
          setSelectedWordId(wordId);
          setCurrentView('detail');
          return;
        }
      }
      if (hash === 'explore') {
        setCurrentView('explore');
        return;
      }
      if (hash === 'home' || !hash) {
        setCurrentView('home');
        return;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when navigating
  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToExplore = () => {
    setCurrentView('explore');
    window.location.hash = 'explore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWord = (wordId: string) => {
    setSelectedWordId(wordId);
    setCurrentView('detail');
    window.location.hash = `word/${wordId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Language switcher handler
  const handleSelectLanguageMode = (mode: LanguageMode) => {
    setLanguageMode(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore
    }
  };

  const currentWord = getWordById(selectedWordId) || allWords[0];

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1917] flex flex-col font-sans selection:bg-[#E7E5E0]">
      {/* Editorial Header */}
      <Header
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateExplore={navigateToExplore}
        languageMode={languageMode}
        onToggleLanguage={handleSelectLanguageMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <Home
            onExplore={navigateToExplore}
            languageMode={languageMode}
            onSelectLanguageMode={handleSelectLanguageMode}
            featuredWords={allWords}
            onSelectWord={navigateToWord}
          />
        )}

        {currentView === 'explore' && (
          <Explore
            words={allWords}
            languageMode={languageMode}
            onSelectWord={navigateToWord}
          />
        )}

        {currentView === 'detail' && (
          <WordDetail
            word={currentWord}
            languageMode={languageMode}
            onBackToExplore={navigateToExplore}
            onSelectWord={navigateToWord}
          />
        )}
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="border-t border-[#E7E5E0] py-8 text-center text-xs text-[#78716C]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif text-sm font-semibold text-[#1C1917]">
            THE 100
          </div>
          <p className="font-serif italic">
            100 English words you know — but probably don’t fully use.
          </p>
          <div className="text-[11px] font-mono text-[#A8A29E]">
            A Curated Digital Collection
          </div>
        </div>
      </footer>
    </div>
  );
}
