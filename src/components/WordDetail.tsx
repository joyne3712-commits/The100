import React, { useState, useEffect } from 'react';
import { WordEntry, LanguageMode } from '../types';
import { UsageSection } from './UsageSection';
import { PatternSection } from './PatternSection';
import { ExampleSection } from './ExampleSection';
import { ChallengeSection } from './ChallengeSection';
import { NextWord } from './NextWord';
import { getNextWord } from '../data/words';

interface WordDetailProps {
  word: WordEntry;
  languageMode: LanguageMode;
  onBackToExplore: () => void;
  onSelectWord: (wordId: string) => void;
}

export const WordDetail: React.FC<WordDetailProps> = ({
  word,
  languageMode,
  onBackToExplore,
  onSelectWord,
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Reset revealed state when word changes
  useEffect(() => {
    setIsRevealed(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [word.id]);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const nextWordEntry = getNextWord(word.id);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E7E5E0]">
        <button
          type="button"
          onClick={onBackToExplore}
          className="text-xs uppercase tracking-widest font-semibold text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
        >
          <span>←</span>
          <span>BACK TO THE 100</span>
        </button>

        <span className="font-mono text-xs text-[#A8A29E] tabular-nums tracking-wider">
          {String(word.number).padStart(3, '0')} / 100
        </span>
      </div>

      {/* Hero Word Title Header */}
      <header className="mb-10">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-2">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#1C1917]">
              {word.word}
            </h1>
            <button
              type="button"
              onClick={handleSpeak}
              title="Listen to pronunciation"
              className={`p-2 transition-colors cursor-pointer text-[#78716C] hover:text-[#1C1917] ${
                isPlayingAudio ? 'text-[#1C1917] scale-110' : ''
              }`}
              aria-label="Play pronunciation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </button>
          </div>

          {word.pronunciation && (
            <span className="font-mono text-xs sm:text-sm text-[#78716C]">
              {word.pronunciation}
            </span>
          )}
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-[#78716C] mt-1">
          {word.partOfSpeech}
        </p>
      </header>

      {/* Section 1: YOU PROBABLY KNOW */}
      <section className="mb-10 p-5 bg-white border border-[#E7E5E0]">
        <h3 className="text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans font-semibold">
          You Probably Know
        </h3>
        <p className="font-serif text-base sm:text-lg text-[#1C1917]">
          {word.basicMeaning}
        </p>
        {languageMode === 'en_cn' && word.basicMeaningCn && (
          <p className="mt-1 text-xs sm:text-sm text-[#78716C]">
            基础含义：{word.basicMeaningCn}
          </p>
        )}
      </section>

      {/* Section 2: THE WORD HAS MORE TO OFFER */}
      <UsageSection
        usages={word.additionalUsages}
        languageMode={languageMode}
      />

      {/* Section 3: PATTERNS YOU SHOULD KNOW */}
      <PatternSection
        patterns={word.patterns}
        languageMode={languageMode}
      />

      {/* Section 4: IN REAL LIFE */}
      <ExampleSection
        examples={word.examples}
        languageMode={languageMode}
      />

      {/* Section 5: WHICH ONE WOULD YOU SAY? (Key learning interaction) */}
      <ChallengeSection
        challenge={word.challenge}
        answer={word.answer}
        explanation={word.explanation}
        explanationCn={word.explanationCn}
        languageMode={languageMode}
        isRevealed={isRevealed}
        onReveal={() => setIsRevealed(true)}
      />

      {/* Bottom: Next Word & Conclusion */}
      <NextWord
        nextWord={nextWordEntry}
        onSelectNextWord={() => onSelectWord(nextWordEntry.id)}
        onBackToExplore={onBackToExplore}
      />
    </article>
  );
};
