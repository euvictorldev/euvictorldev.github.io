import { cn } from "@/lib/utils";
import React from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  animateText?: boolean;
  animateLines?: boolean;
  techIcons?: Array<{
    icon: React.ReactNode;
    /** SVG x coordinate of path start */
    x: number;
    /** SVG y coordinate of path start */
    y: number;
  }>;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  animateText = true,
  animateLines = true,
  techIcons,
}: CpuArchitectureSvgProps) => {
  
  // Truly asymmetrical, varied paths with different segment counts and directions
  const paths = [
    // 1. Long winding path from far top-left
    "M 15 15 h 25 v 15 q 0 5 5 5 h 40",
    // 2. Direct horizontal path from mid-left
    "M 10 48 h 75",
    // 3. Winding snake from bottom-left
    "M 25 82 h 15 v -10 q 0 -5 5 -5 h 15 v -10 q 0 -5 5 -5 h 20",
    
    // 4. Short vertical drop from top-leftish
    "M 65 12 v 15 q 0 5 5 5 h 15 v 8",
    // 5. Very long vertical path from top center
    "M 98 5 v 35",
    // 6. Complex snake from top-right
    "M 160 12 v 8 q 0 4 -4 4 h -20 v 6 q 0 4 -4 4 h -23.5 v 6",
    
    // 7. Stepped path from far right-top
    "M 188 22 h -20 v 15 q 0 5 -5 5 h -48",
    // 8. Simple horizontal from mid-right
    "M 190 52 h -75",
    // 9. Diagonal-like snake from bottom-right
    "M 180 88 h -15 v -15 q 0 -5 -5 -5 h -15 v -10 q 0 -5 -5 -5 h -25",
    
    // 10. Direct vertical drop from bottom-rightish
    "M 140 92 v -10 q 0 -5 -5 -5 h -26.5 v -17",
    // 11. Short vertical from bottom-center
    "M 102 85 v -25",
    // 12. Far snake from bottom-leftish
    "M 45 92 v -10 q 0 -5 5 -5 h 15 v -12 q 0 -5 5 -5 h 20 v -10",
  ];

  const grads = [
    "blue", "cyan", "pinkish", "white", "green", "orange", 
    "cyan", "yellow", "rose", "blue", "green", "orange"
  ];

  return (
    <svg
      className={cn("text-muted overflow-visible", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
      style={{ overflow: "visible" }}
    >
      {/* Background Circuit Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.25"
        strokeDasharray="100 100"
        pathLength="100"
        opacity="0.2"
      >
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}

        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1.8s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4, 0, 0.2, 1"
          />
        )}
      </g>

      {/* Animated Light Streaks */}
      {paths.map((d, i) => (
        <g key={`light-${i}`} mask={`url(#cpu-mask-${i + 1})`}>
          <circle
            className={`cpu-architecture cpu-line-${i + 1}`}
            cx="0"
            cy="0"
            r="6"
            fill={`url(#cpu-${grads[i]}-grad)`}
          />
        </g>
      ))}

      {/* Tech icons - Centered correctly without clipping */}
      {techIcons?.map((item, i) => {
        const size = 14;
        return (
          <foreignObject
            key={i}
            x={item.x - size / 2}
            y={item.y - size / 2}
            width={size}
            height={size}
            overflow="visible"
          >
            <div
              className="animate-in fade-in zoom-in duration-700 fill-mode-both"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#080808",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.7)",
                padding: "2.5px",
                animationDelay: `${i * 120}ms`
              }}
            >
              {item.icon}
            </div>
          </foreignObject>
        );
      })}

      {/* Central CPU Unit with 12 Pins */}
      <g>
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            {/* Top connectors (3) */}
            <rect x="87.5" y="36.5" width="2.5" height="4.5" rx="0.3" />
            <rect x="97.5" y="36.5" width="2.5" height="4.5" rx="0.3" />
            <rect x="107.5" y="36.5" width="2.5" height="4.5" rx="0.3" />
            
            {/* Bottom connectors (3) */}
            <rect x="87.5" y="59" width="2.5" height="4.5" rx="0.3" />
            <rect x="97.5" y="59" width="2.5" height="4.5" rx="0.3" />
            <rect x="107.5" y="59" width="2.5" height="4.5" rx="0.3" />
            
            {/* Left connectors (3) */}
            <rect x="81" y="42.5" width="4.5" height="2.5" rx="0.3" />
            <rect x="81" y="47.5" width="4.5" height="2.5" rx="0.3" />
            <rect x="81" y="52.5" width="4.5" height="2.5" rx="0.3" />
            
            {/* Right connectors (3) */}
            <rect x="114.5" y="42.5" width="4.5" height="2.5" rx="0.3" />
            <rect x="114.5" y="47.5" width="4.5" height="2.5" rx="0.3" />
            <rect x="114.5" y="52.5" width="4.5" height="2.5" rx="0.3" />
          </g>
        )}
        
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          rx="1.5"
          fill="#0c0c0c"
          filter="url(#cpu-light-shadow)"
        />
        <text
          x="100"
          y="51.5"
          fontSize="4"
          fill={animateText ? "url(#cpu-text-gradient)" : "white"}
          fontWeight="900"
          letterSpacing="0.1em"
          textAnchor="middle"
        >
          {text}
        </text>
      </g>

      <defs>
        {paths.map((d, i) => (
          <mask id={`cpu-mask-${i + 1}`} key={i}>
            <path d={d} strokeWidth="1" stroke="white" fill="none" />
          </mask>
        ))}

        {/* Gradients */}
        <radialGradient id="cpu-blue-grad" fx="1">
          <stop offset="0%" stopColor="#00E8ED" />
          <stop offset="40%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#FFD800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#FF008B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-orange-grad" fx="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <filter id="cpu-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="0.6" floodColor="black" floodOpacity="0.9" />
        </filter>
        
        <linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>

        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#444">
            <animate attributeName="offset" values="-2; 1" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="white">
            <animate attributeName="offset" values="-1; 2" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#444">
            <animate attributeName="offset" values="0; 3" dur="4s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };
