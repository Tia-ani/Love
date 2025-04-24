import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../context/CursorContext';
import { Clock } from 'lucide-react';

const ElevenElevenTheory: React.FC = () => {
  const { setCursorType } = useContext(CursorContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
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
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(timer);
    };
  }, []);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const isElevenEleven = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return (hours === 11 && minutes === 11) || (hours === 23 && minutes === 11);
  };

  return (
    <section 
      id="eleven-eleven" 
      ref={sectionRef}
      className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden bg-gradient-to-b from-purple-950 to-indigo-950"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(11)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-indigo-300 text-opacity-30 font-bold text-9xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            11:11
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div 
          className={`order-2 md:order-1 transition-transform duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 shadow-xl">
            <div className="flex items-center mb-6">
              <Clock className="text-indigo-400 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-white">The Phenomenon</h3>
            </div>
            
            <p className="text-white/80 mb-4 leading-relaxed">
              Have you ever glanced at a clock precisely at 11:11? Many believe this is not a coincidence but a message from the universe or guardian angels.
            </p>
            
            <p className="text-white/80 mb-4 leading-relaxed">
              When you see 11:11, it's considered a sign to pay attention to your thoughts, as they are manifesting rapidly into reality. It's a moment of alignment between you and the universe.
            </p>
            
            <p className="text-white/80 mb-4 leading-relaxed">
              For couples, repeatedly seeing 11:11 may indicate a twin flame connection or soul alignment with your partner. It's a reminder that your relationship has spiritual significance.
            </p>
            
            <div className="flex justify-between items-center mt-8">
              <span 
                className="text-indigo-300 cursor-pointer hover:text-indigo-200 transition-colors duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Make a wish at 11:11
              </span>
              
              <div className="relative">
                <div className={`text-xl font-mono ${isElevenEleven() ? 'text-indigo-400 animate-pulse' : 'text-white/80'}`}>
                  {formatTime(currentTime)}
                </div>
                {isElevenEleven() && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className={`order-1 md:order-2 text-center transition-transform duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-indigo-400">11:11</span> Phenomenon
          </h2>
          
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-indigo-500/10 backdrop-blur-lg rounded-full animate-pulse"></div>
            <div className="relative z-10 text-4xl md:text-6xl font-bold text-white">
              11:11
            </div>
            
            {/* Clock hands */}
            <div className="absolute top-1/2 left-1/2 w-1 h-16 md:h-24 bg-indigo-400 transform -translate-x-1/2 origin-bottom rotate-0"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-16 md:h-24 bg-indigo-400 transform -translate-x-1/2 origin-bottom rotate-0"></div>
          </div>
          
          <p className="text-white/70 max-w-md mx-auto">
            When the clock strikes 11:11, a portal of manifestation opens. This moment invites you to align your thoughts with your deepest desires and connect with your spiritual path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElevenElevenTheory;