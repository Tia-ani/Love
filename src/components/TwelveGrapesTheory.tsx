import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../context/CursorContext';
import { Grape } from 'lucide-react';

const TwelveGrapesTheory: React.FC = () => {
  const { setCursorType } = useContext(CursorContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGrape, setHoveredGrape] = useState<number | null>(null);
  
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

  const wishes = [
    "Finding true love",
    "Meeting your soulmate",
    "Deepening connection",
    "Healing past wounds",
    "Opening your heart",
    "Building trust",
    "Creating harmony",
    "Strengthening bonds",
    "Nurturing romance",
    "Manifesting commitment",
    "Growing together",
    "Eternal happiness"
  ];

  return (
    <section 
      id="twelve-grapes" 
      ref={sectionRef}
      className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden bg-gradient-to-b from-green-950 to-emerald-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div 
          className={`transition-transform duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The <span className="text-emerald-400">12 Grapes</span> Tradition
          </h2>
          
          <p className="text-white/80 mb-4 leading-relaxed">
            According to Spanish tradition, eating 12 grapes at midnight on New Year's Eve brings good luck for the coming year. Each grape represents a month of the upcoming year.
          </p>
          
          <p className="text-white/80 mb-4 leading-relaxed">
            But there's a lesser-known romantic variation: placing 12 grapes under the table where lovers share a meal is believed to strengthen their bond and ensure their relationship will flourish for the next 12 months.
          </p>
          
          <p className="text-white/80 mb-6 leading-relaxed">
            Each grape symbolizes a wish or quality you want to manifest in your relationship. As you eat each grape, focus on your intention for your love life.
          </p>
          
          <div className="flex space-x-4">
            <button 
              className="bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-white px-6 py-3 rounded-full transition-all duration-300"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              Learn the Ritual
            </button>
            
            <button 
              className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full transition-all duration-300"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              Share Your Wishes
            </button>
          </div>
        </div>
        
        <div 
          className={`transition-transform duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              12 Wishes for Love
            </h3>
            
            <div className="grid grid-cols-3 gap-4">
              {wishes.map((wish, index) => (
                <div 
                  key={index}
                  className={`relative p-4 rounded-lg bg-gradient-to-br transition-all duration-300 ${
                    hoveredGrape === index 
                      ? 'from-emerald-700/50 to-emerald-900/50 scale-105' 
                      : 'from-emerald-950/50 to-emerald-900/50'
                  }`}
                  onMouseEnter={() => {
                    setHoveredGrape(index);
                    setCursorType('hover');
                  }}
                  onMouseLeave={() => {
                    setHoveredGrape(null);
                    setCursorType('default');
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <Grape 
                      className={`mb-2 ${
                        hoveredGrape === index ? 'text-emerald-400' : 'text-emerald-600'
                      }`} 
                      size={24} 
                    />
                    <span className="text-sm text-white/90">{wish}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center text-white/60 text-sm">
              Whisper your wishes as you imagine eating each grape
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwelveGrapesTheory;