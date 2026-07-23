"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';
import { SectionHeader } from '@/components/home/SectionHeader';

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
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
          : 'https://portf-backend.timstittus1.workers.dev/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

      if (!response.ok) throw new Error('Failed to send message');

      toast.success("Message sent! I'll get back to you soon.");
      setFormData(initialFormState);
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
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

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/TimsTittus" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tims-tittus/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/timstittus" }
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-12 lg:pb-6 px-4 md:px-8 max-w-7xl mx-auto space-y-4">
      {/* Concise Header */}
      <div>
        <div className="[&_.section-header]:mb-3 [&_.section-bleed]:mb-1">
          <SectionHeader
            num="07"
            label="GET IN TOUCH"
            bleed="CONTACT ▫ CONNECT"
            bleedStyle="solid"
          />
        </div>

        <div className="mb-2">
          <h1 className="font-['Comic_Neue',cursive] text-3xl md:text-5xl lg:text-4xl font-bold tracking-tight text-black mb-1">
            Let&apos;s Connect & Collaborate
          </h1>
          <p className="font-['Inter',sans-serif] text-sm md:text-base text-black/70 max-w-3xl leading-snug">
            Feel free to reach out if you have any questions, project inquiries, security consultations, or just want to say hello.
          </p>
        </div>
      </div>

      {/* Main Grid: Form + Info Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Contact Form Container */}
        <div className="lg:col-span-7 bg-[#FAF6F0] border border-black/10 rounded-2xl p-5 lg:p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-black/70 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30"
                  placeholder="Bruce Wayne"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-black/70 font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30"
                  placeholder="bruce@wayne.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-black/70 font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
                required
                className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-black/70 font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                rows={3}
                className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl font-sans text-sm text-black focus:outline-none focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FF6A1A]/20 transition-all placeholder:text-black/30 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#FF6A1A] hover:bg-[#e0590f] text-white rounded-xl font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-md shadow-[#FF6A1A]/20 disabled:opacity-50 group"
            >
              <span>{isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}</span>
              <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform'}`} />
            </button>
          </form>
        </div>

        {/* Sidebar Info & Social Links */}
        <div className="lg:col-span-5 space-y-4">
          {/* Contact Details Card */}
          <div className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-5 lg:p-6 space-y-4 shadow-sm">
            <h2 className="font-['Comic_Neue',cursive] text-xl font-bold text-black pb-2 border-b border-black/10">
              Direct Channels
            </h2>

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

          {/* Social Profiles Card */}
          <div className="bg-[#FAF6F0] border border-black/10 rounded-2xl p-5 lg:p-6 space-y-3 shadow-sm">
            <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-black">
              Social Profiles
            </h3>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-black/10 text-black/80 hover:text-[#FF6A1A] hover:border-[#FF6A1A]/40 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}