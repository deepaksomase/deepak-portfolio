import { ArrowRight, Download, Building2, ShieldCheck, Star } from 'lucide-react';
import profileImage from '../assets/images/deepak.jpeg';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '9', label: 'Major Projects' },
  { value: '6', label: 'Companies Worked With' },
  { value: '10+', label: 'Industries Served' },
  { value: '5', label: 'Client Satisfaction', icon: true },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[1.65fr_1fr]"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1230] via-[#0b1024] to-[#0a1024] p-7 sm:p-9">
        <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-12 hidden h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl md:block" />

        <div className="relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            Principal Software Engineer
          </p>

          <h1 className="mb-5 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Building Intelligent Platforms
            <br />
            That{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Drive Real-World Impact.
            </span>
          </h1>

          <p className="mb-7 max-w-xl text-copy">
            20 years of experience architecting and delivering scalable
            digital solutions across Education, FinTech, Cybersecurity,
            Retail, LegalTech and more.
          </p>

          <div className="mb-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-400 hover:to-violet-500"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center gap-1 text-2xl font-black text-white">
                  {stat.value}
                  {stat.icon ? (
                    <Star className="h-5 w-5 fill-violet-400 text-violet-400" />
                  ) : null}
                </div>
                <div className="mt-1 text-copy-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="about"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#10122e] via-[#0b1024] to-[#0a1024] p-6 sm:p-7"
      >
        <div className="absolute -top-16 -right-12 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            About Me
          </div>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <h2 className="mb-3 text-xl font-black leading-tight text-white sm:text-[22px]">
                I turn complex problems into scalable, elegant{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  digital solutions.
                </span>
              </h2>

              <p className="text-copy">
                Technology leader with a principal focus on frontend
                engineering leadership, complemented by leading backend and
                cross-functional teams to ship high-performance applications
                with measurable business impact.
              </p>
            </div>

            <div className="shrink-0">
              <div className="rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-400/40 p-[2px]">
                <img
                  src={profileImage}
                  alt="Deepak Somase"
                  className="h-28 w-24 rounded-2xl object-cover sm:h-32 sm:w-28"
                />
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-violet-400 hover:to-violet-500"
          >
            More About Me
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
                <Building2 className="h-3.5 w-3.5 text-violet-300" />
                Current Company
              </div>
              <div className="mt-1.5 text-sm font-semibold text-white">
                ZYMR System Pvt. Ltd.
              </div>
              <div className="mt-0.5 text-copy-muted">
                Since Jan 2017
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
                Work Authorization
              </div>
              <div className="mt-1.5 text-sm font-semibold text-white">
                USA B1/B2 Visa
              </div>
              <div className="mt-0.5 text-copy-muted">Valid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
