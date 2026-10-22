import React from 'react';

interface AiEduLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const AiEduLogo: React.FC<AiEduLogoProps> = ({
  size = 'md',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const titleSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
  }[size];

  return (
    <div className="flex items-center gap-3.5 select-none group">
      {/* Precision Geometric Violet Emblem */}
      <div className="relative shrink-0">
        {/* Ambient violet energy glow */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-40 blur-xs group-hover:opacity-75 transition duration-300" />

        {/* Outer Crest Container */}
        <div className={`relative ${iconDimensions} rounded-xl bg-[#0f0b1e] border border-violet-500/50 p-0.5 shadow-[0_4px_20px_-2px_rgba(124,58,237,0.5)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
          {/* Subtle angular mesh overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-purple-900/40 to-black/80" />

          {/* Precision SVG Vector Mark */}
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 p-1"
          >
            {/* Hexagonal Academic Shield Base */}
            <path
              d="M18 3L31 9.5V19.5C31 26.5 25.5 32 18 34C10.5 32 5 26.5 5 19.5V9.5L18 3Z"
              fill="url(#violet-shield-grad)"
              stroke="url(#violet-shield-stroke)"
              strokeWidth="1.2"
            />

            {/* Futuristic Neural Book / Core Nexus */}
            <path
              d="M18 10L25 14V22L18 26L11 22V14L18 10Z"
              fill="#1e1145"
              stroke="#a78bfa"
              strokeWidth="1"
            />

            {/* Central Academic Node Spark */}
            <path
              d="M18 13.5L22 18L18 22.5L14 18L18 13.5Z"
              fill="url(#violet-core-grad)"
            />

            {/* Radiating Precision Connectors */}
            <circle cx="18" cy="18" r="1.5" fill="#ffffff" />
            <line x1="18" y1="10" x2="18" y2="13.5" stroke="#c4b5fd" strokeWidth="0.8" />
            <line x1="18" y1="22.5" x2="18" y2="26" stroke="#c4b5fd" strokeWidth="0.8" />
            <line x1="11" y1="18" x2="14" y2="18" stroke="#c4b5fd" strokeWidth="0.8" />
            <line x1="22" y1="18" x2="25" y2="18" stroke="#c4b5fd" strokeWidth="0.8" />

            {/* Gradients */}
            <defs>
              <linearGradient id="violet-shield-grad" x1="5" y1="3" x2="31" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6d28d9" stopOpacity="0.85" />
                <stop offset="0.5" stopColor="#4c1d95" stopOpacity="0.9" />
                <stop offset="1" stopColor="#1e1035" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="violet-shield-stroke" x1="18" y1="3" x2="18" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c4b5fd" />
                <stop offset="0.7" stopColor="#7c3aed" />
                <stop offset="1" stopColor="#4c1d95" />
              </linearGradient>
              <linearGradient id="violet-core-grad" x1="14" y1="13.5" x2="22" y2="22.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c084fc" />
                <stop offset="1" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
          </svg>

          {/* Specular corner highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />
        </div>
      </div>

      {/* Powerful Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-sans-editorial font-black ${titleSize} tracking-[0.14em] text-white drop-shadow-sm uppercase`}>
            AI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa] animate-pulse" />
          <span className={`font-sans-editorial font-bold ${titleSize} tracking-[0.14em] text-violet-400 uppercase`}>
            EDU
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="font-mono-editorial text-[9px] uppercase tracking-[0.22em] text-violet-300/60 font-medium">
              Academic Intelligence
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
