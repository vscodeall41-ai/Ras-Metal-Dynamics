import { siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Services",
  description: "Structural steel, custom gates, staircases, pergolas, carports, site welding and full installation — delivered with precision in Cape Town.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-[#262626] bg-[#121212]">
        <Section className="pt-16 pb-12">
          <div className="max-w-3xl">
            <div className="text-[#C53030] text-xs tracking-[2px] mb-4">FULL SERVICE FABRICATION & INSTALLATION</div>
            <h1 className="text-6xl font-semibold tracking-[-0.03em]">Everything in steel, done properly.</h1>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {siteConfig.services.map((service, index) => (
            <div key={index} className="border-l-2 border-[#C53030] pl-8">
              <h3 className="text-3xl font-semibold tracking-[-0.01em] mb-4">{service.title}</h3>
              <p className="text-lg text-[#C5C5C5] leading-relaxed mb-6">{service.description}</p>
              <Button href="/contact" variant="secondary" className="text-sm">Discuss this service</Button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#121212] border-y border-[#262626] -mx-6 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl text-[#E5E5E5] tracking-[-0.01em]">
            We don’t just fabricate. We take responsibility for the entire scope — from first measurement to final installation.
          </p>
        </div>
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
