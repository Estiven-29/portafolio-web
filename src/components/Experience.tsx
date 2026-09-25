import { certifications, education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">
        Experiencia y formación
      </h2>

      <div className="mt-8 space-y-6">
        {experience.map((item) => (
          <div
            key={item.role}
            className="rounded-2xl border border-black/10 p-5 dark:border-white/10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{item.role}</h3>
              <span className="text-sm text-foreground/50">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-foreground/60">{item.place}</p>
            <p className="mt-2 text-sm text-foreground/80">
              {item.description}
            </p>
          </div>
        ))}

        {education.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/10 p-5 dark:border-white/10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-sm text-foreground/50">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-foreground/60">{item.place}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-foreground/50">
        Certificaciones
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <li
            key={cert}
            className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-foreground/80 dark:bg-white/10"
          >
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}
