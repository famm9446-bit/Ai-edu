import React, { useState } from 'react';
import { Copy, Check, BookOpen, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Message } from '../types/chat';
import { parseAssistantMessage } from '../utils/messageParser';

interface ChatMessageProps {
  message: Message;
  onOpenCitationPage: (pageNumber: number) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onOpenCitationPage,
}) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isArabic = /[\u0600-\u06FF]/.test(message.content);

  if (isUser) {
    return (
      <div className="flex justify-end mb-8 w-full animate-in fade-in duration-200">
        <div className="max-w-2xl w-full flex flex-col items-end">
          <div className="flex items-center gap-2 mb-2 font-mono-editorial text-[10px] uppercase tracking-widest text-[var(--ink-dim)]">
            <span>[PROMPTER]</span>
          </div>
          <div
            dir={isArabic ? 'rtl' : 'ltr'}
            className="w-full sm:w-auto px-5 py-4 rounded-xs bg-white/3 border border-[var(--border)] text-[var(--ink)] font-sans-editorial text-sm sm:text-base leading-relaxed tracking-wide"
          >
            {message.content}
          </div>
        </div>
      </div>
    );
  }

  // Assistant message
  const parsed = message.parsed || parseAssistantMessage(message.content);

  return (
    <div className="flex justify-start mb-10 w-full animate-in fade-in duration-200">
      <div className="max-w-3xl w-full border border-[var(--border)] bg-black/40 rounded-xs overflow-hidden backdrop-blur-xs">
        {/* Editorial Top Status Bar */}
        <div className="px-5 py-3 border-b border-[var(--border)] bg-white/2 flex items-center justify-between font-mono-editorial text-[11px] tracking-wider text-[var(--ink-dim)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
            <span className="uppercase text-[var(--ink)] font-bold tracking-wider">AI.EDU</span>
            <span className="text-[var(--border)]">/</span>
            <span className="hidden sm:inline">Reference Grounded</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 hover:text-[var(--ink)] transition-colors cursor-pointer text-[10px]"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[var(--accent)]" />
                <span className="text-[var(--accent)] font-semibold">[COPIED]</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>[COPY]</span>
              </>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div
          dir={isArabic ? 'rtl' : 'ltr'}
          className="p-6 sm:p-8 space-y-5"
        >
          {parsed.type === 'refusal' ? (
            /* Case 1: Refusal (Rule C - Information Not Found in Ref.1) */
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono-editorial text-xs text-rose-400 tracking-widest uppercase">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>[INFORMATION NOT FOUND IN REFERENCE]</span>
              </div>
              <div className="p-4 rounded-xs border border-rose-500/20 bg-rose-950/20 text-rose-200 font-sans-editorial text-sm leading-relaxed whitespace-pre-wrap">
                {parsed.body}
              </div>
              <p className="font-mono-editorial text-[11px] text-[var(--ink-dim)] tracking-wide">
                The requested information is not available in the provided reference.
              </p>
            </div>
          ) : parsed.type === 'summary' ? (
            /* Case 2: Summary (Rule E) */
            <div className="space-y-4">
              {parsed.title && (
                <div className="pb-3 border-b border-[var(--border)]">
                  <span className="font-mono-editorial text-[10px] uppercase tracking-widest text-[var(--accent)] block mb-1">
                    [SUMMARY DOCUMENT]
                  </span>
                  <h3 className="font-serif-editorial italic text-2xl sm:text-3xl font-semibold text-[var(--ink)] leading-tight">
                    {parsed.title}
                  </h3>
                </div>
              )}
              <div className="font-sans-editorial text-sm sm:text-base leading-relaxed text-[var(--ink)]/90 whitespace-pre-wrap space-y-3 font-normal">
                {parsed.body}
              </div>

              {parsed.source && (
                <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 font-mono-editorial text-xs">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{parsed.source}</span>
                  </div>

                  {parsed.pageNumber && (
                    <button
                      onClick={() => onOpenCitationPage(parsed.pageNumber!)}
                      className="px-3 py-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] transition-all cursor-pointer rounded-xs flex items-center gap-1.5 text-[11px]"
                    >
                      <BookOpen className="w-3 h-3 text-[var(--accent)]" />
                      <span>[PAGE {parsed.pageNumber} IN REFERENCE]</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Case 3: Supported Answer (Rule A) */
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono-editorial text-xs text-[var(--accent)] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>[VERIFIED ANSWER]</span>
              </div>

              <div className="font-sans-editorial text-sm sm:text-base leading-relaxed text-[var(--ink)] whitespace-pre-wrap space-y-3">
                {parsed.body}
              </div>

              {parsed.source && (
                <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 font-mono-editorial text-xs">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{parsed.source}</span>
                  </div>

                  {parsed.pageNumber && (
                    <button
                      onClick={() => onOpenCitationPage(parsed.pageNumber!)}
                      className="px-3 py-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] transition-all cursor-pointer rounded-xs flex items-center gap-1.5 text-[11px]"
                    >
                      <BookOpen className="w-3 h-3 text-[var(--accent)]" />
                      <span>[INSPECT PAGE {parsed.pageNumber}]</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
