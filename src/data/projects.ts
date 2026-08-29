export type Frame = "browser" | "mobile" | "plain";

export type Media =
  | { kind: "image"; src: string; frame: Frame; aspect?: "portrait" }
  | { kind: "video"; mp4: string; webm: string; poster: string; frame: Frame; zoom?: number };

export type Project = {
  id: string;
  name: string;
  role: string;
  period: string;
  /** Sort key — YYYYMM of the end date. Higher is newer. 2099xx pins "present". */
  sort: number;
  summary: string;
  bullets: string[];
  stack: string[];
  security?: boolean;
  media?: Media;
};

/** Reverse-chronological — sorted at the bottom of this file, not by hand. */
const all: Project[] = [
  {
    id: "hades-agent",
    name: "Hades-Agent",
    role: "AI Product Engineer",
    period: "May 2026 — present",
    sort: 209912,
    summary: "Native desktop AI assistant running an autonomous agent loop with real-time audio.",
    bullets: [
      "Electron shell centralising global shortcut capture without I/O contention — singleton window pattern with instant hide.",
      "Agentic ReAct loop over the Gemini API: the frontend drives iterations through IPC and picks its own tools (web search, screen capture).",
      "Real-time audio pipeline slicing the signal over WebSockets and IPC into gemini-2.5-flash-native-audio.",
      "Self-evolution daemon that replays historical logs, derives behaviour corrections and writes its own skills as Markdown.",
    ],
    stack: ["Electron", "Node.js", "Gemini API", "TypeScript"],
    media: { kind: "image", src: "/images/icon.png", frame: "plain" },
  },
  {
    id: "ghostcommit",
    name: "GhostCommit",
    role: "Creator & Software Engineer",
    period: "May 2026 — present",
    sort: 209911,
    summary: "Open-source VS Code extension automating programmatic commits through the GitHub API.",
    bullets: [
      "VS Code API listeners intercepting edits in real time, whether written by a human or an autonomous agent.",
      "Programmatic commits via @octokit/rest with Base64 payload pushes and no token persisted to disk.",
      "Native SVG engine written in plain TypeScript, injected into the README to defeat GitHub static-asset caching.",
      "Non-blocking I/O: in-memory buffering with debouncing, plus obfuscation of client and confidential file names.",
    ],
    stack: ["TypeScript", "VS Code API", "Node.js", "Octokit"],
    media: { kind: "image", src: "/images/ghostcommit-icon.png", frame: "plain" },
  },
  {
    id: "bloom",
    name: "Bloom",
    role: "Software Engineer",
    period: "May 2026",
    sort: 202605,
    summary: "Serverless telehealth platform on native WebRTC with zero-auth patient access.",
    bullets: [
      "Peer-to-peer signalling built on Supabase Broadcast and STUN servers — zero cost at rest.",
      "Zero-auth flow: unique UUIDs on Next.js dynamic routes drop the patient straight into a waiting room, no account required.",
      "Edge-level extension blocking on file transfer, with Web Push notifications wired to the database.",
    ],
    stack: ["TypeScript", "Next.js", "Supabase", "WebRTC"],
    media: { kind: "image", src: "/images/bloom.png", frame: "browser" },
  },
  {
    id: "to-brocado",
    name: "Tô Brocado",
    role: "Mobile Full-Stack Engineer",
    period: "Apr 2026",
    sort: 202604,
    summary: "Full-stack local delivery ecosystem — feature-first architecture, zero-trust security.",
    bullets: [
      "Reactive state through Riverpod with optimistic UI: instant mutation, silent rollback on failure.",
      "Hybrid geolocation — local cache plus Geolocator GPS, with filtering pushed down into the Supabase engine.",
      "Realtime PIX automation over PostgreSQL CDC and WebSockets, validated with HMAC SHA-256.",
      "Buffered bulk writes: in-memory retention flushed through batched RPC calls every 5s.",
    ],
    stack: ["Flutter", "Riverpod", "Supabase", "PostgreSQL"],
    media: {
      kind: "video",
      mp4: "/videos/mobile-app.mp4",
      webm: "/videos/mobile-app.webm",
      poster: "/images/mobile-app-poster.webp",
      frame: "mobile",
    },
  },
  {
    id: "hadespay",
    name: "HadesPay",
    role: "Full-Stack Software Engineer",
    period: "Dec 2025 — Feb 2026",
    sort: 202602,
    summary:
      "Multitenant billing-automation gateway orchestrating AI agents over WhatsApp, with RAG and RLS.",
    bullets: [
      "Redis rolling-window debounce grouping fragmented messages, cutting LLM spend sharply.",
      "Circuit breaker isolating upstream instability, plus the Outbox pattern with arq workers for replay.",
      "Vector search via native pgvector with HNSW indexes for fast semantic context injection.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    media: {
      kind: "video",
      mp4: "/videos/discord-bot.mp4",
      webm: "/videos/discord-bot.webm",
      poster: "/images/hadespay-poster.webp",
      frame: "browser",
    },
  },
  {
    id: "cryptoswift",
    name: "CryptoSwift Pay",
    role: "Backend Engineer",
    period: "Nov 2025",
    sort: 202511,
    summary: "No-KYC gateway automating multi-cryptocurrency payments through NowPayments.",
    bullets: [
      "Native REST consumption generating throwaway addresses per session.",
      "Async IPN routines capturing, parsing and cryptographically validating confirmed payments.",
    ],
    stack: ["Python", "REST APIs", "Webhooks", "JSON"],
  },
  {
    id: "clonemaster",
    name: "CloneMaster Bot",
    role: "Software Engineer",
    period: "Sep 2025",
    sort: 202509,
    summary: "Telegram mirroring bot built for low-latency media concurrency.",
    bullets: [
      "Event-driven MTProto through Telethon, parsing simultaneous payloads across multiple channels.",
      "Dedicated async upload and download queues, isolated so the primary thread never stalls.",
    ],
    stack: ["Python", "Telethon", "AsyncIO", "Streams"],
  },
  {
    id: "socialbuddy",
    name: "SocialBuddy",
    role: "Software Engineer",
    period: "Aug 2025",
    sort: 202508,
    summary: "Multi-token orchestration engine for scalable Telegram engagement.",
    bullets: [
      "Centralised dispatch driving a fleet in parallel against specific channels and posts.",
      "Anti-flood HTTP queueing with jitter, to work around aggressive FloodWait limits.",
    ],
    stack: ["Python", "Telebot", "AsyncIO", "Rate Limits"],
  },
  {
    id: "mercadolink",
    name: "MercadoLink Bot",
    role: "Software Engineer",
    period: "Jul 2025",
    sort: 202507,
    summary: "Native Telegram checkout with automated fulfilment through Mercado Pago.",
    bullets: [
      "Inline-keyboard storefront driving catalogue browsing entirely inside the chat client.",
      "Autonomous fulfilment: gateway webhooks intercepted, digital media released to approved buyers automatically.",
    ],
    stack: ["Python", "Telebot", "Mercado Pago"],
  },
  {
    id: "passguard",
    name: "PassGuard OSINT",
    role: "Security Engineer",
    period: "Feb 2025",
    sort: 202502,
    summary: "Open-source intelligence tool for leaked-credential detection and monitoring.",
    bullets: [
      "Cyclic sweeps against major breach corpora (HIBP and others) over REST.",
      "SHA-256 k-anonymity range queries — the plaintext password never leaves the client.",
    ],
    stack: ["Python", "OSINT", "Cryptography", "REST"],
    security: true,
  },
  {
    id: "zomboid-discord",
    name: "Real-Time Discord Integration",
    role: "Software Engineer",
    period: "Jul 2024",
    sort: 202407,
    summary: "Telemetry bot bridging dedicated Project Zomboid servers to Discord over raw UDP.",
    bullets: [
      "Async UDP client querying servers with binary packets over the Valve A2S_INFO protocol.",
      "Sliding-window polling with caching, so the poller never turns into an accidental DDoS.",
      "Queued rich-embed edits to stay inside Discord gateway rate limits.",
    ],
    stack: ["Node.js", "UDP Sockets", "Discord API"],
    media: {
      kind: "image",
      src: "/images/discord-bot-preview.png",
      frame: "plain",
      aspect: "portrait",
    },
  },
  {
    id: "yt-link-player",
    name: "YT-Link-Player",
    role: "Software Engineer",
    period: "Aug — Sep 2023",
    sort: 202309,
    summary: "Minimal desktop music player built around a very small RAM footprint.",
    bullets: [
      "Trimmed Electron runtime focused almost purely on audio extraction and conversion.",
      "YouTube Data API v3 with async pagination over deep URLs, working around Google restrictions.",
      "System tray integration hooked into the OS lifecycle, non-obstructive by design.",
    ],
    stack: ["Electron.js", "Node.js", "YouTube API"],
    media: {
      kind: "video",
      mp4: "/videos/youtube-link-player-showcase.mp4",
      webm: "/videos/youtube-link-player-showcase.webm",
      poster: "/images/yt-link-player-poster.webp",
      frame: "browser",
      zoom: 2,
    },
  },
];

export const projects = [...all].sort((a, b) => b.sort - a.sort);
