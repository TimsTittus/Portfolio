import React from 'react';

interface ProjectArtworkProps {
  title: string;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({ title }) => {
  const t = title.toLowerCase();

  // DISTINCT ARTWORKS for projects that previously shared a style (checked first)

  // Parking Management System lot
  if (t.includes('parking')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .pk-car { animation: pkPark 4s ease-in-out infinite; }
            .pk-free { animation: pkFree 4s step-end infinite; }
            @keyframes pkPark { 0% { transform: translate(0, 34px); } 40% { transform: translate(0, 34px); } 70%, 100% { transform: translate(0, 0); } }
            @keyframes pkFree { 0%, 69% { fill: #4ade80; } 70%, 100% { fill: #ef4444; } }
          `}
        </style>
        <rect width="100" height="100" fill="#1c1f29" />
        {[14, 34, 54, 74].map(x => (
          <line key={x} x1={x} y1="14" x2={x} y2="48" stroke="#fbbf24" strokeWidth="1" />
        ))}
        <line x1="94" y1="14" x2="94" y2="48" stroke="#fbbf24" strokeWidth="1" />
        <rect x="18" y="20" width="12" height="22" rx="3" fill="#a688ff" />
        <rect x="58" y="20" width="12" height="22" rx="3" fill="#00d1ff" />
        <rect x="78" y="20" width="12" height="22" rx="3" fill="#f472b6" />
        <g className="pk-car">
          <rect x="38" y="20" width="12" height="22" rx="3" fill="#ff6a1a" />
        </g>
        <line x1="0" y1="66" x2="100" y2="66" stroke="#fff" strokeWidth="0.8" strokeDasharray="6,5" opacity="0.4" />
        <circle cx="16" cy="86" r="2.2" fill="#4ade80" className="pk-free" />
        <text x="22" y="88" fill="#e4e4e7" fontSize="6" fontFamily="monospace">SLOT B2</text>
        <text x="86" y="88" fill="#fbbf24" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">P</text>
      </svg>
    );
  }

  // Print-Shop printer feeding paper
  if (t.includes('print-shop') || t.includes('print shop')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="printGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d0f4fc" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
        </defs>
        <style>
          {`
            .pr-paper { animation: prFeed 3s ease-in-out infinite; }
            .pr-led { animation: prLed 0.8s step-end infinite; }
            @keyframes prFeed { 0% { transform: translateY(-22px); } 70%, 100% { transform: translateY(0); } }
            @keyframes prLed { 50% { opacity: 0.2; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#printGrad)" />
        <rect x="30" y="14" width="40" height="18" fill="#fff" stroke="#000" strokeWidth="1" />
        <rect x="18" y="30" width="64" height="28" rx="4" fill="#000" />
        <circle cx="72" cy="38" r="2" fill="#4ade80" className="pr-led" />
        <rect x="26" y="36" width="20" height="3" rx="1.5" fill="#6e7180" />
        <g className="pr-paper">
          <rect x="30" y="52" width="40" height="34" fill="#fff" stroke="#000" strokeWidth="1" />
          {[60, 66, 72, 78].map((y, i) => (
            <rect key={y} x="35" y={y} width={i === 3 ? 18 : 30} height="2" fill={i === 0 ? '#ff6a1a' : '#a1a1aa'} />
          ))}
        </g>
        <rect x="18" y="50" width="64" height="6" rx="2" fill="#000" />
        <text x="50" y="96" fill="#000" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">QUEUE · 03</text>
      </svg>
    );
  }

  // 404-Extension error counter
  if (t.includes('404')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .nf-glitch { animation: nfGlitch 2.5s steps(1) infinite; }
            .nf-badge { transform-origin: 78px 70px; animation: nfBump 2.5s ease-out infinite; }
            @keyframes nfGlitch { 0%, 88%, 100% { transform: translate(0, 0); } 90% { transform: translate(-2px, 1px); } 94% { transform: translate(2px, -1px); } }
            @keyframes nfBump { 0%, 85% { transform: scale(1); } 92% { transform: scale(1.25); } 100% { transform: scale(1); } }
          `}
        </style>
        <rect width="100" height="100" fill="#070a08" />
        <g className="nf-glitch">
          <text x="47" y="50" fill="#ef4444" fontSize="26" fontFamily="monospace" textAnchor="middle" fontWeight="bold" opacity="0.6">404</text>
          <text x="50" y="50" fill="#e4e4e7" fontSize="26" fontFamily="monospace" textAnchor="middle" fontWeight="bold">404</text>
        </g>
        <text x="50" y="62" fill="#6e7180" fontSize="5.5" fontFamily="monospace" textAnchor="middle">PAGE NOT FOUND</text>
        <rect x="14" y="72" width="50" height="14" rx="3" fill="#1c1f29" stroke="#4ade80" strokeWidth="0.6" />
        <text x="18" y="81" fill="#4ade80" fontSize="5.5" fontFamily="monospace">visits logged</text>
        <g className="nf-badge">
          <circle cx="78" cy="79" r="9" fill="#4ade80" />
          <text x="78" y="82" fill="#070a08" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">27</text>
        </g>
      </svg>
    );
  }

  // Portfolio Website profile page
  if (t.includes('portfolio website')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe3d5" />
            <stop offset="100%" stopColor="#e5dbff" />
          </linearGradient>
        </defs>
        <style>
          {`
            .pf-card { animation: pfRise 3s ease-in-out infinite alternate; }
            @keyframes pfRise { 0% { transform: translateY(2px); } 100% { transform: translateY(-2px); } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#pfGrad)" />
        <rect x="12" y="14" width="76" height="72" rx="4" fill="#FDF6F0" stroke="#000" strokeWidth="1" />
        <line x1="12" y1="24" x2="88" y2="24" stroke="#000" strokeWidth="1" />
        <text x="16" y="21" fill="#000" fontSize="5" fontFamily="monospace">timstittus.com</text>
        <circle cx="30" cy="40" r="8" fill="#ff6a1a" />
        <rect x="44" y="34" width="34" height="4" fill="#000" />
        <rect x="44" y="42" width="24" height="2.5" fill="#6e7180" />
        {[20, 43, 66].map((x, i) => (
          <g key={x} transform={`rotate(${[-4, 2, -2][i]} ${x + 9} 67)`}>
            <rect x={x} y="56" width="18" height="22" rx="2" fill={['#a688ff', '#00d1ff', '#f472b6'][i]} className="pf-card" style={{ animationDelay: `${i * 0.4}s` }} />
          </g>
        ))}
      </svg>
    );
  }

  // MORE PROJECTS ARTWORKS (Dark background headers)

  // 1. Deep Facial Verification / Web Vulnerability scanner style
  if (t.includes('deep facial verification') || t.includes('webvnr') || t.includes('vulnerability')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .box-pulse { animation: pulseBorder 2.5s infinite alternate ease-in-out; }
            .laser-scan { animation: scanLaser 3s linear infinite; }
            .dot-glow { animation: blinkDot 1s infinite alternate; }
            @keyframes pulseBorder { 0% { stroke: #ff6a1a; } 100% { stroke: #ff9d63; } }
            @keyframes scanLaser { 0% { transform: translateY(0); } 50% { transform: translateY(32px); } 100% { transform: translateY(0); } }
            @keyframes blinkDot { 0% { opacity: 0.4; } 100% { opacity: 1; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />

        {/* Connection Wires in between */}
        <line x1="42" y1="36" x2="58" y2="36" stroke="#ff6a1a" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4" />
        <line x1="42" y1="42" x2="58" y2="42" stroke="#ff6a1a" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4" />
        <line x1="42" y1="48" x2="58" y2="48" stroke="#ff6a1a" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4" />
        <line x1="42" y1="54" x2="58" y2="54" stroke="#ff6a1a" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4" />
        <line x1="42" y1="60" x2="58" y2="60" stroke="#ff6a1a" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4" />

        {/* Bounding Box 1 */}
        <rect x="20" y="30" width="22" height="32" rx="3" stroke="#ff6a1a" strokeWidth="1.2" fill="none" className="box-pulse" />
        {/* Bounding Box 2 */}
        <rect x="58" y="30" width="22" height="32" rx="3" stroke="#ff6a1a" strokeWidth="1.2" fill="none" className="box-pulse" />

        {/* Laser scanner lines */}
        <g className="laser-scan" style={{ transformOrigin: 'center' }}>
          <line x1="20" y1="30" x2="42" y2="30" stroke="#ff6a1a" strokeWidth="1" />
          <line x1="58" y1="30" x2="80" y2="30" stroke="#ff6a1a" strokeWidth="1" />
        </g>

        {/* Dots inside Box 1 */}
        <circle cx="26" cy="38" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0s' }} />
        <circle cx="36" cy="38" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.2s' }} />
        <circle cx="24" cy="48" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.4s' }} />
        <circle cx="32" cy="46" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.1s' }} />
        <circle cx="38" cy="48" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.6s' }} />
        <circle cx="28" cy="56" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.3s' }} />
        <circle cx="36" cy="54" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.5s' }} />

        {/* Dots inside Box 2 */}
        <circle cx="64" cy="38" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.1s' }} />
        <circle cx="74" cy="38" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.3s' }} />
        <circle cx="66" cy="48" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.5s' }} />
        <circle cx="72" cy="46" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.2s' }} />
        <circle cx="76" cy="48" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.7s' }} />
        <circle cx="64" cy="54" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.4s' }} />
        <circle cx="74" cy="56" r="1.2" fill="#00d1ff" className="dot-glow" style={{ animationDelay: '0.6s' }} />

        {/* Similarity Score */}
        <text x="50" y="80" fill="#6e7180" fontSize="7.5" fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">SIM 0.97</text>
      </svg>
    );
  }

  // 2. Autonomous Disaster Response / Sonar Radar / Bus tracker / Portfolio Website style
  if (t.includes('autonomous disaster response') || t.includes('disaster') || t.includes('homechime') || t.includes('portfolio website')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .radar-sweep { transform-origin: 50px 50px; animation: sweepAnim 4s linear infinite; }
            .blinker { animation: blinkWarning 1.2s step-end infinite; }
            @keyframes sweepAnim { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes blinkWarning { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0e0a07" />

        {/* Radar concentric circular grid */}
        <circle cx="50" cy="50" r="14" fill="none" stroke="#ff6a1a" strokeWidth="0.5" opacity="0.15" />
        <circle cx="50" cy="50" r="26" fill="none" stroke="#ff6a1a" strokeWidth="0.5" opacity="0.15" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#ff6a1a" strokeWidth="0.5" opacity="0.2" />

        {/* Radar crosshairs */}
        <line x1="50" y1="10" x2="50" y2="90" stroke="#ff6a1a" strokeWidth="0.4" opacity="0.1" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#ff6a1a" strokeWidth="0.4" opacity="0.1" />

        {/* Sweep area */}
        <g className="radar-sweep">
          <line x1="50" y1="50" x2="77" y2="23" stroke="#00d1ff" strokeWidth="1.2" />
          <path d="M50,50 L77,23 A38,38 0 0,0 50,12 Z" fill="rgba(0, 209, 255, 0.08)" />
        </g>

        {/* Center node */}
        <circle cx="50" cy="50" r="3.5" fill="#ff6a1a" />

        {/* Warning Dots */}
        <circle cx="42" cy="36" r="2" fill="#ef4444" className="blinker" style={{ animationDelay: '0s' }} />
        <circle cx="68" cy="38" r="2.5" fill="#ef4444" className="blinker" style={{ animationDelay: '0.4s' }} />
        <circle cx="62" cy="65" r="1.8" fill="#ef4444" className="blinker" style={{ animationDelay: '0.8s' }} />
      </svg>
    );
  }

  // 3. Omarchy / Asthra CTF / 404 terminal logs style
  if (t.includes('omarchy') || t.includes('asthra') || t.includes('404')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .terminal-cursor { animation: textCursor 1s step-end infinite; }
            @keyframes textCursor { 50% { opacity: 0; } }
          `}
        </style>
        <rect width="100" height="100" fill="#070a08" />

        <text x="12" y="26" fill="#4ade80" fontFamily="monospace" fontSize="6.5" opacity="0.9">$ {t.includes('asthra') ? 'asthra --ctf' : t.includes('404') ? 'extension --404' : 'omarchy --launch'}</text>
        <text x="12" y="40" fill="#a1a1aa" fontFamily="monospace" fontSize="6.5" opacity="0.85">&gt; menu: [apps]</text>
        <text x="12" y="52" fill="#a1a1aa" fontFamily="monospace" fontSize="6.5" opacity="0.85">&gt; menu: [system]</text>
        <text x="12" y="64" fill="#a1a1aa" fontFamily="monospace" fontSize="6.5" opacity="0.85">&gt; menu: [power]</text>

        <text x="12" y="78" fill="#4ade80" fontFamily="monospace" fontSize="6.5" opacity="0.9">$ </text>
        <rect x="20" y="72" width="4.5" height="7.5" fill="#4ade80" className="terminal-cursor" />

        {/* Green highlight bar at bottom */}
        <line x1="12" y1="88" x2="88" y2="88" stroke="#4ade80" strokeWidth="1.2" opacity="0.75" />
      </svg>
    );
  }

  // FEATURED WORK ARTWORKS (Light gradient backgrounds)

  // 4. LLM Council / Orvane encryption mesh
  if (t.includes('llm council') || t.includes('orvane')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="llmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5dbff" />
            <stop offset="100%" stopColor="#d0f4fc" />
          </linearGradient>
        </defs>
        <style>
          {`
            .flow-line {
              stroke: #fff;
              stroke-width: 0.8;
              stroke-dasharray: 3, 3;
              opacity: 0.6;
              animation: dashOffset 15s linear infinite;
            }
            @keyframes dashOffset {
              to { stroke-dashoffset: -20; }
            }
            .pulse-ring {
              animation: ringPulse 3s infinite ease-in-out alternate;
              transform-origin: center;
            }
            @keyframes ringPulse {
              0% { transform: scale(0.96); opacity: 0.25; }
              100% { transform: scale(1.04); opacity: 0.55; }
            }
          `}
        </style>
        <rect width="100" height="100" fill="url(#llmGrad)" />

        {/* Connection Wires */}
        <line x1="30" y1="55" x2="50" y2="35" className="flow-line" />
        <line x1="50" y1="35" x2="70" y2="55" className="flow-line" />
        <line x1="70" y1="55" x2="50" y2="75" className="flow-line" />
        <line x1="50" y1="75" x2="30" y2="55" className="flow-line" />
        <line x1="30" y1="55" x2="70" y2="55" className="flow-line" />
        <line x1="50" y1="35" x2="50" y2="75" className="flow-line" />

        {/* Nodes and concentric rings */}
        <circle cx="30" cy="55" r="12" stroke="#a688ff" strokeWidth="0.5" fill="none" className="pulse-ring" style={{ transformOrigin: '30px 55px' }} />
        <circle cx="30" cy="55" r="7" fill="#a688ff" />

        <circle cx="50" cy="35" r="12" stroke="#00d1ff" strokeWidth="0.5" fill="none" className="pulse-ring" style={{ transformOrigin: '50px 35px', animationDelay: '0.5s' }} />
        <circle cx="50" cy="35" r="7" fill="#00d1ff" />

        <circle cx="70" cy="55" r="13" stroke="#ff6a1a" strokeWidth="0.6" fill="none" className="pulse-ring" style={{ transformOrigin: '70px 55px', animationDelay: '0.8s' }} />
        <circle cx="70" cy="55" r="18" stroke="#ff6a1a" strokeWidth="0.4" fill="none" className="pulse-ring" style={{ transformOrigin: '70px 55px', animationDelay: '1.2s' }} />
        <circle cx="70" cy="55" r="8" fill="#ff6a1a" />

        <circle cx="50" cy="75" r="12" stroke="#f472b6" strokeWidth="0.5" fill="none" className="pulse-ring" style={{ transformOrigin: '50px 75px', animationDelay: '0.3s' }} />
        <circle cx="50" cy="75" r="7" fill="#f472b6" />
      </svg>
    );
  }

  // 5. Dance Move Insight / MonkeyPen.ai handwriting synthesis style
  if (t.includes('dance move') || t.includes('monkeypen')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="danceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d0f4fc" />
            <stop offset="100%" stopColor="#e8ffd0" />
          </linearGradient>
        </defs>
        <style>
          {`
            .skeleton { animation: float 4s ease-in-out infinite; }
            .star { animation: twinkle 2s infinite alternate; }
            @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            @keyframes twinkle { 0% { opacity: 0.3; } 100% { opacity: 1; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#danceGrad)" />
        <g className="skeleton">
          <circle cx="50" cy="25" r="6" stroke="#000" strokeWidth="1.5" fill="none" />
          <line x1="50" y1="31" x2="50" y2="58" stroke="#000" strokeWidth="1.5" />
          <polyline points="30,40 50,33 70,40" stroke="#000" strokeWidth="1.5" fill="none" />
          <polyline points="35,80 50,58 65,80" stroke="#000" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="33" r="2" fill="#ff6a1a" />
          <circle cx="30" cy="40" r="2" fill="#00d1ff" />
          <circle cx="70" cy="40" r="2" fill="#00d1ff" />
          <circle cx="50" cy="58" r="2" fill="#ff6a1a" />
          <circle cx="35" cy="80" r="2" fill="#a688ff" />
          <circle cx="65" cy="80" r="2" fill="#a688ff" />
        </g>
        <circle cx="20" cy="30" r="1.5" fill="#ff6a1a" className="star" style={{ animationDelay: '0s' }} />
        <circle cx="80" cy="45" r="2" fill="#a688ff" className="star" style={{ animationDelay: '0.5s' }} />
        <circle cx="25" cy="70" r="1.5" fill="#00d1ff" className="star" style={{ animationDelay: '1s' }} />
        <circle cx="75" cy="20" r="2" fill="#ff6a1a" className="star" style={{ animationDelay: '0.2s' }} />
        <circle cx="45" cy="12" r="1.5" fill="#a688ff" className="star" style={{ animationDelay: '0.8s' }} />
      </svg>
    );
  }

  // 6. ARISE / Audio Adversarial Attack waveform style
  if (t.includes('arise') || t.includes('adversarial') || t.includes('attack') || t.includes('audio')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ariseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe3d5" />
            <stop offset="100%" stopColor="#f3d5ff" />
          </linearGradient>
        </defs>
        <style>
          {`
            .bar { transform-origin: bottom; animation: scaleY 3s infinite alternate ease-in-out; }
            .glow-text { font-weight: bold; }
            @keyframes scaleY { 0% { transform: scaleY(0.2); } 100% { transform: scaleY(1); } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#ariseGrad)" />
        <rect x="22" y="30" width="8" height="60" fill="#ff6a1a" rx="2" className="bar" style={{ animationDelay: '0s', animationDuration: '2s', transformOrigin: '22px 90px' }} />
        <rect x="46" y="10" width="8" height="80" fill="#a688ff" rx="2" className="bar" style={{ animationDelay: '0.5s', animationDuration: '3s', transformOrigin: '46px 90px' }} />
        <rect x="70" y="40" width="8" height="50" fill="#00d1ff" rx="2" className="bar" style={{ animationDelay: '1s', animationDuration: '2.5s', transformOrigin: '70px 90px' }} />
        <line x1="10" y1="90" x2="90" y2="90" stroke="#000" strokeWidth="1.5" />
        <text x="50" y="25" fill="#ff6a1a" fontSize="9" fontFamily="monospace" textAnchor="middle" className="glow-text">{t.includes('adversarial') ? 'ASR ATTACK' : '98% MATCH'}</text>
      </svg>
    );
  }

  // 7. n8n Workflow / Sjcet events / Print shop style
  if (t.includes('n8n') || t.includes('sjcet') || t.includes('print-shop') || t.includes('workflow')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="n8nGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#ddd6fe" />
          </linearGradient>
        </defs>
        <style>
          {`
            .wire { stroke-dasharray: 4; animation: flow 2s linear infinite; }
            @keyframes flow { to { stroke-dashoffset: -20; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#n8nGrad)" />

        {/* Wires */}
        <path d="M20,50 L40,50 L40,32 L60,32" fill="none" stroke="#a688ff" strokeWidth="1.5" className="wire" />
        <path d="M20,50 L40,50 L40,68 L60,68" fill="none" stroke="#ff6a1a" strokeWidth="1.5" className="wire" style={{ animationDuration: '1.5s' }} />
        <path d="M60,32 L80,50" fill="none" stroke="#a688ff" strokeWidth="1.5" className="wire" />
        <path d="M60,68 L80,50" fill="none" stroke="#ff6a1a" strokeWidth="1.5" className="wire" style={{ animationDuration: '2.5s' }} />

        {/* Nodes */}
        <rect x="10" y="42" width="16" height="16" rx="3" fill="#00d1ff" />
        <rect x="52" y="24" width="16" height="16" rx="3" fill="#a688ff" />
        <rect x="52" y="60" width="16" height="16" rx="3" fill="#ff6a1a" />
        <circle cx="80" cy="50" r="8" fill="#000" />

        {/* Node icons */}
        <circle cx="18" cy="50" r="2.5" fill="#fff" />
        <polygon points="60,29 64,36 56,36" fill="#fff" />
        <rect x="57" y="65" width="6" height="6" fill="#fff" />
      </svg>
    );
  }

  // 8. RAG Playground / Steg tool / Parking management style
  if (t.includes('rag playground') || t.includes('steg') || t.includes('parking')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ccfbf1" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
        </defs>
        <style>
          {`
            .chunk { animation: highlight 4s infinite alternate; }
            .query-pulse { animation: qPulse 2s infinite; }
            @keyframes highlight { 0%, 50% { fill: #fff; stroke: #a688ff; stroke-width: 0.5; } 100% { fill: #ff6a1a; stroke: #fff; stroke-width: 1; } }
            @keyframes qPulse { 0% { r: 5; opacity: 1; } 100% { r: 12; opacity: 0; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#ragGrad)" />

        {/* Lines */}
        <line x1="50" y1="50" x2="20" y2="20" stroke="#a688ff" strokeWidth="0.8" strokeDasharray="2,2" />
        <line x1="50" y1="50" x2="50" y2="20" stroke="#a688ff" strokeWidth="0.8" strokeDasharray="2,2" />
        <line x1="50" y1="50" x2="80" y2="20" stroke="#ff6a1a" strokeWidth="0.8" />

        <line x1="50" y1="50" x2="20" y2="80" stroke="#ff6a1a" strokeWidth="0.8" />
        <line x1="50" y1="50" x2="50" y2="80" stroke="#a688ff" strokeWidth="0.8" strokeDasharray="2,2" />
        <line x1="50" y1="50" x2="80" y2="80" stroke="#a688ff" strokeWidth="0.8" strokeDasharray="2,2" />

        {/* Document Chunks */}
        <rect x="12" y="12" width="16" height="16" rx="2" className="chunk" style={{ animationDelay: '0s' }} />
        <rect x="42" y="12" width="16" height="16" rx="2" className="chunk" style={{ animationDelay: '1s' }} />
        <rect x="72" y="12" width="16" height="16" rx="2" className="chunk" style={{ animationDelay: '2.5s' }} />

        <rect x="12" y="72" width="16" height="16" rx="2" className="chunk" style={{ animationDelay: '1.5s' }} />
        <rect x="42" y="72" width="16" height="16" rx="2" className="chunk" style={{ animationDelay: '3s' }} />
        <rect x="72" y="72" width="16" height="16" rx="2" className="chunk" style={{ animationDelay: '0.5s' }} />

        {/* Query Node */}
        <circle cx="50" cy="50" r="8" fill="#00d1ff" />
        <circle cx="50" cy="50" r="5" fill="none" stroke="#00d1ff" strokeWidth="1.5" className="query-pulse" />
      </svg>
    );
  }

  // 9. Kaithangu household services marketplace
  if (t.includes('kaithangu')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kaiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe3d5" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
        </defs>
        <style>
          {`
            .kai-wrench { transform-origin: 50px 52px; animation: kaiOrbit 6s linear infinite; }
            .kai-route { stroke-dasharray: 3, 3; animation: kaiRoute 1.8s linear infinite; }
            @keyframes kaiOrbit { to { transform: rotate(360deg); } }
            @keyframes kaiRoute { to { stroke-dashoffset: -12; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#kaiGrad)" />
        <circle cx="50" cy="52" r="30" fill="none" stroke="#ff6a1a" strokeWidth="0.6" opacity="0.35" />
        <path d="M18,86 Q50,70 82,86" fill="none" stroke="#a688ff" strokeWidth="1.2" className="kai-route" />
        {/* House */}
        <polygon points="50,34 66,48 34,48" fill="#ff6a1a" />
        <rect x="38" y="48" width="24" height="18" fill="#000" />
        <rect x="47" y="55" width="6" height="11" fill="#ffe3d5" />
        {/* Orbiting worker tool */}
        <g className="kai-wrench">
          <circle cx="50" cy="22" r="5" fill="#00d1ff" />
          <rect x="49" y="18.5" width="2" height="7" fill="#fff" />
        </g>
        <text x="50" y="94" fill="#000" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">₹ FAIR PRICE</text>
      </svg>
    );
  }

  // 10. IDEA Lab Space reservations grid
  if (t.includes('idea lab')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .il-slot { animation: ilBook 4s infinite; }
            @keyframes ilBook { 0%, 60% { fill: #1c1f29; } 70%, 100% { fill: #ff6a1a; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        <text x="14" y="20" fill="#6e7180" fontSize="6" fontFamily="monospace" letterSpacing="0.1em">MON TUE WED THU</text>
        {[0, 1, 2, 3].map(col =>
          [0, 1, 2, 3, 4].map(row => (
            <rect
              key={`${col}-${row}`}
              x={14 + col * 19}
              y={26 + row * 11}
              width="15"
              height="8"
              rx="1.5"
              className="il-slot"
              style={{ animationDelay: `${((col * 5 + row) * 0.37) % 4}s` }}
            />
          ))
        )}
        <circle cx="16" cy="90" r="2" fill="#4ade80" />
        <text x="22" y="92" fill="#4ade80" fontSize="6" fontFamily="monospace">CHECKED IN · 12</text>
      </svg>
    );
  }

  // 11. Saints archive halo
  if (t.includes('saints')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .st-rays { transform-origin: 50px 44px; animation: stSpin 24s linear infinite; }
            .st-halo { animation: stGlow 3s ease-in-out infinite alternate; }
            @keyframes stSpin { to { transform: rotate(360deg); } }
            @keyframes stGlow { 0% { opacity: 0.55; } 100% { opacity: 1; } }
          `}
        </style>
        <rect width="100" height="100" fill="#10131f" />
        <g className="st-rays" opacity="0.35">
          {Array.from({ length: 12 }, (_, i) => (
            <line key={i} x1="50" y1="44" x2={50 + 40 * Math.cos((i * Math.PI) / 6)} y2={44 + 40 * Math.sin((i * Math.PI) / 6)} stroke="#fbbf24" strokeWidth="0.6" />
          ))}
        </g>
        <ellipse cx="50" cy="30" rx="14" ry="4" fill="none" stroke="#fbbf24" strokeWidth="2" className="st-halo" />
        <circle cx="50" cy="44" r="9" fill="#fef3c7" />
        <path d="M34,76 Q50,52 66,76 Z" fill="#fef3c7" />
        {/* Open book */}
        <path d="M30,80 L50,84 L70,80 L70,90 L50,94 L30,90 Z" fill="#ff6a1a" />
        <line x1="50" y1="84" x2="50" y2="94" stroke="#10131f" strokeWidth="0.8" />
      </svg>
    );
  }

  // 12. Kerala Telemetry live dashboard
  if (t.includes('kerala telemetry') || t.includes('telemetry')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .kt-line { stroke-dasharray: 160; animation: ktDraw 4s ease-in-out infinite; }
            .kt-live { animation: ktBlink 1s step-end infinite; }
            .kt-bar { animation: ktBar 2.4s ease-in-out infinite alternate; }
            @keyframes ktDraw { 0% { stroke-dashoffset: 160; } 60%, 100% { stroke-dashoffset: 0; } }
            @keyframes ktBlink { 50% { opacity: 0.2; } }
            @keyframes ktBar { 0% { transform: scaleY(0.4); } 100% { transform: scaleY(1); } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        <circle cx="14" cy="14" r="2" fill="#ef4444" className="kt-live" />
        <text x="19" y="16" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">LIVE · KERALA</text>
        {[24, 38, 52, 66].map(y => (
          <line key={y} x1="10" y1={y} x2="90" y2={y} stroke="#ffffff" strokeWidth="0.3" opacity="0.08" />
        ))}
        <polyline points="10,58 22,46 32,52 44,32 56,40 68,26 78,34 90,22" fill="none" stroke="#00d1ff" strokeWidth="1.4" className="kt-line" />
        {[14, 30, 46, 62, 78].map((x, i) => (
          <rect key={x} x={x} y="72" width="9" height="18" fill={i % 2 ? '#a688ff' : '#ff6a1a'} className="kt-bar" style={{ transformOrigin: `${x}px 90px`, animationDelay: `${i * 0.3}s` }} />
        ))}
      </svg>
    );
  }

  // 13. AgroStack crops, sun and price forecast
  if (t.includes('agrostack') || t.includes('agro')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="agroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8ffd0" />
            <stop offset="100%" stopColor="#ccfbf1" />
          </linearGradient>
        </defs>
        <style>
          {`
            .ag-crop { animation: agGrow 3s ease-in-out infinite alternate; }
            .ag-sun { transform-origin: 78px 22px; animation: agSun 12s linear infinite; }
            @keyframes agGrow { 0% { transform: scaleY(0.55); } 100% { transform: scaleY(1); } }
            @keyframes agSun { to { transform: rotate(360deg); } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#agroGrad)" />
        <g className="ag-sun">
          <circle cx="78" cy="22" r="7" fill="#fbbf24" />
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1={78 + 10 * Math.cos((i * Math.PI) / 4)} y1={22 + 10 * Math.sin((i * Math.PI) / 4)} x2={78 + 13 * Math.cos((i * Math.PI) / 4)} y2={22 + 13 * Math.sin((i * Math.PI) / 4)} stroke="#fbbf24" strokeWidth="1.2" />
          ))}
        </g>
        <polyline points="10,44 26,40 40,42 54,32 66,34" fill="none" stroke="#ff6a1a" strokeWidth="1.2" strokeDasharray="2,2" />
        <circle cx="66" cy="34" r="2" fill="#ff6a1a" />
        {[18, 32, 46, 60, 74].map((x, i) => (
          <g key={x} className="ag-crop" style={{ transformOrigin: `${x}px 86px`, animationDelay: `${i * 0.4}s` }}>
            <line x1={x} y1="86" x2={x} y2="58" stroke="#16a34a" strokeWidth="1.4" />
            <ellipse cx={x - 4} cy="68" rx="4" ry="1.8" fill="#4ade80" transform={`rotate(-30 ${x - 4} 68)`} />
            <ellipse cx={x + 4} cy="62" rx="4" ry="1.8" fill="#4ade80" transform={`rotate(30 ${x + 4} 62)`} />
          </g>
        ))}
        <rect x="0" y="86" width="100" height="14" fill="#7c4a24" />
      </svg>
    );
  }

  // 14. Architecter recursive blueprint tree
  if (t.includes('architecter')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="archGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10,0 L0,0 L0,10" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>
        <style>
          {`
            .ar-edge { stroke-dasharray: 40; animation: arDraw 3.5s ease-in-out infinite; }
            .ar-node { animation: arPop 3.5s ease-in-out infinite; }
            @keyframes arDraw { 0% { stroke-dashoffset: 40; } 50%, 100% { stroke-dashoffset: 0; } }
            @keyframes arPop { 0%, 20% { opacity: 0.2; } 50%, 100% { opacity: 1; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0f2a4a" />
        <rect width="100" height="100" fill="url(#archGrid)" />
        {[
          [50, 18, 28, 44], [50, 18, 72, 44],
          [28, 44, 16, 70], [28, 44, 40, 70], [72, 44, 60, 70], [72, 44, 84, 70],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d0f4fc" strokeWidth="0.8" className="ar-edge" style={{ animationDelay: `${i < 2 ? 0 : 0.6}s` }} />
        ))}
        <rect x="42" y="12" width="16" height="10" rx="1" fill="#ff6a1a" />
        {[[28, 44], [72, 44]].map(([x, y]) => (
          <rect key={x} x={x - 7} y={y - 4} width="14" height="8" rx="1" fill="none" stroke="#00d1ff" strokeWidth="1" className="ar-node" style={{ animationDelay: '0.3s' }} />
        ))}
        {[16, 40, 60, 84].map(x => (
          <rect key={x} x={x - 5} y="66" width="10" height="7" rx="1" fill="none" stroke="#d0f4fc" strokeWidth="0.8" className="ar-node" style={{ animationDelay: '0.9s' }} />
        ))}
        <text x="50" y="90" fill="#d0f4fc" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.8">{'{ blueprint.json }'}</text>
      </svg>
    );
  }

  // 15. CyberCore rotating hex core
  if (t.includes('cybercore')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .cc-outer { transform-origin: 50px 50px; animation: ccSpin 10s linear infinite; }
            .cc-inner { transform-origin: 50px 50px; animation: ccSpin 6s linear infinite reverse; }
            .cc-packet { animation: ccIn 2s ease-in infinite; }
            @keyframes ccSpin { to { transform: rotate(360deg); } }
            @keyframes ccIn { 0% { opacity: 0; transform: translate(0, 0); } 20% { opacity: 1; } 100% { opacity: 0; transform: translate(var(--dx), var(--dy)); } }
          `}
        </style>
        <rect width="100" height="100" fill="#07090e" />
        <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="none" stroke="#ff6a1a" strokeWidth="1" className="cc-outer" />
        <polygon points="50,32 65,41 65,59 50,68 35,59 35,41" fill="none" stroke="#00d1ff" strokeWidth="1" className="cc-inner" />
        <circle cx="50" cy="50" r="6" fill="#ef4444" />
        {[[8, 12, '38px', '34px'], [92, 16, '-38px', '30px'], [10, 88, '36px', '-34px'], [90, 86, '-36px', '-32px']].map(([x, y, dx, dy], i) => (
          <circle key={i} cx={x as number} cy={y as number} r="1.8" fill="#4ade80" className="cc-packet" style={{ '--dx': dx, '--dy': dy, animationDelay: `${i * 0.5}s` } as React.CSSProperties} />
        ))}
      </svg>
    );
  }

  // 16. EternalBlue MS17-010 shell
  if (t.includes('eternalblue')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .eb-wave { animation: ebWave 3s ease-in-out infinite alternate; }
            .eb-cursor { animation: ebBlink 1s step-end infinite; }
            @keyframes ebWave { 0% { transform: translateX(-6px); } 100% { transform: translateX(6px); } }
            @keyframes ebBlink { 50% { opacity: 0; } }
          `}
        </style>
        <rect width="100" height="100" fill="#061229" />
        <g className="eb-wave" opacity="0.5">
          <path d="M-10,34 Q5,26 20,34 T50,34 T80,34 T110,34" fill="none" stroke="#3b82f6" strokeWidth="1" />
          <path d="M-10,40 Q5,32 20,40 T50,40 T80,40 T110,40" fill="none" stroke="#3b82f6" strokeWidth="0.6" />
        </g>
        <text x="50" y="24" fill="#60a5fa" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MS17-010</text>
        <text x="10" y="58" fill="#a1a1aa" fontSize="5" fontFamily="monospace">[+] SMBv1 vulnerable</text>
        <text x="10" y="67" fill="#a1a1aa" fontSize="5" fontFamily="monospace">[+] payload sent</text>
        <text x="10" y="80" fill="#4ade80" fontSize="5" fontFamily="monospace">C:\&gt; whoami</text>
        <text x="10" y="89" fill="#4ade80" fontSize="5" fontFamily="monospace">nt authority\system</text>
        <rect x="70" y="85" width="3.5" height="5" fill="#4ade80" className="eb-cursor" />
      </svg>
    );
  }

  // 17. Hacker AI neural net behind a shield
  if (t.includes('hacker ai')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .ha-shield { animation: haShield 2.5s ease-in-out infinite alternate; }
            .ha-node { animation: haFire 1.6s ease-in-out infinite alternate; }
            @keyframes haShield { 0% { stroke-opacity: 0.4; } 100% { stroke-opacity: 1; } }
            @keyframes haFire { 0% { fill: #1f2433; } 100% { fill: #00d1ff; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        <path d="M50,10 L82,22 L82,50 Q82,76 50,90 Q18,76 18,50 L18,22 Z" fill="rgba(255,106,26,0.06)" stroke="#ff6a1a" strokeWidth="1.4" className="ha-shield" />
        {(() => {
          const layers = [[30, [36, 50, 64]], [50, [30, 44, 58, 72]], [70, [40, 60]]] as const;
          const lines: React.ReactNode[] = [];
          layers.slice(0, -1).forEach(([x1, ys1], li) => {
            const [x2, ys2] = layers[li + 1];
            ys1.forEach(y1 => ys2.forEach(y2 => lines.push(
              <line key={`${x1}-${y1}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a688ff" strokeWidth="0.35" opacity="0.5" />
            )));
          });
          return lines;
        })()}
        {([[30, [36, 50, 64]], [50, [30, 44, 58, 72]], [70, [40, 60]]] as const).map(([x, ys], li) =>
          ys.map((y, ni) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" stroke="#00d1ff" strokeWidth="0.6" className="ha-node" style={{ animationDelay: `${li * 0.4 + ni * 0.15}s` }} />
          ))
        )}
      </svg>
    );
  }

