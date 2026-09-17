"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#services", label: "Services" },
  { href: "/#stack", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", closeOnDesktop);
    return () => { document.removeEventListener("keydown", onKey); media.removeEventListener("change", closeOnDesktop); };
  }, [open]);

  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <Link href="/#top" onClick={() => setOpen(false)} className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900" aria-label="Joe David home"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-xs font-bold tracking-normal text-white">JD.</span>Joe David<span className="text-blue-700">/</span></Link>
      <div className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className="py-2 text-sm font-medium text-slate-600 transition hover:text-blue-700">{item.label}</Link>)}<Link href="/#contact" className="btn-primary">Let&apos;s Talk <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      <button ref={toggle} type="button" className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </nav>
    {open && <div id="mobile-menu" className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden"><nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700">{item.label}</Link>)}<Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">Start a Project <ArrowUpRight size={16} aria-hidden="true" /></Link></nav></div>}
  </header>;
}
