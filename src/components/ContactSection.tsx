'use client';

import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #A3BDA3 0%, #8FAF8F 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-center mb-4 text-[#3D5A3D]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          You don't have to do this all on your own.
        </h2>
        <p className="text-lg text-center text-[#4A6B4A] mb-12">
          If you're curious, that's enough to begin.
        </p>

        {status === 'success' ? (
          <div className="max-w-xl mx-auto bg-[#FAF7F2] rounded-2xl p-8 md:p-10 shadow-lg text-center">
            <div className="text-4xl mb-4">💚</div>
            <h3 
              className="text-2xl text-[#4A6B4A] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Thank you for reaching out
            </h3>
            <p className="text-[#5C7C5C]">
              I've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-[#5C7C5C] underline hover:text-[#4A6B4A]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-[#FAF7F2] rounded-2xl p-8 md:p-10 shadow-lg"
          >
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#4A6B4A] font-medium mb-2">
                Your Name <span className="text-[#5C7C5C]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-[#5C7C5C]/30 bg-white text-[#3D5A3D] placeholder-[#5C7C5C]/50 focus:outline-none focus:ring-2 focus:ring-[#5C7C5C]/50 focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#4A6B4A] font-medium mb-2">
                Email Address <span className="text-[#5C7C5C]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-[#5C7C5C]/30 bg-white text-[#3D5A3D] placeholder-[#5C7C5C]/50 focus:outline-none focus:ring-2 focus:ring-[#5C7C5C]/50 focus:border-transparent transition-all"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-[#4A6B4A] font-medium mb-2">
                Phone Number <span className="text-[#5C7C5C]/60">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-3 rounded-lg border border-[#5C7C5C]/30 bg-white text-[#3D5A3D] placeholder-[#5C7C5C]/50 focus:outline-none focus:ring-2 focus:ring-[#5C7C5C]/50 focus:border-transparent transition-all"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-[#4A6B4A] font-medium mb-2">
                What brings you here? <span className="text-[#5C7C5C]/60">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share a few details about what you're hoping for..."
                className="w-full px-4 py-3 rounded-lg border border-[#5C7C5C]/30 bg-white text-[#3D5A3D] placeholder-[#5C7C5C]/50 focus:outline-none focus:ring-2 focus:ring-[#5C7C5C]/50 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <p className="text-red-600 text-sm mb-4 text-center">
                Something went wrong. Please try again or email directly at aqeela.carr@gmail.com
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#5C7C5C] text-white font-medium py-4 rounded-full hover:bg-[#4A6B4A] transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Book a free 20-minute call'}
            </button>

            {/* Footer text */}
            <p className="text-center text-[#5C7C5C] text-sm mt-6">
              I'll review your information and get back to you within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

