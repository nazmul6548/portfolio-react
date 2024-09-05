import { useEffect } from 'react';
import './App.css';

const TypewriterLoader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [onComplete]);

  return (
    <div className="typewriter-container">
      <div className="typewriter-text">Welcome to My Portfolio....</div>
    </div>
  );
};

export default TypewriterLoader;
