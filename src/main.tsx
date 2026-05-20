import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  TestTubeDiagonal,
  UsersRound
} from 'lucide-react';
import './styles.css';

type Experience = {
  role: string;
  company: string;
  period: string;
  items: string[];
};

type Project = {
  title: string;
  description: string;
  stack: string[];
};

const profile = {
  name: 'Nicolás Buitrago',
  title: 'QA Automation Semi Senior | Ingeniero de Sistemas en formación',
  location: 'Bogotá, Colombia',
  email: 'nicolasbuitrago67@gmail.com',
  phone: '3005936854',
  linkedin: 'https://www.linkedin.com/in/nicolas-buitrago-27a24926b/',
  github: 'https://github.com/nicolasbuitrago67',
  summary:
    'Profesional de pruebas de software con experiencia en automatización, pruebas funcionales, regresión, móviles, bases de datos, gestión de defectos y acompañamiento a usuarios finales. Enfocado en calidad, mejora continua, metodologías ágiles y entrega de valor en proyectos tecnológicos.'
};

const skills = [
  'QA Manual',
  'Automatización',
  'Selenium',
  'Cypress',
  'Postman',
  'Jira',
  'Azure DevOps',
  'BrowserStack',
  'SQL',
  'Scrum',
  'Casos de prueba',
  'UAT',
  'KPIs',
  'Liderazgo QA'
];

const stats = [
  { value: '+5', label: 'años en testing' },
  { value: '+6', label: 'roles/proyectos QA' },
  { value: 'QA', label: 'manual, automatización y UAT' },
  { value: 'Agile', label: 'Scrum, Jira y Azure' }
];

const experiences: Experience[] = [
  {
    role: 'Consultor QA Automation',
    company: 'Amaris Consulting',
    period: 'Febrero 2025 - Actualidad',
    items: ['Automatización en sector banca.', 'Ejecución móvil con BrowserStack.', 'Gestión de defectos en Jira.', 'Pruebas funcionales y de regresión.']
  },
  {
    role: 'QA Automatizador Semi Senior',
    company: 'VamosTech',
    period: 'Octubre 2024 - Actualidad · Freelance',
    items: ['Análisis y creación de casos de prueba.', 'Manejo de bases de datos.', 'Pruebas funcionales y no funcionales.', 'Asignación de tareas y seguimiento en dashboards Azure.']
  },
  {
    role: 'Analista funcional de pruebas y requerimientos',
    company: 'LinkTIC',
    period: 'Enero 2023 - Diciembre 2024',
    items: ['Historias de usuario y análisis de procesos.', 'Diseño y ejecución de casos de prueba.', 'Coordinación UAT.', 'Informes de gestión y seguimiento del proyecto.']
  },
  {
    role: 'Analista funcional',
    company: 'RUNT',
    period: 'Septiembre 2023 - Septiembre 2024',
    items: ['Gestión de casos de prueba y diagramas.', 'Implementación de Azure en procesos.', 'Revisión de flujos Cypress.', 'Levantamiento de requerimientos con cliente.']
  },
  {
    role: 'Software Testing Specialist',
    company: 'Evertec',
    period: 'Octubre 2021 - Abril 2023',
    items: ['Automatización y diseño de pruebas.', 'Revisión de incidentes en producción.', 'Estimación y organización de releases.', 'Liderazgo, capacitación y seguimiento de KPIs semanales.']
  }
];

const projects: Project[] = [
  {
    title: 'Framework de automatización web',
    description: 'Estructura base para automatizar flujos críticos con buenas prácticas de mantenibilidad, reporte y reutilización de componentes.',
    stack: ['Selenium', 'Cypress', 'POM', 'Screenplay']
  },
  {
    title: 'Gestión de calidad y defectos',
    description: 'Seguimiento de bugs, evidencias, priorización y reportes de avance para equipos de desarrollo y producto.',
    stack: ['Jira', 'Azure DevOps', 'KPIs', 'Scrum']
  },
  {
    title: 'Pruebas de API y base de datos',
    description: 'Validación funcional de servicios, datos, integraciones y reglas de negocio mediante consultas y pruebas controladas.',
    stack: ['Postman', 'SQL', 'REST', 'Data validation']
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 }
};

