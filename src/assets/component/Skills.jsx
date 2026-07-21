function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Git & GitHub",
    "Node.js",
    "MongoDB"
  ];

  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <p>
        Here are the technologies that I am learning and using to build
        responsive and modern web applications.
      </p>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;