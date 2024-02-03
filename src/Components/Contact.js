import React, { useState } from 'react';
import '../assets/css/Contact.css';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here, e.g., sending data to a server
    console.log('Form data:', contact);
    // Reset form after submission
    setContact({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
              <i className="bx bx-current-location"></i> 
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bx bx-mail-send"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bx bx-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0" 
                style={{border:0, width: '100%', height: '290px'}} 
                allowFullScreen>
              </iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    required 
                    value={contact.name} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    required 
                    value={contact.email} 
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="subject" 
                  id="subject" 
                  required 
                  value={contact.subject} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  className="form-control" 
                  name="message" 
                  rows="10" 
                  required 
                  value={contact.message} 
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
