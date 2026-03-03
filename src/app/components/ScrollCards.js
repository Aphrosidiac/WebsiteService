'use client';
import { useEffect, useRef } from 'react';

function ClientCard({ client }) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative block h-96 w-[30rem] shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ${client.bg} transition-transform duration-300 hover:scale-[1.02]`}
    >
      {/* Nav bar */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${client.accent}`} />
          <div className="h-2 w-16 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded-full bg-white/15" />
          <div className="h-2 w-8 rounded-full bg-white/15" />
          <div className="h-2 w-8 rounded-full bg-white/15" />
        </div>
      </div>

      {/* Hero content */}
      <div className="px-5 pt-8">
        <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${client.accent} bg-opacity-20 text-white/70`}>
          {client.tag}
        </span>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
          {client.headline}
        </h3>
        <p className="mt-2 text-sm text-white/50">{client.sub}</p>
      </div>

      {/* Mock content blocks */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
        <div className="mb-3 flex gap-2">
          <div className={`h-8 w-28 rounded-lg ${client.accent} opacity-80`} />
          <div className="h-8 w-20 rounded-lg border border-white/20 bg-white/5" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Project name on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span className="text-xl font-semibold text-white">{client.name}</span>
      </div>
    </a>
  );
}

export default function ScrollCards({ rowOne, rowTwo }) {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let current = 65;
    let target = 65;
    let rafId;

    const getTarget = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
      const eased = Math.min(1, progress * 1.6);
      return (1 - eased) * 65;
    };

    const tick = () => {
      // Lerp current toward target — smaller factor = smoother/more lag
      current += (target - current) * 0.04;

      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${current}%)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-current}%)`;

      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => { target = getTarget(); };

    window.addEventListener('scroll', onScroll, { passive: true });
    target = getTarget();
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="space-y-6 px-4 pb-12 pt-8 md:space-y-8 md:px-8">
      <div ref={row1Ref} className="flex flex-row-reverse gap-6 pb-4 lg:gap-8" style={{ willChange: 'transform' }}>
        {rowOne.map((client) => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-6 pb-4 lg:gap-8" style={{ willChange: 'transform' }}>
        {rowTwo.map((client) => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
    </div>
  );
}
