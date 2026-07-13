"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Writing', path: '/blog' },
  /*{ name: 'Gallery', path: '/gallery'},*/
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-nb-cream border-b-4 border-nb-black shadow-nb-hard'
          : 'bg-nb-cream/80 backdrop-blur-sm border-b-2 border-nb-black'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-tighter text-nb-black uppercase">
              Tims Tittus
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`
                        transition-all duration-200 font-bold uppercase tracking-tight
                        ${pathname === link.path ? 'text-nb-purple underline decoration-4 underline-offset-4' : 'text-nb-black hover:text-nb-purple'}
                      `}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Navigation Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-nb-black p-1 border-2 border-nb-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Moved outside header */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-nb-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`fixed right-0 top-0 bottom-0 h-full w-[80%] max-w-[320px] bg-nb-cream border-l-4 border-nb-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-6 flex justify-between items-center border-b-4 border-nb-black flex-shrink-0">
            <span className="font-black uppercase tracking-widest text-sm">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 border-2 border-nb-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto p-6 scrollbar-hide">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`block py-4 px-6 font-black uppercase text-xl border-4 border-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
                      ${pathname === link.path ? 'bg-nb-purple text-nb-black underline decoration-4 underline-offset-4' : 'bg-white text-nb-black hover:bg-nb-yellow'}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t-4 border-nb-black bg-nb-yellow flex-shrink-0">
            <p className="text-sm font-black uppercase tracking-tight">Tims Tittus &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;