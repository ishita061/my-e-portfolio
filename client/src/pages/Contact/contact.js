import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>

      <div className="contact-grid">
        {/* Left: Social Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> ishitaishita061@gmail.com</p>
          <p><strong>Phone:</strong> +91 99991 11371</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ishita-chaturvedi-943441303/" target="_blank">https://www.linkedin.com/in/ishita-chaturvedi-943441303/</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/ishita061" target="_blank">https://github.com/ishita061</a></p>
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
