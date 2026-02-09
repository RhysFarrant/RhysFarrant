const projects = [
  {
    title: 'Project One',
    description: 'A brief description of what this project does and the technologies used.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of what this project does and the technologies used.',
    tech: ['JavaScript', 'CSS', 'REST API'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of what this project does and the technologies used.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: '#',
    live: '#',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.github} aria-label="GitHub repo">GitHub</a>
          <a href={project.live} aria-label="Live demo">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
