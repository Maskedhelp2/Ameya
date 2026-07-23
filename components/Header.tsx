import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="logo-group">
          <Image
            src="/images/logo-banner.jpeg"
            alt="Ameya Sonic Opteo System logo"
            width={120}
            height={48}
            className="logo-icon"
          />
          <span className="logo">Ameya Sonic Opteo System</span>
        </Link>
        <nav className="main-nav">
          <Link href="/mission">MISSION</Link>
          <Link href="/our-team">OUR TEAM</Link>
          <Link href="/innovation">INNOVATION</Link>
          <Link href="/internship">INTERNSHIP</Link>
          <Link href="/justdial">JUSTDIAL</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
