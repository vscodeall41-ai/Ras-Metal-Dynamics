import { siteConfig } from "@/content/site";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/images/logo-clean.png" 
        alt={siteConfig.company.name}
        className="h-20 md:h-24 w-auto"   
      />
    </div>
  );
}
