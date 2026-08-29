import type { Severity } from "@/data/exploits";
import { cn } from "@/lib/utils";

const tone: Record<Severity, string> = {
  CRITICAL: "border-critical text-critical",
  HIGH: "border-high text-high",
  MEDIUM: "border-medium text-medium",
  LOW: "border-low text-low",
};

export default function SeverityChip({
  label,
  level,
}: {
  label: string;
  level: Severity;
}) {
  return (
    <span
      className={cn(
        "border px-2 py-[3px] text-fluid-xs uppercase tracking-[0.14em]",
        tone[level],
      )}
    >
      {label}
    </span>
  );
}
