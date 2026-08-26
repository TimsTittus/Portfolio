import React from 'react';

interface PaperclipSVGProps {
  className?: string;
  color?: string;
  size?: number;
}

export const PaperclipSVG: React.FC<PaperclipSVGProps> = ({
  className = '',
  color = '#4A5568',
  size = 48
}) => {
  return (
    <svg
      width={size}
      height={size * 1.8}
      viewBox="0 0 32 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`paperclip-shadow animate-paperclip transition-transform duration-300 ${className}`}
      style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.35))' }}
    >
      {/* Outer Clip Loop */}
      <path
        d="M22 14V42C22 46.4183 18.4183 50 14 50C9.58172 50 6 46.4183 6 42V12C6 7.58172 9.58172 4 14 4C18.4183 4 22 7.58172 22 12V36"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Metallic Highlight */}
      <path
        d="M21 14V42C21 45.866 17.866 49 14 49C10.134 49 7 45.866 7 42V12C7 8.13401 10.134 5 14 5C17.866 5 21 8.13401 21 12V36"
        stroke="#E2E8F0"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="4 2"
        opacity="0.8"
      />
      {/* Metallic Cap Curve */}
      <path
        d="M18 16V34C18 36.2091 16.2091 38 14 38C11.7909 38 10 36.2091 10 34V16"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};