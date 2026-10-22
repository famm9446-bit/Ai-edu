export interface Citation {
  page?: number;
  section?: string;
  rawText?: string;
}

export interface ParsedMessage {
  type: 'answer' | 'summary' | 'refusal' | 'generic';
  title?: string;
  body: string;
  source?: string;
  pageNumber?: number;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isUnsupportedRefusal?: boolean;
  citation?: Citation;
  parsed?: ParsedMessage;
}

export type SupportedLanguage = 'en' | 'ar';
