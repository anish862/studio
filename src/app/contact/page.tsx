'use client';

import React from 'react';
import {ContactForm} from '@/components/contact-form';
import {MainNav} from '@/components/main-nav';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="container mx-auto py-12 flex-grow animate-fade-in">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          We'd love to hear from you. Send us a message using the form below.
        </p>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


