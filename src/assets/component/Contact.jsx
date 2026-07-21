function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p>
        Feel free to contact me for internships, freelance work,
        collaborations, or any project discussion.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <input
          type="text"
          placeholder="Subject"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;