function Header() {
  return (
    <header className="navbar">
      <a href="#inicio" className="brand">NB</a>
      <nav>
        <a href="#perfil">Perfil</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <motion.div {...fadeUp} className="heroContent">
        <span className="eyebrow"><BadgeCheck size={16} /> Disponible para retos QA Automation</span>
        <h1>Hola, soy <span>{profile.name}</span></h1>
        <h2>{profile.title}</h2>
        <p>{profile.summary}</p>
        <div className="heroActions">
          <a className="primaryBtn" href={`mailto:${profile.email}`}>Contáctame <ArrowUpRight size={18} /></a>
          <a className="secondaryBtn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={18} /></a>
        </div>
      </motion.div>
      <motion.div {...fadeUp} className="profileCard">
        <div className="avatar">NB</div>
        <h3>{profile.name}</h3>
        <p>QA Automation · Testing · Requerimientos</p>
        <div className="cardLine"><MapPin size={17} /> {profile.location}</div>
        <div className="cardLine"><Mail size={17} /> {profile.email}</div>
        <div className="socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <section className="statsGrid">
      {stats.map((item) => (
        <motion.article {...fadeUp} className="statCard" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </motion.article>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="perfil" className="section twoColumns">
      <motion.div {...fadeUp}>
        <span className="sectionTag">Perfil profesional</span>
        <h2>Calidad de software con visión funcional, técnica y de negocio.</h2>
      </motion.div>
      <motion.div {...fadeUp} className="glassBox">
        <p>
          Me especializo en asegurar la calidad de productos digitales mediante análisis de requerimientos, diseño de casos de prueba, ejecución manual, automatización, pruebas móviles, gestión de defectos y seguimiento con equipos ágiles.
        </p>
        <p>
          He trabajado en proyectos de banca, gobierno, transaccionalidad y servicios tecnológicos, apoyando tanto la ejecución técnica como la coordinación de usuarios, reportes, releases y métricas de calidad.
        </p>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section">
      <motion.div {...fadeUp} className="sectionHeader">
        <span className="sectionTag">Stack y herramientas</span>
        <h2>Habilidades principales</h2>
      </motion.div>
      <div className="skillsWrap">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="section">
      <motion.div {...fadeUp} className="sectionHeader">
        <span className="sectionTag">Trayectoria</span>
        <h2>Experiencia profesional</h2>
      </motion.div>
      <div className="timeline">
        {experiences.map((exp) => (
          <motion.article {...fadeUp} className="timelineItem" key={`${exp.company}-${exp.role}`}>
            <div className="timelineIcon"><BriefcaseBusiness size={18} /></div>
            <div>
              <p className="period">{exp.period}</p>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <ul>{exp.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <TestTubeDiagonal />, title: 'Testing funcional', text: 'Diseño, ejecución y documentación de casos de prueba alineados a requerimientos.' },
    { icon: <Code2 />, title: 'Automatización QA', text: 'Automatización web y apoyo en flujos de regresión con enfoque mantenible.' },
    { icon: <Smartphone />, title: 'Pruebas móviles', text: 'Validación en dispositivos y navegadores usando BrowserStack.' },
    { icon: <Database />, title: 'Validación de datos', text: 'Consultas, verificación de información y pruebas sobre reglas de negocio.' },
    { icon: <ShieldCheck />, title: 'Gestión de defectos', text: 'Registro, trazabilidad, priorización y cierre de hallazgos.' },
    { icon: <UsersRound />, title: 'Liderazgo y UAT', text: 'Coordinación con usuarios, equipos técnicos y seguimiento de entregables.' }
  ];

  return (
    <section className="section">
      <motion.div {...fadeUp} className="sectionHeader">
        <span className="sectionTag">Servicios</span>
        <h2>Cómo puedo aportar a un equipo</h2>
      </motion.div>
      <div className="serviceGrid">
        {services.map((service) => (
          <motion.article {...fadeUp} className="serviceCard" key={service.title}>
            <div className="serviceIcon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="section">
      <motion.div {...fadeUp} className="sectionHeader">
        <span className="sectionTag">Proyectos destacados</span>
        <h2>Casos que puedes convertir en repositorios reales</h2>
      </motion.div>
      <div className="projectGrid">
        {projects.map((project) => (
          <motion.article {...fadeUp} className="projectCard" key={project.title}>
            <Rocket size={26} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="section contactSection">
      <motion.div {...fadeUp}>
        <span className="sectionTag">Contacto</span>
        <h2>¿Hablamos de calidad, pruebas o automatización?</h2>
        <p>Estoy abierto a oportunidades, colaboración en proyectos QA y retos relacionados con automatización, procesos de prueba y mejora de calidad.</p>
        <div className="contactLinks">
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        </div>
      </motion.div>
      <motion.form {...fadeUp} className="contactForm" onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const subject = encodeURIComponent('Contacto desde portafolio');
        const body = encodeURIComponent(`Nombre: ${form.get('name')}\nCorreo: ${form.get('email')}\n\n${form.get('message')}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      }}>
        <input name="name" placeholder="Tu nombre" required />
        <input name="email" type="email" placeholder="Tu correo" required />
        <textarea name="message" placeholder="Cuéntame sobre tu proyecto o vacante" rows={5} required />
        <button type="submit">Enviar mensaje <ArrowUpRight size={18} /></button>
      </motion.form>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Nicolás Buitrago. Portafolio QA Automation.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
