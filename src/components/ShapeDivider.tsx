import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface ShapeDividerProps {
  /** The direction the divider faces (where the next section is) */
  position?: "top" | "bottom";
  /** The style of the divider from the reference image */
  variant?:
  | "wave-layers"
  | "tilt"
  | "curved-asymmetric"
  | "blob-wave"
  | "liquid-drip"
  | "curve-deep"
  | "zigzag-sharp"
  | "triangle-point"
  | "tilt-simple"
  | "clouds";
  /** The color that matches the adjacent section's background */
  fillColor?: string;
  className?: string;
}

/**
 * High-fidelity SVG shape dividers inspired by premium landing pages.
 * Used to create smooth, organic transitions between sections.
 */
export default function ShapeDivider({
  position = "bottom",
  variant = "wave-layers",
  fillColor = "hsl(var(--secondary))",
  className,
}: ShapeDividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none",
        isTop ? "top-0 rotate-180 -translate-y-[1px]" : "bottom-0 translate-y-[1px]",
        className
      )}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[130px]"
      >
        {variant === "wave-layers" && (
          <>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,29.29,512.12,60.67,583,72.05c69.27,11.12,140.19,5.89,203-24.16,61.76-29.54,122.18-70.18,192-75.14,64.74-4.6,129.14,14.65,165,22.82V0Z"
              fill={fillColor}
              opacity="0.2"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,9.41,98.6,20.15,54,21,115.61,40.5,176.4,36.16,62.16-4.45,115.14-36.93,171-47.18,57.39-10.51,115,16.51,165,24.82V0Z"
              fill={fillColor}
              opacity="0.5"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill={fillColor}
            />
          </>
        )}

        {variant === "tilt" && (
          <path d="M1200 120L0 120 0 0z" fill={fillColor} />
        )}

        {variant === "curved-asymmetric" && (
          <path
            d="M0,120 V0 c112.4,94,282.8,110.1,432.2,60.4 S783.3,21.5,1200,120 Z"
            fill={fillColor}
          />
        )}

        {variant === "blob-wave" && (
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill={fillColor}
          />
        )}

        {variant === "liquid-drip" && (
          <path
            d="M0,0V20c50,40,100,60,150,20s100-60,150-20,100,60,150,20,100-60,150-20,100,60,150,20,100-60,150-20,100,60,150,20V0H0Z"
            fill={fillColor}
          />
        )}

        {variant === "curve-deep" && (
          <path
            d="M0,0C300,100,900,100,1200,0V120H0V0Z"
            fill={fillColor}
          />
        )}

        {variant === "zigzag-sharp" && (
          <path
            d="M0,120 L150,40 L300,100 L450,20 L600,80 L750,30 L900,90 L1050,10 L1200,70 V120 H0 Z"
            fill={fillColor}
          />
        )}

        {variant === "triangle-point" && (() => {
          const peakHeightDesktop = 40;
          const baseWidthDesktop = 60;
          const baseWidthMobile = 150;
          const peakHeightMobile = 30;

          const mobileD = `M0,120 Q350,115 ${600 - baseWidthMobile},115 L600,${peakHeightMobile} L${600 + baseWidthMobile},115 Q850,115 1200,120 V120 H0 Z`;
          const desktopD = `M0,120 Q300,115 ${600 - baseWidthDesktop},115 L600,${peakHeightDesktop} L${600 + baseWidthDesktop},115 Q900,115 1200,120 V120 H0 Z`;

          return (
            <>
              <path className="md:hidden" d={mobileD} fill={fillColor} />
              <path className="hidden md:block" d={desktopD} fill={fillColor} />
            </>
          );
        })()}

        {variant === "tilt-simple" && (
          <path d="M0,0L1200,40V120H0V0Z" fill={fillColor} />
        )}

        {variant === "clouds" && (
          <>
            <path
              d="M0,120 V60 Q150,-20 300,60 Q450,-20 600,60 Q750,-20 900,60 Q1050,-20 1200,60 V120 H0z"
              fill={fillColor}
              opacity="0.3"
            />
            <path
              d="M0,120 V80 Q100,40 200,80 Q300,40 400,80 Q500,40 600,80 Q700,40 800,80 Q900,40 1000,80 Q1100,40 1200,80 V120 H0z"
              fill={fillColor}
            />
          </>
        )}
      </svg>

      {/* 
          STAR ICON FOR TRIANGLE-POINT 
          Needs to be OUTSIDE the <svg> tag because it's a <div> 
      */}
      {variant === "triangle-point" && (() => {
        const starSizeMobile = 14;    // Adjust star size (mobile)
        const starSizeDesktop = 24;   // Adjust star size (desktop)

        return (
          <div
            className="absolute left-1/2 flex items-center justify-center pointer-events-none"
            style={{
              top: '58.33%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Inner container to handle responsive sizes without global CSS vars */}
            <div className="relative">
              <div className="md:hidden" style={{ width: starSizeMobile, height: starSizeMobile }}>
                <StarSVG />
              </div>
              <div className="hidden md:block" style={{ width: starSizeDesktop, height: starSizeDesktop }}>
                <StarSVG />
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

function StarSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path
        d="M12,0 Q12.7,8.3 24,12 Q12.7,15.7 12,24 Q11.3,15.7 0,12 Q11.3,8.3 12,0 Z"
        fill="#00FF41"
      />
    </svg>
  );
}
