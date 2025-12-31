'use client';

import { useEffect } from 'react';

export const ContactSection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #A3BDA3 0%, #8FAF8F 100%)' }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl text-center mb-4 text-[#3D5A3D]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          You don't have to do this all on your own.
        </h2>
        <p className="text-lg text-center text-[#4A6B4A] mb-12">
          If you're curious, that's enough to begin.
        </p>

        {/* Calendly inline embed */}
        <div className="bg-[#FAF7F2] rounded-2xl p-4 md:p-6 shadow-lg max-w-2xl mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/aqeela-carr/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=5C7C5C"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        <p className="text-center text-[#5C7C5C] text-sm mt-6">
          Book a free 20-minute discovery call — no pressure, just a conversation.
        </p>
      </div>
    </section>
  );
};
