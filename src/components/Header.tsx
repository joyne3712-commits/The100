import React from 'react';
import { LanguageMode } from '../types';

interface HeaderProps {
  currentView: 'home' | 'explore' | 'detail';
  onNavigateHome: () => void;
  onNavigateExplore: () => void;
  languageMode: LanguageMode;
  onToggleLanguage: (mode: LanguageMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateExplore,
  languageMode,
  onToggleLanguage,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#E7E5E0] transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Zone: Single Wordmark */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="font-serif text-lg sm:text-xl tracking-tight text-[#1C1917] hover:opacity-75 transition-opacity flex items-baseline gap-1 cursor-pointer"
        >
          <span className="font-bold">THE 100</span>
        </button>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onNavigateExplore}
            className="text-xs sm:text-sm font-medium tracking-wide text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer py-1"
          >
            Explore
          </button>

          {/* Clean Segmented Language Switcher */}
          <div className="flex items-center bg-[#EAE8E3] p-0.5 rounded-md">
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer rounded ${
                languageMode === 'en'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('en_cn')}
              className={`px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer rounded ${
                languageMode === 'en_cn'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              EN+中
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
