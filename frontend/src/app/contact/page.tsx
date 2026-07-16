"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Github, Linkedin, Twitter } from 'lucide-react';
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

  return (
    <div className="container mx-auto max-w-6xl">
      <section className="py-12">
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-nb-black mb-6">Get In <span className="text-nb-purple">Touch</span></h1>
          <p className="text-lg sm:text-xl font-bold text-nb-black/70 max-w-2xl mx-auto italic">
            Feel free to reach out if you have any questions, project inquiries, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <div className="group relative">
              <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 transition-all"></div>
              <form onSubmit={handleSubmit} className="relative bg-white border-4 border-nb-black p-6 sm:p-8 md:p-12 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block mb-3 text-lg font-black uppercase tracking-tight text-nb-black">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="w-full px-4 py-4 bg-nb-cream border-4 border-nb-black font-bold text-nb-black focus:outline-none focus:bg-white transition-all placeholder:text-nb-black/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px]"
                      placeholder="Bruce Wayne"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-3 text-lg font-black uppercase tracking-tight text-nb-black">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="w-full px-4 py-4 bg-nb-cream border-4 border-nb-black font-bold text-nb-black focus:outline-none focus:bg-white transition-all placeholder:text-nb-black/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px]"
                      placeholder="bruce@wayne.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-3 text-lg font-black uppercase tracking-tight text-nb-black">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-4 bg-nb-cream border-4 border-nb-black font-bold text-nb-black focus:outline-none focus:bg-white transition-all placeholder:text-nb-black/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px]"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-3 text-lg font-black uppercase tracking-tight text-nb-black">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-nb-cream border-4 border-nb-black font-bold text-nb-black focus:outline-none focus:bg-white transition-all placeholder:text-nb-black/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-block w-full"
                >
                  <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                  <div className={`relative w-full py-5 ${isSubmitting ? 'bg-nb-black/20' : 'bg-nb-purple'} border-4 border-nb-black text-nb-black font-black uppercase text-xl flex items-center justify-center gap-3 transition-all hover:-translate-x-1 hover:-translate-y-1`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className={isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} strokeWidth={3} />
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 transition-all"></div>
              <div className="relative bg-white border-4 border-nb-black p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8 text-nb-black border-b-4 border-nb-black pb-4">Contact Info</h2>
                <div className="space-y-8">
                  {[
                    { icon: <Mail size={24} strokeWidth={3} />, label: "Email", value: "timstittus1@gmail.com", href: "mailto:timstittus1@gmail.com", color: "bg-nb-purple" },
                    { icon: <Phone size={24} strokeWidth={3} />, label: "Phone", value: "+91 9946116910", href: "tel:+91 9946116910", color: "bg-nb-green" },
                    { icon: <MapPin size={24} strokeWidth={3} />, label: "Location", value: "Kannur, Kerala, India", color: "bg-nb-blue" },
                    { icon: <Clock size={24} strokeWidth={3} />, label: "Hours", value: "Mon - Fri: 9AM - 5PM", color: "bg-nb-yellow" }
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 ${info.color} border-2 border-nb-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-black uppercase text-xs tracking-widest text-nb-black/50 mb-1">{info.label}</h3>
                        {info.href ? (
                          <a href={info.href} className="text-lg sm:text-xl font-bold text-nb-black hover:text-nb-purple transition-all underline decoration-2 underline-offset-4 break-all">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg sm:text-xl font-bold text-nb-black break-all">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 transition-all"></div>
              <div className="relative bg-nb-yellow border-4 border-nb-black p-6 sm:p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-nb-black">Social Connect</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Github className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />, href: "https://github.com/TimsTittus" },
                    { icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />, href: "https://www.linkedin.com/in/tims-tittus/" },
                    { icon: <Twitter className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />, href: "https://x.com/timstittus" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-nb-black flex items-center justify-center text-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}