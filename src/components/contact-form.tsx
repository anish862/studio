import React, {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {submitContactForm} from '@/services/contact';
import {useToast} from '@/hooks/use-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {toast} = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submission = {
      name,
      email,
      message,
    };

    try {
      const success = await submitContactForm(submission);
      if (success) {
        toast({
          title: 'Message sent',
          description: 'Your message has been sent successfully.',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast({
          title: 'Failed to send message',
          description: 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'An error occurred. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          rows={5}
          required
        />
      </div>
      <div>
        <Button type="submit" className="w-full">Send Message</Button>
      </div>
    </form>
  );
};
