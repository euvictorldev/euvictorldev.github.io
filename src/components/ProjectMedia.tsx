import { useEffect, useRef, useState } from "react";
import type { Media } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Browser chrome — three squares, never circles. */
function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-line bg-graphite px-3 py-2">
      <span className="h-2 w-2 bg-line" />
      <span className="h-2 w-2 bg-line" />
      <span className="h-2 w-2 bg-line" />
    </div>
  );
}

export default function ProjectMedia({ media, name }: { media: Media; name: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  // Only load and play video once it is actually on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) void el.play().catch(() => undefined);
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const isMobileFrame = media.frame === "mobile";

  const inner =
    media.kind === "image" ? (
      <img
        src={media.src}
        alt={name}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full object-cover",
          media.aspect === "portrait" ? "aspect-[392/555]" : "",
        )}
      />
    ) : (
      <video
        ref={ref}
        poster={media.poster}
        muted
        loop
        playsInline
        preload="none"
        className="w-full object-cover"
        style={media.zoom ? { transform: `scale(${media.zoom})` } : undefined}
      >
        {visible && <source src={media.webm} type="video/webm" />}
        {visible && <source src={media.mp4} type="video/mp4" />}
      </video>
    );

  return (
    <div
      className={cn(
        "overflow-hidden border border-line bg-surface",
        isMobileFrame ? "mx-auto max-w-[240px]" : "w-full",
      )}
    >
      {media.frame === "browser" && <Chrome />}
      <div className="overflow-hidden">{inner}</div>
    </div>
  );
}
