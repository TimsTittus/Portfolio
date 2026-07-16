"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'PROJECTS', path: '/projects' },
  { name: 'BLOG', path: '/blog' },
  { name: 'ABOUT', path: '/#about' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' },
  { name: 'RESUME', path: '/assets/Resume.pdf', external: true },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const navBackground = isHome
    ? (scrolled ? 'rgba(255, 106, 26, 0.82)' : 'transparent')
    : (scrolled ? 'rgba(255, 106, 26, 0.82)' : '#FF6A1A');

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    >
      <div
        className="hero-v7"
        style={{
          display: 'block',
          position: 'static',
          minHeight: 0,
          background: 'none',
          overflow: 'visible',
          pointerEvents: 'none'
        }}
      >
        {/* Top Navigation */}
        <div
          className="v7-topbar"
          style={{
            position: 'relative',
            background: navBackground,
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
            transition: 'background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
            pointerEvents: 'auto',
            zIndex: 50,
            opacity: 1
          }}
        >
          <div className="v7-brand">
            <Link href="/">◆ TIMS</Link>
          </div>
          <nav className="v7-nav">
            {navLinks.map((link) => (
              link.external ? (
                <a key={link.name} href={link.path} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} href={link.path}>
                  {link.name}
                </Link>
              )
            ))}
          </nav>
          <a href="mailto:timstittus1@gmail.com" className="v7-hire">
          // HIRE ME <span className="v7-hire-circle">↗</span>
          </a>
          <button
            className={`v7-burger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`v7-mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          {navLinks.map((link) => (
            link.external ? (
              <a key={link.name} href={link.path} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                {link.name} ↗
              </a>
            ) : (
              <Link key={link.name} href={link.path} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            )
          ))}
          <a href="mailto:timstittus1@gmail.com" className="v7-mobile-hire" onClick={() => setMenuOpen(false)}>
          // HIRE ME <span className="v7-hire-circle">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;