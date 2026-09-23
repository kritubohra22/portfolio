function Project() {
  const projects = [
    {
      title: "Student Management System",
      description:
        "A responsive web application for managing student records. It includes CRUD operations to add, view, update, and delete student information.",
      technologies: "React, JavaScript, HTML, CSS",
      github: "https://github.com/kritubohra22",
    },
    {
      title: "Social Spark",
      description:
        "An event discovery website where users can explore events and view useful event details through a clean and responsive interface.",
      technologies: "HTML, CSS, JavaScript",
      github: "https://github.com/kritubohra22/Social-Spark",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <p className="projects-intro">
        Some of the projects I have built while learning and practicing web
        development.
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.technologies}</span>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;

