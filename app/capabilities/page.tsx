import { siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Capabilities",
  description: "Heavy structural steel, architectural feature work, modern outdoor structures, and high-security metalwork — executed to a high standard.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <div className="border-b border-[#262626] bg-[#121212]">
        <Section className="pt-16 pb-12">
          <div className="max-w-3xl">
            <div className="text-[#C53030] text-xs tracking-[2px] mb-4">PROJECT SCALE & SCOPE</div>
            <h1 className="text-6xl font-semibold tracking-[-0.03em]">What we’re capable of delivering.</h1>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.capabilities.map((cap, i) => (
            <div key={i} className="card p-9 rounded-2xl">
              <h3 className="text-3xl font-semibold tracking-[-0.01em] mb-4">{cap.title}</h3>
              <p className="text-[#C5C5C5] text-lg leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#121212] border-y border-[#262626] -mx-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-semibold text-2xl mb-6">Project types we regularly handle</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 text-[#C5C5C5]">
            <div>• New commercial and industrial buildings</div>
            <div>• High-end residential architecture</div>
            <div>• Renovations and second-floor additions</div>
            <div>• Estate and security infrastructure</div>
            <div>• Hospitality and leisure developments</div>
            <div>• Agricultural and equestrian facilities</div>
            <div>• Retail fit-outs and mixed-use projects</div>
            <div>• Structural repairs and strengthening</div>
          </div>
        </div>
      </Section>

      <Section>
        <CTA title="Have a specific project in mind?" subtitle="Send us the details or drawings. We’ll give you a clear, professional response." />
      </Section>
    </>
  );
}
