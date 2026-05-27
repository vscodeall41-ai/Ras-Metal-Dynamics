import { Button } from "./Button";
import { siteConfig } from "@/content/site";

interface CTAProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light";
}

export function CTA({ title, subtitle, variant = "dark" }: CTAProps) {
  const bg = variant === "dark" ? "bg-[#121212]" : "bg-[#1A1A1A]";

  return (
    <div className={`${bg} border border-[#262626] rounded-2xl p-10 md:p-14 text-center`}>
      <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-4">
        {title || "Ready to start your project?"}
      </h3>
      <p className="text-[#A3A3A3] max-w-md mx-auto mb-8 text-lg">
        {subtitle || "Get a clear, detailed quote from a team that understands steel."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/contact" variant="primary" className="px-8">
          {siteConfig.cta.primary}
        </Button>
        <Button href={`tel:${siteConfig.contact.phonePrimary.replace(/\s/g, "")}`} variant="secondary" className="px-8">
          {siteConfig.cta.phone}
        </Button>
      </div>
    </div>
  );
}
