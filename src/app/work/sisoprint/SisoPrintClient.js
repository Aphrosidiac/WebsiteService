'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import Footer from '@/app/components/Footer';

const screenshots = [
  { file: '01-homepage.png',         label: 'Homepage' },
  { file: '02-products.png',         label: 'Products' },
  { file: '03-product-detail.png',   label: 'Product Detail' },
  { file: '04-login.png',            label: 'Login' },
  { file: '05-signup.png',           label: 'Sign Up' },
  { file: '06-forgot-password.png',  label: 'Forgot Password' },
  { file: '07-order-form.png',       label: 'Order Form' },
  { file: '08-artwork-review.png',   label: 'Artwork Review' },
  { file: '09-checkout.png',         label: 'Checkout' },
  { file: '10-order-confirmation.png', label: 'Order Confirmation' },
  { file: '11-order-tracking.png',   label: 'Order Tracking' },
  { file: '12-account-dashboard.png', label: 'Account Dashboard' },
  { file: '13-account-profile.png',  label: 'Account Profile' },
  { file: '14-credits-wallet.png',   label: 'Credits & Wallet' },
  { file: '15-topup-credits.png',    label: 'Top Up Credits' },
  { file: '16-notifications.png',    label: 'Notifications' },
  { file: '17-about-contact.png',    label: 'About & Contact' },
];

const stack = ['React 19', 'TypeScript', 'Vite 6', 'Tailwind CSS 4', 'React Router v7', 'Playwright'];

function Lightbox({ index, onClose, onPrev, onNext }) {
  const s = screenshots[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
        {index + 1} / {screenshots.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/15 hover:text-white md:left-8"
        aria-label="Previous"
      >
        ←
      </button>

      {/* Image */}
      <div
        className="relative mx-20 max-h-[85vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <div className="ml-3 flex h-5 flex-1 items-center rounded bg-zinc-800 px-2 text-[10px] text-zinc-500">
              sisoprint.com
            </div>
          </div>
          <Image
            src={`/projects/sisoprint/${s.file}`}
            alt={s.label}
            width={1280}
            height={800}
            className="w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center text-sm text-zinc-400">{s.label}</p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/15 hover:text-white md:right-8"
        aria-label="Next"
      >
        →
      </button>
    </div>
  );
}

export default function SisoPrintClient() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const open = (i) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length), []);
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % screenshots.length), []);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-200">
      <div className="aurora-bg" />

      {/* Back nav */}
      <div className="relative z-10 px-8 pt-8 md:px-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <span aria-hidden="true">←</span> Our Work
        </a>
      </div>

      {/* Hero */}
      <section className="isolate relative mx-auto max-w-7xl px-8 pb-16 pt-12 md:px-20">
        <div className="relative inline-block max-w-2xl">
          {/* Soft dark glow behind text */}
          <div className="pointer-events-none absolute -inset-x-12 -inset-y-8 rounded-full bg-zinc-950/80 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Print Service Platform
            </span>
            <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">SisoPrint</h1>
            <p className="mt-5 text-base text-zinc-400 md:text-lg">
              A full-featured online print service platform — browse products, upload artwork,
              manage orders, and track deliveries, all from one clean interface.
            </p>

            {/* Tech stack */}
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="isolate relative mx-auto max-w-7xl px-8 md:px-20">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-[0_0_80px_rgba(59,130,246,0.15)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-5 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <div className="ml-3 flex h-6 flex-1 items-center rounded bg-zinc-800 px-3 text-[11px] text-zinc-500">
              sisoprint.com
            </div>
          </div>
          <Image
            src="/projects/sisoprint/01-homepage.png"
            alt="SisoPrint Homepage"
            width={1280}
            height={800}
            className="w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="isolate relative mx-auto max-w-7xl px-8 pb-24 pt-16 md:px-20">
        <h2 className="mb-8 text-2xl font-semibold text-white md:text-3xl">All Screens</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((s, i) => (
            <button
              key={s.file}
              onClick={() => open(i)}
              className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`/projects/sisoprint/${s.file}`}
                  alt={s.label}
                  fill
                  className="object-cover object-top transition-transform duration-400 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-zinc-300">{s.label}</span>
                <span className="text-xs text-zinc-600 transition-colors group-hover:text-zinc-400">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom back link */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <span aria-hidden="true">←</span> Back to all work
          </a>
        </div>
      </section>

      <Footer dark />

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </main>
  );
}
