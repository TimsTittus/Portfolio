import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ResumeClient } from '@/components/resume/ResumeClient';

export const metadata: Metadata = {
  title: "Domain Resumes & Curricula | Tims Tittus",
  description: "Explore tailored domain resumes across Cybersecurity, AI & Machine Learning, Full-Stack Web Development, Cloud & DevOps, and Systems Engineering.",
  openGraph: {
    title: "Domain Resumes | Tims Tittus",
    description: "Tailored domain resumes across Cybersecurity, AI/ML, Full-Stack, Cloud & Systems.",
    type: "website",
  },
};

export default function ResumePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center font-mono text-sm font-bold text-black/60">
          Loading domain resumes...
        </div>
      }
    >
      <ResumeClient />
    </Suspense>
  );
}