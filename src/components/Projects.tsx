import { ArrowRight, Sparkles } from 'lucide-react';

type Project = {
  number: string;
  title: string;
  domain: string;
  /** Shown under the domain pill: location, product line, etc. (no Client label). */
  contextLine?: string;
  description: string;
  tech: string[];
  gradient: string;
};

const projects: Project[] = [
  {
    number: '1',
    title: 'Layout Designer',
    domain: 'ESL · Digital signage · SuperQueue',
    contextLine: 'from Helsinki, Finland',
    description:
      'Layout Designer is a web authoring product for teams building templates for Electronic Shelf Edge Labels (ESL), in-store digital signage, and SuperQueue experiences. The UI is implemented with GrapeJS as the core page builder: drag-and-drop blocks, component libraries, canvas-style WYSIWYG editing, and structured HTML/CSS output so layouts stay consistent at scale. React powers the application shell, with Node.js APIs, MongoDB for templates and assets, and Azure hosting for reliable delivery in retail environments.',
    tech: ['React', 'Node.js', 'MongoDB', 'Azure', 'GrapeJS'],
    gradient: 'from-cyan-500/40 via-violet-500/20 to-rose-500/30',
  },
  {
    number: '2',
    title: 'PLN (Public Legal Notice Platform)',
    domain: 'Legal noticing · Bankruptcy',
    contextLine: 'from Irvine, CA',
    description:
      'Full-service legal noticing and document production for restructuring teams: logistics, deadlines, and high-volume fulfillment—including dedicated U.S. print facilities, multi-time zone coverage, and same-day or overnight mail at national scale. PLN is the cloud application layer for that model: merged court forms and filings, certificates of service, barcode-driven fulfillment orchestration, and operational visibility for counsel and fiduciaries.',
    tech: ['C#.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'AWS'],
    gradient: 'from-violet-600/40 via-violet-500/20 to-cyan-500/30',
  },
  {
    number: '3',
    title: 'Promotion Management',
    domain: 'Retail analytics · Promotions',
    contextLine: 'from New York, NY',
    description:
      'Promotion management within a retail analytics suite for retailers and consumer brands: real-time analysis of large datasets across promotional performance, inventory, and store execution. Turnkey reports and dashboards give merchandising, revenue, and field teams self-service access to trends and performance so they can adjust strategies quickly, improve promotional ROI, and refine assortment and pricing for stronger sales and margin—without heavy technical lift.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Azure'],
    gradient: 'from-cyan-500/40 via-blue-500/20 to-violet-500/30',
  },
  {
    number: '4',
    title: 'MFGx FuuZ Platform',
    domain: 'IIoT · Industrial low-code',
    description:
      'FuuZ is a hybrid low-code / no-code Industrial Operations Platform (IIoT) for manufacturing—a drag, drop, deploy path to MES, WMS, and QMS experiences without traditional hand-coding. It combines iPaaS and PaaS patterns to bridge IT and OT, connecting machines, ERPs, and databases for real-time operational visibility. Business and plant teams can assemble custom screens, forms, and workflows so delivery leans less on central IT for every app change.',
    tech: ['React', 'Redux', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
    gradient: 'from-emerald-500/40 via-cyan-500/20 to-violet-500/30',
  },
  {
    number: '5',
    title: 'Cybersecurity Platform',
    domain: 'Threat intelligence · SOC',
    contextLine: 'from San Jose, CA',
    description:
      'Cloud-ready, intelligence-led security work on a unified surface that combines advanced security controls, nation-state-grade threat intelligence, and consulting depth so enterprises can prepare for, prevent, and respond to attacks with less toolchain sprawl. The platform is built for teams that need consistent visibility and decisive response without carrying the full operational burden of stitching disparate point products together.',
    tech: ['React', 'StencilJS', 'Angular', 'TypeScript'],
    gradient: 'from-rose-500/40 via-violet-500/20 to-cyan-500/30',
  },
  {
    number: '6',
    title: 'Payment Risk Analytics',
    domain: 'Payments SaaS · Risk',
    contextLine: 'from Redwood City, CA',
    description:
      'A payments platform depends on strong analytics to surface fraud across merchant and consumer flows without slowing legitimate volume. This work centers on a rules-based AI/ML risk stack that evaluates activity and applies policy at payment speed—preserving integrity and settlement confidence so businesses get paid on time while abuse is contained.',
    tech: ['React', 'Angular', 'Java', 'PostgreSQL', 'AI/ML'],
    gradient: 'from-orange-500/40 via-rose-500/20 to-violet-500/30',
  },
  {
    number: '7',
    title: 'GKlass — Learning App',
    domain: 'EdTech · State board (1–10)',
    description:
      'GKlass is a learning product for students and teachers: syllabus-aligned learning (Classes 1–10) delivered as short, animation-led segments (under three minutes) so difficult ideas land within a child\'s attention span. Lessons are structured as page-level interactive videos; Maharashtra State Board is fully covered for English, Marathi, and Semi-English, alongside broader state-board alignment. A dynamic progress dashboard, Bloom\'s Taxonomy-based assessments from topic through subject, powerful module search, and parent-facing learning matrices make progress visible and actionable. Google Drive, Google Classroom, and YouTube are integrated for collaboration, content creation, and distribution.',
    tech: ['React', 'Node.js', 'React Native', 'PostgreSQL', 'Google APIs'],
    gradient: 'from-pink-500/40 via-violet-500/20 to-cyan-500/30',
  },
  {
    number: '8',
    title: 'iMedOne — Hospital Information System (HIS)',
    domain: 'Healthcare IT · Digital hospital',
    contextLine:
      'Telekom Healthcare (T-Systems) product · from Germany',
    description:
      'iMedOne is a flagship Hospital Information System for running modern hospitals: clinical, administrative, and mobile workflows on one integrated platform. It sharpens resource management with OR scheduling that aligns cases to rooms, staff, and equipment; bed and patient-flow visibility from admission through discharge for capacity planning; and staffing tools for specialized roles across departments. Emergency, diagnostics, pharmacy, and nursing stay connected for a coherent patient journey, while iMedOne Mobile gives clinicians bedside access to longitudinal data for faster decisions.',
    tech: ['C#', 'ASP.NET', 'Oracle'],
    gradient: 'from-sky-500/40 via-teal-500/20 to-emerald-500/30',
  },
  {
    number: '9',
    title: 'ZAIQA',
    domain: 'Agentic QA · API & Web',
    contextLine: 'Zymr product',
    description:
      'ZAIQA is an agentic AI product for generating QA automation for APIs and web applications with minimal hand-written scripts. On the API side it ingests OpenAPI/Swagger to auto-build validation suites—handling request sequencing, parameter permutations, and auth rules while masking sensitive data—then applies risk-based prioritization and rapid root-cause insight so services stay reliable and secure as they scale. For the UI it records real user journeys, emits resilient tests, and self-heals broken locators as the DOM shifts; runs distribute across browsers and devices with built-in analytics on stability trends so teams see where quality is drifting before release.',
    tech: ['OpenAPI/Swagger', 'AI/ML', 'Web automation', 'API testing'],
    gradient: 'from-amber-500/40 via-violet-500/20 to-fuchsia-500/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
      <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
        <Sparkles className="h-3.5 w-3.5" />
        Featured Projects
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c1330] transition hover:border-violet-400/40"
          >
            <div
              className={`relative h-32 bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />
              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-black/50 text-xs font-black text-white backdrop-blur">
                {project.number}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold leading-tight text-white">
                {project.title}
              </h3>

              <div className="mt-2 inline-flex w-fit rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                {project.domain}
              </div>

              {project.contextLine ? (
                <p className="mt-2 text-copy-muted">
                  {project.contextLine}
                </p>
              ) : null}

              <p className="mt-3 text-copy">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/15 bg-white/[0.08] px-2 py-0.5 text-copy"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
