import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Proyectos</h2>
      <p className="mt-2 text-foreground/70">
        Una selección de proyectos personales y académicos.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 transition-colors hover:border-accent/50 dark:border-white/10"
          >
            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden bg-black/5 dark:bg-white/5">
                <Image
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-foreground/70">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-foreground/70 dark:bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 text-sm font-medium text-accent">
                Ver repositorio →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
