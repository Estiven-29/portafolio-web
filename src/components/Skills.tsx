import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Stack técnico</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-foreground/80 dark:bg-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
