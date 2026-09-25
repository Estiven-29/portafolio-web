import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-16 pb-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src="/estiven.webp"
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-black/10 dark:ring-white/15"
          style={{ objectPosition: "50% 20%" }}
        />
        <div>
          <p className="text-sm font-medium text-accent">{profile.focus}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-foreground/70">{profile.role}</p>
        </div>
      </div>
      <p className="mt-6 max-w-2xl text-foreground/80">{profile.summary}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#proyectos"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Ver proyectos
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Contactarme
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-sm text-foreground/50">{profile.location}</p>
    </section>
  );
}
