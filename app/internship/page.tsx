export default function InternshipPage() {
  return (
    <section className="internship page-section">
      <p className="eyebrow">OPPORTUNITIES</p>
      <h2>2-Month & 3-Month Online Internship Program</h2>
      <span className="divider"></span>
      <p className="lead">
        Ameya Sonic Opteo System offers a hands-on, fully online internship for college students
        looking to build real-world skills in AI-enabled sensor-based healthcare devices —
        covering innovation, patents, project development, and research publication.
      </p>

      {/* Program Details */}
      <div className="internship-details-bar">
        <span>📅 Duration: 2 Months / 3 Months</span>
        <span>💻 Mode: Fully Online</span>
        <span>🎓 Eligibility: College Students</span>
        <span>💰 Stipend: Unpaid</span>
        <span>📜 Certificate on Completion</span>
      </div>

      {/* Skills */}
      <h3 className="section-subheading">Skills You Will Learn</h3>

      <div className="skills-grid">

        <div className="skill-category-card">
          <h4>1. Technical Skills</h4>
          <ul>
            <li>Fundamentals of Sensors: ECG, Heart Rate, SpO₂, Blood Pressure, Motion Detection</li>
            <li>Electronics and Circuit Design</li>
            <li>PCB Design Basics</li>
            <li>Embedded Systems: Arduino, ESP32, Raspberry Pi, STM32</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>2. Programming Skills</h4>
          <ul>
            <li>C/C++ and Python</li>
            <li>MATLAB and Embedded Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>3. AI &amp; Machine Learning</h4>
          <ul>
            <li>Machine Learning and Deep Learning Fundamentals</li>
            <li>Generative AI Applications</li>
            <li>Python Libraries: NumPy, Pandas, Scikit-Learn</li>
            <li>Deep Learning: TensorFlow, PyTorch, Keras</li>
            <li>ECG Classification, Heart Disease Prediction, Fall Detection</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>4. IoT Skills</h4>
          <ul>
            <li>Sensor Integration and Cloud Computing</li>
            <li>Wireless Communication</li>
            <li>Edge AI Devices</li>
            <li>Smart Healthcare Monitoring Systems</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>5. Biomedical Knowledge</h4>
          <ul>
            <li>Human Physiology Basics</li>
            <li>Vital Signs Monitoring</li>
            <li>Medical Device Standards</li>
            <li>Healthcare Data Management</li>
            <li>Telemedicine Systems</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>6. Innovation &amp; Product Development</h4>
          <ul>
            <li>Design Thinking and Problem Identification</li>
            <li>Prototype Development and 3D Printing</li>
            <li>Product Testing and Validation</li>
            <li>Technology Commercialization</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>7. Patent &amp; IP Skills</h4>
          <ul>
            <li>Patent Search and Prior Art Analysis</li>
            <li>Patent Drafting and Filing Process</li>
            <li>Intellectual Property Rights (IPR)</li>
            <li>Innovation Disclosure Writing</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>8. Research &amp; Publication</h4>
          <ul>
            <li>Literature Review and Research Methodology</li>
            <li>Scientific Writing and Data Visualization</li>
            <li>IEEE/Springer Paper Formatting</li>
            <li>Journal and Conference Submission Process</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>9. Software Tools</h4>
          <ul>
            <li>MATLAB/Simulink and LabVIEW</li>
            <li>SolidWorks and Fusion 360</li>
            <li>Proteus, Altium Designer, KiCad</li>
          </ul>
        </div>

        <div className="skill-category-card">
          <h4>10. Professional Skills</h4>
          <ul>
            <li>Problem Solving and Critical Thinking</li>
            <li>Teamwork and Collaboration</li>
            <li>Technical Presentation and Project Management</li>
            <li>Technical Documentation</li>
          </ul>
        </div>

      </div>

      {/* Preferred Background */}
      <h3 className="section-subheading">Preferred Student Background</h3>
      <div className="branches-grid">
        {[
          "Electronics & Communication Engineering (ECE)",
          "Computer Science Engineering (CSE)",
          "Artificial Intelligence & Data Science",
          "Biomedical Engineering",
          "Electrical Engineering",
          "Mechanical Engineering (Product Design)",
          "Biotechnology and Health Sciences"
        ].map((b) => (
          <span key={b} className="branch-tag">{b}</span>
        ))}
      </div>

      {/* Deliverables */}
      <h3 className="section-subheading">Expected Deliverables</h3>
      <ul className="deliverables-list">
        <li>Develop an AI-enabled sensor-based healthcare device prototype</li>
        <li>Collect and analyze healthcare sensor data</li>
        <li>Train and evaluate machine learning models</li>
        <li>Integrate AI with IoT healthcare systems</li>
        <li>Prepare a patent draft or innovation disclosure</li>
        <li>Write and submit a research paper in a Scopus/IEEE/Springer publication</li>
        <li>Present the project through a working prototype, poster, and technical report</li>
      </ul>

      <div className="internship-cta">
        <p>Interested in applying? Reach out to us directly.</p>
        <a href="/contact" className="btn-outline">GET IN TOUCH</a>
      </div>
    </section>
  );
}
