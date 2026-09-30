import React from 'react';
import { WordEntry, LanguageMode } from '../types';

interface WordCardProps {
  word: WordEntry;
  languageMode: LanguageMode;
  onClick: () => void;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  languageMode,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left bg-white border border-[#E7E5E0] p-5 sm:p-6 transition-all duration-200 hover:border-[#1C1917] hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between min-h-[140px] sm:min-h-[150px]"
    >
      <div>
        {/* Top: Word and Number Index */}
        <div className="flex items-baseline justify-between mb-1.5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] group-hover:text-black transition-colors">
            {word.word}
          </h3>
          <span className="font-mono text-[11px] text-[#A8A29E] tabular-nums">
            {String(word.number).padStart(3, '0')}
          </span>
        </div>

        {/* Part of Speech */}
        <p className="text-xs text-[#78716C] mb-3 font-mono lowercase tracking-wide">
          {word.partOfSpeech}
        </p>

        {/* Curiosity Teaser / Hook */}
        <p className="text-xs sm:text-sm text-[#44403C] font-serif italic line-clamp-2">
          {languageMode === 'en_cn' && word.teaserCn
            ? word.teaserCn
            : word.teaser}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <span className="text-[11px] uppercase tracking-wider text-[#A8A29E] group-hover:text-[#1C1917] transition-colors font-medium">
          Open →
        </span>
      </div>
    </button>
  );
};
