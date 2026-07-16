import React from 'react';

interface ProjectArtworkProps {
  title: string;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({ title }) => {
  const t = title.toLowerCase();

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

  return (
    <svg className="artwork" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#0d0d0d" />
      <circle cx="50" cy="50" r="16" fill="#ff6a1a" opacity="0.85" />
      <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="bold">LAB</text>
    </svg>
  );
};