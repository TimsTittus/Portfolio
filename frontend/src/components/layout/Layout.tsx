"use client";

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) {
    return (
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow px-0 pt-0 pb-0">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-nb-cream overflow-x-hidden">
      <Navbar />
      <main
        className="flex-grow px-0 pt-24 pb-16 animate-fade-in"
        key={pathname}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;