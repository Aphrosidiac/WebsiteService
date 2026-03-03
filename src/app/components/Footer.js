import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund Policy" },
  { href: "/cancellation", label: "Cancellation Policy" },
];

export default function Footer({ dark = true }) {
  const linkClass = dark
    ? "text-zinc-300 hover:text-white"
    : "text-slate-700 hover:text-slate-950";
  const metaClass = dark ? "text-zinc-300" : "text-slate-700";

  return (
    <footer className="isolate mx-auto w-full max-w-7xl px-8 pb-10 pt-8">
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className={`mt-4 text-center text-sm ${metaClass}`}>
        <p>AP DEVOTION ENTERPRISE © 2026</p>
        <p>Registration No: 202503329785</p>
      </div>
    </footer>
  );
}
