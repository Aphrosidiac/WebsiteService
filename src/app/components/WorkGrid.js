'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* ─── Image Card ──────────────────────────────────────────────── */
function ImageCard({ project }) {
  return (
    <a
      href={project.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_0_40px_-8px_rgba(96,165,250,0.25)] transform-gpu"
    >
      {/* Glow ring on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 60px -20px ${project.accentColor ?? '#60a5fa'}33` }}
      />

      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-800/80 px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        <div className="ml-3 flex h-5 flex-1 items-center rounded bg-zinc-700/60 px-2 text-[10px] text-zinc-500">
          {project.url ?? project.name.toLowerCase().replace(/\s+/g, '') + '.com'}
        </div>
      </div>

      {/* Screenshot with overlay */}
      <div className="relative aspect-video transform-gpu">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={project.cover}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Dark overlay that reveals on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Hover CTA centred on image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm"
              style={{ background: `${project.accentColor ?? '#60a5fa'}30`, border: `1px solid ${project.accentColor ?? '#60a5fa'}60` }}
            >
              View Project
              <svg className="h-3.5 w-3.5 translate-x-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="-mt-px bg-zinc-900 p-5">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{project.sub}</p>
      </div>
    </a>
  );
}

/* ─── Mock Card ───────────────────────────────────────────────── */
function MockCard({ project }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${project.bg} transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:shadow-2xl`}
    >
      {/* Animated shimmer */}
      <div className="pointer-events-none absolute -inset-x-full top-0 h-full w-[200%] -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      {/* Nav bar */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${project.accent} opacity-90`} />
          <div className="h-2 w-20 rounded-full bg-white/25 transition-all duration-500 group-hover:w-24 group-hover:bg-white/35" />
        </div>
        <div className="flex gap-2.5">
          {[10, 12, 8].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-white/15" style={{ width: `${w * 4}px` }} />
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="px-5 pt-6">
        <span className={`inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold tracking-wide ${project.accent} bg-opacity-20 text-white/80`}>
          {project.tag}
        </span>
        <h3 className="mt-3 text-xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-white">
          {project.headline}
        </h3>
        <p className="mt-1.5 text-sm text-white/50 leading-relaxed">{project.sub}</p>
      </div>

      {/* Mock UI blocks */}
      <div className="px-5 pb-5 pt-5">
        {/* Buttons row */}
        <div className="mb-4 flex gap-2">
          <div className={`h-8 w-28 rounded-lg ${project.accent} opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-lg`} />
          <div className="h-8 w-20 rounded-lg border border-white/20 bg-white/5 transition-all duration-300 group-hover:bg-white/10" />
        </div>

        {/* Content lines */}
        <div className="space-y-2.5">
          <div className="h-2 w-full rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white/15" />
          <div className="h-2 w-4/5 rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white/15" style={{ transitionDelay: '40ms' }} />
          <div className="h-2 w-3/5 rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white/15" style={{ transitionDelay: '80ms' }} />
        </div>

        {/* Mock cards row */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-14 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Coming soon badge */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-white/50 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/70">
          <span className={`h-1.5 w-1.5 rounded-full ${project.accent} animate-pulse`} />
          Coming soon
        </div>
      </div>
    </div>
  );
}

/* ─── Card Wrapper (scroll reveal) ───────────────────────────── */
function CardWrapper({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
      }}
    >
      {project.cover ? <ImageCard project={project} /> : <MockCard project={project} />}
    </div>
  );
}

/* ─── Work Grid ───────────────────────────────────────────────── */
export default function WorkGrid({ projects }) {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-16 pt-8 md:px-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <CardWrapper key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
