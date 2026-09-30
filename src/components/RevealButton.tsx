import React from 'react';

interface RevealButtonProps {
  isRevealed: boolean;
  onReveal: () => void;
}

export const RevealButton: React.FC<RevealButtonProps> = ({
  isRevealed,
  onReveal,
}) => {
  if (isRevealed) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={onReveal}
      className="inline-flex items-center justify-center gap-2 bg-[#1C1917] text-white px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-[#292524] active:scale-[0.99] cursor-pointer"
    >
      <span>REVEAL</span>
      <span className="font-serif">→</span>
    </button>
  );
};
