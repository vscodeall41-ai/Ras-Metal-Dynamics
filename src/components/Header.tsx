"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/content/site";
import { Button } from "./Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0A0A0A]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium tracking-[-0.01em]">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#C53030] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            {siteConfig.cta.primary}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-[#F5F5F5]"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden mobile-nav ${mobileOpen ? "open" : ""} border-t border-[#262626] bg-[#0A0A0A]`}>
        <nav className="flex flex-col px-6 py-8 gap-5 text-lg font-medium">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#C53030]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#262626] mt-2">
            <Button href="/contact" variant="primary" className="w-full">
              {siteConfig.cta.primary}
            </Button>
          </div>
          <a href={`tel:${siteConfig.contact.phonePrimary.replace(/\s/g, "")}`} className="text-sm text-[#A3A3A3] pt-2">
            {siteConfig.contact.phonePrimary}
          </a>
        </nav>
      </div>
    </header>
  );
}
