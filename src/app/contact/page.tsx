'use client';

import React from 'react';
import {ContactForm} from '@/components/contact-form';
import {useDynamicContent} from '@/hooks/useDynamicContent';

const ContactPage = () => {
  const {content, isLoading, error} = useDynamicContent('contact-page');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-12 flex-grow animate-fade-in">
        <h1 className="text-3xl font-bold mb-8 text-center">{content?.title || 'Contact Us'}</h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          {content?.description || 'We\'d love to hear from you. Send us a message using the form below.'}
        </p>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
