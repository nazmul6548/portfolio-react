import { useEffect } from 'react';
import './App.css';

const TypewriterLoader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [onComplete]);

  return (
    <div className="typewriter-container">
      <div className="typewriter-text text-sm md:text-3xl">Welcome to My Portfolio....</div>
    </div>
  );
};

export default TypewriterLoader;
