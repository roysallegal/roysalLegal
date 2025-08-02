import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import formImg from '../assets/img/form-bg.jpg';

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
    <div
      className="min-h-[calc(100vh-4rem-12rem)] bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${formImg})` }}
    >
      <motion.div
        className="max-w-2xl mx-auto px-6 py-12 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold mb-6 text-blue-900 dark:text-white">Contact Us</h1>
        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-900 dark:bg-white dark:text-black text-white px-6 py-3 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-200 transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-sm mt-4 text-green-600 dark:text-green-400">{status}</p>
          )}
        </form>
      </motion.div>
    </div>
  );
}