import { siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "About Us",
  description: "Precision steel fabrication with over a decade of experience in Cape Town. Practical. Professional. Built to last.",
};

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-[#262626] bg-[#121212]">
        <Section className="pt-16 pb-12">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs text-[#C53030] mb-4">EST. CAPE TOWN</div>
            <h1 className="text-6xl font-semibold tracking-[-0.03em]">Built by people who understand steel.</h1>
          </div>
        </Section>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-xl text-[#C5C5C5] leading-relaxed space-y-7">
          <p>
            Ras Metal Dynamics is a Cape Town-based steel fabrication company focused on delivering high-quality custom metalwork for architectural, structural, and industrial applications.
          </p>
          <p>
            We work with architects, contractors, developers, and private clients who need steel solutions that are properly engineered, well finished, and installed correctly the first time.
          </p>
          <p>
            Our approach is practical and direct. We believe good steelwork comes from clear communication, proper preparation, quality materials, and experienced fabricators who take pride in their craft.
          </p>
        </div>
      </Section>

      <Section className="bg-[#121212] border-y border-[#262626] -mx-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-xl mb-4 tracking-[-0.01em]">What drives us</h3>
              <ul className="space-y-3 text-[#A3A3A3]">
                <li>Respect for the material and the craft</li>
                <li>Doing the job properly, even when no one is watching</li>
                <li>Clear, honest communication with clients</li>
                <li>Delivering work that lasts in South African conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 tracking-[-0.01em]">What we stand on</h3>
              <ul className="space-y-3 text-[#A3A3A3]">
                <li>Over {siteConfig.company.yearsInBusiness} years of hands-on fabrication experience</li>
                <li>{siteConfig.company.bbbee} contributor</li>
                <li>Strong focus on site realities and buildability</li>
                <li>Full responsibility from fabrication through to final installation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Brand Image */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#121212]">
            <img 
              src="/images/brand-vehicle.jpg" 
              alt="Ras Metal Dynamics branded vehicle" 
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-[#A3A3A3] mt-4 tracking-wide">
            Our fleet reflects the same standards we apply to every fabrication project.
          </p>
        </div>
      </Section>

      {/* Dramatic Brand Mark */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/images/logo-dramatic.png" 
              alt="Ras Metal Dynamics brand mark" 
              className="mx-auto max-h-[220px] w-auto"
            />
          </div>
          <p className="text-lg text-[#C5C5C5]">
            The mark represents strength forged under pressure — the core of what we build.
          </p>
        </div>
      </Section>

      <Section>
        <CTA title="Want to work with us?" subtitle="Whether it’s a new build, renovation, or industrial project — we’re ready to discuss the details." />
      </Section>
    </>
  );
}
