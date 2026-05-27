import { siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Industries",
  description: "Steel fabrication work for residential architecture, commercial construction, industrial facilities, hospitality, security projects and more across the Western Cape.",
};

export default function IndustriesPage() {
  return (
    <>
      <div className="border-b border-[#262626] bg-[#121212]">
        <Section className="pt-16 pb-12">
          <div className="max-w-3xl">
            <div className="text-[#C53030] text-xs tracking-[2px] mb-4">WHO WE SERVE</div>
            <h1 className="text-6xl font-semibold tracking-[-0.03em]">Steel solutions for real projects.</h1>
          </div>
        </Section>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-xl text-[#C5C5C5] leading-relaxed mb-12">
          We work across a wide range of sectors. What they all have in common is the need for steelwork that is properly fabricated, finished, and installed.
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.industries.map((industry, i) => (
            <div key={i} className="card p-8 rounded-2xl flex items-center text-xl font-medium tracking-[-0.01em]">
              {industry}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#121212] border-y border-[#262626] -mx-6 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl text-[#E5E5E5] tracking-[-0.01em]">
            If your project involves steel and needs to be done right, we’re the right partner.
          </p>
        </div>
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
