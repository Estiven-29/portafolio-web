import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <footer
      id="contacto"
      className="border-t border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Hablemos
        </h2>
        <p className="mx-auto mt-2 max-w-md text-foreground/70">
          Estoy buscando mi primera oportunidad como desarrollador junior,
          practicante o trainee. Escríbeme si crees que puedo aportar a tu
          equipo.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex justify-center gap-4 text-sm text-foreground/60">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-foreground/40">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
