import React from 'react';

interface DomainBadgeStampProps {
  text: string;
  subtext: string;
  color?: string;
  iconName?: string;
}

export const DomainBadgeStamp: React.FC<DomainBadgeStampProps> = ({
  text,
  subtext,
  color = '#E63946'
}) => {
  return (
    <div
      className="domain-stamp relative flex flex-col items-center justify-center rounded-full border-2 border-dashed p-1 shadow-sm select-none"
      style={{
        borderColor: color,
        color: color,
        width: '74px',
        height: '74px',
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Inner Ring */}
      <div
        className="w-full h-full rounded-full border border-solid flex flex-col items-center justify-center p-1"
        style={{ borderColor: color }}
      >
        <span
          className="font-black text-[9px] tracking-tighter uppercase leading-tight text-center"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: color }}
        >
          {text}
        </span>
        <div
          className="w-6 h-[1px] my-[2px]"
          style={{ backgroundColor: color }}
        />
        <span
          className="font-extrabold text-[7.5px] tracking-wider uppercase text-center"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", opacity: 0.9, color: color }}
        >
          {subtext}
        </span>
      </div>
    </div>
  );
};