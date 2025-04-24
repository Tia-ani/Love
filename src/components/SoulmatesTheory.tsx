import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../context/CursorContext';

const SoulmatesTheory: React.FC = () => {
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

  const soulmateTypes = [
    {
      title: "Twin Flames",
      description: "Two halves of the same soul, mirroring each other perfectly while catalyzing intense growth."
    },
    {
      title: "Soul Mates",
      description: "Souls from the same soul family with deep compatibility and mutual understanding."
    },
    {
      title: "Karmic Partners",
      description: "Relationships that teach important life lessons through challenges and obstacles."
    },
    {
      title: "Soul Contracts",
      description: "Pre-birth agreements between souls to meet and fulfill specific purposes."
    }
  ];

  const signs = [
    "Immediate recognition or familiarity",
    "Intense emotional connection",
    "Telepathic communication",
    "Synchronicities and coincidences",
    "Feeling complete in their presence",
    "Similar life paths or parallel experiences"
  ];

  return (
    <section 
      id="soulmates" 
      ref={sectionRef}
      className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden bg-gradient-to-b from-pink-950 to-rose-950"
    >
      {/* Background light effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className={`text-center mb-16 transition-transform duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Mystical Nature of <span className="text-pink-400">Soulmates</span>
          </h2>
          
          <p className="text-white/80 max-w-3xl mx-auto">
            Throughout history, across cultures and spiritual traditions, there has been a belief that certain souls are destined to meet and reunite in lifetime after lifetime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div 
            className={`transition-transform duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Types of Soul Connections
              </h3>
              
              <div className="space-y-6">
                {soulmateTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="group"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <h4 className="text-xl text-pink-300 mb-2 group-hover:text-pink-200 transition-colors duration-300">
                      {type.title}
                    </h4>
                    <p className="text-white/70">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-transform duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Signs You've Met Your Soulmate
              </h3>
              
              <ul className="space-y-4">
                {signs.map((sign, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-pink-300 text-sm">{index + 1}</span>
                    </div>
                    <p className="text-white/80">{sign}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                <p className="text-white/90 italic text-center">
                  "Souls recognize each other by vibes, not by appearance."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className={`mt-16 text-center transition-transform duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-pink-500/20"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            Discover Your Connection Type
          </a>
        </div>
      </div>
    </section>
  );
};

export default SoulmatesTheory;