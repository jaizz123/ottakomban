
'use client';

import Head from 'next/head';
import { useState } from 'react';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    alert('Thank you! Your enquiry has been submitted.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact | Ottakomban</title>
      </Head>
      <div className="contact-page">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-details">
          <p><strong className='strongdet'>Company:</strong> Appayies Limited</p>
          <p><strong className='strongdet'>Address:</strong> 33 Chequers Way, Palmers Green, UK, N13 6DA</p>
          <p><strong className='strongdet'>Registered in England and Wales:</strong> 15331526</p>
          <p><strong className='strongdet'>Mobile / WhatsApp:</strong> <a href="tel:+447916336379">+44 (0) 7916 336379</a></p>
          <p><strong className='strongdet'>Email:</strong> <a href="mailto:info@ottamobann.com">info@ottamobann.com</a></p>
        </div>

        <div className="social-section">
          <p><strong>Follow Us:</strong></p>
          <div className="social-links">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="images/facebook-svgrepo-com.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="images/instagram-1-svgrepo-com.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="enquiry-form-section">
          <h2 className="form-heading">Send an Enquiry</h2>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
