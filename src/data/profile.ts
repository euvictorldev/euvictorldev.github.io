export const profile = {
  handle: "pixo",
  name: "Victor Lobato",
  title: "Full-Stack Developer & Security Researcher",
  bio: "Systems Analysis student. Trained at IFPA and Solyd Offensive Security. I build systems, then I try to break them.",
  badges: [
    // TODO(victor): drop your TryHackMe profile URL in here to make this a link.
    { label: "TryHackMe Top 1% Global", href: null as string | null },
    { label: "NASA 2x P1", href: null as string | null },
  ],
};

export const links = [
  { label: "GitHub", href: "https://github.com/euvictorldev" },
  { label: "X", href: "https://x.com/euvictorldev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/euvictorldev/" },
  { label: "Discord", href: "https://discord.gg/AF3Hgvjxd5" },
  { label: "Instagram", href: "https://instagram.com/euvictorldev" },
];

export const reading = [
  { title: "OWASP Web Security Testing Guide", short: "WSTG", status: "Read" },
  { title: "OWASP Application Security Verification Standard", short: "ASVS", status: "Read" },
];

export const stack = [
  { group: "LANG", items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL"] },
  { group: "BACKEND", items: ["FastAPI", "Node.js", "Supabase", "PostgreSQL", "Redis"] },
  { group: "FRONTEND", items: ["React", "Next.js", "Tailwind", "Flutter"] },
  { group: "OPS", items: ["Docker", "Git", "Linux"] },
  { group: "SECURITY", items: ["Burp Suite", "nmap", "OSINT", "Recon", "Reversing"] },
  { group: "AI", items: ["Claude", "Gemini", "ChatGPT", "DeepSeek"] },
];
