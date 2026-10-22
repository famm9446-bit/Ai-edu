import React from 'react';
import { BookOpen, FileText, Globe, RefreshCw, ExternalLink } from 'lucide-react';
import { SupportedLanguage } from '../types/chat';
import { DOCUMENT_METADATA } from '../data/refDocument';
import { AiEduLogo } from './AiEduLogo';

interface HeaderProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenViewer: (page?: number) => void;
  onOpenSummarizer: () => void;
  onResetChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenViewer,
  onOpenSummarizer,
  onResetChat,
}) => {
  return (
    <header className="w-full px-6 sm:px-12 md:px-16 py-5 md:py-6 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left edge Logo: Powerful Violet AI edu */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            onClick={() => onOpenViewer(1)}
            className="cursor-pointer"
            title="Browse Reference Document"
          >
            <AiEduLogo size="md" showSubtitle={true} />
          </div>
        </div>

        {/* Right status & controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden lg:inline-block font-mono-editorial text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dim)]">
            Strictly Grounded Reference System
          </span>

          <div className="h-4 w-[1px] bg-[var(--border)] hidden lg:block" />

          {/* Browse Ref.1 Document */}
          <button
            onClick={() => onOpenViewer()}
            className="px-3 sm:px-4 py-2 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] font-mono-editorial text-[11px] tracking-wider rounded-xs bg-transparent transition-all flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reference</span>
            <span className="text-[var(--ink-dim)] text-[10px]">[8P]</span>
          </button>

          {/* Summaries */}
          <button
            onClick={onOpenSummarizer}
            className="px-3 sm:px-4 py-2 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] font-mono-editorial text-[11px] tracking-wider rounded-xs bg-transparent transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Summaries</span>
          </button>

          {/* Direct PDF Link */}
          <a
            href={DOCUMENT_METADATA.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex p-2 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink-dim)] hover:text-[var(--ink)] rounded-xs transition-colors"
            title="Open original PDF"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Language Switcher */}
          <div className="flex items-center border border-[var(--border)] rounded-xs overflow-hidden font-mono-editorial text-[11px]">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                language === 'ar'
                  ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
              }`}
            >
              عربي
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={onResetChat}
            className="p-2 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink-dim)] hover:text-[var(--accent)] rounded-xs transition-colors cursor-pointer"
            title="Reset conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
