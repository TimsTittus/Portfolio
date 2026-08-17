"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
        : '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(resData.error || 'Failed to send message');
      }

      toast.success("Message sent! I'll get back to you soon.");
      setFormData(initialFormState);
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfos = [
    { icon: Mail, label: "Email", value: "timstittus1@gmail.com", href: "mailto:timstittus1@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9946116910", href: "tel:+91 9946116910" },
    { icon: MapPin, label: "Location", value: "Kannur, Kerala, India" },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 9AM - 5PM" }
  ];

  return (
    <div className="min-h-screen pb-0 -mb-8 sm:-mb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
      <div className="relative pt-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-['Bebas_Neue',var(--font-bebas-neue),'Archivo_Black',sans-serif] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#FF6A1A] leading-none uppercase">
              Contact Me
            </h1>
          </div>

          <div className="hidden md:block shrink-0 pb-2 pr-6">
            <svg
              className="w-24 h-24 sm:w-28 sm:h-28 text-[#FF6A1A] animate-pulse"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 30 20 C 60 5, 90 25, 75 55 C 60 85, 20 70, 35 45 C 50 20, 80 40, 85 75" />
              <path d="M 70 70 L 85 77 L 88 62" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-3">
          <h2 className="font-['Archivo_Black',var(--font-archivo-black),'Bebas_Neue',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
            Send Me A Message
          </h2>
          <p className="font-['Inter',sans-serif] text-sm sm:text-base text-black/75 leading-relaxed">
            Want to partner on your next big project? Looking to apply a fresh coat of paint to your growing SaaS product or secure your infrastructure?
          </p>
          <p className="font-['Inter',sans-serif] text-sm sm:text-base text-black/75 leading-relaxed">
            Send me a message and let&apos;s see if it&apos;s a good fit. I&apos;m always looking for interesting and impactful projects to dig into.
          </p>
        </div>

        <div className="lg:col-span-7 lg:row-span-2 bg-[#FAF6F0] border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block mb-2 font-mono text-xs uppercase tracking-wider text-black/80 font-bold">
                  Name <span className="text-black/50 font-normal">(required)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30"
                  placeholder="Bruce Wayne"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-mono text-xs uppercase tracking-wider text-black/80 font-bold">
                  Email <span className="text-black/50 font-normal">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30"
                  placeholder="bruce@wayne.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-mono text-xs uppercase tracking-wider text-black/80 font-bold">
                Subject <span className="text-black/50 font-normal">(required)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
                required
                className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-mono text-xs uppercase tracking-wider text-black/80 font-bold">
                Message <span className="text-black/50 font-normal">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6A1A] hover:bg-[#e0590f] text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-md shadow-[#FF6A1A]/20 disabled:opacity-50 group cursor-pointer"
              >
                <span>{isSubmitting ? 'Sending me a message...' : 'Send me a message'}</span>
                <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform'}`} />
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5 bg-[#FAF6F0] border border-black/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
          <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-black pb-2 border-b border-black/10">
            Direct Channels
          </h3>

          <div className="space-y-3.5">
            {contactInfos.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FF6A1A]/10 text-[#FF6A1A] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/50 block">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-sans text-sm font-semibold text-black hover:text-[#FF6A1A] transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm font-semibold text-black break-all">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#FF6A1A] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden space-y-8 mt-4 sm:mt-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
          <div className="md:col-span-7 space-y-4">
            <h3 className="font-['Comic_Neue',cursive] text-2xl sm:text-3xl font-bold text-white">
              Well, this has been fun.
            </h3>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
              Thanks for stopping by my little slice of the web. Let&apos;s be real, you&apos;ll probably never come back to this site, so I encourage you to follow me on X so we can stay connected.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-3 justify-center items-start md:items-end">
            <a
              href="/gallery"
              className="font-['Archivo_Black',var(--font-archivo-black),'Bebas_Neue',sans-serif] text-xl sm:text-2xl text-white hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1.5 group"
            >
              <span>BROWSE MY WORK</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://x.com/timstittus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Archivo_Black',var(--font-archivo-black),'Bebas_Neue',sans-serif] text-xl sm:text-2xl text-white hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1.5 group"
            >
              <span>FOLLOW ON X</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://www.linkedin.com/in/tims-tittus/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Archivo_Black',var(--font-archivo-black),'Bebas_Neue',sans-serif] text-xl sm:text-2xl text-white hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1.5 group"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://github.com/TimsTittus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Archivo_Black',var(--font-archivo-black),'Bebas_Neue',sans-serif] text-xl sm:text-2xl text-white hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1.5 group"
            >
              <span>VIEW GITHUB</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="relative pt-6 border-t border-white/20 flex items-center justify-between overflow-hidden pointer-events-none select-none">
          <span className="font-['Archivo_Black',var(--font-archivo-black),'Bebas_Neue',sans-serif] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white/30 tracking-tight leading-none">
            SEE YA LATER!
          </span>

          <div className="shrink-0 opacity-40 pr-4">
            <svg
              className="w-16 h-16 sm:w-24 sm:h-24 text-white"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <path d="M 20 80 C 10 40, 50 10, 80 40 C 95 60, 60 90, 40 70 C 25 55, 45 35, 65 50" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}