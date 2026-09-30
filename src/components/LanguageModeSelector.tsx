import React from 'react';
import { LanguageMode } from '../types';

interface LanguageModeSelectorProps {
  currentMode: LanguageMode;
  onSelectMode: (mode: LanguageMode) => void;
  showHeading?: boolean;
}

export const LanguageModeSelector: React.FC<LanguageModeSelectorProps> = ({
  currentMode,
  onSelectMode,
  showHeading = true,
}) => {
  return (
    <div className="w-full">
      {showHeading && (
        <p className="text-xs uppercase tracking-widest text-[#78716C] mb-4 text-center font-medium">
          How do you want to explore?
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
        {/* ENGLISH ONLY CARD */}
        <button
          type="button"
          onClick={() => onSelectMode('en')}
          className={`group relative text-left p-5 transition-all duration-200 border cursor-pointer ${
            currentMode === 'en'
              ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
              : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#A8A29E]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                className={`text-sm font-semibold tracking-wider uppercase mb-1 font-sans ${
                  currentMode === 'en' ? 'text-white' : 'text-[#1C1917]'
                }`}
              >
                ENGLISH ONLY
              </div>
              <p
                className={`text-xs ${
                  currentMode === 'en' ? 'text-[#D6D3D1]' : 'text-[#78716C]'
                }`}
              >
                Challenge yourself.
              </p>
            </div>
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                currentMode === 'en'
                  ? 'border-white bg-white'
                  : 'border-[#D6D3D1] group-hover:border-[#78716C]'
              }`}
            >
              {currentMode === 'en' && (
                <div className="w-2 h-2 rounded-full bg-[#1C1917]" />
              )}
            </div>
          </div>
        </button>

        {/* ENGLISH + CHINESE CARD */}
        <button
          type="button"
          onClick={() => onSelectMode('en_cn')}
          className={`group relative text-left p-5 transition-all duration-200 border cursor-pointer ${
            currentMode === 'en_cn'
              ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
              : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#A8A29E]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                className={`text-sm font-semibold tracking-wider uppercase mb-1 font-sans ${
                  currentMode === 'en_cn' ? 'text-white' : 'text-[#1C1917]'
                }`}
              >
                ENGLISH + 中文
              </div>
              <p
                className={`text-xs ${
                  currentMode === 'en_cn' ? 'text-[#D6D3D1]' : 'text-[#78716C]'
                }`}
              >
                Keep the meaning close.
              </p>
            </div>
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                currentMode === 'en_cn'
                  ? 'border-white bg-white'
                  : 'border-[#D6D3D1] group-hover:border-[#78716C]'
              }`}
            >
              {currentMode === 'en_cn' && (
                <div className="w-2 h-2 rounded-full bg-[#1C1917]" />
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
