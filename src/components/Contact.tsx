import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, Github, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          honeypot: formData.honeypot
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send message. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      });
    } catch (err: any) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Unable to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="relative mb-16">
        <h2 className="text-6xl md:text-[12vw] font-bold text-stroke opacity-10 uppercase tracking-tighter leading-none">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[40px] overflow-hidden shadow-2xl">
        <div className="relative h-[400px] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop" 
            alt="A close up of two people shaking hands"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
        </div>

        <div className="p-8 md:p-16">
          <h3 className="text-5xl font-bold tracking-tighter uppercase mb-12">Let's Talk</h3>
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Hidden honeypot field for anti-spam */}
            <div className="sr-only opacity-0 absolute -left-[9999px]" aria-hidden="true">
              <input 
                type="text" 
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name*</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name here"
                  className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email*</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject*</label>
              <input 
                type="text" 
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write Subject line"
                className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message*</label>
              <textarea 
                rows={4}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                <span>Message sent successfully</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                <span>{errorMessage || 'Unable to send message. Please try again.'}</span>
              </div>
            )}

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-10 py-4 bg-ink text-white rounded-full font-bold hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link 
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/favicon.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
          </Link>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:Shanondsilva2135@gmail.com?subject=Portfolio%20Enquiry" 
              aria-label="Email Shanon Dsilva"
              title="Email Shanon Dsilva"
              className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/Shanondsilva" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-white transition-all"><Github className="w-4 h-4" /></a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] text-gray-400 uppercase tracking-widest">
          @2025 Shanon Dsilva. All Right Reserved
        </div>
      </div>
    </footer>
  );
};
