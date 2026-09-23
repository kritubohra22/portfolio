import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mvkgrwqp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Message sent successfully! Thank you.");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Message could not be sent. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        Feel free to contact me for internships, freelance work,
        collaborations, or any project discussion.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;