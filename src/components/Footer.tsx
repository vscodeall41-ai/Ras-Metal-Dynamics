import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] pt-16 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-y-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Logo className="mb-4" />
          <p className="text-[#A3A3A3] max-w-xs leading-relaxed">
            Precision steel fabrication for demanding architectural and industrial projects in Cape Town and across South Africa.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <div className="font-semibold mb-4 text-[#F5F5F5]">Company</div>
          <ul className="space-y-2.5 text-[#A3A3A3]">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <div className="font-semibold mb-4 text-[#F5F5F5]">Contact</div>
          <div className="space-y-2 text-[#A3A3A3]">
            <div>
              <a href={`tel:${siteConfig.contact.phonePrimary.replace(/\s/g, "")}`} className="hover:text-white transition-colors block">
                {siteConfig.contact.phonePrimary} <span className="text-xs">({siteConfig.contact.phonePrimaryLabel})</span>
              </a>
              <a href={`tel:${siteConfig.contact.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-white transition-colors block">
                {siteConfig.contact.phoneSecondary} <span className="text-xs">({siteConfig.contact.phoneSecondaryLabel})</span>
              </a>
            </div>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors block">
              {siteConfig.contact.email}
            </a>
            <div className="pt-1 text-xs">
              {siteConfig.contact.address}<br />
              {siteConfig.contact.hours}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between gap-4 text-xs text-[#737373]">
        <div>{siteConfig.footer.copyright}</div>
        <div className="flex gap-6">
          <Link href={siteConfig.footer.privacy} className="hover:text-[#A3A3A3]">Privacy Policy</Link>
          <a href={`https://${siteConfig.contact.website}`} target="_blank" className="hover:text-[#A3A3A3]">
            {siteConfig.contact.website}
          </a>
        </div>
      </div>
    </footer>
  );
}
