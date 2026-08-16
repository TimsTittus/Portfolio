"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
        <div className="relative bg-nb-purple border-4 sm:border-8 border-nb-black px-8 py-4 sm:px-12 sm:py-8">
          <h1 className="text-6xl sm:text-9xl font-black text-nb-black tracking-tighter leading-none">404</h1>
        </div>
      </div>

      <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-nb-black mb-6">Oops! Lost in the <span className="text-nb-purple">Void</span></h2>

      <p className="text-lg sm:text-xl font-bold text-nb-black/60 max-w-lg mb-12 italic">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link href="/" className="group relative inline-block w-full sm:w-auto">
        <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
        <div className="relative px-8 py-4 sm:px-10 sm:py-5 bg-nb-yellow border-4 border-nb-black text-nb-black font-black uppercase text-lg sm:text-xl flex items-center justify-center gap-3 hover:-translate-x-1 hover:-translate-y-1 transition-all">
          <HomeIcon className="group-hover:scale-110 transition-transform" strokeWidth={3} />
          Back to Safety
        </div>
      </Link>
    </div>
  );
}