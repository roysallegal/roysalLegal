import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');

    emailjs.send(
      'service_flhc71k',
      'template_86sobig',
      formData,
      '13czP0qqBZ7-2mu_S'
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      () => {
        setStatus('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-semibold mb-6 text-blue-900">Contact Us</h1>
      <form onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>
        {status && (
          <p className="text-sm mt-4 text-green-600">{status}</p>
        )}
      </form>
    </motion.div>
  );
}