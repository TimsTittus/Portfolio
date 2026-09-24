export interface GalleryItem {
  id: string;
  title: string;
  src?: string;
  category?: string;
  date?: string;
  location?: string;
  description?: string;
  hidden?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'placement-elrics-wisdom',
    title: 'Placement Offer · Elrics Wisdom',
    src: '/gallery/Tims-Tittus-placement-offer-at-Elrics-Wisdom-pvt-ltd.webp',
    category: 'Placement',
    date: 'August 11, 2026',
    location: 'Campus Placement, SJCET Palai',
    description: 'Received a placement offer from Elrics Wisdom Pvt Ltd through the campus placement program, marking a significant milestone in my career journey.',
  },
  {
    id: 'iedc-cto-appointment',
    title: 'Appointed CTO · Startup Bootcamp SJCET-IEDC',
    src: '/gallery/Tims-Tittus-IEDC-CTO-Appointment.webp',
    category: 'Leadership',
    date: '2026',
    location: 'SJCET Palai',
    description: "Received my letter of appointment as CTO of Startup Bootcamp SJCET-IEDC — owning technical strategy, system design and deployment decisions across IEDC's projects, and mentoring teams through AI/ML work and architecture that needs to scale. The focus this year: less disposable scripting, more infrastructure that survives a change in leadership, documentation a new lead can actually use, and code reviews that catch design problems early. Thanks to the IEDC team and mentors for the trust.",
  },
  {
    id: 'hackp-2025',
    title: "HAC'KP 2025 — Outstanding Performance Award",
    src: '/gallery/Tims-Tittus-HacKP-Award.webp',
    category: 'Hackathon',
    date: '2025',
    location: 'Taj Vivanta, Kochi',
    description: "Won the Outstanding Performance Award at HAC'KP 2025, the Kerala Police Cyberdome International Hackathon — one of 28 finalists picked from 1000+ applicants for a 4-day bootcamp building tech to help law enforcement keep the internet safer for children. Built a privacy-first intelligence platform generating on-device perceptual hashes (PhotoDNA) so source photos never leave the device, and helped architect a digital crime scene investigation tool for correlating evidence. Grateful to mentors Ajith Kumar P M, Ananthu S and Gilson Gilbert, and to Kerala Police Cyberdome for the opportunity — continuing this work with the Grapnel team at Cyberdome.",
  },
  {
    id: 'hackp-2025-team',
    title: "HAC'KP 2025 — Team Build Session",
    src: '/gallery/Tims-Tittus-HacKP-Team-Working-Session.webp',
    category: 'Hackathon',
    date: '2025',
    location: 'Taj Vivanta, Kochi',
    description: "Deep in the build with the team during the 4-day HAC'KP bootcamp, working alongside fellow finalists and mentors on tech to help Kerala Police Cyberdome make the internet safer for children.",
  },
  {
    id: 'hackp-2025-pairing',
    title: "HAC'KP 2025 — Pair Programming",
    src: '/gallery/Tims-Tittus-HacKP-Pair-Programming.webp',
    category: 'Hackathon',
    date: '2025',
    location: 'Taj Vivanta, Kochi',
    description: "Heads-down with the team mid-bootcamp, pairing on code between coffee and whiteboard sessions during the 4-day HAC'KP build.",
  },
  {
    id: 'hackp-2025-pitch',
    title: "HAC'KP 2025 — Final Pitch & Demo",
    src: '/gallery/Tims-Tittus-HacKP-Final-Pitch.webp',
    category: 'Hackathon',
    date: '2025',
    location: 'Taj Vivanta, Kochi',
    description: "Presenting our final demo to the judging panel — the culmination of 4 days spent building tech to support Kerala Police Cyberdome's mission.",
  },
  {
    id: 'hackp-2025-group',
    title: "HAC'KP 2025 — Finalists with Kerala Police & Cyberdome",
    src: '/gallery/Tims-Tittus-HacKP-Group-Photo.webp',
    category: 'Hackathon',
    date: '2025',
    location: 'Taj Vivanta, Kochi',
    description: "With fellow finalists, Kerala Police officers and international mentors at the closing ceremony of HAC'KP 2025 — a defining collaboration with Kerala Police Cyberdome and Interpol.",
  },
  {
    id: 'hackp-2025-solo',
    title: "HAC'KP 2025 — With the Award",
    src: '/gallery/Tims-Tittus-HacKP-With-Award.webp',
    category: 'Hackathon',
    date: '2025',
    location: 'Taj Vivanta, Kochi',
    description: "A quiet moment with the Outstanding Performance Award after the closing ceremony of HAC'KP 2025.",
  },
  {
    id: 'ieee-sjcet-team',
    title: 'IEEE SJCET — The Team',
    src: '/gallery/Tims-Tittus-IEEE-SJCET-Team.webp',
    category: 'Community',
    location: 'SJCET Palai',
    description: "The IEEE SJCET Student Branch, together — the people behind the workshops, sessions and projects run through the year.",
  },
  {
    id: 'ieee-webmaster-appointment',
    title: 'Appointed Webmaster & Vice Chair · IEEE SB SJCET SIGHT',
    src: '/gallery/Tims-Tittus-IEEE-Webmaster-Appointment.webp',
    category: 'Leadership',
    date: '2025',
    location: 'AGM 2025, IEEE SB SJCET Palai',
    description: "Taking on the Webmaster and Vice Chairperson - SIGHT role for IEEE SB SJCET at the branch's AGM 2025.",
  },
  {
    id: 'ieee-webmaster-memento',
    title: 'One Year as Webmaster — Certificate of Appreciation',
    src: '/gallery/Tims-Tittus-IEEE-Webmaster-Service-Memento.webp',
    category: 'Leadership',
    date: '2025 – 2026',
    location: 'IEEE SB SJCET Palai',
    description: "Wrapped up a year as Webmaster and Vice Chairperson - SIGHT for IEEE SB SJCET with a Certificate of Appreciation for the branch's 2025–2026 term — grateful for the trust and the team.",
  },
  {
    id: 'rehabglove-build',
    title: 'RehabGlove — Late-Night Build',
    src: '/gallery/Tims-Tittus-RehabGlove-Build.webp',
    category: 'Tech & Hardware',
    description: "Wiring up servos and microcontrollers on the bench for RehabGlove, an ESP32-based hand rehabilitation glove with automated finger mobilization and real-time monitoring.",
  },
  {
    id: 'rehabglove-prototype',
    title: 'RehabGlove — Working Prototype',
    src: '/gallery/Tims-Tittus-RehabGlove-Prototype.webp',
    category: 'Tech & Hardware',
    description: "RehabGlove strapped in and running — the ESP32 driving finger actuation for ROM therapy, with live status on the onboard display.",
  },
  {
    id: 'creative-frames',
    title: 'Creative frames',
    category: 'Creative',
    description: 'Placeholder — replace with a photo and a short story about the moment.',
  },
];