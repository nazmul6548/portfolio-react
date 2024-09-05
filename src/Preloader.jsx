import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="preloader-container flex items-center justify-center h-screen w-screen bg-primary-gradient z-50 fixed top-0 left-0">
      {/* Custom loading animation */}
      <motion.div
        className="spinner-border"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          border: '8px solid rgba(255, 255, 255, 0.3)',
          borderTop: '8px solid #8750f7',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
        }}
      />
    </div>
  );
};

export default Preloader;
