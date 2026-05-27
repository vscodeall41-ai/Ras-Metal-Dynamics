import { Section } from "@/components/Section";

export const metadata = {
  title: "Privacy Policy",
  description: "How Ras Metal Dynamics handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-5xl font-semibold tracking-[-0.02em] mb-10">Privacy Policy</h1>

          <p className="text-[#A3A3A3]">Last updated: May 2026</p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold">Information We Collect</h2>
          <p>We collect information you provide when you contact us via the website, email, or phone (name, contact details, project information).</p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold">How We Use Your Information</h2>
          <p>We use your information solely to respond to your enquiry, prepare quotations, and communicate about projects. We do not sell or share your data with third parties for marketing purposes.</p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold">Data Retention</h2>
          <p>We retain project-related information for as long as necessary to fulfil our obligations and for legitimate business record-keeping purposes.</p>

          <h2 className="mt-12 mb-4 text-2xl font-semibold">Contact</h2>
          <p>For any privacy-related requests, please email <a href="mailto:info@rasmetaldynamics.co.za" className="text-[#C53030]">info@rasmetaldynamics.co.za</a>.</p>

          <p className="text-sm text-[#737373] mt-16">This is a placeholder policy. Replace with your final legal version before launch.</p>
        </div>
      </Section>
    </>
  );
}
