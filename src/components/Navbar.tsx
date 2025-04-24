import React, { useState, useContext, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { CursorContext } from '../context/CursorContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setCursorType } = useContext(CursorContext);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Red Thread', href: '#red-thread' },
    { name: '11:11', href: '#eleven-eleven' },
    { name: '12 Grapes', href: '#twelve-grapes' },
    { name: 'Soulmates', href: '#soulmates' },
    { name: 'Past Life', href: '#past-life' },
    { name: 'Moon & Stars', href: '#moon-stars' },
    { name: 'Candle Flame', href: '#candle-flame' },
    { name: 'Love Knot', href: '#love-knot' },
    { name: 'Shooting Star', href: '#shooting-star' },
    { name: 'Calculator', href: '#calculator' }
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-30 px-6 py-4 transition-all duration-500 ${
        isScrolled ? 'bg-rose-950/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-white font-bold text-xl flex items-center gap-2 group"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
        >
          <Heart className="text-rose-500 transition-transform duration-300 group-hover:scale-110" fill="#f43f5e" />
          <span className="transition-colors duration-300 group-hover:text-rose-300">Ethereal Love</span>
        </a>
        
        <div className="hidden lg:flex space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-300 relative overflow-hidden group"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-rose-950/95 backdrop-blur-lg transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a 
              href="#" 
              className="text-white font-bold text-xl flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="text-rose-500" fill="#f43f5e" />
              <span>Ethereal Love</span>
            </a>
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;