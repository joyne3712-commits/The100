export type LanguageMode = 'en' | 'en_cn';

export interface UsageItem {
  phrase: string;
  meaning: string;
  meaningCn?: string;
  note?: string;
  noteCn?: string;
}

export interface PatternItem {
  pattern: string;
  collocations: string[];
  explanation?: string;
  explanationCn?: string;
}

export interface ExampleItem {
  sentence: string;
  translationCn?: string;
  context?: string;
  speaker?: string;
}

export interface ChallengeItem {
  scenarioEn: string;
  scenarioCn: string;
  targetConcept: string;
}

export interface WordEntry {
  id: string;
  number: number; // 1 to 100
  word: string;
  partOfSpeech: string;
  pronunciation?: string;
  teaser: string;
  teaserCn?: string;
  basicMeaning: string;
  basicMeaningCn: string;
  additionalUsages: UsageItem[];
  patterns: PatternItem[];
  examples: ExampleItem[];
  challenge: ChallengeItem;
  answer: string;
  explanation: string;
  explanationCn: string;
}
