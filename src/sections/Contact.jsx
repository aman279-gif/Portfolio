import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolioData';

const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(
          data?.message || 'Unable to send message. Please try again later.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to connect to the server. Please check your internet connection or email directly at mauryaman279@gmail.com.'
      );
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-20 relative flex flex-col min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex-grow w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">Contact Information</h3>
            
            {/* Email Card */}
            <a href={`mailto:${personalInfo.email || 'mauryaman279@gmail.com'}`} className="block group">
              <div className="flex items-center p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300 mr-5">
                  <HiEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="text-slate-200 font-medium">{personalInfo.email || 'mauryaman279@gmail.com'}</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-5">
                <HiMapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="text-slate-200 font-medium">{personalInfo.location || 'Jabalpur, MP'}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              {/* GitHub Card */}
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="block group h-full">
                  <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-slate-600 transition-colors duration-300 text-center h-full justify-center">
                    <FaGithub className="w-8 h-8 text-slate-300 mb-3 group-hover:text-white transition-colors" />
                    <p className="text-slate-300 font-medium">GitHub</p>
                  </div>
                </a>
              )}
              
              {/* LeetCode Card */}
              {socialLinks.leetcode && (
                <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className="block group h-full">
                  <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-yellow-500/50 transition-colors duration-300 text-center h-full justify-center">
                    <SiLeetcode className="w-8 h-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 font-medium">LeetCode</p>
                  </div>
                </a>
              )}

              {/* LinkedIn Card */}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="block group h-full">
                  <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors duration-300 text-center h-full justify-center">
                    <FaLinkedin className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 font-medium">LinkedIn</p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Send Me a Message</h3>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center h-[340px] flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-emerald-400 mb-2">Message Sent!</h4>
                  <p className="text-slate-300 max-w-sm mb-6">Thanks for reaching out! Your message has been sent directly to my inbox. I will get back to you shortly.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('');
                      setErrorMessage('');
                    }}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-sm flex items-start gap-2.5"
                    >
                      <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      placeholder="Hi Aman, I'd like to talk about..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-xl font-medium text-white shadow-lg transition-all flex justify-center items-center ${
                      status === 'submitting' 
                        ? 'bg-slate-700 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-indigo-500/25 hover:scale-[1.02]'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full border-t border-slate-800 bg-slate-950/30 backdrop-blur-md py-8 mt-auto z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Designed & Built by {personalInfo.name || 'Aman Maurya'}.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {socialLinks.leetcode && (
              <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-yellow-400 transition-colors">
                <span className="sr-only">LeetCode</span>
                <SiLeetcode className="w-5 h-5" />
              </a>
            )}
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-indigo-400 transition-colors">
                <span className="sr-only">Email</span>
                <HiEnvelope className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
