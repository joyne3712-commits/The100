import React from 'react';
import { LanguageMode, WordEntry } from '../types';
import { LanguageModeSelector } from './LanguageModeSelector';

interface HomeProps {
  onExplore: () => void;
  languageMode: LanguageMode;
  onSelectLanguageMode: (mode: LanguageMode) => void;
  featuredWords: WordEntry[];
  onSelectWord: (wordId: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onExplore,
  languageMode,
  onSelectLanguageMode,
  featuredWords,
  onSelectWord,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Editorial Hero Lockup */}
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-[#1C1917] mb-4">
          THE 100
        </h1>

        <p className="font-serif text-lg sm:text-2xl text-[#44403C] font-normal leading-relaxed max-w-xl mx-auto mb-8">
          100 English words you know — but probably don’t fully use.
        </p>

        {/* Supporting Copy */}
        <div className="text-sm sm:text-base text-[#57534E] leading-relaxed space-y-4 max-w-xl mx-auto text-left sm:text-justify border-t border-b border-[#E7E5E0] py-8 my-8 font-serif">
          <p>
            You probably know thousands of English words.
          </p>
          <p>
            But knowing a word and actually being able to use it are two different things.
          </p>
          <p>
            THE 100 is a curated collection of everyday English words that have more meanings, patterns, and uses than you might think.
          </p>
          <p className="italic text-[#1C1917]">
            Explore them. See how they actually work. And discover the meanings you probably missed.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mt-8 mb-14">
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-3 bg-[#1C1917] text-white px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[#292524] hover:shadow-md active:scale-[0.99] cursor-pointer"
          >
            <span>EXPLORE THE 100</span>
            <span className="font-serif text-base">→</span>
          </button>
        </div>

        {/* Language Mode Selector */}
        <div className="pt-4 pb-2">
          <LanguageModeSelector
            currentMode={languageMode}
            onSelectMode={onSelectLanguageMode}
          />
        </div>
      </section>

      {/* Editorial Teaser Grid */}
      <section className="mt-16 pt-12 border-t border-[#E7E5E0]">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xs uppercase tracking-widest text-[#78716C] font-sans font-semibold">
            Featured Curations
          </h2>
          <button
            type="button"
            onClick={onExplore}
            className="text-xs text-[#78716C] hover:text-[#1C1917] transition-colors font-medium"
          >
            View all 100 →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {featuredWords.slice(0, 6).map((word) => (
            <button
              key={word.id}
              type="button"
              onClick={() => onSelectWord(word.id)}
              className="bg-white border border-[#E7E5E0] p-4 text-left transition-all hover:border-[#1C1917] hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-serif font-bold text-lg text-[#1C1917]">
                  {word.word}
                </span>
                <span className="font-mono text-[10px] text-[#A8A29E]">
                  {String(word.number).padStart(3, '0')}
                </span>
              </div>
              <p className="text-xs text-[#78716C] italic font-serif truncate">
                {languageMode === 'en_cn' && word.teaserCn
                  ? word.teaserCn
                  : word.teaser}
              </p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
