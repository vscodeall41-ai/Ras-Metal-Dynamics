import { siteConfig } from "@/content/site";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* RM Mark — Angular industrial style inspired by brand vehicle graphics */}
      <svg
        width="42"
        height="32"
        viewBox="0 0 42 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M4 4 L14 28 L22 4 L30 28 L40 4"
          stroke={isLight ? "#F5F5F5" : "#C53030"}
          strokeWidth="5.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M8 4 L18 28 L26 4"
          stroke={isLight ? "#F5F5F5" : "#F05A28"}
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`font-semibold tracking-[-0.04em] text-[21px] ${isLight ? "text-[#F5F5F5]" : "text-white"}`}>
          {siteConfig.company.shortName}
        </span>
        <span className={`text-[9px] font-medium tracking-[2px] uppercase -mt-0.5 ${isLight ? "text-[#A3A3A3]" : "text-[#A3A3A3]"}`}>
          METAL DYNAMICS
        </span>
      </div>
    </div>
  );
}
