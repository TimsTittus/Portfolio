import * as React from 'react';
import Image from 'next/image';
import { Download, Code, PenTool, Shield, Zap, BookOpen, UserCheck } from 'lucide-react';
import { SectionHeader } from '@/components/home/SectionHeader';
import { services } from '@/data/services';
import { education } from '@/data/education';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me | Tims Tittus",
  description: "Learn about Tims Tittus, a full-stack developer, UI/UX designer, and cybersecurity researcher.",
};

const getServiceIcon = (title: string) => {
  const t = title.toUpperCase();
  if (t.includes('WEB')) return Code;
  if (t.includes('DESIGN') || t.includes('UI')) return PenTool;
  if (t.includes('CYBER') || t.includes('SECURITY')) return Shield;
  return Zap;
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div>
        <div className="[&_.section-header]:mb-3 [&_.section-bleed]:mb-1">
          <SectionHeader
            num="01"
            label="ABOUT ME"
            bleed="ABOUT ▫ BIOGRAPHY"
            bleedStyle="solid"
          />
        </div>

        <div className="mb-2">
          <h1 className="font-['Comic_Neue',cursive] text-3xl md:text-5xl font-bold tracking-tight text-black mb-2">
            Engineering Polymath & Developer
          </h1>
          <p className="font-['Inter',sans-serif] text-base md:text-lg text-black/70 max-w-3xl leading-relaxed">
            Building scalable full-stack applications, exploring cybersecurity architectures, and mentoring student developers.
          </p>
        </div>
      </div>

      {/* Main Grid: Sidebar Profile + Detailed Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Profile Card */}
        <div className="lg:col-span-5 bg-[#FAF6F0] border border-black/10 rounded-2xl p-5 sm:p-6 space-y-6 lg:sticky lg:top-28 shadow-sm">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#FF6A1A]/10 via-[#FF6A1A]/20 to-[#FF6A1A]/35 border border-black/10 shadow-sm group">
            {/* Glowing background radial badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#FF6A1A]/20 blur-xl pointer-events-none" />

            <Image
              src="/assets/tims.webp"
              alt="Tims Tittus"
              fill
              className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-[10px] font-bold uppercase tracking-widest flex items-center justify-between z-10">
              <span>TIMS TITTUS</span>
              <span className="w-2 h-2 rounded-full bg-[#FF6A1A] animate-pulse" />
            </div>
          </div>

          <div className="space-y-3 text-center">
            <h2 className="font-['Comic_Neue',cursive] text-2xl font-bold text-black">Tims Tittus</h2>
            <div className="inline-block font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF6A1A]/10 text-[#FF6A1A] font-bold">
              Engineering Polymath
            </div>
            <p className="font-sans text-xs text-black/70 leading-relaxed pt-2">
              Full-Stack Software Engineer, Cybersecurity Researcher & Community Lead based in Kerala, India.
            </p>
          </div>

          <div className="pt-2 border-t border-black/10">
            <a
              href="/assets/Resume.pdf"
              download="TimsTittus_Resume.pdf"
              className="w-full py-3 bg-[#FF6A1A] hover:bg-[#e0590f] text-white rounded-xl font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF6A1A]/20 group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-12">
          {/* Bio Story Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#FF6A1A]">
              <UserCheck className="w-4 h-4" />
              <span>BIOGRAPHY</span>
            </div>

            <h2 className="font-['Comic_Neue',cursive] text-2xl md:text-3xl font-bold text-black leading-tight">
              I build intelligent, <span className="text-[#FF6A1A] italic">secure digital products</span> that solve real-world problems.
            </h2>

            <div className="space-y-4 font-['Inter',sans-serif] text-base md:text-lg text-black/80 leading-relaxed">
              <p className="text-lg font-medium text-black">
                I&apos;m a Cybersecurity Engineer and Full Stack Developer passionate about building intelligent, secure, and scalable digital products. I combine AI, modern web technologies, and security-first thinking to transform ideas into impactful solutions.
              </p>
              <p className="bg-[#FAF6F0] p-6 border-l-4 border-[#FF6A1A] rounded-r-2xl italic font-normal text-black/90">
                Currently exploring AI agents, cybersecurity research, cloud-native systems, and developer tools while building projects that solve real-world challenges and deliver meaningful user experiences.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-black/10">
              {[
                { count: '15+', label: 'Projects Built' },
                { count: '5+', label: 'Hackathons & Competitions' },
                { count: '8+', label: 'Leadership Roles' },
                { count: '5+', label: 'Communities Led' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#FAF6F0] border border-black/10 rounded-xl p-4 text-center">
                  <div className="font-['Comic_Neue',cursive] text-2xl md:text-3xl font-bold text-[#FF6A1A]">
                    {stat.count}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-black/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Do Section */}
          <div className="space-y-6">
            <h2 className="font-['Comic_Neue',cursive] text-3xl font-bold text-black">
              What I Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item) => {
                const Icon = getServiceIcon(item.title);
                return (
                  <div
                    key={item.title}
                    className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-xs md:text-sm text-black/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Background */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#FF6A1A]">
              <BookOpen className="w-4 h-4" />
              <span>EDUCATION</span>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.title}
                  className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-6 transition-all duration-300 hover:border-black/20 shadow-sm"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6A1A] block mb-1">
                    {edu.loc}
                  </span>
                  <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-black mb-2">
                    {edu.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-xs md:text-sm text-black/70 leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}