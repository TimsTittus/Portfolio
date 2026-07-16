"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface HeroV7Props {
  resumeUrl: string;
  email: string;
}

export function HeroV7({ resumeUrl, email }: HeroV7Props) {
  const SKILLS = [
    'UI/UX Design', 'Full-Stack', 'Networking', 'Cybersecurity', 'Leadership', 'Ethical Hacking', 'AI'
  ];
  const row = [...SKILLS, ...SKILLS];

  const [boost, setBoost] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 250);   // headline rises
    const t2 = setTimeout(() => setStage(2), 1050);  // watermark blooms
    const t3 = setTimeout(() => setStage(3), 1850);  // portrait slides in
    const t4 = setTimeout(() => setStage(4), 2350);  // metadata + marquee
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Marquee auto-scroller animation
  const trackRef = useRef<HTMLDivElement>(null);
  const boostRef = useRef<boolean>(false);
  useEffect(() => {
    boostRef.current = boost;
  }, [boost]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let pos = 0;
    let halfWidth = 0;
    let lastT = performance.now();
    const baseSpeed = 60;   // px/sec
    const boostSpeed = 160; // px/sec

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;
      const speed = boostRef.current ? boostSpeed : baseSpeed;
      pos -= speed * dt;
      if (halfWidth > 0 && -pos >= halfWidth) {
        pos += halfWidth;
      }
      track.style.transform = `translate3d(${Math.round(pos)}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="hero-v7" id="top" data-stage={stage}>
      {/* Top Navigation */}
      <div className="v7-topbar">
        <div className="v7-brand">◆ TIMS</div>
        <nav className="v7-nav">
          <Link href="/projects">PROJECTS</Link>
          <Link href="/blog">BLOG</Link>
          <a href="#about">ABOUT</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">RESUME</a>
        </nav>
        <a href={`mailto:${email}`} className="v7-hire">
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
        <Link href="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
        <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href={resumeUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>RESUME ↗</a>
        <a href={`mailto:${email}`} className="v7-mobile-hire" onClick={() => setMenuOpen(false)}>
          // HIRE ME <span className="v7-hire-circle">↗</span>
        </a>
      </div>

      {/* Background Watermark */}
      <div className="v7-watermark" aria-hidden="true">
        <span className="v7-watermark-word">TIMS</span>
      </div>

      {/* Portrait Photo */}
      <div className="v7-portrait">
        <img className="v7-avatar" src="/assets/tims.png" alt="Tims" loading="eager" decoding="async" />
      </div>

      {/* Headline */}
      <h1 className="v7-headline" aria-label="Engineer">
        <span className="v7-headline-line">PORTFOLIO</span>
      </h1>

      {/* Sub-tagline */}
      <div className="v7-tagline">
        <div>// BUILDING INTELLIGENT SOFTWARE</div>
        <div className="v7-tagline-indent">THAT SOLVES REAL PROBLEMS</div>
      </div>

      {/* Mini Bio */}
      <div className="v7-bio">
        <div>// HI, I'M TIMS.</div>
        <div className="v7-bio-nowrap">CYBERSECURITY ENGINEER & FULL STACK DEVELOPER</div>
        <div className="v7-bio-indent">BUILDING AI-DRIVEN PRODUCTS THAT ARE</div>
        <div>FAST, SECURE, AND BUILT TO LAST.</div>
      </div>

      {/* Skills Marquee */}
      <div
        className={`v7-marquee ${boost ? 'boost' : ''}`}
        onMouseEnter={() => setBoost(true)}
        onMouseLeave={() => setBoost(false)}
      >
        <div className="v7-marquee-track" ref={trackRef}>
          {row.map((s, i) => (
            <span key={i} className="v7-marquee-item">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}