import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* Hero - Dramatic industrial style (matching your second reference) */}
      <div 
        className="relative min-h-[100vh] flex items-center justify-center border-b border-[#262626] bg-[#0A0A0A] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.35) 65%, rgba(10,10,10,0.15) 80%), url('/images/hero-industrial.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-4xl mx-auto px-6 text-center md:text-left pt-12 pb-16">
          {/* Top badge */}
          <div className="inline-block px-5 py-1.5 rounded-full bg-[#C53030]/10 text-[#C53030] text-xs tracking-[1.5px] font-medium mb-8">
            CAPE TOWN • B-BBEE LEVEL 4
          </div>

          {/* Main Headline */}
          <h1 className="text-[56px] md:text-[72px] leading-[0.92] font-semibold tracking-[-0.04em] mb-6">
            Steel.<br />Reimagined.
          </h1>

          {/* Subtitle */}
          <p className="max-w-[620px] mx-auto md:mx-0 text-[17px] md:text-[19px] text-[#A3A3A3] tracking-[-0.01em] leading-relaxed mb-10">
            Precision custom steel fabrication for architectural, structural,<br className="hidden md:block" />
            and industrial projects that demand quality.
          </p>

          {/* Buttons - matching reference style */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button 
              href="/contact" 
              variant="primary" 
              className="px-8 py-3.5 text-[15px] font-semibold rounded-md"
            >
              Request a Quote
            </Button>
            <Button 
              href="/capabilities" 
              variant="secondary" 
              className="px-8 py-3.5 text-[15px] font-semibold rounded-md border-[#3a3a3a] hover:border-[#C53030]"
            >
              View Capabilities
            </Button>
          </div>

          {/* Bottom service strip */}
          <div className="mt-16 text-[11px] md:text-xs tracking-[2px] text-[#737373] font-medium">
            12+ YEARS • STRUCTURAL STEEL • GATES • PERGOLAS • STAIRCASES
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-b border-[#262626] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-[#A3A3A3]">
          <div className="flex items-center gap-2">
            <span className="text-[#C53030]">●</span> {siteConfig.company.yearsInBusiness} Years
          </div>
          <div>{siteConfig.company.bbbee} • {siteConfig.company.bbbeeNote}</div>
          <div>Cape Town Based</div>
          <div>Site Welding &amp; Full Installation</div>
        </div>
      </div>

      {/* Services Preview */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="uppercase text-xs tracking-[2px] text-[#C53030] font-medium mb-2">WHAT WE BUILD</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">Precision steelwork.<br />Delivered properly.</h2>
          </div>
          <Link href="/services" className="mt-4 md:mt-0 text-sm font-medium hover:text-[#C53030] transition-colors">
            Explore all services →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.slice(0, 6).map((service, index) => (
            <div key={index} className="card p-8 rounded-2xl group">
              <div className="text-[#C53030] text-xs tracking-[2px] font-medium mb-4">0{index + 1}</div>
              <h3 className="text-2xl font-semibold tracking-[-0.01em] mb-3 group-hover:text-[#C53030] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#A3A3A3] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities highlight */}
      <Section className="bg-[#121212] -mx-6 px-6 border-y border-[#262626]">
        <div className="max-w-7xl mx-auto">
          <div className="uppercase text-xs tracking-[2px] text-[#C53030] font-medium mb-3">CAPABILITIES</div>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] mb-10 max-w-3xl">
            From heavy structural steel to refined architectural metalwork.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.capabilities.map((cap, i) => (
              <div key={i} className="border border-[#262626] p-8 rounded-2xl">
                <h4 className="text-2xl font-semibold tracking-[-0.01em] mb-3">{cap.title}</h4>
                <p className="text-[#A3A3A3]">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="max-w-3xl mb-10">
          <div className="uppercase text-xs tracking-[2px] text-[#C53030] font-medium mb-3">HOW WE WORK</div>
          <h2 className="text-4xl font-semibold tracking-[-0.02em]">Clear process. No surprises.</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {siteConfig.process.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-[#C53030] text-5xl font-semibold tracking-[-2px] mb-3">{step.step}</div>
              <h4 className="font-semibold text-lg mb-2 tracking-[-0.01em]">{step.title}</h4>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust / Quality */}
      <Section className="bg-[#121212] border-y border-[#262626] -mx-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#C53030] text-xs tracking-[2px] font-medium mb-4">BUILT THE RIGHT WAY</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-12">{siteConfig.trust.headline}</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left">
            {siteConfig.trust.points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-[#C53030] mt-1.5">→</div>
                <p className="text-lg text-[#E5E5E5]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Selected Work - Using your brand images */}
      <Section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase text-xs tracking-[2px] text-[#C53030] font-medium mb-2">SELECTED WORK</div>
            <h2 className="text-4xl font-semibold tracking-[-0.02em]">Recent projects</h2>
          </div>
          <Link href="/capabilities" className="hidden md:block text-sm font-medium hover:text-[#C53030] transition-colors">
            View full capabilities →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121212]">
            <img 
              src="/images/welding-column-site.jpg" 
              alt="Welder on ladder performing on-site welding of a large steel column" 
              className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-sm text-[#C53030] font-medium tracking-widest">ON-SITE WELDING</div>
              <div className="text-white text-xl font-semibold">Structural Steel Column Installation</div>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121212]">
            <img 
              src="/images/welding-roof-structure.jpg" 
              alt="Welder working on steel roof structure with sparks" 
              className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-sm text-[#C53030] font-medium tracking-widest">STRUCTURAL STEEL</div>
              <div className="text-white text-xl font-semibold">Roof &amp; Framework Welding</div>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121212]">
            <img 
              src="/images/close-up-welding.jpg" 
              alt="Close-up of welder performing precision horizontal weld with sparks" 
              className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-sm text-[#C53030] font-medium tracking-widest">FABRICATION</div>
              <div className="text-white text-xl font-semibold">Precision On-Site Welding</div>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121212]">
            <img 
              src="/images/welding-beam-interior.jpg" 
              alt="Welder working on red I-beam in commercial interior space" 
              className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-sm text-[#C53030] font-medium tracking-widest">COMMERCIAL PROJECTS</div>
              <div className="text-white text-xl font-semibold">Steel Beam Installation</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center md:text-right">
          <Link href="/capabilities" className="md:hidden text-sm font-medium hover:text-[#C53030] transition-colors">
            View full capabilities →
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTA />
      </Section>
    </>
  );
}
