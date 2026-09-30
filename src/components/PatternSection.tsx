import React from 'react';
import { PatternItem, LanguageMode } from '../types';

interface PatternSectionProps {
  patterns: PatternItem[];
  languageMode: LanguageMode;
}

export const PatternSection: React.FC<PatternSectionProps> = ({
  patterns,
}) => {
  return (
    <section className="mb-10">
      <h3 className="text-xs uppercase tracking-widest text-[#78716C] mb-4 font-sans font-semibold">
        Patterns You Should Know
      </h3>

      <div className="space-y-4">
        {patterns.map((pat, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E7E5E0] p-4 sm:p-5"
          >
            <div className="font-mono text-xs sm:text-sm font-medium text-[#1C1917] pb-3 border-b border-[#F5F5F4] flex items-center gap-2">
              <span className="text-[#A8A29E]">↳</span>
              <span>{pat.pattern}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {pat.collocations.map((colloc, cIdx) => (
                <span
                  key={cIdx}
                  className="inline-block text-xs sm:text-sm text-[#44403C] bg-[#F5F5F3] px-3 py-1.5 font-sans"
                >
                  {colloc}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
