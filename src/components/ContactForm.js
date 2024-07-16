import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => (
  <div className="container-fluid contact-form-container">
    <div className="row no-gutters">
      <div className="col-md-6 form-content">
        <h2>Fill Out The Form And We’ll Get In Touch:</h2>
        <p>Let us care for your loved one</p>
      </div>
      <div className="col-md-6">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" className="form-control" placeholder="Jane" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Doe" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="janedoe@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" className="form-control" placeholder="Enter your question or message"></textarea>
          </div>
          <button type="submit" className="btn btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;
