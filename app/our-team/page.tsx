import Image from "next/image";

export default function TeamPage() {
  return (
    <section className="team page-section">
      <p className="eyebrow">THE PEOPLE BEHIND IT</p>
      <h2>Researchers, clinicians, and engineers.</h2>
      <span className="divider"></span>

      {/* Founder */}
      <div className="founder-card">
        <div className="founder-info">
          <p className="eyebrow">FOUNDER &amp; CEO</p>
          <h3>Dr. Soni Gupta</h3>
          <p className="founder-role">Founder &amp; CEO, Ameya Sonic Opteo System</p>
          <span className="divider"></span>

          <p className="founder-bio">
            Dr. Soni Gupta is an accomplished researcher, innovator, entrepreneur, and academician
            with over <strong>12 years of experience</strong> in teaching, research, innovation,
            startup development, intellectual property creation, and healthcare technology at
            Amity University Uttar Pradesh. She completed her <strong>Ph.D. in Optical
            Communication (Optical Sensors)</strong> from Amity University Rajasthan in April 2026,
            with a research focus on Fiber Bragg Grating (FBG) based Optical Sensors for Structural
            and Biomedical Health Monitoring Applications.
          </p>
          <p className="founder-bio">
            She is the Founder and CEO of Ameya Sonic Opteo System, a healthcare technology startup
            established in March 2025 at Amity University Uttar Pradesh, dedicated to the development
            of advanced sensor-based healthcare devices, optical sensing systems, AI-enabled
            diagnostics, biomedical monitoring solutions, IoT healthcare platforms, and affordable
            medical technologies.
          </p>
          <p className="founder-bio">
            Through Ameya Sonic Opteo System, Dr. Gupta actively works on research, innovation,
            startup incubation, patent development, and translational healthcare technologies aligned
            with the objectives of ICMR, Department of Biotechnology, Ministry of Health and Family
            Welfare, healthcare institutions, hospitals, and biomedical research organizations.
          </p>

          <h4 className="founder-section-title">Areas of Expertise</h4>
          <div className="expertise-grid">
            {[
              "Optical Sensors and Fiber Optic Sensing",
              "Biomedical and Healthcare Monitoring Systems",
              "Artificial Intelligence and Machine Learning in Healthcare",
              "Internet of Things (IoT) for Smart Healthcare",
              "Wearable Healthcare Devices",
              "Embedded Systems and Medical Electronics",
              "Wireless Sensor Networks",
              "Signal Processing and Data Analytics",
              "Patent Development and Technology Commercialization",
              "Healthcare Startup Development"
            ].map((item) => (
              <span key={item} className="expertise-tag">{item}</span>
            ))}
          </div>

          <h4 className="founder-section-title">Research &amp; Patents</h4>
          <div className="founder-stats">
            <div className="founder-stat">
              <h3>25+</h3>
              <p>Research papers in SCI, Scopus &amp; UGC-CARE indexed journals</p>
            </div>
            <div className="founder-stat">
              <h3>10</h3>
              <p>Granted and published patents in emerging technology domains</p>
            </div>
          </div>

          <h4 className="founder-section-title">Awards &amp; Achievements</h4>
          <ul className="awards-list">
            <li>International Young Scientist Award — Shinawatra University (2026)</li>
            <li>Vigyan Shree Samman (2026)</li>
            <li>Women Scientist Award of the Year (2026)</li>
            <li>Teaching and Research Excellence Award (2024)</li>
            <li>Best Researcher and Entrepreneur of the Year Award (2026)</li>
            <li>Global Researcher Award and Nari Shakti Award (2026)</li>
          </ul>

          <h4 className="founder-section-title">Vision</h4>
          <p className="founder-bio">
            To develop affordable, AI-powered, sensor-based healthcare technologies that bridge
            the gap between research laboratories and real-world healthcare systems, contributing
            to India&apos;s vision of innovation-driven healthcare and digital health transformation.
          </p>

          <h4 className="founder-section-title">Mission</h4>
          <ul className="mission-list">
            <li>Develop indigenous healthcare technologies and medical devices.</li>
            <li>Promote innovation, patents, and startup entrepreneurship among students and researchers.</li>
            <li>Collaborate with healthcare, biotechnology, and research organizations for impactful solutions.</li>
            <li>Advance AI-enabled diagnostic and monitoring systems for preventive and personalized healthcare.</li>
          </ul>
        </div>
      </div>

      {/* Team */}
      <h3 className="team-subheading">The Team</h3>
      <div className="team-grid">
        <div className="team-card">
          <Image src="/images/team-member.jpeg" alt="Research and Development" width={400} height={500} className="section-photo small" />
          <h4>Research &amp; Development</h4>
          <p>Translating clinical insight into device design</p>
        </div>
        <div className="team-card">
          <Image src="/images/team-member-2.jpeg" alt="Clinical Operations" width={400} height={500} className="section-photo small" />
          <h4>Clinical Operations</h4>
          <p>Ensuring every device meets patient-safety standards</p>
        </div>
      </div>
    </section>
  );
}
