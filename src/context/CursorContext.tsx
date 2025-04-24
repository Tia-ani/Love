import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorContextType {
  position: CursorPosition;
  cursorType: string;
  setCursorType: (type: string) => void;
}

export const CursorContext = createContext<CursorContextType>({
  position: { x: 0, y: 0 },
  cursorType: 'default',
  setCursorType: () => {},
});

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<string>('default');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <CursorContext.Provider value={{ position, cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};