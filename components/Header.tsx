"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="logo-group" onClick={() => setOpen(false)}>
          <Image src="/images/logo-icon.jpeg" alt="Ameya Sonic Opteo System logo" width={44} height={44} className="logo-icon" />
          <span className="logo">Ameya Sonic Opteo System</span>
        </Link>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
        </button>
        <nav className={open ? "main-nav nav-open" : "main-nav"}>
          <Link href="/mission" onClick={() => setOpen(false)}>MISSION</Link>
          <Link href="/our-team" onClick={() => setOpen(false)}>OUR TEAM</Link>
          <Link href="/innovation" onClick={() => setOpen(false)}>INNOVATION</Link>
          <Link href="/internship" onClick={() => setOpen(false)}>INTERNSHIP</Link>
          <Link href="/justdial" onClick={() => setOpen(false)}>JUSTDIAL</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
