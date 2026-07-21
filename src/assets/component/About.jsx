function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Kirti"
          />
        </div> */}

        <div className="about-content">
          <h2>About Me</h2>

          <h3>Frontend Developer & MCA Student</h3>

          <p>
            Hello! I'm <strong>Kirti Bohara</strong>, currently pursuing MCA.
            I enjoy building modern, responsive, and user-friendly websites
            using React. I love learning new technologies and creating projects
            that solve real-world problems.
          </p>

          <p>
            My goal is to become a Full Stack Developer and continuously improve
            my skills in frontend and backend development.
          </p>

          <div className="about-info">

            <div className="info-card">
              <h4>🎓 Education</h4>
              <p>MCA Student</p>
            </div>

            <div className="info-card">
              <h4>💻 Skills</h4>
              <p>HTML, CSS, JavaScript, React</p>
            </div>

            <div className="info-card">
              <h4>📍 Location</h4>
              <p>Ahmedabad, Gujarat</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;