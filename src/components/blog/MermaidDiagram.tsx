"use client";

import React, { useEffect, useId, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

// Palette matched to the blog's editorial theme so diagrams don't look
// bolted on. Mermaid themeVariables use CSS colour values.
const themeVariables = {
  background: '#FAF6F0',
  primaryColor: '#FFFFFF',
  primaryTextColor: '#1c1917',
  primaryBorderColor: '#1c1917',
  secondaryColor: '#F5E2D6',
  tertiaryColor: '#FAF6F0',
  lineColor: '#1c1917',
  textColor: '#1c1917',
  mainBkg: '#FFFFFF',
  nodeBorder: '#1c1917',
  clusterBkg: '#FAF6F0',
  clusterBorder: '#d9d2ca',
  edgeLabelBackground: '#FAF6F0',
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: '15px',
};

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, caption }) => {
  const reactId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          themeVariables,
          flowchart: { curve: 'basis', htmlLabels: true, useMaxWidth: true },
          sequence: { useMaxWidth: true },
        } as any);

        const renderId = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, '')}`;
        const { svg: rendered } = await mermaid.render(renderId, chart.trim());
        if (!cancelled) setSvg(rendered);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  // If Mermaid can't parse or load, fall back to the raw source rather than
  // showing the reader nothing.
  if (failed) {
    return (
      <pre className="my-8 overflow-x-auto rounded-xl border border-black/10 bg-[#111827] p-5 text-sm leading-relaxed font-mono text-gray-100">
        {chart}
      </pre>
    );
  }

  return (
    <figure className="my-8">
      <div
        ref={containerRef}
        role="img"
        aria-label={caption || 'Diagram'}
        className="w-full overflow-x-auto rounded-2xl border border-black/10 bg-[#FAF6F0] p-6 shadow-sm [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
        // Mermaid output, rendered client-side from trusted post content.
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {!svg && (
        <div className="sr-only">Loading diagram</div>
      )}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[#1c1917]/60 font-['Inter',sans-serif] italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
