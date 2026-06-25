"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Phone } from "lucide-react";
import Logo from "./Logo";
import { Cta } from "./ui";

const navItems = [
  { label: "About Hearing", href: "/hearing-health" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Find a Clinic", href: "/clinics" },
  { label: "Stories", href: "/stories" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="earKART home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-charcoal hover:text-teal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-charcoal hover:text-teal"
          >
            <Search size={20} aria-hidden="true" />
          </button>
          <Link
            href="/?lang=hi"
            className="rounded-sm px-2 py-1 text-[15px] font-medium text-charcoal hover:text-teal"
            aria-label="Switch language to Hindi"
          >
            EN&nbsp;/&nbsp;हिंदी
          </Link>
          <Cta href="/book" showArrow={false} className="px-5">
            Book Appointment
          </Cta>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 items-center gap-2 rounded-sm px-2 text-charcoal lg:hidden"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="text-[15px] font-medium">Menu</span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-cream lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-[1280px] px-4 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-charcoal hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <a
                href="tel:1800XXXXXXX"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-teal"
              >
                <Phone size={18} aria-hidden="true" /> 1800-XXX-XXXX
              </a>
              <Link href="/?lang=hi" className="text-[15px] font-medium text-charcoal">
                EN / हिंदी
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
