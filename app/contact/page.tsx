"use client";

import { siteConfig } from "@/content/site";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For production, wire this to Formspree, Resend, or your preferred service.
    alert("Thank you. Your enquiry has been noted. We will contact you within 1 business day.");
  };

  return (
    <>
      <div className="border-b border-[#262626] bg-[#121212]">
        <Section className="pt-16 pb-12">
          <div className="max-w-2xl">
            <div className="text-[#C53030] text-xs tracking-[2px] mb-4">LET’S TALK</div>
            <h1 className="text-6xl font-semibold tracking-[-0.03em]">Tell us about your project.</h1>
            <p className="text-xl text-[#A3A3A3] mt-4">We respond to serious enquiries within one business day.</p>
          </div>
        </Section>
      </div>

      <Section>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-[#A3A3A3]">Full Name</label>
                <input type="text" required className="w-full px-5 py-3.5 rounded-lg" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#A3A3A3]">Company / Practice</label>
                <input type="text" className="w-full px-5 py-3.5 rounded-lg" placeholder="Optional" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-[#A3A3A3]">Phone / WhatsApp</label>
                <input type="tel" required className="w-full px-5 py-3.5 rounded-lg" placeholder="065 555 4433" />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#A3A3A3]">Email</label>
                <input type="email" required className="w-full px-5 py-3.5 rounded-lg" placeholder="you@company.co.za" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#A3A3A3]">Project Type</label>
              <select className="w-full px-5 py-3.5 rounded-lg" required>
                <option value="">Select one</option>
                <option>Structural Steel / Commercial</option>
                <option>Custom Gates, Balustrades & Fencing</option>
                <option>Staircases & Architectural Metalwork</option>
                <option>Pergolas, Carports & Outdoor Structures</option>
                <option>Site Welding & Installation</option>
                <option>Other / Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#A3A3A3]">Project Details</label>
              <textarea 
                rows={6} 
                required 
                className="w-full px-5 py-3.5 rounded-lg resize-y min-h-[140px]" 
                placeholder="Tell us about the project — location, timeline, drawings available, key requirements..."
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full md:w-auto px-12">
                Submit Enquiry
              </Button>
              <p className="text-xs text-[#737373] mt-4">
                We treat every enquiry confidentially. You will receive a clear response, not a sales call.
              </p>
            </div>
          </form>

          <div className="mt-16 pt-10 border-t border-[#262626] text-sm text-[#A3A3A3] space-y-2">
            <div>Direct contact:</div>
            <div className="text-[#F5F5F5] text-base">
              {siteConfig.contact.phonePrimary} (WhatsApp) &nbsp;•&nbsp; {siteConfig.contact.phoneSecondary} (Office)
            </div>
            <a href={`mailto:${siteConfig.contact.email}`} className="block text-[#C53030] hover:underline">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
