import React, { useEffect, useState } from 'react';

interface FloatingWord {
  id: number;
  word: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
}

const words = [
  'Love', 'Destiny', 'Soulmate', 'Connection', 
  'Forever', 'Fate', 'Harmony', 'Heart', 
  'Passion', 'Together', 'Serendipity', 'Eternal', 
  '11:11', 'Red Thread', 'Kismet', 'Meant to be'
];

const FloatingWords: React.FC = () => {
  const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);

  useEffect(() => {
    // Create initial floating words
    const initialWords: FloatingWord[] = [];
    for (let i = 0; i < 20; i++) {
      initialWords.push(createRandomWord());
    }
    setFloatingWords(initialWords);

    // Animation loop
    const animationFrame = requestAnimationFrame(animateWords);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const createRandomWord = (): FloatingWord => {
    return {
      id: Math.random(),
      word: words[Math.floor(Math.random() * words.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.8, // Size between 0.8 and 2.3rem
      speed: Math.random() * 0.4 + 0.1, // Speed between 0.1 and 0.5
      opacity: Math.random() * 0.5 + 0.2, // Opacity between 0.2 and 0.7
      rotation: Math.random() * 20 - 10 // Rotation between -10 and 10 degrees
    };
  };

  const animateWords = () => {
    setFloatingWords(prevWords => {
      return prevWords.map(word => {
        let newY = word.y - word.speed;
        
        // Reset position when word leaves the top of the screen
        if (newY < -10) {
          return {
            ...createRandomWord(),
            y: 110 // Start from below the screen
          };
        }
        
        return {
          ...word,
          y: newY,
          opacity: word.opacity + (Math.random() * 0.02 - 0.01), // Slight opacity flicker
          rotation: word.rotation + (Math.random() * 0.4 - 0.2) // Slight rotation
        };
      });
    });
    
    requestAnimationFrame(animateWords);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingWords.map(word => (
        <div
          key={word.id}
          className="absolute text-white font-light select-none"
          style={{
            left: `${word.x}vw`,
            top: `${word.y}vh`,
            fontSize: `${word.size}rem`,
            opacity: word.opacity,
            transform: `rotate(${word.rotation}deg)`,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
};

export default FloatingWords;