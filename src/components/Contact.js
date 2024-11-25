import React, { useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_nxpqp1u", // Replace with your service ID
        "template_vgyfadl", // Replace with your template ID
        formData,
        "htZyWWkuNyTkjRu0-" // Replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email:
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Message:
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit" className="cta-button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
