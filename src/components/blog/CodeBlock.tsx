"use client";

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [copied, setCopied] = useState(false);

  // Extract language from className (e.g. language-js)
  const language = className ? className.replace(/language-/, '') : '';

  const handleCopy = () => {
    let textToCopy = '';
    if (typeof children === 'string') {
      textToCopy = children;
    } else if (React.isValidElement(children) && children.props && typeof (children.props as any).children === 'string') {
      textToCopy = (children.props as any).children;
    } else if (Array.isArray(children)) {
      textToCopy = children.map(c => typeof c === 'string' ? c : '').join('');
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden bg-[#111827] border border-black/20 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1f2937] text-gray-400 font-mono text-xs border-b border-gray-700/50">
        <span className="uppercase tracking-wider font-semibold text-gray-300">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#374151] hover:bg-[#4b5563] text-gray-200 transition-colors text-xs font-mono"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-gray-300" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-mono text-gray-100 bg-[#111827]">
        {children}
      </pre>
    </div>
  );
};