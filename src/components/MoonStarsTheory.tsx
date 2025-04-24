import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../context/CursorContext';
import { Moon, Star } from 'lucide-react';

const MoonStarsTheory: React.FC = () => {
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

  const compatibilities = [
    {
      pair: "Fire & Air Signs",
      description: "Dynamic and intellectually stimulating connections"
    },
    {
      pair: "Earth & Water Signs",
      description: "Deep emotional understanding and stability"
    },
    {
      pair: "Moon Sign Harmony",
      description: "Emotional wavelength and intuitive bond"
    },
    {
      pair: "Venus Sign Match",
      description: "Romance and values alignment"
    }
  ];

  return (
    <section 
      id="moon-stars" 
      ref={sectionRef}
      className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden bg-gradient-to-b from-indigo-950 to-violet-950"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <Star
              className="text-white/20"
              size={Math.random() * 10 + 5}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div 
          className={`transition-transform duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
          }`}
        >
          <div className="flex items-center mb-6">
            <Moon className="text-violet-400 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Moon & Stars <span className="text-violet-400">Theory</span>
            </h2>
          </div>

          <p className="text-white/80 mb-6 leading-relaxed">
            The position of celestial bodies at the time of our birth creates a unique cosmic fingerprint that influences our romantic connections. When two charts align harmoniously, it can indicate a profound soul connection.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-violet-500/20">
            <h3 className="text-xl font-semibold text-white mb-6">Astrological Soul Bonds</h3>
            
            <div className="space-y-6">
              {compatibilities.map((compatibility, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <h4 className="text-violet-300 mb-2 group-hover:text-violet-200 transition-colors duration-300">
                    {compatibility.pair}
                  </h4>
                  <p className="text-white/70">{compatibility.description}</p>
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
          <div className="relative w-full aspect-square">
            {/* Circular zodiac representation */}
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 animate-spin-slow">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="absolute w-4 h-4"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${index * 30}deg) translateY(-150px) rotate(-${index * 30}deg)`,
                  }}
                >
                  <Star
                    className="text-violet-400"
                    size={16}
                    fill="currentColor"
                  />
                </div>
              ))}
            </div>

            {/* Center moon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Moon
                className="text-violet-300 animate-pulse"
                size={64}
                fill="currentColor"
              />
            </div>

            {/* Orbital paths */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 rounded-full border border-violet-500/10"
                style={{
                  width: `${(index + 1) * 200}px`,
                  height: `${(index + 1) * 200}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-white/70 italic">
              "As above, so below. The stars guide us to our destined love."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoonStarsTheory;