import "./App.css";
import { motion } from "framer-motion";

function App() {
  const projects = [
    {
      title: "SmartHire AI Recruitment Platform",
      tech: "React.js, Spring Boot, MySQL, JWT",
      image: "/screenshots/smarthire.jpg",
      description:
        "AI-powered recruitment platform with candidate management, interview scheduling, analytics dashboard, AI resume analyzer, JWT authentication, CRUD operations, search/filter, and responsive HR UI.",
      github:
        "https://github.com/aryankumar2657-hub/SmartHire-AI-Recruitment-Platform",
      featured: true,
    },
    {
      title: "UrbanCart AI Ecommerce",
      tech: "React.js, Spring Boot, MySQL",
      image: "/screenshots/urbancart.jpg",
      description:
        "Full stack ecommerce platform with authentication, cart management, product workflow, responsive frontend, and scalable backend REST APIs.",
      github:
        "https://github.com/aryankumar2657-hub/urbancart-AI-ecommerce",
    },
    {
      title: "Razorpay Payment Integration",
      tech: "React.js, Spring Boot, Razorpay API",
      image: "/screenshots/razorpay.jpg",
      description:
        "Secure payment gateway integration using Razorpay API with order processing, payment handling, and responsive checkout workflow.",
      github: "https://github.com/aryankumar2657-hub",
    },
    {
      title: "Employee HR Portal",
      tech: "React.js, Spring Boot, MySQL",
      image: "/screenshots/employee.jpg",
      description:
        "HR management portal with employee CRUD operations, REST API integration, database management, and responsive dashboard interface.",
      github: "https://github.com/aryankumar2657-hub/employee-hr-portal",
    },
    {
      title: "Bank Management System",
      tech: "Java, JDBC, MySQL",
      image: "/screenshots/bank.jpg",
      description:
        "Backend banking system with account management, transaction handling, database connectivity, and secure data operations.",
      github: "https://github.com/aryankumar2657-hub/Bank-management-system",
    },
  ];

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "JavaScript",
    "REST APIs",
    "MySQL",
    "JWT Authentication",
    "Git & GitHub",
    "Postman",
    "HTML",
    "CSSS",
    "Problem Solving",
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Aryan Kumar</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

     <motion.section
  className="hero"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
        <span className="badge">Open to Software Engineering Roles</span>

        <h1>
          Software Engineer Building Scalable Full Stack & AI-Powered Web
          Applications
        </h1>

        <p>
          Final-year B.Tech CSE student passionate about software engineering,
          backend systems, full stack development, REST APIs, databases, and
          building real-world products using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/aryankumar2657-hub" target="_blank">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aryan-kumar-a760843a0"
            target="_blank"
          >
            LinkedIn
          </a>

         <a
  href="/Aryan_Kumar_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Download Resume
</a>
        </div>
      </motion.section>

      <section className="stats">
        <div>
          <h2>5+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Technologies</p>
        </div>

        <div>
          <h2>92%</h2>
          <p>GFG Progress</p>
        </div>

        <div>
          <h2>2027</h2>
          <p>Graduation</p>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>

        <p>
          I am an aspiring Software Engineer with hands-on experience in
          building full stack applications using React.js, Spring Boot, REST
          APIs, MySQL, JWT Authentication, and modern UI design. I enjoy solving
          real-world problems, designing clean backend systems, and developing
          products that are useful, scalable, and recruiter-ready.
        </p>
      </section>

      <section className="section" id="skills">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
  <motion.div
    className={
      project.featured
        ? "project-card featured"
        : "project-card"
    }
    key={project.title}
    whileHover={{ y: -8 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>

              <p className="tech">{project.tech}</p>

              <p>{project.description}</p>
<div className="project-links">

  <a href={project.github} target="_blank" rel="noreferrer">
    View GitHub
  </a>

  {project.demo && (
    <a href={project.demo} target="_blank" rel="noreferrer">
      Live Demo
    </a>
  )}

</div>

<div className="deployment-info">

  {project.frontend && (
    <p><strong>Frontend:</strong> {project.frontend}</p>
  )}

  {project.backend && (
    <p><strong>Backend:</strong> {project.backend}</p>
  )}

  {project.database && (
    <p><strong>Database:</strong> {project.database}</p>
  )}

</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Current Focus</h2>

        <p>
          Currently improving my skills in software engineering, scalable backend
          development, system design basics, AI-powered applications, REST API
          architecture, and full stack product development.
        </p>
      </section>

      <section className="section github-section">
        <h2>GitHub Stats</h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=aryankumar2657-hub&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />
      </section>

      <section className="section contact" id="contact">
        <h2>Contact</h2>

        <p>📧 aryankumar2657@gmail.com</p>
        <p>💻 github.com/aryankumar2657-hub</p>
        <p>🔗 linkedin.com/in/aryan-kumar-a760843a0</p>
        <p>📍 Ramgarh, Jharkhand</p>
      </section>

      <footer>© 2026 Aryan Kumar | Software Engineer</footer>
    </div>
  );
}

export default App;