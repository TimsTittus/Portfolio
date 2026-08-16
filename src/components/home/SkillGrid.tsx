import React from 'react';
import { categories } from '../../data/skills';

const SkillGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
      {categories.main.map((skill, idx) => (
        <div
          key={skill.name}
          className={`group relative ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'} hover:rotate-0 transition-transform`}
        >
          <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
          <div className={`relative ${skill.color} border-4 border-nb-black p-2 sm:p-4 md:p-8 text-center group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full flex items-center justify-center overflow-hidden aspect-square sm:aspect-auto min-h-[80px] sm:min-h-0`}>
            <h3 className="text-[11px] sm:text-base md:text-xl lg:text-2xl font-black uppercase tracking-tight text-nb-black break-all sm:break-words w-full px-1 leading-tight whitespace-normal">
              {skill.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillGrid;
