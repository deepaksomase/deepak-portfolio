import type { ReactNode } from 'react';
import type { IconBaseProps, IconType } from 'react-icons/lib';
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGooglegemini,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStencil,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandAzure, TbSql } from 'react-icons/tb';
import {
  Code,
  Layers,
  Cloud,
  Users,
  Lightbulb,
  Sparkles,
  Target,
  CheckCircle2,
  Layout,
} from 'lucide-react';

/** Oracle mark (Simple Icons shape, MIT) — not bundled in current `react-icons/si`. */
function OracleIcon(props: IconBaseProps) {
  const { className, ...rest } = props;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...rest}
    >
      <path
        fill="currentColor"
        d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z"
      />
    </svg>
  );
}

const expertise = [
  {
    icon: Layout,
    title: 'Frontend Architecture',
    desc: 'Scalable & Maintainable UI',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Engineering',
    desc: 'Responsive & Accessible UI',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    desc: 'End-to-End Solution Delivery',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    desc: 'Mentoring & Delivery',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Apps',
    desc: 'Azure',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    desc: 'Complexity Into Simplicity',
  },
];

type TechStackItem = {
  name: string;
  Icon: IconType | ((props: IconBaseProps) => ReactNode);
  iconClass: string;
};

const techStack: TechStackItem[] = [
  { name: 'React', Icon: SiReact, iconClass: 'text-[#61DAFB]' },
  { name: 'TypeScript', Icon: SiTypescript, iconClass: 'text-[#3178C6]' },
  { name: 'Angular', Icon: SiAngular, iconClass: 'text-[#DD0031]' },
  { name: 'StencilJS', Icon: SiStencil, iconClass: 'text-[#FF7100]' },
  { name: 'Node.js', Icon: SiNodedotjs, iconClass: 'text-[#5FA04E]' },
  { name: 'Next.js', Icon: SiNextdotjs, iconClass: 'text-white' },
  { name: 'C#', Icon: SiDotnet, iconClass: 'text-[#512BD4]' },
  { name: 'Python', Icon: SiPython, iconClass: 'text-[#3776AB]' },
  { name: 'Azure', Icon: TbBrandAzure, iconClass: 'text-[#0078D4]' },
  { name: 'GraphQL', Icon: SiGraphql, iconClass: 'text-[#E10098]' },
  { name: 'Docker', Icon: SiDocker, iconClass: 'text-[#2496ED]' },
  { name: 'Tailwind', Icon: SiTailwindcss, iconClass: 'text-[#06B6D4]' },
  { name: 'Jest', Icon: SiJest, iconClass: 'text-[#C21325]' },
  { name: 'Git', Icon: SiGit, iconClass: 'text-[#F05032]' },
  { name: 'PostgreSQL', Icon: SiPostgresql, iconClass: 'text-[#4169E1]' },
  { name: 'SQL', Icon: TbSql, iconClass: 'text-sky-300' },
  { name: 'Oracle', Icon: OracleIcon, iconClass: 'text-[#F80000]' },
  { name: 'MongoDB', Icon: SiMongodb, iconClass: 'text-[#47A248]' },
  { name: 'OpenAI', Icon: SiOpenai, iconClass: 'text-[#10A37F]' },
  { name: 'Gemini', Icon: SiGooglegemini, iconClass: 'text-[#8E75FF]' },
  { name: 'Ollama', Icon: SiOllama, iconClass: 'text-slate-200' },
];

const highlights = [
  'Led frontend teams & delivered multiple enterprise platforms',
  'Expert in React ecosystem, micro-frontends & performance optimization',
  'Strong advocate of clean code, testing & CI/CD practices',
  'Client collaboration in USA & Germany',
  'Passionate about AI, automation & cloud-native architectures',
  'USA B1/B2 Visa - Valid',
];

export default function Skills() {
  return (
    <section
      id="expertise"
      className="mx-auto grid max-w-7xl gap-4 px-4 pb-8 sm:px-6 lg:grid-cols-3"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0c1330] p-5">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          <Target className="h-3.5 w-3.5" />
          Core Expertise
        </div>
        <div className="grid grid-cols-2 gap-3">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <Icon className="mb-2 h-4 w-4 text-violet-300" />
                <div className="text-xs font-semibold leading-tight text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-copy">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0c1330] p-5">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
          <Layers className="h-3.5 w-3.5" />
          Technology Stack
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
          {techStack.map((tech) => {
            const Icon = tech.Icon;
            return (
              <div
                key={tech.name}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-1.5 py-1.5 text-center"
              >
                <div className="mx-auto mb-0.5 flex h-6 w-6 items-center justify-center rounded bg-white/5">
                  <Icon className={`h-3.5 w-3.5 ${tech.iconClass}`} aria-hidden />
                </div>
                <div className="text-copy font-medium">
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0c1330] p-5">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          <Sparkles className="h-3.5 w-3.5" />
          Highlights
        </div>
        <ul className="space-y-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-copy"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
