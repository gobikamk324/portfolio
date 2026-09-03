import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xejne2w",     // from EmailJS dashboard
        "template_c3dt49i",    // from EmailJS dashboard
        form.current,
        "0gxHH6cVZg-T1kzIP"      // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <p className="section-kicker">Contact</p>
        <h2>Drop Me a Message</h2>
        <p>I’m always open to discussing new projects, creative ideas, or opportunities.</p>
      </div>

      <div className="contact-container">
        {/* Left side: contact info */}
        <div className="contact-info">
          <p>📞 +91 6385839755</p>
          <p>📧 gobikamk.324@gmail.com</p>
          <p>🏠 Marthandam, Kanyakumari, Tamil Nadu, India</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/gobika-nanthini-mk-b61a883b8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/gobikamk324" target="_blank" rel="noreferrer">GitHub</a>
            
          </div>
        </div>

        {/* Right side: contact form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>

      <footer className="contact-footer">
        <p>© 2026 Gobika Portfolio. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