  // 18. RehabGlove fingers + pulse
  if (t.includes('rehabglove') || t.includes('rehab')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rehabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d0f4fc" />
            <stop offset="100%" stopColor="#e5dbff" />
          </linearGradient>
        </defs>
        <style>
          {`
            .rg-finger { animation: rgFlex 2.4s ease-in-out infinite alternate; }
            .rg-ecg { stroke-dasharray: 120; animation: rgEcg 2.4s linear infinite; }
            @keyframes rgFlex { 0% { transform: rotate(0deg); } 100% { transform: rotate(28deg); } }
            @keyframes rgEcg { from { stroke-dashoffset: 120; } to { stroke-dashoffset: 0; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#rehabGrad)" />
        {/* Palm */}
        <rect x="32" y="46" width="36" height="28" rx="8" fill="#000" />
        <rect x="44" y="56" width="12" height="8" rx="1.5" fill="#00d1ff" />
        {[36, 45, 54, 63].map((x, i) => (
          <rect key={x} x={x - 3} y={i === 0 || i === 3 ? 26 : 20} width="6" height={i === 0 || i === 3 ? 22 : 28} rx="3" fill="#ff6a1a" className="rg-finger" style={{ transformOrigin: `${x}px 48px`, animationDelay: `${i * 0.25}s` }} />
        ))}
        <rect x="68" y="54" width="14" height="6" rx="3" fill="#ff6a1a" transform="rotate(-25 68 57)" />
        <polyline points="8,88 30,88 36,80 42,94 48,84 52,88 92,88" fill="none" stroke="#a688ff" strokeWidth="1.2" className="rg-ecg" />
      </svg>
    );
  }

  // 19. Demokratia ballot box
  if (t.includes('demokratia') || t.includes('voting')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="demoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0e7ff" />
            <stop offset="100%" stopColor="#ffe3d5" />
          </linearGradient>
        </defs>
        <style>
          {`
            .dm-ballot { animation: dmDrop 2.6s ease-in infinite; }
            .dm-bar { animation: dmGrow 2.6s ease-out infinite alternate; }
            @keyframes dmDrop { 0% { transform: translateY(-18px); opacity: 0; } 20% { opacity: 1; } 70% { transform: translateY(8px); opacity: 1; } 100% { transform: translateY(8px); opacity: 0; } }
            @keyframes dmGrow { 0% { transform: scaleX(0.3); } 100% { transform: scaleX(1); } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#demoGrad)" />
        <g className="dm-ballot">
          <rect x="30" y="16" width="16" height="20" rx="1" fill="#fff" stroke="#000" strokeWidth="0.8" />
          <polyline points="34,26 37,30 43,21" fill="none" stroke="#ff6a1a" strokeWidth="1.5" />
        </g>
        <rect x="18" y="42" width="40" height="36" rx="2" fill="#000" />
        <rect x="28" y="42" width="20" height="3" fill="#a688ff" />
        <text x="38" y="64" fill="#fff" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">VOTE</text>
        {[['#ff6a1a', 1], ['#a688ff', 0.7], ['#00d1ff', 0.45]].map(([color, w], i) => (
          <rect key={i} x="64" y={48 + i * 10} width={24 * (w as number)} height="6" rx="1" fill={color as string} className="dm-bar" style={{ transformOrigin: '64px 0px', animationDelay: `${i * 0.3}s` }} />
        ))}
      </svg>
    );
  }

  // 20. Phisher URL bar with hook
  if (t.includes('phisher') || t.includes('phishing')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .ph-hook { transform-origin: 70px 0px; animation: phSwing 2.8s ease-in-out infinite alternate; }
            .ph-warn { animation: phWarn 1s step-end infinite; }
            @keyframes phSwing { 0% { transform: rotate(-8deg); } 100% { transform: rotate(8deg); } }
            @keyframes phWarn { 50% { opacity: 0.25; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        <g className="ph-hook">
          <line x1="70" y1="0" x2="70" y2="40" stroke="#a1a1aa" strokeWidth="0.8" />
          <path d="M70,40 L70,50 Q70,58 63,58 Q57,58 57,52" fill="none" stroke="#e4e4e7" strokeWidth="1.8" strokeLinecap="round" />
          <polygon points="55,50 57,55 60,51" fill="#e4e4e7" />
        </g>
        <rect x="10" y="64" width="80" height="12" rx="6" fill="#1c1f29" stroke="#ef4444" strokeWidth="0.8" />
        <text x="16" y="72" fill="#e4e4e7" fontSize="5.5" fontFamily="monospace">paypa1-login.co/verify</text>
        <rect x="18" y="82" width="64" height="9" rx="2" fill="#ef4444" className="ph-warn" />
        <text x="50" y="88.5" fill="#fff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">⚠ PHISHING BLOCKED</text>
      </svg>
    );
  }

  // 21. 3D Dev Portfolio wireframe cube
  if (t.includes('3d dev')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3d5ff" />
            <stop offset="100%" stopColor="#d0f4fc" />
          </linearGradient>
        </defs>
        <style>
          {`
            .cb-float { animation: cbFloat 4s ease-in-out infinite; }
            .cb-shadow { transform-origin: 50px 86px; animation: cbShadow 4s ease-in-out infinite; }
            @keyframes cbFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
            @keyframes cbShadow { 0%, 100% { transform: scaleX(1); opacity: 0.25; } 50% { transform: scaleX(0.75); opacity: 0.12; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#cubeGrad)" />
        <ellipse cx="50" cy="86" rx="22" ry="3.5" fill="#000" className="cb-shadow" />
        <g className="cb-float">
          <polygon points="50,20 74,33 50,46 26,33" fill="#ff6a1a" />
          <polygon points="26,33 50,46 50,74 26,61" fill="#a688ff" />
          <polygon points="74,33 50,46 50,74 74,61" fill="#00d1ff" />
          <polygon points="50,20 74,33 74,61 50,74 26,61 26,33" fill="none" stroke="#000" strokeWidth="1" />
          <line x1="50" y1="46" x2="50" y2="74" stroke="#000" strokeWidth="1" />
          <polyline points="26,33 50,46 74,33" fill="none" stroke="#000" strokeWidth="1" />
        </g>
      </svg>
    );
  }

  // 22. AmbieNZ ambience ripples
  if (t.includes('ambienz') || t.includes('ambience')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .am-ripple { transform-origin: 50px 50px; animation: amRipple 4s ease-out infinite; }
            .am-leaf { animation: amDrift 6s ease-in-out infinite alternate; }
            @keyframes amRipple { 0% { transform: scale(0.2); opacity: 0.9; } 100% { transform: scale(1.3); opacity: 0; } }
            @keyframes amDrift { 0% { transform: translate(0, 0) rotate(0deg); } 100% { transform: translate(6px, 8px) rotate(25deg); } }
          `}
        </style>
        <rect width="100" height="100" fill="#0a1a17" />
        {[0, 1, 2, 3].map(i => (
          <circle key={i} cx="50" cy="50" r="30" fill="none" stroke="#4ade80" strokeWidth="0.8" className="am-ripple" style={{ animationDelay: `${i}s` }} />
        ))}
        <circle cx="50" cy="50" r="6" fill="#4ade80" />
        <path d="M47,48 L47,53 L50,53 L54,56 L54,45 L50,48 Z" fill="#0a1a17" />
        <ellipse cx="20" cy="22" rx="5" ry="2.4" fill="#fbbf24" className="am-leaf" />
        <ellipse cx="78" cy="74" rx="5" ry="2.4" fill="#ff6a1a" className="am-leaf" style={{ animationDelay: '1.5s' }} />
        <ellipse cx="82" cy="24" rx="4" ry="2" fill="#a688ff" className="am-leaf" style={{ animationDelay: '3s' }} />
      </svg>
    );
  }

  // 23. ADCodec file to pixel transcoder
  if (t.includes('adcodec') || t.includes('codec')) {
    const palette = ['#ff6a1a', '#a688ff', '#00d1ff', '#f472b6', '#4ade80', '#fbbf24'];
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .ad-px { animation: adFlick 2.2s step-end infinite; }
            .ad-arrow { animation: adPush 1.4s ease-in-out infinite; }
            @keyframes adFlick { 50% { opacity: 0.35; } }
            @keyframes adPush { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(3px); } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        {/* File */}
        <path d="M10,30 L26,30 L32,36 L32,70 L10,70 Z" fill="#e4e4e7" />
        <path d="M26,30 L26,36 L32,36" fill="#a1a1aa" />
        {[42, 48, 54, 60].map(y => (
          <line key={y} x1="14" y1={y} x2="28" y2={y} stroke="#6e7180" strokeWidth="1.2" />
        ))}
        <g className="ad-arrow">
          <line x1="37" y1="50" x2="47" y2="50" stroke="#fff" strokeWidth="1.4" />
          <polygon points="47,46 52,50 47,54" fill="#fff" />
        </g>
        {/* Pixel image */}
        {Array.from({ length: 36 }, (_, i) => (
          <rect key={i} x={56 + (i % 6) * 6} y={32 + Math.floor(i / 6) * 6} width="5.4" height="5.4" fill={palette[(i * 7) % palette.length]} className="ad-px" style={{ animationDelay: `${(i * 0.13) % 2.2}s` }} />
        ))}
      </svg>
    );
  }

