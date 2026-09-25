export const profile = {
  name: "Estiven De Moya",
  role: "Desarrollador Full-Stack Junior",
  focus: "Backend-leaning · React & TypeScript",
  location: "Valledupar, Cesar, Colombia",
  email: "dsmoyastiven@gmail.com",
  github: "https://github.com/Estiven-29",
  linkedin: "https://www.linkedin.com/in/ing-sven29",
  summary:
    "Estudiante próximo a graduarse de Ingeniería de Sistemas en la Universidad Popular del Cesar (diciembre de 2026). Desarrollo aplicaciones full-stack con React, TypeScript, Python/Django y C#/.NET, integrando APIs REST, PostgreSQL/SQL Server, Docker y AWS. Busco mi primera oportunidad como desarrollador junior, practicante o trainee, aportando código mantenible y aprendizaje continuo.",
};

export const skills = [
  {
    category: "Backend",
    items: ["Python / Django", "C# / .NET", "APIs REST", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Datos",
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "AWS Core Services", "AWS Support", "Git"],
  },
];

export const experience = [
  {
    role: "Desarrollador .NET — Freelance",
    place: "Cliente independiente · México (remoto)",
    period: "Mayo 2024 — Noviembre 2024 · 7 meses",
    description:
      "Desarrollo de soluciones backend en C#/.NET con integración a SQL Server, trabajando de forma remota y directa con un cliente internacional.",
  },
  {
    role: "Desarrollo asistido por IA con agentes",
    place: "Proyectos personales y freelance",
    period: "2024 — Presente",
    description:
      "Incorporo agentes de IA (spec-driven development) en el flujo de trabajo: defino specs y parámetros claros antes de implementar, delego tareas acotadas al agente y valido cada resultado con pruebas y revisión de código, acelerando la entrega sin sacrificar calidad.",
  },
];

export const education = [
  {
    title: "Ingeniería de Sistemas",
    place: "Universidad Popular del Cesar",
    period: "2020 — Diciembre 2026",
  },
];

export const certifications = [
  "AWS Academy Graduate — Cloud Foundations",
  "CCNA: Switching, Routing, and Wireless Essentials",
  "Cyber Threat Management",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de Triage Inteligente",
    description:
      "Plataforma de apoyo a la clasificación de pacientes en urgencias: chatbot de intake, clasificación con un modelo Random Forest (scikit-learn), índice de complejidad inspirado en TISS-28 y dashboard en tiempo real vía WebSocket. Backend en FastAPI con SQLAlchemy, 12 tests con pytest.",
    tags: ["Python", "FastAPI", "React", "Machine Learning", "SQLAlchemy"],
    repo: "https://github.com/Estiven-29/triage-system",
    image: "/projects/triage.jpg",
  },
  {
    title: "Reconocimiento de Gestos para Accesibilidad",
    description:
      "Aplicación que usa visión por computador para reconocer gestos de mano en tiempo real y traducirlos en acciones (clic, scroll, arrastrar), facilitando el acceso a personas con movilidad reducida.",
    tags: ["JavaScript", "Accesibilidad", "Computer Vision"],
    repo: "https://github.com/Estiven-29/Sistema-de-Reconocimiento-de-Gestos-para-Accesibilidad",
    image: "/projects/gestos.jpg",
  },
  {
    title: "Plataforma de Préstamos y Cálculo Financiero",
    description:
      "Aplicación con autenticación (Supabase) para calcular interés simple, interés compuesto, amortización avanzada, anualidades, gradientes, series y TIR, y gestionar solicitudes de préstamo con rutas protegidas.",
    tags: ["TypeScript", "React", "Vite", "Supabase"],
    repo: "https://github.com/Estiven-29/Calculadora-Fintual-V2",
    image: "/projects/fintual.jpg",
  },
  {
    title: "Detección de Amenazas SCADA (Hackathon)",
    description:
      "Dashboard de ciberseguridad para redes industriales: detecta anomalías de tráfico con Isolation Forest (scikit-learn), muestra alertas en tiempo real, grafo de red y recomendaciones, con backend en FastAPI y frontend en React.",
    tags: ["Python", "FastAPI", "React", "Machine Learning"],
    repo: "https://github.com/Estiven-29/RetoHackaton",
    image: "/projects/scada.jpg",
  },
];
