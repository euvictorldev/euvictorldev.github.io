export const profile = {
  handle: "pixo",
  name: "Victor Lobato",
  title: "Full-Stack Developer & Security Researcher",
  bio: "Systems Analysis student. I build systems, then I try to break them.",
};

export const links = [
  { label: "GitHub", href: "https://github.com/euvictorldev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/euvictorldev/" },
  { label: "X", href: "https://x.com/euvictorldev" },
];

export const certifications = [
  {
    name: "SYCP — Pentest do Zero ao Profissional (v2022)",
    issuer: "Solyd Offensive Security",
    note: null as string | null,
    href: "https://solyd.com.br/verificar/RxF8k5LAk7/" as string | null,
  },
  {
    name: "Technical Diploma in Information Technology",
    issuer: "IFPA — Instituto Federal do Pará",
    note: null as string | null,
    href: null as string | null,
  },
];

export const books: { title: string; short: string; status?: string }[] = [
  { title: "OWASP Web Security Testing Guide", short: "WSTG", status: "Read" },
  { title: "OWASP Application Security Verification Standard", short: "ASVS", status: "Read" },
  { title: "From Day Zero to Zero Day: A Hands-On Guide to Vulnerability Research", short: "D0Z2D" },
];

export const portswigger = {
  level: "Expert" as const,
  completedDate: "2026-10-10",
  totalLabs: 274,
  tiers: [
    { name: "Apprentice",   completed: 61,  total: 61  },
    { name: "Practitioner", completed: 173, total: 173 },
    { name: "Expert",       completed: 40,  total: 40  },
  ],
};

export const stack = [
  { group: "LANG", items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL"] },
  { group: "BACKEND", items: ["FastAPI", "Node.js", "Supabase", "PostgreSQL", "Redis"] },
  { group: "FRONTEND", items: ["React", "Next.js", "Tailwind"] },
  { group: "OPS", items: ["Docker", "Git", "Linux"] },
  { group: "SECURITY", items: ["Burp Suite", "nmap", "OSINT", "Recon", "Reversing"] },
  { group: "AI", items: ["Claude", "Gemini", "ChatGPT", "DeepSeek"] },
];
