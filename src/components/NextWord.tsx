import React from 'react';
import { WordEntry } from '../types';

interface NextWordProps {
  nextWord: WordEntry;
  onSelectNextWord: () => void;
  onBackToExplore: () => void;
}

export const NextWord: React.FC<NextWordProps> = ({
  nextWord,
  onSelectNextWord,
  onBackToExplore,
}) => {
  return (
    <div className="pt-10 pb-16 border-t border-[#E7E5E0]">
      {/* Editorial conclusion note */}
      <div className="text-center mb-8">
        <p className="font-serif text-lg sm:text-xl text-[#1C1917] italic">
          You knew the word.
        </p>
        <p className="font-serif text-lg sm:text-xl text-[#78716C] italic">
          Now you know it a little better.
        </p>
      </div>

      {/* Navigation actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto">
        <button
          type="button"
          onClick={onBackToExplore}
          className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold text-[#78716C] hover:text-[#1C1917] px-5 py-3 border border-[#E7E5E0] hover:border-[#1C1917] transition-all text-center cursor-pointer"
        >
          ← BACK TO THE 100
        </button>

        <button
          type="button"
          onClick={onSelectNextWord}
          className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold text-white bg-[#1C1917] hover:bg-[#292524] px-6 py-3 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>NEXT WORD ({nextWord.word})</span>
          <span className="font-serif">→</span>
        </button>
      </div>
    </div>
  );
};
