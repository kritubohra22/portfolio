function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h3>👋 Hello, I'm</h3>

          <h1>Kirti Bohara</h1>

          <h2>React Frontend Developer</h2>

          <p>
            I am an MCA student passionate about creating modern, responsive and
            user-friendly websites using React. I enjoy learning new
            technologies and building real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">
              Contact Me
            </a>
            <br></br>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn2"
            >
              GitHub
            </a>
            <a
             href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            alt="Female Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
