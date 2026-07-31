"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 50);    // headline rises
    const t2 = setTimeout(() => setStage(2), 200);   // watermark blooms
    const t3 = setTimeout(() => setStage(3), 350);   // portrait slides in
    const t4 = setTimeout(() => setStage(4), 600);   // metadata + marquee
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
      {/* Background Watermark */}
      <div className="v7-watermark" aria-hidden="true">
        <span className="v7-watermark-word">TIMS</span>
      </div>

      {/* Portrait Photo */}
      <div className="v7-portrait">
        <Image
          className="v7-avatar"
          src="/assets/tims.webp"
          alt="Tims Tittus"
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          priority
        />
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