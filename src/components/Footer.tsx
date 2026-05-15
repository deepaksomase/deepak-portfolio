import { ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-5 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5 text-copy-muted">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[11px] font-black text-black">
            DS
          </div>
          © 2025 Deepak Somase. All rights reserved.
        </div>

        <nav className="hidden flex-wrap items-center justify-center gap-5 text-copy-muted md:flex">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
