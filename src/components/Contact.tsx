'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again or email me directly at ojochegbeng@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container">
        <motion.div 
          ref={ref}
          className="max-w-2xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900"
            variants={itemVariants}
          >
            Let's work together
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Looking for a designer to turn ideas into intuitive products? I'd love to chat.
          </motion.p>
          
          <motion.form 
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-base font-montserrat bg-white transition-all duration-300 focus:outline-none focus:border-gray-900 peer"
                required
              />
              <label 
                htmlFor="name" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white px-2 ${
                  formData.name || 'peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-900'
                } ${
                  formData.name ? 'top-[-0.5rem] left-2 text-sm text-gray-900' : 'top-4 text-gray-500'
                }`}
              >
                Name
              </label>
            </div>
            
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-base font-montserrat bg-white transition-all duration-300 focus:outline-none focus:border-gray-900 peer"
                required
              />
              <label 
                htmlFor="email" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white px-2 ${
                  formData.email || 'peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-900'
                } ${
                  formData.email ? 'top-[-0.5rem] left-2 text-sm text-gray-900' : 'top-4 text-gray-500'
                }`}
              >
                Email Address
              </label>
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-base font-montserrat bg-white transition-all duration-300 focus:outline-none focus:border-gray-900 peer resize-y min-h-[120px]"
                required
              />
              <label 
                htmlFor="message" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none bg-white px-2 ${
                  formData.message || 'peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-900'
                } ${
                  formData.message ? 'top-[-0.5rem] left-2 text-sm text-gray-900' : 'top-4 text-gray-500'
                }`}
              >
                Message
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn btn-primary btn-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
