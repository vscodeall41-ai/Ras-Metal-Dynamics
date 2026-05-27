import { siteConfig } from "@/content/site";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/images/logo-futuristic.png" 
        alt={siteConfig.company.name}
        className="h-12 md:h-14 w-auto"   
      />
    </div>
  );
}
