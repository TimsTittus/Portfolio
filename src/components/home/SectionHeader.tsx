"use client";

import React from 'react';
import { Scramble } from './anim-utils';

interface SectionHeaderProps {
  num: string;
  label: string;
  right?: React.ReactNode;
  bleed?: string;
  bleedStyle?: 'outline' | 'solid';
}

export function SectionHeader({ num, label, right, bleed, bleedStyle }: SectionHeaderProps) {
  return (
    <>
      {bleed && (
        <div className={`section-bleed ${bleedStyle === 'outline' ? 'is-outline' : 'is-solid'}`}>
          <div className="section-bleed-text">{bleed}</div>
        </div>
      )}
      <div className="section-header">
        <div className="section-label">
          <span className="section-num">{num}</span>
          <span className="section-bar" />
          <span className="section-name">
            <Scramble text={label} duration={900} />
          </span>
        </div>
        {right}
      </div>
    </>
  );
}