import React from 'react';
import { X, Send, Layers } from 'lucide-react';

interface QuickSummarizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt: (promptText: string) => void;
}

interface SummaryItem {
  id: string;
  section: string;
  pages: string;
  title: string;
  description: string;
  prompt: string;
}

const SUMMARIES: SummaryItem[] = [
  {
    id: 'full',
    section: 'Full Document',
    pages: 'Pages 1–8',
    title: 'Complete Document Executive Summary',
    description: 'Overview of GLM evolution, medical education applications, prompting levels, pitfalls, cheating debates, and expert networks.',
    prompt: 'Summarize the complete Ref.1 document (Prompt Engineering in Medical Education) including main ideas, key sections, and conclusions.',
  },
  {
    id: 'section3',
    section: 'Section 3',
    pages: 'Page 2',
    title: 'Prompt Engineering Definition & Purpose',
    description: 'Systematic approach to designing inputs to guide GLMs, controlling length/style, and minimizing incorrect outputs.',
    prompt: 'Summarize Section 3 of Ref.1 regarding Prompt Engineering in Generative Language Models.',
  },
  {
    id: 'section4',
    section: 'Section 4',
    pages: 'Pages 2–3',
    title: 'Types of Prompts & Prompting Levels',
    description: 'Zero-shot vs Few-shot, Levels 1 to 4, the 4 components of Structured Prompts (Context, Request, Role, Output), and Iterative Prompts.',
    prompt: 'Summarize Section 4 of Ref.1 covering all Types of Prompts (zero-shot, few-shot, levels 1-4, structured prompts, iterative prompts).',
  },
  {
    id: 'section5',
    section: 'Section 5',
    pages: 'Pages 4–5',
    title: 'Bad Prompts & GLM Pitfalls',
    description: 'Confusing vs incorrect categories; mathematical prompts & "Think step by step"; logic puzzle failures; fake citations (Table 4).',
    prompt: 'Summarize Section 5 of Ref.1 regarding Bad Prompts, mathematical prompts, logic puzzles, and fake academic citations.',
  },
  {
    id: 'section6',
    section: 'Section 6',
    pages: 'Pages 5–6',
    title: 'Potential Educational Applications',
    description: 'Personalized question bank, simplifying difficult textbook passages, mnemonics (Twinkle Twinkle Krebs Cycle), and FAQ tables.',
    prompt: 'Summarize Section 6 of Ref.1 regarding Potential Educational Applications of GLMs.',
  },
  {
    id: 'section7',
    section: 'Section 7',
    pages: 'Page 6',
    title: 'Cheating & Academic Integrity',
    description: 'De novo ethics essays (GFR, assisted suicide), Turnitin vs evasion software (ConchAI), 5-50% med school cheating rate, and ethical solutions.',
    prompt: 'Summarize Section 7 of Ref.1 regarding Cheating, detection software, and proposed ethical solutions.',
  },
  {
    id: 'section8-9',
    section: 'Sections 8 & 9',
    pages: 'Pages 7–8',
    title: 'Discussion, Expert Systems & Peripheral Brain',
    description: 'Hybrid expert networks in clinical anesthesia/surgery, need to constrain neural networks, jailbreaking risks, and AI as peripheral brain.',
    prompt: 'Summarize the Discussion and Conclusions (Sections 8 and 9) of Ref.1 regarding expert systems, clinical medicine, and the concept of a peripheral brain.',
  },
];

export const QuickSummarizerModal: React.FC<QuickSummarizerModalProps> = ({
  isOpen,
  onClose,
  onSelectPrompt,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[88vh] bg-[var(--bg)] text-[var(--ink)] border border-[var(--border)] rounded-xs shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[var(--border)] bg-white/2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-editorial text-xs text-[var(--accent)] font-semibold">
              [SECTIONS]
            </span>
            <div>
              <h2 className="font-sans-editorial text-sm font-semibold tracking-wider uppercase text-[var(--ink)]">
                Document Summaries
              </h2>
              <p className="font-mono-editorial text-[11px] text-[var(--ink-dim)]">
                Select an authorized section from Reference to request a structured summary
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors rounded-xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of Summaries */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-black/30">
          {SUMMARIES.map((item) => (
            <div
              key={item.id}
              className="p-5 border border-[var(--border)] hover:border-[var(--accent)] bg-white/2 hover:bg-white/4 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group rounded-xs"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 font-mono-editorial text-[11px]">
                  <span className="text-[var(--accent)] font-semibold">
                    [{item.section.toUpperCase()}]
                  </span>
                  <span className="text-[var(--ink-dim)]">
                    {item.pages}
                  </span>
                </div>
                <h3 className="font-sans-editorial font-semibold text-sm text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans-editorial text-xs text-[var(--ink-dim)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectPrompt(item.prompt);
                  onClose();
                }}
                className="shrink-0 font-mono-editorial text-[11px] uppercase tracking-wider px-4 py-2 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] transition-all flex items-center gap-2 rounded-xs cursor-pointer"
              >
                <span>[REQUEST]</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
