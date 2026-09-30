import React from 'react';
import { ChallengeItem, LanguageMode } from '../types';
import { RevealButton } from './RevealButton';

interface ChallengeSectionProps {
  challenge: ChallengeItem;
  answer: string;
  explanation: string;
  explanationCn: string;
  languageMode: LanguageMode;
  isRevealed: boolean;
  onReveal: () => void;
}

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  challenge,
  answer,
  explanation,
  explanationCn,
  languageMode,
  isRevealed,
  onReveal,
}) => {
  return (
    <section className="mb-14 pt-4">
      {/* Editorial Section Header */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-widest text-[#78716C] font-sans font-semibold mb-1">
          The Key Interaction
        </h3>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
          Which one would you say?
        </h2>
      </div>

      <div className="bg-[#F6F5F2] border border-[#E7E5E0] p-6 sm:p-8 transition-all">
        {/* Situation prompt */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-[#78716C] mb-2 font-medium">
            You want to say:
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium leading-snug">
            {languageMode === 'en_cn' ? (
              <span>“{challenge.scenarioCn}”</span>
            ) : (
              <span>“{challenge.scenarioEn}”</span>
            )}
          </p>

          {languageMode === 'en_cn' && (
            <p className="mt-2 text-xs sm:text-sm text-[#78716C] italic font-serif">
              Context: {challenge.scenarioEn}
            </p>
          )}
        </div>

        {/* Action / Pause state */}
        {!isRevealed ? (
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E7E5E0]">
            <p className="text-xs sm:text-sm text-[#78716C] italic font-serif">
              Take a second.
            </p>
            <RevealButton isRevealed={isRevealed} onReveal={onReveal} />
          </div>
        ) : (
          <div className="pt-6 border-t border-[#E7E5E0] animate-fadeIn space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#78716C] mb-1.5 font-medium">
                Natural way to say it:
              </p>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] bg-white p-4 border border-[#E7E5E0]">
                “{answer}”
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#57534E] leading-relaxed pt-2">
              <p className="mb-1">{explanation}</p>
              {languageMode === 'en_cn' && explanationCn && (
                <p className="text-xs text-[#78716C]">{explanationCn}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
