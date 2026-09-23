function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "SQL",
    "Bootstrap",
    "Git & GitHub",
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p>
        Here are the technologies that I am learning and using to build
        responsive and modern web applications.
      </p>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
