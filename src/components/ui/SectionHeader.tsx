import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  subtitle,
  className = "text-center mb-16 px-4",
  titleClassName = "text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter text-nb-black mb-6"
}) => {
  return (
    <div className={className}>
      <h2 className={titleClassName}>
        {title} {highlight && <span className="text-nb-purple">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl font-bold text-nb-black/70 max-w-2xl mx-auto italic">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
