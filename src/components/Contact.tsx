import { ArrowRight, Mail, MapPin, Rocket } from 'lucide-react';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337V9.928H5.547v8.41h2.792zM6.943 8.78a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24zM18.34 18.337v-4.61c0-2.418-1.293-3.541-3.018-3.541-1.394 0-2.018.766-2.366 1.305v-1.122h-2.626c.035.793 0 8.41 0 8.41h2.626v-4.696c0-.236.017-.473.087-.642.19-.473.622-.962 1.348-.962.95 0 1.33.724 1.33 1.785v4.515h2.62z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.636 22.41c.575.105.785-.25.785-.555v-1.94c-3.197.695-3.872-1.54-3.872-1.54-.523-1.33-1.278-1.685-1.278-1.685-1.045-.715.08-.7.08-.7 1.155.08 1.763 1.187 1.763 1.187 1.027 1.76 2.695 1.252 3.353.957.103-.745.402-1.252.732-1.54-2.553-.292-5.238-1.277-5.238-5.683 0-1.255.448-2.282 1.183-3.087-.118-.293-.513-1.467.112-3.057 0 0 .967-.31 3.167 1.18A10.99 10.99 0 0 1 12 5.78c.98.005 1.97.133 2.893.39 2.198-1.49 3.163-1.18 3.163-1.18.628 1.59.233 2.764.115 3.057.737.805 1.182 1.832 1.182 3.087 0 4.418-2.69 5.388-5.252 5.673.413.358.78 1.06.78 2.135v3.165c0 .308.207.667.79.553A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#160c33] via-[#0b1024] to-[#0a1830] p-6 sm:p-8">
        <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Contact
                  </span>
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:deepak.somase@gmail.com"
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-copy text-white transition hover:bg-white/[0.08]"
              >
                <Mail className="h-4 w-4 text-violet-300" />
                deepak.somase@gmail.com
              </a>
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-copy text-white">
                <MapPin className="h-4 w-4 text-violet-300" />
                Pune, Maharashtra, India
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href="mailto:deepak.somase@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:from-violet-400 hover:to-violet-500"
            >
              Let's Connect
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/deepak-somase-a6851293/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:deepak.somase@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
