import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">

        <div className="footer-col footer-brand">
          <h3>Ameya Sonic Opteo System</h3>
          <p>Ameya Sonic Opteo System Ltd.</p>
          <p className="muted">Empowering recovery, one step at a time.</p>
          <p className="muted parent-line">A venture of Ameya Labs, Bangalore.</p>
          <div className="footer-emblem">
            <Image src="/images/om-symbol.jpeg" alt="Om symbol" width={96} height={96} className="om-icon" />
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">// NAVIGATE</h4>
          <Link href="/mission">Mission</Link>
          <Link href="/our-team">Team</Link>
          <Link href="/innovation">Innovation</Link>
          <Link href="/internship">Internship</Link>
          <Link href="/justdial">JustDial</Link>
          <Link href="/terms">Terms</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">// CONNECT</h4>
          <a href="https://www.linkedin.com/in/dr-soni-gupta-198724141/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://jsdl.in/RSL-QCP1782016899" target="_blank" rel="noopener noreferrer">JustDial ↗</a>
        </div>

        <div className="footer-col footer-status">
          <h4 className="footer-heading">// STATUS</h4>
          <p className="status-line"><span className="status-dot"></span> Open to Collaborations &amp; Internships</p>
          <div className="status-tags">
            <span>ISO 13485</span>
            <span>CE MARKED</span>
            <span>PATENT REGISTERED</span>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 Ameya Sonic Opteo System Ltd. All rights reserved. &nbsp;|&nbsp; <Link href="/terms">Terms &amp; Conditions</Link></span>
        <span className="code-line">// innovating locally &middot; impacting globally</span>
      </div>
    </footer>
  );
}
