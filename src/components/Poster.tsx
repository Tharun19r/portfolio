import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'funnel' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2, 3].map((i) => {
              const w = 170 - i * 36;
              return (
                <rect key={i} x={290 - w / 2} y={50 + i * 40} width={w} height="30" rx="6" strokeWidth="1.8" strokeOpacity={0.5 + i * 0.15} fill={a} fillOpacity={0.08 + i * 0.08} />
              );
            })}
            {[0, 1, 2, 3].map((i) => (
              <text key={i} x={290} y={70 + i * 40} textAnchor="middle" fontFamily="Inter" fontSize="10" letterSpacing="2" fill={a} stroke="none" fillOpacity="0.85">
                {['LEAD', 'QUALIFY', 'VERIFY', 'SANCTION'][i]}
              </text>
            ))}
            <path d="M290 212 v22 M282 226 l8 8 l8 -8" strokeWidth="2" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'verify' && (
          <g fill="none" stroke={a}>
            <path d="M290 40 C 252 40, 226 68, 226 102 C 226 146, 290 206, 290 206 C 290 206, 354 146, 354 102 C 354 68, 328 40, 290 40 Z" strokeWidth="2" strokeOpacity="0.85" fill={a} fillOpacity="0.1" />
            <path d="M266 102 l16 16 l32 -34" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="290" cy="226" rx="70" ry="12" strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="5 5" />
            <text x="210" y="258" fontFamily="Inter" fontSize="10" letterSpacing="2" fill={a} stroke="none" fillOpacity="0.75">GIVEN · WHEN · THEN</text>
          </g>
        )}
        {project.motif === 'lock' && (
          <g fill="none" stroke={a}>
            <path d="M250 112 V 86 C 250 60, 330 60, 330 86 V 112" strokeWidth="6" strokeOpacity="0.85" strokeLinecap="round" />
            <rect x="230" y="110" width="120" height="96" rx="14" strokeWidth="2" fill={a} fillOpacity="0.16" />
            <circle cx="290" cy="148" r="11" fill={a} stroke="none" />
            <path d="M290 156 v22" strokeWidth="6" strokeLinecap="round" />
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${372} ${92 + i * 44})`}>
                <circle r="10" strokeWidth="1.6" strokeOpacity={0.4 + i * 0.2} />
                <path d="M-14 20 C -14 10, 14 10, 14 20" strokeWidth="1.6" strokeOpacity={0.4 + i * 0.2} />
              </g>
            ))}
          </g>
        )}
        {project.motif === 'document' && (
          <g transform="translate(236 34)" fill="none" stroke={a}>
            <path d="M0 0 H86 L118 32 V170 H0 Z" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M86 0 V32 H118" strokeWidth="1.4" strokeOpacity="0.6" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <g key={i}>
                {(i === 2 || i === 5) && <rect x="12" y={46 + i * 16 - 7} width={i === 2 ? 92 : 70} height="12" rx="3" fill={a} fillOpacity="0.28" stroke="none" />}
                <line x1="18" x2={i % 3 === 1 ? 78 : 100} y1={46 + i * 16} y2={46 + i * 16} strokeWidth="3" strokeLinecap="round" strokeOpacity={i === 2 || i === 5 ? 0.95 : 0.35} />
              </g>
            ))}
          </g>
        )}
        {project.motif === 'detect' && (
          <g fill="none" stroke={a}>
            {[
              { x: 214, y: 70, s: 1 },
              { x: 300, y: 128, s: 0.8 },
              { x: 236, y: 178, s: 0.65 },
            ].map((f, i) => (
              <g key={i} transform={`translate(${f.x} ${f.y}) scale(${f.s})`}>
                <path d="M8 24 C 24 4, 60 4, 76 24 C 60 44, 24 44, 8 24 Z M76 24 L96 10 L96 38 Z" fill={a} fillOpacity="0.35" strokeWidth="1.5" strokeOpacity="0.9" />
                <rect x="-6" y="-4" width="110" height="56" rx="3" strokeWidth={2 / f.s} strokeOpacity="0.9" strokeDasharray={i ? '6 5' : undefined} />
                <text x="-6" y="-10" fontFamily="Inter" fontSize={11 / f.s} fill={a} stroke="none" letterSpacing="1">{`fish ${(0.94 - i * 0.07).toFixed(2)}`}</text>
              </g>
            ))}
          </g>
        )}
        {project.motif === 'city' && (
          <g fill="none" stroke={a}>
            {[
              [196, 40, 120],
              [236, 30, 170],
              [270, 44, 100],
              [318, 28, 150],
              [350, 40, 80],
            ].map(([x, w, h], i) => (
              <g key={i}>
                <rect x={x} y={230 - h} width={w} height={h} strokeWidth="1.8" strokeOpacity={0.5 + (i % 2) * 0.4} fill={a} fillOpacity={0.06 + (i % 3) * 0.05} />
                <path d={`M${x} ${230 - h} l10 -8 h${w} l-10 8 M${x + w} ${230 - h} l10 -8 v${h} l-10 8`} strokeWidth="1" strokeOpacity="0.45" />
              </g>
            ))}
            <path d="M180 230 h210" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M180 244 h210 M180 258 h210" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 6" />
          </g>
        )}
        {project.motif === 'domains' && (
          <g fill={a}>
            {Array.from({ length: 40 }, (_, i) => {
              const t = (i * 137.508 * Math.PI) / 180;
              const r = 6 + ((i * 29) % 34);
              const right = i % 2 === 1;
              return <circle key={i} cx={(right ? 320 : 230) + Math.cos(t) * r} cy={120 + Math.sin(t) * r} r={right ? 2.6 : 3} fillOpacity={right ? 0.35 : 0.85} />;
            })}
            <path d="M262 176 C 280 200, 300 200, 318 176" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
            <path d="M310 170 l8 6 l-9 4" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" strokeLinejoin="round" />
            <text x="208" y="214" fontFamily="Inter" fontSize="10" letterSpacing="2" fillOpacity="0.7">SOURCE</text>
            <text x="300" y="214" fontFamily="Inter" fontSize="10" letterSpacing="2" fillOpacity="0.7">TARGET</text>
          </g>
        )}
        {project.motif === 'chart' && (
          <g fill="none" stroke={a}>
            <path d="M196 230 V60 M196 230 H380" strokeWidth="1.6" strokeOpacity="0.6" />
            {[70, 110, 90, 140].map((h, i) => (
              <rect key={i} x={214 + i * 42} y={230 - h} width="26" height={h} rx="3" fill={a} fillOpacity={0.2 + i * 0.12} strokeWidth="1.4" strokeOpacity="0.8" />
            ))}
            <path d="M214 150 C 250 120, 270 150, 300 108 S 350 80, 372 70" strokeWidth="2.4" strokeOpacity="0.95" />
            {[[214, 150], [258, 136], [300, 108], [340, 86], [372, 70]].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="4" fill={a} stroke="none" />
            ))}
          </g>
        )}
        {project.motif === 'points' && (
          <g fill={a}>
            {Array.from({ length: 64 }, (_, i) => {
              // deterministic scatter in two clusters, denser near the boundary between them
              const t = (i * 137.508) % 360;
              const r = 18 + ((i * 53) % 60);
              const cx = (i % 2 ? 250 : 320) + Math.cos((t * Math.PI) / 180) * r;
              const cy = 130 + Math.sin((t * Math.PI) / 180) * r * 0.75;
              const edge = Math.abs(cx - 285) < 14;
              return <circle key={i} cx={cx} cy={cy} r={edge ? 3.2 : 2} fillOpacity={edge ? 0.95 : 0.4} />;
            })}
            <path d="M285 50 C 275 100, 298 160, 285 215" fill="none" stroke={a} strokeWidth="1.6" strokeDasharray="6 6" strokeOpacity="0.8" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M4 6h16M12 6v22" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
