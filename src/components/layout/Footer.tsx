"use client";

import { Github, Linkedin, Mail, Rocket } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/#skills', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/#experiences', label: 'Experience' },
    { href: '/#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/LilymoonW', 
      icon: Github, 
      label: 'GitHub'
    },
    { 
      href: 'https://linkedin.com/in/lilymoon-whalen', 
      icon: Linkedin, 
      label: 'LinkedIn'
    },
    { 
      href: 'mailto:lw116@wellesley.edu', 
      icon: Mail, 
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-black/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
        
              <span className="text-2xl font-bold bg-gradient-to-r">
                LILYMOON
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Blending design and logic to build intuitive digital spaces.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <span>© 2025 Lilymoon Whalen. All rights reserved.</span>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 