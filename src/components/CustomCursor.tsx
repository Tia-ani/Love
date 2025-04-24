import React, { useContext, useEffect, useState } from 'react';
import { CursorContext } from '../context/CursorContext';
import { Heart } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const { position, cursorType } = useContext(CursorContext);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const trailLength = 10;
    setTrail(prevTrail => {
      const newTrail = [{ x: position.x, y: position.y, id: Date.now() }, ...prevTrail];
      if (newTrail.length > trailLength) {
        return newTrail.slice(0, trailLength);
      }
      return newTrail;
    });
  }, [position]);

  return (
    <>
      {/* Main cursor */}
      <div 
        className={`fixed z-50 pointer-events-none ${
          cursorType === 'hover' ? 'scale-150' : 'scale-100'
        } transition-transform duration-300`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <Heart 
          size={28} 
          fill={cursorType === 'hover' ? '#f43f5e' : '#e11d48'} 
          className="animate-pulse" 
          color="#fff" 
        />
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed z-40 pointer-events-none opacity-30"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 500ms ease',
            opacity: 0.8 - index * 0.08,
          }}
        >
          <Heart 
            size={20 - index} 
            fill="#e11d48" 
            className="text-white" 
            color="#fff"
          />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;