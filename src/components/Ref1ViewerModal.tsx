import React, { useState, useEffect } from 'react';
import { X, Search, ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { DOCUMENT_METADATA, DOCUMENT_PAGES, DOCUMENT_SECTIONS } from '../data/refDocument';

interface Ref1ViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const Ref1ViewerModal: React.FC<Ref1ViewerModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'text' | 'sections' | 'pdf'>('text');

  useEffect(() => {
    if (initialPage && initialPage >= 1 && initialPage <= 8) {
      setCurrentPage(initialPage);
      setActiveTab('text');
    }
  }, [initialPage, isOpen]);

  if (!isOpen) return null;

  const pageData = DOCUMENT_PAGES.find((p) => p.pageNumber === currentPage) || DOCUMENT_PAGES[0];

  const highlightMatches = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-[var(--accent)] text-[var(--bg)] px-1 rounded-xs font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[92vh] bg-[var(--bg)] text-[var(--ink)] border border-[var(--border)] rounded-xs shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[var(--border)] bg-white/2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-editorial text-xs text-[var(--accent)] font-semibold">
              [REFERENCE]
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-sans-editorial text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--ink)]">
                  {DOCUMENT_METADATA.title}
                </h2>
                <span className="font-mono-editorial text-[10px] text-[var(--ink-dim)]">
                  [8 PAGES // 198–205]
                </span>
              </div>
              <p className="font-mono-editorial text-[11px] text-[var(--ink-dim)]">
                {DOCUMENT_METADATA.authors} · MDPI Int. Med. Educ.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono-editorial text-xs">
            <a
              href={DOCUMENT_METADATA.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] transition-colors rounded-xs flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">[ORIGINAL PDF]</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors rounded-xs cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View mode toggle & Search */}
        <div className="px-6 py-3 border-b border-[var(--border)] bg-black/20 flex flex-wrap items-center justify-between gap-3 font-mono-editorial text-xs">
          {/* Tabs */}
          <div className="flex items-center gap-1 border border-[var(--border)] p-0.5 rounded-xs">
            <button
              onClick={() => setActiveTab('text')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                activeTab === 'text'
                  ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
              }`}
            >
              PAGE BY PAGE
            </button>
            <button
              onClick={() => setActiveTab('sections')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                activeTab === 'sections'
                  ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
              }`}
            >
              SECTIONS (TOC)
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                activeTab === 'pdf'
                  ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
              }`}
            >
              EMBEDDED PDF
            </button>
          </div>

          {/* Search within document */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[var(--ink-dim)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH IN REFERENCE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white/3 border border-[var(--border)] text-[var(--ink)] focus:outline-hidden focus:border-[var(--accent)] rounded-xs transition-all font-mono-editorial"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--ink-dim)] hover:text-[var(--ink)] text-xs cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {activeTab === 'text' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Page Navigator bar */}
              <div className="px-6 py-2 border-b border-[var(--border)] bg-white/1 flex items-center justify-between font-mono-editorial text-xs">
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {DOCUMENT_PAGES.map((p) => (
                    <button
                      key={p.pageNumber}
                      onClick={() => setCurrentPage(p.pageNumber)}
                      className={`px-2.5 py-1 border transition-all shrink-0 cursor-pointer rounded-xs ${
                        currentPage === p.pageNumber
                          ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10 font-bold'
                          : 'border-[var(--border)] text-[var(--ink-dim)] hover:text-[var(--ink)]'
                      }`}
                    >
                      P.{p.pageNumber} <span className="text-[10px] opacity-60">({p.articlePage})</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((c) => Math.max(1, c - 1))}
                    className="p-1 border border-[var(--border)] hover:border-[var(--accent)] disabled:opacity-20 cursor-pointer rounded-xs"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[var(--ink-dim)] text-xs">
                    {currentPage} / {DOCUMENT_METADATA.totalPages}
                  </span>
                  <button
                    disabled={currentPage >= 8}
                    onClick={() => setCurrentPage((c) => Math.min(8, c + 1))}
                    className="p-1 border border-[var(--border)] hover:border-[var(--accent)] disabled:opacity-20 cursor-pointer rounded-xs"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Page Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-black/40">
                <div className="max-w-3xl mx-auto border border-[var(--border)] p-6 sm:p-10 bg-[var(--bg)] rounded-xs shadow-xl space-y-6">
                  <div className="pb-4 border-b border-[var(--border)] flex items-center justify-between font-mono-editorial text-xs">
                    <span className="text-[var(--accent)] tracking-widest font-semibold uppercase">
                      {pageData.title}
                    </span>
                    <span className="text-[var(--ink-dim)]">
                      ARTICLE P.{pageData.articlePage}
                    </span>
                  </div>

                  {/* Section badges on this page */}
                  <div className="flex flex-wrap gap-2">
                    {pageData.sections.map((sec, idx) => (
                      <span
                        key={idx}
                        className="font-mono-editorial text-[11px] px-2.5 py-1 border border-[var(--border)] bg-white/2 text-[var(--ink-dim)] rounded-xs"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <div className="font-sans-editorial text-sm sm:text-base leading-relaxed text-[var(--ink)]/90 whitespace-pre-wrap">
                    {highlightMatches(pageData.content, searchQuery)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sections' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-black/40">
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOCUMENT_SECTIONS.map((sec) => (
                  <div
                    key={sec.id}
                    onClick={() => {
                      setCurrentPage(sec.pageNumber);
                      setActiveTab('text');
                    }}
                    className="p-5 border border-[var(--border)] hover:border-[var(--accent)] bg-white/2 hover:bg-white/4 transition-all cursor-pointer rounded-xs group"
                  >
                    <div className="flex items-center justify-between mb-2 font-mono-editorial text-[11px]">
                      <span className="text-[var(--accent)] group-hover:underline">
                        PAGE 0{sec.pageNumber} // P.{sec.articlePage}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ink-dim)] group-hover:text-[var(--accent)]" />
                    </div>
                    <h4 className="font-sans-editorial font-semibold text-sm text-[var(--ink)] mb-2">
                      {sec.title}
                    </h4>
                    <p className="font-sans-editorial text-xs text-[var(--ink-dim)] leading-relaxed">
                      {sec.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pdf' && (
            <div className="flex-1 w-full h-full bg-black flex flex-col">
              <iframe
                src={`${DOCUMENT_METADATA.pdfPath}#page=${currentPage}`}
                title="Ref.1 PDF"
                className="w-full flex-1 border-0"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
