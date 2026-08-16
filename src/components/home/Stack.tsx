"use client";

import { SectionHeader } from './SectionHeader';
import { Reveal } from './anim-utils';
import { skillCategories } from '@/data/skills';

export function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="rk-stamp" style={{ top: '140px', right: '10%', transform: 'rotate(6deg)' }}>
        // Production-Tested
      </div>

      <SectionHeader num="02" label="Stack" bleed="STACK · STACK" bleedStyle="solid" />

      <div className="stack-grid">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={100 + i * 50} y={30} className="stack-category">
            <h3 className="stack-cat-title">{cat.title}</h3>
            <div className="stack-cat-skills">
              {cat.skills.map((skill) => (
                <span key={skill} className="stack-pill">{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}