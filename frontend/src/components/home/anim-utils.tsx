"use client";

import React, { useRef, useState, useEffect } from 'react';

// Hook: Tracks when an element enters the viewport
export function useReveal<T extends HTMLElement = HTMLElement>(options: { immediate?: boolean; threshold?: number; rootMargin?: string } = {}): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState<boolean>(!!options.immediate);

  useEffect(() => {
    if (options.immediate) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    const tryShow = () => {
      if (cancelled) return false;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        setShown(true);
        return true;
      }
      return false;
    };

    if (tryShow()) return;
    const raf = requestAnimationFrame(() => {
      tryShow();
    });

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '0px 0px -5% 0px',
      }
    );

    io.observe(el);

    // Fallback safety net
    const fallback = setTimeout(() => {
      if (!cancelled) setShown(true);
    }, 1500);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [options.immediate, options.threshold, options.rootMargin]);

  return [ref, shown];
}

interface ScrambleProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Component: Letter-scrambling hover/mount text effect
export function Scramble({ text, duration = 1200, delay = 0, className, style }: ScrambleProps) {
  const [display, setDisplay] = useState<string>(text);
  const [ref, shown] = useReveal<HTMLSpanElement>();

  useEffect(() => {
    if (!shown) return;
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let raf: number;
    let start: number;

    const t = setTimeout(() => {
      start = performance.now();
      const queue = Array.from(text).map((c) => ({
        from: chars[Math.floor(Math.random() * chars.length)],
        to: c,
        startP: Math.random() * 0.4,
        endP: 0.4 + Math.random() * 0.5,
      }));

      const step = () => {
        const p = Math.min(1, (performance.now() - start) / duration);
        let out = '';
        for (const q of queue) {
          if (p >= q.endP) {
            out += q.to;
          } else if (p < q.startP) {
            out += q.from;
          } else {
            if (Math.random() < 0.28) {
              q.from = chars[Math.floor(Math.random() * chars.length)];
            }
            out += q.from;
          }
        }
        setDisplay(out);
        if (p < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setDisplay(text);
        }
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [shown, text, duration, delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}

interface FadeWordsProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

// Component: Word-by-word fade in animation for large display headers
export function FadeWords({ text, delay = 0, stagger = 60, className, style, as: Tag = 'span' }: FadeWordsProps) {
  const [ref, shown] = useReveal<HTMLElement>();
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span
            className={'rv-word' + (shown ? ' is-shown' : '')}
            style={{ '--rv-delay': (delay + i * stagger) + 'ms' } as React.CSSProperties}
          >
            {w}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </Tag>
  );
}

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  style?: React.CSSProperties;
}

// Component: Eased numeric count up animation
export function CountUp({ to, suffix = '', duration = 1400, style }: CountUpProps) {
  const [ref, shown] = useReveal<HTMLSpanElement>();
  const [n, setN] = useState<number>(0);

  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf: number;

    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);

  return (
    <span ref={ref} style={style}>
      {n}
      {suffix}
    </span>
  );
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
  className?: string;
}

// Component: Simple slide-up reveal box wrapper
export function Reveal({ children, delay = 0, y = 40, style, className }: RevealProps) {
  const [ref, shown] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={(className || '') + ' rv-reveal' + (shown ? ' is-shown' : '')}
      style={{ '--rv-y': y + 'px', '--rv-delay': delay + 'ms', ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
}