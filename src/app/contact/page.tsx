'use client';

import React from 'react';
import {ContactForm} from '@/components/contact-form';
import {MainNav} from '@/components/main-nav';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          We'd love to hear from you. Send us a message using the form below.
        </p>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-xl">
          <ContactForm />
        </div>
      </div>
      <footer className="w-full max-w-screen-xl bg-secondary py-8 px-4 md:px-8 lg:px-16 mt-12 rounded-tl-lg rounded-tr-lg shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AgencyFlow. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
