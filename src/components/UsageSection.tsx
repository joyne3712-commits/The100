import React from 'react';
import { UsageItem, LanguageMode } from '../types';

interface UsageSectionProps {
  usages: UsageItem[];
  languageMode: LanguageMode;
}

export const UsageSection: React.FC<UsageSectionProps> = ({
  usages,
  languageMode,
}) => {
  return (
    <section className="mb-10">
      <h3 className="text-xs uppercase tracking-widest text-[#78716C] mb-4 font-sans font-semibold">
        The Word Has More to Offer
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {usages.map((usage, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E7E5E0] p-4 sm:p-5 flex flex-col justify-between"
          >
            <div>
              <div className="font-serif text-lg font-medium text-[#1C1917] mb-1">
                {usage.phrase}
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {usage.meaning}
              </p>
            </div>

            {languageMode === 'en_cn' && usage.meaningCn && (
              <div className="mt-3 pt-2.5 border-t border-[#F5F5F4] text-xs text-[#78716C]">
                {usage.meaningCn}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
