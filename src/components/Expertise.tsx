const expertise = [
  'Frontend Architecture',
  'Full Stack Development',
  'Cloud-Native Applications',
  'AI Automation',
  'Platform Engineering',
  'Microservices',
  'Visual Design Systems',
  'Leadership & Delivery',
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16"
    >
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
          Expertise
        </p>

        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Enterprise Engineering Expertise
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-base font-semibold">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
}