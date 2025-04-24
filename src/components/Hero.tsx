import React, { useContext, useState, useEffect } from 'react';
import { CursorContext } from '../context/CursorContext';

const Hero: React.FC = () => {
  const { setCursorType } = useContext(CursorContext);
  const [visible, setVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const textOptions = [
    "when souls are destined to meet",
    "when the universe conspires",
    "when two hearts find each other",
    "when love transcends time",
    "when fate intertwines our paths"
  ];

  // Type and erase text effect
  useEffect(() => {
    setVisible(true);
    
    let timeout: number;
    
    if (currentText.length === textOptions[currentIndex].length) {
      // Text is fully typed, pause before erasing
      timeout = window.setTimeout(() => {
        // Start erasing
        const eraseInterval = window.setInterval(() => {
          setCurrentText(prev => {
            if (prev.length > 0) {
              return prev.slice(0, -1);
            } else {
              clearInterval(eraseInterval);
              // Move to next text option
              setCurrentIndex(prevIndex => (prevIndex + 1) % textOptions.length);
              return '';
            }
          });
        }, 50);
      }, 2000);
    } else if (currentText.length === 0) {
      // Start typing
      timeout = window.setTimeout(() => {
        const typeInterval = window.setInterval(() => {
          setCurrentText(prev => {
            const nextChar = textOptions[currentIndex][prev.length];
            if (prev.length < textOptions[currentIndex].length) {
              return prev + nextChar;
            } else {
              clearInterval(typeInterval);
              return prev;
            }
          });
        }, 100);
      }, 500);
    }
    
    return () => {
      clearTimeout(timeout);
    };
  }, [currentText, currentIndex, textOptions]);

  return (
    <section className="h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-3xl"></div>
      
      <div 
        className={`relative z-10 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          The Magic of <span className="text-rose-400">Love</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-white/90 mb-6 min-h-[40px]">
          <span className="text-rose-300">...</span> {currentText}<span className="animate-pulse">|</span>
        </h2>
        
        <p className="text-lg text-white/80 max-w-xl mb-10">
          Explore the mystical theories behind why some souls connect and how destiny brings lovers together through cosmic signs and unseen forces.
        </p>
        
        <a 
          href="#red-thread" 
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-rose-500/20"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={() => setCursorType('default')}
        >
          Discover the Theories
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;