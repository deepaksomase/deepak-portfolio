import { Briefcase, GraduationCap } from 'lucide-react';

type Item = {
  company: string;
  role: string;
  period: string;
  type?: 'work' | 'education';
};

const experience: Item[] = [
  {
    company: 'ZYMR System Pvt. Ltd.',
    role: 'Principal Software Engineer',
    period: 'Jan 2017 - Present',
  },
  {
    company: 'Gurujiworld Technologies Pvt. Ltd.',
    role: 'Tech Lead',
    period: 'Sept 2013 - Dec 2016',
  },
  {
    company: 'Tieto Software Technologies',
    role: 'Senior Software Engineer',
    period: 'May 2010 - Aug 2013',
  },
  {
    company: 'C3IT Software Solutions (P) Ltd.',
    role: 'Software Engineer',
    period: 'July 2007 - May 2010',
  },
  {
    company: 'Heera Software Solutions (P) Ltd.',
    role: 'Trainee Engineer',
    period: 'Jan 2006 - July 2007',
  },
  {
    company: 'Govt. College of Engg. Karad',
    role: 'Master of Computer Application',
    period: '2006',
    type: 'education',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-4 pb-8 sm:px-6"
    >
      <div className="rounded-3xl border border-white/10 bg-[#0c1330] p-6 sm:p-7">
        <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          <Briefcase className="h-3.5 w-3.5" />
          Work Experience — 6 Companies
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {experience.map((item) => {
            const isEducation = item.type === 'education';
            return (
              <div
                key={item.company}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-400/40 hover:bg-white/[0.06]"
              >
                <div
                  className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${
                    isEducation
                      ? 'bg-cyan-500/15 text-cyan-300'
                      : 'bg-violet-500/15 text-violet-300'
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <Briefcase className="h-4 w-4" />
                  )}
                </div>

                <div className="text-sm font-bold leading-tight text-white">
                  {item.company}
                </div>
                <div className="mt-2 text-copy">
                  {item.role}
                </div>
                <div className="mt-2 text-copy-muted">
                  {item.period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
