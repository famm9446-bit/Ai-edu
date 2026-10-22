import React, { useState, useRef, useEffect } from 'react';
import { Send, BookOpen, Layers, ShieldCheck, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { ChatMessage } from './components/ChatMessage';
import { Ref1ViewerModal } from './components/Ref1ViewerModal';
import { QuickSummarizerModal } from './components/QuickSummarizerModal';
import { Message, SupportedLanguage } from './types/chat';
import { parseAssistantMessage } from './utils/messageParser';

const EDITORIAL_SUGGESTED_QUERIES = [
  { label: 'What is prompt engineering?', query: 'What is prompt engineering?' },
  { label: 'What are structured prompts?', query: 'What are structured prompts and what are their four components?' },
  { label: 'Summarize educational applications', query: 'Summarize the potential educational applications of generative language models.' },
  { label: 'What are the 4 prompting levels?', query: 'Explain the 4 prompting levels described in the reference.' },
  { label: 'How did ChatGPT perform on USMLE exams?', query: 'How did ChatGPT perform on the USMLE licensing exams according to the paper?' },
  { label: 'ما هي الهندسة التلقينية في التعليم الطبي؟ (عربي)', query: 'ما هي الهندسة التلقينية في التعليم الطبي بحسب المرجع؟' },
  { label: 'What are the treatments for malaria? [Out of Scope Test]', query: 'What are the treatments for malaria?' },
];

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  // Modals
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerPage, setViewerPage] = useState<number>(1);
  const [isSummarizerOpen, setIsSummarizerOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  const handleOpenCitationPage = (pageNumber: number) => {
    setViewerPage(pageNumber);
    setIsViewerOpen(true);
  };

  const handleResetChat = () => {
    setMessages([]);
    setInput('');
  };

  const sendMessage = async (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query || isLoading) return;

    const isArabic = /[\u0600-\u06FF]/.test(query);
    const activeLang = isArabic ? 'ar' : language;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.slice(-4).map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          language: activeLang,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned error status ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || '';
      const parsed = parseAssistantMessage(replyText);

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: replyText,
        timestamp: Date.now(),
        parsed: parsed,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: Message = {
        id: `assistant-err-${Date.now()}`,
        role: 'assistant',
        content: `Information Not Found in Ref.1.\n\nThe uploaded reference does not contain sufficient information to answer this question.`,
        timestamp: Date.now(),
        parsed: {
          type: 'refusal',
          body: `Information Not Found in Ref.1.\n\nThe uploaded reference does not contain sufficient information to answer this question.`,
        },
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const isHeroActive = messages.length === 0;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col font-sans-editorial selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      {/* Editorial Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenViewer={(page = 1) => {
          setViewerPage(page);
          setIsViewerOpen(true);
        }}
        onOpenSummarizer={() => setIsSummarizerOpen(true)}
        onResetChat={handleResetChat}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-8 md:py-12 flex flex-col justify-between">
        {isHeroActive ? (
          /* Variation 6: Minimal Editorial Two-Column Hero */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start my-auto animate-in fade-in duration-300">
            {/* Left Column: Big Editorial Hero */}
            <div className="space-y-6">
              <h2 className="font-serif-editorial italic text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.92] text-[var(--ink)] tracking-tight">
                Prompt<br />
                Engineering<br />
                Medical Education.
              </h2>
              <p className="font-sans-editorial text-base sm:text-lg text-[var(--ink-dim)] max-w-xl leading-relaxed">
                An intelligent academic chatbot that answers questions and summarizes information strictly using Reference. All external or unsupported knowledge is systematically refused.
              </p>

              {/* Button Group */}
              <div className="pt-2 flex flex-wrap gap-3 font-mono-editorial text-xs">
                <button
                  onClick={() => {
                    setViewerPage(1);
                    setIsViewerOpen(true);
                  }}
                  className="px-5 py-3 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] transition-all rounded-xs flex items-center gap-2 cursor-pointer bg-transparent"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse Reference Document</span>
                </button>
                <button
                  onClick={() => setIsSummarizerOpen(true)}
                  className="px-5 py-3 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] transition-all rounded-xs flex items-center gap-2 cursor-pointer bg-transparent"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore Summaries</span>
                </button>
              </div>
            </div>

            {/* Right Column: Suggested Queries List with Grid Borders */}
            <div className="space-y-4">
              <div className="font-mono-editorial text-xs uppercase tracking-[0.15em] text-[var(--ink-dim)]">
                [SUGGESTED QUERIES]
              </div>

              <div className="flex flex-col bg-[var(--border)] border border-[var(--border)] rounded-xs overflow-hidden gap-[1px]">
                {EDITORIAL_SUGGESTED_QUERIES.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(item.query)}
                    className="p-4 sm:p-5 bg-[var(--bg)] hover:bg-white/4 text-left text-sm text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="font-sans-editorial tracking-wide">
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--border)] group-hover:text-[var(--accent)] transition-colors shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Active Conversational Stream */
          <div className="w-full max-w-4xl mx-auto space-y-4 pb-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] font-mono-editorial text-xs text-[var(--ink-dim)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>EXAMINING REFERENCE // SESSION ACTIVE</span>
              </div>
              <button
                onClick={handleResetChat}
                className="hover:text-[var(--ink)] transition-colors cursor-pointer text-[11px]"
              >
                [BACK TO HERO VIEW]
              </button>
            </div>

            <div className="space-y-4">
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  onOpenCitationPage={handleOpenCitationPage}
                />
              ))}

              {isLoading && (
                <div className="flex justify-start mb-8 animate-pulse">
                  <div className="p-4 border border-[var(--border)] bg-white/2 rounded-xs font-mono-editorial text-xs text-[var(--accent)] flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>SEARCHING & SEMANTICALLY VERIFYING ACROSS REFERENCE (8 PAGES)...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </main>

      {/* Variation 6 Footer & Input Container */}
      <footer className="w-full px-6 sm:px-12 md:px-16 pb-8 md:pb-12 pt-4 bg-[var(--bg)]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Minimal Editorial Input Container */}
          <div className="relative border border-[var(--border)] focus-within:border-[var(--accent)] bg-white/2 p-4 sm:p-5 rounded-xs transition-all">
            <textarea
              ref={inputRef}
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              dir={/[\u0600-\u06FF]/.test(input) ? 'rtl' : 'ltr'}
              placeholder={
                language === 'ar'
                  ? 'اسأل AI.edu...'
                  : 'Ask AI.edu'
              }
              className="w-full bg-transparent border-none text-[var(--ink)] font-sans-editorial text-base sm:text-lg resize-none outline-none placeholder:text-[var(--ink-dim)]/50 tracking-wide"
            />

            <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] mt-2">
              <div className="flex items-center gap-2 font-mono-editorial text-[11px] text-[var(--ink-dim)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>RESTRICTED FACTUAL BOUNDARIES · REFERENCE</span>
              </div>

              <button
                disabled={!input.trim() || isLoading}
                onClick={() => sendMessage()}
                className="font-mono-editorial text-xs uppercase tracking-wider px-4 py-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] disabled:opacity-30 disabled:hover:border-[var(--border)] disabled:hover:text-[var(--ink)] transition-all rounded-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>[SUBMIT]</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* System status row below the textarea */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono-editorial text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dim)]">
            <div className="flex items-center gap-2">
              <span>System Ready / Restricted Source Material</span>
              <span className="text-[var(--border)]">/</span>
              <span className="text-[var(--accent)] font-semibold">[VOL. 02 // INT. MED. EDUC. 2023]</span>
            </div>
            <div className="tracking-normal">2024 © ACADEMIC ASSISTANT // REFERENCE GROUNDED</div>
          </div>
        </div>
      </footer>

      {/* Document Viewer Modal */}
      <Ref1ViewerModal
        isOpen={isViewerOpen}
        initialPage={viewerPage}
        onClose={() => setIsViewerOpen(false)}
      />

      {/* Quick Summarizer Modal */}
      <QuickSummarizerModal
        isOpen={isSummarizerOpen}
        onClose={() => setIsSummarizerOpen(false)}
        onSelectPrompt={(p) => sendMessage(p)}
      />
    </div>
  );
}
