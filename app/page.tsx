import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Logo banner */}
      <div className="logo-banner-wrap">
        <Image
          src="/images/logo-banner.jpeg"
          alt="Ameya Sonic Opteo System — Precision in Sound and Sight"
          width={1400}
          height={400}
          className="logo-banner"
          priority
        />
      </div>

      {/* Hero */}
      <section className="hero hero-no-image">
        <div className="hero-text">
          <p className="eyebrow">— AMEYA ENGINEERING SOLUTIONS &middot; MAKE IN INDIA</p>
          <h1>Restoring <em>dignity</em> to every trembling hand.</h1>
          <p className="lead">
            We build clinically validated, connected health devices for people
            living with Parkinson&apos;s disease — measuring what matters,
            quietly, in the palm of your hand.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <p className="eyebrow">COMPANY OVERVIEW</p>
        <h2>About Ameya Sonic Opteo Systems</h2>
        <span className="divider"></span>
        <p>
          <strong>Ameya Sonic Opteo Systems</strong> is an innovative healthcare technology and
          research-driven startup founded by <strong>Dr. Soni Gupta</strong>, researcher, inventor,
          and entrepreneur, India. Established on <strong>14 April 2025</strong>, the company is
          registered as a <strong>Micro Manufacturing Enterprise</strong> under the Ministry of
          Micro, Small and Medium Enterprises (MSME), Government of India, with Udyam Registration
          Number <strong>UDYAM-DL-11-0119915</strong>.
        </p>
        <p>
          The company specializes in the design, development, manufacturing, and commercialization
          of advanced healthcare technologies, optical sensing systems, biomedical devices,
          AI-enabled diagnostic platforms, IoT-based healthcare monitoring systems, and innovative
          engineering solutions for healthcare, industry, and society.
        </p>

        <div className="overview-grid">
          <div className="overview-card">
            <h4>Vision</h4>
            <p>
              To become a globally recognized healthcare technology company dedicated to developing
              affordable, intelligent, and innovative healthcare solutions that improve quality of
              life through advanced sensing, artificial intelligence, and biomedical engineering.
            </p>
          </div>
          <div className="overview-card">
            <h4>Motto</h4>
            <p className="motto-text">
              &ldquo;Inspired by Spiritual Values, Powered by Innovation, Transforming Healthcare
              Through Technology.&rdquo;
            </p>
          </div>
        </div>

        {/* Mission */}
        <h3 className="section-subheading">Mission</h3>
        <ul className="mission-list">
          <li>Develop indigenous healthcare technologies and medical devices.</li>
          <li>Promote innovation, patents, and research commercialization.</li>
          <li>Create affordable healthcare solutions for rural and urban communities.</li>
          <li>Integrate Artificial Intelligence, IoT, and Optical Sensing technologies into next-generation healthcare systems.</li>
          <li>Support students, researchers, startups, hospitals, and healthcare organizations through innovation and technology transfer.</li>
        </ul>

        {/* Core Technology Areas */}
        <h3 className="section-subheading">Core Technology Areas</h3>
        <div className="tech-areas-grid">
          <div className="tech-area-card">
            <h4>Healthcare Technologies</h4>
            <ul>
              <li>Smart Patient Monitoring Systems</li>
              <li>Remote Healthcare Monitoring Devices</li>
              <li>Wearable Health Monitoring Devices</li>
              <li>AI-Based Diagnostic Systems</li>
              <li>Biomedical Sensors and Instrumentation</li>
              <li>Telemedicine Solutions</li>
            </ul>
          </div>
          <div className="tech-area-card">
            <h4>Optical &amp; Sensor Technologies</h4>
            <ul>
              <li>Fiber Bragg Grating (FBG) Sensors</li>
              <li>Optical Communication Systems</li>
              <li>Structural Health Monitoring Sensors</li>
              <li>Biomedical Optical Sensors</li>
              <li>Smart Sensing Networks</li>
            </ul>
          </div>
          <div className="tech-area-card">
            <h4>AI &amp; Data Analytics</h4>
            <ul>
              <li>Machine Learning for Healthcare</li>
              <li>Deep Learning Applications</li>
              <li>Predictive Health Analytics</li>
              <li>Intelligent Decision Support Systems</li>
              <li>AI-Based Disease Prediction Models</li>
            </ul>
          </div>
          <div className="tech-area-card">
            <h4>Internet of Things (IoT)</h4>
            <ul>
              <li>Smart Healthcare IoT Platforms</li>
              <li>Wireless Sensor Networks</li>
              <li>Cloud-Based Health Monitoring</li>
              <li>Connected Medical Devices</li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <h3 className="section-subheading">Values</h3>
        <div className="values-grid">
          {["Innovation","Excellence","Integrity","Social Responsibility","Healthcare for All","Research-Driven Development","Entrepreneurship","Sustainable Technology"].map((v) => (
            <span key={v} className="value-tag">{v}</span>
          ))}
        </div>

        {/* Dedication */}
        <div className="dedication-block">
          <p className="eyebrow">DEDICATION</p>
          <p>
            Ameya Sonic Opteo Systems is dedicated to the blessings of <strong>Shiv Baba</strong> and
            lovingly inspired by the values, encouragement, and support of the founder&apos;s family,
            especially her beloved father <strong>Late Shri Bhagwan Das Gupta</strong>, mother{" "}
            <strong>Smt. Mamta Gupta</strong>, sisters, husband <strong>Shri Vijay Arora</strong>,
            son <strong>Aayaan Arora (Baby Meethu)</strong>, respected in-laws, and all family
            members whose faith and support have been instrumental in this journey.
          </p>
        </div>

        {/* Contact */}
        <div className="company-contact">
          <p className="eyebrow">CORPORATE OFFICE</p>
          <p><strong>AMEYA SONIC OPTEO SYSTEMS</strong></p>
          <p>RZ-105, Near Mahendra Park, C1 Block, Janakpuri, Uttam Nagar, West Delhi – 110059, India</p>
          <p>Mobile: 8285661231 &nbsp;|&nbsp; Email: <a href="mailto:ersweetygupta3@gmail.com">ersweetygupta3@gmail.com</a></p>
        </div>
      </section>

      {/* Sectors */}
      <section className="sectors">
        <p className="eyebrow">WHAT WE WORK ON</p>
        <h2>Sectors we are building in</h2>
        <span className="divider"></span>
        <div className="sectors-grid">
          <div className="sector-card">
            <h4>Healthcare Products</h4>
            <p>Clinically validated devices designed to improve patient outcomes and quality of life.</p>
          </div>
          <div className="sector-card">
            <h4>Biomedical Products</h4>
            <p>Engineering solutions at the intersection of biology and technology for diagnostic and therapeutic use.</p>
          </div>
          <div className="sector-card">
            <h4>Sensor Based Products</h4>
            <p>Precision sensing systems that capture real-time physiological data for smarter clinical decisions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
