import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <div className="image-container">
          <img src="https://wowtheme7.com/tf/escola/assets/img/about/2.png" alt="Illustration" />
        </div>
        
        <div className="form-container">
          <h2>Get In Touch</h2>
          <h1>Bringing Your Vision To Life</h1>
          <p>For your car we will do everything advice design in us repairs and maintenance. We are the some preferred.</p>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Your Phone" />
              <input type="text" placeholder="Your Subject" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
