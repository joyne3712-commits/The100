import React from 'react';
import { ExampleItem, LanguageMode } from '../types';

interface ExampleSectionProps {
  examples: ExampleItem[];
  languageMode: LanguageMode;
}

export const ExampleSection: React.FC<ExampleSectionProps> = ({
  examples,
  languageMode,
}) => {
  return (
    <section className="mb-10">
      <h3 className="text-xs uppercase tracking-widest text-[#78716C] mb-4 font-sans font-semibold">
        In Real Life
      </h3>

      <div className="space-y-3">
        {examples.map((example, idx) => (
          <div
            key={idx}
            className="bg-white border-l-2 border-[#1C1917] border-y border-r border-y-[#E7E5E0] border-r-[#E7E5E0] p-4 sm:p-5"
          >
            <p className="font-serif text-base sm:text-lg text-[#1C1917] leading-relaxed">
              “{example.sentence}”
            </p>

            {languageMode === 'en_cn' && example.translationCn && (
              <p className="mt-2 text-xs sm:text-sm text-[#78716C]">
                {example.translationCn}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
