'use client';

import React from 'react';
import Link from 'next/link';
import {Facebook, Instagram, Twitter, Youtube} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-primary transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6"/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6"/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6"/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6"/>
              </Link>
            </div>
          </div>

          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">IrisMorphe</h3>
            <p className="text-gray-600">
              Your partner in digital success. We provide innovative solutions to help your business thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} IrisMorphe. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

