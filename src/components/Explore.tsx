import React, { useState, useMemo } from 'react';
import { WordEntry, LanguageMode } from '../types';
import { WordCard } from './WordCard';

interface ExploreProps {
  words: WordEntry[];
  languageMode: LanguageMode;
  onSelectWord: (wordId: string) => void;
}

export const Explore: React.FC<ExploreProps> = ({
  words,
  languageMode,
  onSelectWord,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Get list of available starting letters
  const availableLetters = useMemo(() => {
    const letterSet = new Set<string>();
    words.forEach(w => {
      const char = w.word.charAt(0).toUpperCase();
      if (char) letterSet.add(char);
    });
    return Array.from(letterSet).sort();
  }, [words]);

  // Filtered words
  const filteredWords = useMemo(() => {
    return words.filter(word => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        word.word.toLowerCase().includes(query) ||
        word.partOfSpeech.toLowerCase().includes(query) ||
        word.teaser.toLowerCase().includes(query) ||
        (word.teaserCn && word.teaserCn.includes(query)) ||
        word.basicMeaning.toLowerCase().includes(query);

      const matchesLetter =
        !selectedLetter || word.word.toUpperCase().startsWith(selectedLetter);

      return matchesSearch && matchesLetter;
    });
  }, [words, searchQuery, selectedLetter]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] mb-2">
          THE 100
        </h1>
        <p className="font-serif text-base sm:text-lg text-[#78716C] italic">
          100 words. More than you think.
        </p>
      </div>

      {/* Controls: Search Bar & Alphabetical Bar */}
      <div className="space-y-4 mb-8">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any word, usage, or phrase..."
            className="w-full bg-white border border-[#E7E5E0] focus:border-[#1C1917] focus:outline-none px-4 py-3.5 text-sm placeholder:text-[#A8A29E] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917] uppercase tracking-wider font-semibold cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Alphabetical navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs font-mono">
          <button
            type="button"
            onClick={() => setSelectedLetter(null)}
            className={`px-2.5 py-1.5 transition-colors cursor-pointer shrink-0 ${
              selectedLetter === null
                ? 'bg-[#1C1917] text-white font-semibold'
                : 'bg-white border border-[#E7E5E0] text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            ALL ({words.length})
          </button>

          {availableLetters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() =>
                setSelectedLetter(selectedLetter === letter ? null : letter)
              }
              className={`px-2.5 py-1.5 transition-colors cursor-pointer shrink-0 ${
                selectedLetter === letter
                  ? 'bg-[#1C1917] text-white font-semibold'
                  : 'bg-white border border-[#E7E5E0] text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Count readout */}
      <div className="flex items-center justify-between text-xs text-[#78716C] mb-6 pb-2 border-b border-[#E7E5E0]">
        <span>
          Showing {filteredWords.length} of {words.length} entries
        </span>
        {selectedLetter && (
          <span className="font-mono">Filtering by Letter: {selectedLetter}</span>
        )}
      </div>

      {/* Word Grid / List */}
      {filteredWords.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredWords.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              languageMode={languageMode}
              onClick={() => onSelectWord(word.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#E7E5E0] p-12 text-center my-8">
          <p className="font-serif text-lg text-[#1C1917] mb-2">
            No words matched “{searchQuery}”
          </p>
          <p className="text-xs text-[#78716C] mb-4">
            Try adjusting your search query or clear the filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedLetter(null);
            }}
            className="text-xs uppercase tracking-wider font-semibold text-[#1C1917] underline hover:no-underline cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
};
