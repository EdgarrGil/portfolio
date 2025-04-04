/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, FormEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function ContactForm({ theme }: ContactFormProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in all fields'
      });
      return;
    }
    
    // Set submitting state
    setFormStatus({
      submitting: true,
      submitted: false,
      error: null
    });
    
    try {
      // IMPORTANT: To make this work, you need to:
      // 1. Sign up for EmailJS (https://www.emailjs.com/)
      // 2. Create an Email Template with {{from_name}}, {{from_email}}, and {{message}} variables
      // 3. Update these values with your actual EmailJS account information
      const serviceId = 'service_ihje29v'; // Get this from EmailJS dashboard
      const templateId = 'template_cxt5368'; // Get this from EmailJS dashboard
      const publicKey = 'ybbouThlxy4Wq-Yfo'; // Get this from EmailJS dashboard
      
      // Prepare EmailJS data
      const emailJSData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'edgarrafaelgil@gmail.com'
      };
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        emailJSData,
        publicKey
      );
      
      if (result.status !== 200) {
        throw new Error('Failed to send email');
      }
      
      // Success
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      // Handle error
      console.error('Email error:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send email. Please try again later.'
      });
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
      
      {formStatus.submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>Thank you for your message! I&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
          {formStatus.error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{formStatus.error}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              rows={6}
              placeholder="Your message"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 text-white rounded-md transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
              style={{ backgroundColor: theme.primary }}
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
              {!formStatus.submitting && <FaArrowRight className="text-sm" />}
            </button>
          </div>
        </form>
      )}
    </div>
  );
} 