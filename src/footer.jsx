import React, { useState } from 'react';

const Footer = () => {
  const [copiedItem, setCopiedItem] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const handleContact = (type) => {
    switch(type) {
      case 'email':
        window.open('mailto:onlinep680@email.com');
        break;
      case 'whatsapp':
        window.open('https://wa.me/+923369466617');
        break;
      case 'phone':
        window.open('tel:+92 336 9466617');
        break;
      default:
        break;
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const contacts = [
    { type: 'email', label: 'Email', value: 'onlinep680@email.com' },
    { type: 'whatsapp', label: 'WhatsApp', value: '+92 336 9466617' },
    { type: 'phone', label: 'Phone', value: '+92 336 9466617' }
  ];

  return (
    <footer className='bg-black text-white py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-3xl font-bold'>Haider Ali</h3>
            <p className='text-gray-300 leading-relaxed'>
              A passionate developer specializing in automation and AI solutions. 
              I help businesses streamline their workflows with custom-built systems 
              that save time and increase efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-xl font-bold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className='text-gray-300 hover:text-white transition-colors duration-300 hover:underline'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='space-y-4'>
            <h4 className='text-xl font-bold mb-6'>Contact</h4>
            <ul className='space-y-4'>
              {contacts.map((contact, index) => (
                <li key={index} className='flex items-center justify-between group'>
                  <div className='flex-1'>
                    <button
                      onClick={() => handleContact(contact.type)}
                      className='text-gray-300 hover:text-white transition-colors duration-300 text-left'
                    >
                      <div className='font-medium'>{contact.label}</div>
                      <div className='text-sm text-gray-400 group-hover:text-gray-300'>
                        {contact.value}
                      </div>
                    </button>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.value, contact.type)}
                    className='ml-4 text-xs text-gray-400 hover:text-white transition-colors duration-300 border border-gray-600 hover:border-white px-2 py-1 rounded'
                  >
                    {copiedItem === contact.type ? 'Copied!' : 'Copy'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Haider Ali. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm text-gray-400'>
              <span>Available for projects</span>
              <span>•</span>
              <span>24h response time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;