import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>

      <div className="contact-grid">
        {/* Left: Social Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> ishita@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-id" target="_blank">linkedin.com/in/your-id</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/your-id" target="_blank">github.com/your-id</a></p>
        </div>

        {/* Right: Message Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

  );
};

export default Contact;
