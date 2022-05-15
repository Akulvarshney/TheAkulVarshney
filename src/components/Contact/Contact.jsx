import React from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_716zf7t",
      "template_jx2u36m",
      form.current,
      "SXPlfCJk4tj3BYz5v"
    );

    e.target.reset();
  };

  const alertMe = () => {
    alert("Message has been sent!");
  };
  return (
    <section id="contact" data-aos="fade-in">
      <h2>Get In Touch!</h2>
      <div className="bg-text">Contact</div>
      <div className="container contact-container">
        <div className="contact">
          <div className="contact-option">
            <BiMailSend />
            <h3>Email</h3>
            <h4>allenv213@icloud.com</h4>
            <a
              href="mailto:allenv213@icloud.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message!
            </a>
          </div>
          <div className="contact-option">
            <BiMailSend />
            <h3>WhatsApp</h3>
            <h4>+91-880-025-2885</h4>
            <a
              href="https://api.whatsapp.com/send?phone=8800252885"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message!
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" onClick={alertMe}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