  // 24. Pixel Game sprite
  if (t.includes('pixel game')) {
    const sprite = ['..XXXX..', '.XXXXXX.', 'XX.XX.XX', 'XXXXXXXX', '.X.XX.X.', 'X......X'];
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .pg-hero { animation: pgJump 1.4s ease-in-out infinite; }
            .pg-coin { transform-origin: 76px 40px; animation: pgCoin 1s linear infinite; }
            @keyframes pgJump { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
            @keyframes pgCoin { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.2); } }
          `}
        </style>
        <rect width="100" height="100" fill="#1e1b4b" />
        {[[12, 14], [40, 22], [84, 12]].map(([x, y]) => (
          <rect key={x} x={x} y={y} width="2" height="2" fill="#fff" opacity="0.7" />
        ))}
        <g className="pg-hero">
          {sprite.flatMap((row, y) =>
            row.split('').map((c, x) => (c === 'X' ? <rect key={`${x}-${y}`} x={34 + x * 4} y={52 + y * 4} width="4" height="4" fill="#4ade80" /> : null))
          )}
        </g>
        <rect x="72" y="36" width="8" height="8" fill="#fbbf24" className="pg-coin" />
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x={i * 10} y="80" width="10" height="20" fill={i % 2 ? '#7c4a24' : '#92593a'} />
        ))}
        <rect x="0" y="80" width="100" height="3" fill="#16a34a" />
      </svg>
    );
  }

  // 25. Nexus Spaces social graph
  if (t.includes('nexus spaces')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .ns-avatar { animation: nsBob 3s ease-in-out infinite alternate; }
            @keyframes nsBob { 0% { transform: translateY(-2px); } 100% { transform: translateY(2px); } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        {[[50, 50, 22, 26], [50, 50, 78, 28], [50, 50, 20, 72], [50, 50, 80, 74], [22, 26, 78, 28], [20, 72, 80, 74]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a688ff" strokeWidth="0.6" opacity="0.5" />
        ))}
        {[[50, 50, '#ff6a1a', 9], [22, 26, '#00d1ff', 6], [78, 28, '#f472b6', 6], [20, 72, '#4ade80', 6], [80, 74, '#fbbf24', 6]].map(([x, y, color, r], i) => (
          <g key={i} className="ns-avatar" style={{ animationDelay: `${i * 0.4}s` }}>
            <circle cx={x as number} cy={y as number} r={r as number} fill={color as string} />
            <circle cx={x as number} cy={(y as number) - (r as number) * 0.25} r={(r as number) * 0.35} fill="#0b0e14" />
          </g>
        ))}
      </svg>
    );
  }

  // 26. Community / college org websites (IEDC, IEEE, Nexus, SIIF, Tesseract, ...)
  if (['iedc', 'ieee', 'nexus', 'siif', 'tesseract', 'tech for good', 'launchpad', 'top 20', 'hello opensource'].some(k => t.includes(k))) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
        </defs>
        <style>
          {`
            .og-shimmer { animation: ogShimmer 2.4s ease-in-out infinite alternate; }
            @keyframes ogShimmer { 0% { opacity: 0.35; } 100% { opacity: 0.9; } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#orgGrad)" />
        <rect x="12" y="16" width="76" height="68" rx="4" fill="#fff" stroke="#000" strokeWidth="1" />
        <line x1="12" y1="26" x2="88" y2="26" stroke="#000" strokeWidth="1" />
        {['#ef4444', '#fbbf24', '#4ade80'].map((c, i) => (
          <circle key={c} cx={18 + i * 5} cy="21" r="1.6" fill={c} />
        ))}
        <text x="50" y="42" fill="#000" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">{title.toUpperCase().slice(0, 14)}</text>
        <rect x="20" y="50" width="60" height="4" rx="2" fill="#a688ff" className="og-shimmer" />
        <rect x="20" y="58" width="44" height="4" rx="2" fill="#a688ff" className="og-shimmer" style={{ animationDelay: '0.4s' }} />
        {[20, 42, 64].map((x, i) => (
          <rect key={x} x={x} y="66" width="16" height="12" rx="1.5" fill={['#ff6a1a', '#00d1ff', '#f472b6'][i]} className="og-shimmer" style={{ animationDelay: `${0.6 + i * 0.3}s` }} />
        ))}
      </svg>
    );
  }

  // 27. Scripting for Security terminal
  if (t.includes('scripting')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .sc-cursor { animation: scBlink 1s step-end infinite; }
            @keyframes scBlink { 50% { opacity: 0; } }
          `}
        </style>
        <rect width="100" height="100" fill="#070a08" />
        <text x="10" y="24" fill="#fbbf24" fontSize="6" fontFamily="monospace">import socket</text>
        <text x="10" y="36" fill="#a1a1aa" fontSize="6" fontFamily="monospace">for port in ports:</text>
        <text x="16" y="46" fill="#a1a1aa" fontSize="6" fontFamily="monospace">scan(target, port)</text>
        <text x="10" y="62" fill="#4ade80" fontSize="6" fontFamily="monospace">[open] 22/ssh  80/http</text>
        <text x="10" y="76" fill="#4ade80" fontSize="6" fontFamily="monospace">$ python3 recon.py</text>
        <rect x="74" y="71" width="3.5" height="6" fill="#4ade80" className="sc-cursor" />
      </svg>
    );
  }

  // 28. SIH hackathon idea bulb
  if (t.includes('sih24') || t.includes('hackathon')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .sh-glow { animation: shGlow 1.8s ease-in-out infinite alternate; }
            @keyframes shGlow { 0% { opacity: 0.2; } 100% { opacity: 0.8; } }
          `}
        </style>
        <rect width="100" height="100" fill="#0b0e14" />
        <circle cx="50" cy="40" r="26" fill="#fbbf24" className="sh-glow" />
        <circle cx="50" cy="40" r="15" fill="#fef3c7" />
        <rect x="43" y="54" width="14" height="10" rx="1" fill="#a1a1aa" />
        <line x1="43" y1="58" x2="57" y2="58" stroke="#6e7180" strokeWidth="0.8" />
        <path d="M45,40 L48,34 L52,44 L55,38" fill="none" stroke="#ff6a1a" strokeWidth="1.2" />
        <text x="50" y="84" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SIH · 24H</text>
      </svg>
    );
  }

  // 29. Unit converter gauge
  if (t.includes('unit measurement') || t.includes('unit converter')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="unitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ccfbf1" />
            <stop offset="100%" stopColor="#ffe3d5" />
          </linearGradient>
        </defs>
        <style>
          {`
            .un-needle { transform-origin: 50px 62px; animation: unSweep 3s ease-in-out infinite alternate; }
            @keyframes unSweep { 0% { transform: rotate(-70deg); } 100% { transform: rotate(70deg); } }
          `}
        </style>
        <rect width="100" height="100" fill="url(#unitGrad)" />
        <path d="M18,62 A32,32 0 0,1 82,62" fill="none" stroke="#000" strokeWidth="2" />
        {Array.from({ length: 9 }, (_, i) => {
          const a = Math.PI + (i * Math.PI) / 8;
          return <line key={i} x1={50 + 28 * Math.cos(a)} y1={62 + 28 * Math.sin(a)} x2={50 + 32 * Math.cos(a)} y2={62 + 32 * Math.sin(a)} stroke="#000" strokeWidth="1" />;
        })}
        <line x1="50" y1="62" x2="50" y2="36" stroke="#ff6a1a" strokeWidth="2" strokeLinecap="round" className="un-needle" />
        <circle cx="50" cy="62" r="3.5" fill="#000" />
        <text x="50" y="84" fill="#000" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">°F ⇄ °C</text>
      </svg>
    );
  }

  // 30. Resume document
  if (t.includes('resume')) {
    return (
      <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .rs-line { transform-origin: 30px 0px; animation: rsType 3s ease-out infinite; }
            @keyframes rsType { 0% { transform: scaleX(0); } 40%, 100% { transform: scaleX(1); } }
          `}
        </style>
        <rect width="100" height="100" fill="#f3d5ff" />
        <rect x="24" y="12" width="52" height="76" rx="2" fill="#fff" stroke="#000" strokeWidth="1" />
        <circle cx="36" cy="26" r="6" fill="#ff6a1a" />
        <rect x="46" y="22" width="22" height="3" fill="#000" />
        <rect x="46" y="28" width="14" height="2" fill="#6e7180" />
        {[42, 48, 54, 64, 70, 76].map((y, i) => (
          <rect key={y} x="30" y={y} width={i % 3 === 2 ? 26 : 40} height="2" fill={i === 0 || i === 3 ? '#a688ff' : '#a1a1aa'} className="rs-line" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </svg>
    );
  }

  // Fallback: monogram tinted by a hue derived from the title, so every project looks distinct
  const hue = [...title].reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) % 360, 7);
  const initials = title.split(/[\s\-_.]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#0d0d0d" />
      <circle cx="50" cy="50" r="30" fill="none" stroke={`hsl(${hue}, 85%, 60%)`} strokeWidth="0.6" opacity="0.35" />
      <circle cx="50" cy="50" r="18" fill={`hsl(${hue}, 85%, 58%)`} opacity="0.9" />
      <text x="50" y="54" fill="#fff" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">{initials || 'LAB'}</text>
    </svg>
  );
};