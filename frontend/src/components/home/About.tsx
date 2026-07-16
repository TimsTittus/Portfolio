"use client";

import { SectionHeader } from './SectionHeader';
import { FadeWords, Reveal, CountUp } from './anim-utils';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="rk-stamp" style={{ top: '180px', right: '6%', transform: 'rotate(-8deg)' }}>
        // AI × CYBERSECURITY
      </div>
      <div className="rk-stamp" style={{ bottom: '120px', left: '4%', transform: 'rotate(5deg)' }}>
        // BUILD • BREAK • SECURE
      </div>

      <SectionHeader num="01" label="About" bleed="§ ABOUT — ABOUT" bleedStyle="solid" />

      <div className="about-grid">
        {/* Left Side: Large Words Reveal */}
        <div>
          <h2 className="h-display">
            <FadeWords text="I build intelligent" stagger={60} />
            <br />
            <FadeWords
              text="secure digital products"
              delay={200}
              stagger={60}
              style={{ color: 'var(--accent)', fontStyle: 'italic' }}
            />
            <br />
            <FadeWords text="that solve real-world problems." delay={400} stagger={60} />
          </h2>
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="about-right">
          <Reveal delay={200}>
            <p className="lead">
              I'm a Cybersecurity Engineer and Full Stack Developer passionate about
              building intelligent, secure, and scalable digital products. I combine
              AI, modern web technologies, and security-first thinking to transform
              ideas into impactful solutions.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <p>
              Currently exploring AI agents, cybersecurity research, cloud-native
              systems, and developer tools while building projects that solve
              real-world challenges and deliver meaningful user experiences.
            </p>
          </Reveal>

          <div className="stats-row">
            {[
              { n: 15, suf: '+', l: 'Projects Built' },
              { n: 5, suf: '+', l: 'Hackathons & Competitions' },
              { n: 8, suf: '+', l: 'Leadership Roles' },
              { n: 5, suf: '+', l: 'Communities Led' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={500 + i * 80} className="stat">
                <div className="stat-n">
                  <CountUp to={s.n} suffix={s.suf} />
                </div>
                <div className="stat-l">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}