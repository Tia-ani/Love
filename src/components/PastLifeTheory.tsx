import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../context/CursorContext';
import { History, Sparkles } from 'lucide-react';

const PastLifeTheory: React.FC = () => {
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

  const signs = [
    {
      title: "Instant Recognition",
      description: "Meeting someone for the first time but feeling like you've known them forever"
    },
    {
      title: "Shared Memories",
      description: "Experiencing déjà vu moments together in specific places"
    },
    {
      title: "Unexplainable Comfort",
      description: "Feeling unusually comfortable and safe in their presence from the start"
    },
    {
      title: "Similar Life Patterns",
      description: "Discovering parallel life experiences and shared challenges"
    }
  ];

  return (
    <section 
      id="past-life" 
      ref={sectionRef}
      className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden bg-gradient-to-b from-amber-950 to-orange-950"
    >
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-amber-300 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
            size={Math.random() * 20 + 10}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div 
          className={`transition-transform duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
          }`}
        >
          <div className="flex items-center mb-6">
            <History className="text-amber-400 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Past Life <span className="text-amber-400">Connections</span>
            </h2>
          </div>

          <p className="text-white/80 mb-6 leading-relaxed">
            Some souls are bound through multiple lifetimes, carrying their connection through the ages. These past life relationships often manifest as inexplicable familiarity and deep understanding between two people who have just met.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-amber-500/20">
            <h3 className="text-xl font-semibold text-white mb-6">Signs of a Past Life Connection</h3>
            
            <div className="space-y-6">
              {signs.map((sign, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <h4 className="text-amber-300 mb-2 group-hover:text-amber-200 transition-colors duration-300">
                    {sign.title}
                  </h4>
                  <p className="text-white/70">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          className={`relative transition-transform duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-8 border border-amber-500/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Past Life Timeline</h3>
              <p className="text-white/70">Every meeting is a reunion of ancient souls</p>
            </div>

            <div className="relative">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex items-center mb-8 relative">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
                    <span className="text-amber-300">{index + 1}</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="h-24 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4">
                      <div className="text-white/90">Past Life Era {index + 1}</div>
                      <div className="text-amber-300/70 text-sm mt-2">
                        The souls meet again in a different time and form
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 to-orange-500/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastLifeTheory;