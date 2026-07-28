import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-transparent py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-[#666] dark:text-[#999] uppercase font-medium">
          <div className="font-bold text-[#222] dark:text-[#eee]" suppressHydrationWarning>
            © {new Date().getUTCFullYear()} · TIMS TITTUS
          </div>
          <div className="flex items-center gap-5 text-[#666] dark:text-[#999]">
            <a href="https://github.com/TimsTittus" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A1A] transition-colors" aria-label="GitHub">
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/tims-tittus/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A1A] transition-colors" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="mailto:timstittus1@gmail.com" className="hover:text-[#FF6A1A] transition-colors" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            BUILT WITH CARE · MONSTER & COFFEE · <span className="text-[#FF6A1A]">◆</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;