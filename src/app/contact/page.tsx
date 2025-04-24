'use client';

import React from 'react';
import {ContactForm} from '@/components/contact-form';
import {MainNav} from '@/components/main-nav';

const ContactPage = () => {
  return (
    <div>
      <MainNav />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          We'd love to hear from you. Send us a message using the form below.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
