import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import { CursorContext } from '../context/CursorContext';

const Footer: React.FC = () => {
  const { setCursorType } = useContext(CursorContext);
  
  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ];
  
  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Pinterest', href: '#' }
  ];

  return (
    <footer className="bg-rose-950/50 backdrop-blur-md border-t border-rose-900/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Heart className="text-rose-500 mr-2" fill="#f43f5e" />
            <span className="text-white font-bold text-xl">Ethereal Love</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-rose-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2025 Ethereal Love. All the magic is meant to be shared.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-white/50 text-sm">
          <p>When souls are destined to meet, the universe conspires to bring them together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;