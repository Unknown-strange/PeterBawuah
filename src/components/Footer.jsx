import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

// Placeholder data - Replace with actual URLs and QR code image paths
const socialLinks = [
  {
    name: 'LinkedIn',
    Icon: Linkedin,
    url: '#', // Replace with actual LinkedIn profile URL
    qrCode: '/qr/linkedin_qr.png', // Placeholder path - Put actual QR in /public/qr/
  },
  {
    name: 'Instagram',
    Icon: Instagram,
    url: '@peter_bawuah', // Replace with actual Instagram profile URL
    qrCode: '/qr/instagram_qr.png', // Placeholder path
  },
  {
    name: 'Facebook',
    Icon: Facebook,
    url: ' Peter Bawuah TV', // From HTML
    qrCode: '/qr/facebookqr.webp', // Placeholder path
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    url: ' Peter Bawuah TV', // Replace with actual Twitter profile URL
    qrCode: '/qr/twitter_qr.png', // Placeholder path
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0d0d0d] py-8 mt-16">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          Copyright &copy; {new Date().getFullYear()} Peter Bawuah
        </p>
        
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.url}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.Icon className="h-6 w-6" />
              </a>
              {/* QR Code Popup - Appears on hover */}
              {link.qrCode && ( // Only show if qrCode path exists
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white dark:bg-gray-700 p-1 rounded shadow-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src={link.qrCode} 
                      alt={`${link.name} QR Code`} 
                      className="w-24 h-24 md:w-32 md:h-32 object-contain" 
                      // Add error handling for image loading if needed
                      onError={(e) => { e.target.style.display = 'none'; /* Hide if image fails */ }}
                    />
                  </div>
                   {/* Optional: Add a small triangle pointer */}
                   <div className="w-3 h-3 bg-white dark:bg-gray-700 transform rotate-45 absolute bottom-[-6px] left-1/2 -translate-x-1/2 border-r border-b border-gray-200 dark:border-gray-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

