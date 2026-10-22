import React from 'react';
import { Sparkles, HelpCircle, FileText, Globe, ShieldAlert, ChevronRight } from 'lucide-react';
import { SAMPLE_PROMPTS, SamplePrompt } from '../data/refDocument';

interface SuggestedPromptsProps {
  onSelectPrompt: (promptText: string) => void;
}

export const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ onSelectPrompt }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 space-y-6">
      {/* Intro Welcome Card */}
      <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-100/50 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black text-pink-300">
                AI EDUCATION ASSISTANT
              </span>
              <span className="text-xs text-zinc-500 font-medium">
                Ref.1 Grounded System
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
              Academic Q&A & Document Summarizer
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl leading-relaxed">
              Trained strictly to answer questions and produce structured summaries using exclusively{' '}
              <strong className="text-black font-semibold">Ref.1 — Prompt Engineering in Medical Education</strong> (8 pages). Any external question is strictly refused per academic guidelines.
            </p>
          </div>
        </div>

        {/* Core Rules Quick Summary Bar */}
        <div className="mt-4 pt-4 border-t border-pink-100/70 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50/70 border border-pink-200/60 text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
            <span><strong>Rule A:</strong> Verified answers with page & section citations</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50/70 border border-pink-200/60 text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
            <span><strong>Rule B & C:</strong> Strict refusal of unsupported external info</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50/70 border border-pink-200/60 text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
            <span><strong>Bilingual:</strong> English & Arabic (عربي) supported</span>
          </div>
        </div>
      </div>

      {/* Suggested Prompt Chips by Category */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Explore Supported Concepts & Boundary Tests:
          </span>
          <span className="text-[11px] text-zinc-400">
            Click any question to ask immediately
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {SAMPLE_PROMPTS.map((item: SamplePrompt) => {
            const isUnsupported = item.category === 'unsupported_test';
            const isArabic = item.category === 'arabic';

            return (
              <button
                key={item.id}
                onClick={() => onSelectPrompt(item.text)}
                className={`p-3.5 rounded-xl border text-left transition-all group flex items-start justify-between gap-3 cursor-pointer ${
                  isUnsupported
                    ? 'bg-rose-50/40 border-rose-200 hover:border-rose-300 hover:bg-rose-50/80'
                    : isArabic
                    ? 'bg-white border-pink-100 hover:border-pink-300 hover:shadow-xs'
                    : 'bg-white border-zinc-200/80 hover:border-pink-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {isUnsupported ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                        <ShieldAlert className="w-3 h-3 text-rose-600" />
                        Boundary Test (Rule C)
                      </span>
                    ) : isArabic ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 border border-pink-200">
                        <Globe className="w-3 h-3 text-pink-600" />
                        عربي (Arabic)
                      </span>
                    ) : item.category === 'supported_summary' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-800">
                        <FileText className="w-3 h-3 text-zinc-600" />
                        Summary
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                        <Sparkles className="w-3 h-3 text-pink-500" />
                        Supported
                      </span>
                    )}
                  </div>

                  <p
                    dir={isArabic ? 'rtl' : 'ltr'}
                    className="text-xs sm:text-sm font-semibold text-black group-hover:text-pink-900 transition-colors line-clamp-2"
                  >
                    {item.label}
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    {item.description}
                  </p>
                </div>

                <div className="p-1 rounded-md text-zinc-400 group-hover:text-black group-hover:bg-zinc-100 shrink-0 self-center">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
