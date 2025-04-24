import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../context/CursorContext';

const RedThreadTheory: React.FC = () => {
  const { setCursorType } = useContext(CursorContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="red-thread" 
      ref={sectionRef}
      className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden"
    >
      {/* Red Thread Visual Element */}
      <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div 
          className={`transition-transform duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Red Thread of <span className="text-red-500">Fate</span>
          </h2>
          
          <p className="text-white/80 mb-4 leading-relaxed">
            According to an ancient East Asian belief, the gods tie an invisible red cord around the ankles or fingers of those who are destined to meet one another in a certain situation or help each other in a certain way.
          </p>
          
          <p className="text-white/80 mb-4 leading-relaxed">
            This magical cord may stretch or tangle, but never break. It connects those who are destined to be together, regardless of time, place, or circumstance.
          </p>
          
          <p className="text-white/80 mb-6 leading-relaxed">
            The two people connected by the red thread are destined lovers, regardless of place, time, or circumstances. This magical cord may stretch or tangle, but never break.
          </p>
          
          <button 
            className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-white px-6 py-3 rounded-full transition-all duration-300"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            Learn More
          </button>
        </div>
        
        <div 
          className={`relative transition-transform duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
          }`}
        >
          <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-red-950 to-rose-900 rounded-lg overflow-hidden shadow-lg">
            {/* Visual representation of the red thread */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 absolute left-10 bottom-20 blur-sm"></div>
              <div className="w-20 h-20 rounded-full bg-white/10 absolute right-10 top-20 blur-sm"></div>
              
              {/* The thread connecting the circles */}
              <div className="absolute w-full h-0.5 bg-red-500 transform rotate-45 animate-pulse"></div>
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">An Invisible Bond</h3>
                <p>Though you may not see it, the connection remains eternal</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-red-500/30 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-red-500/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default RedThreadTheory;