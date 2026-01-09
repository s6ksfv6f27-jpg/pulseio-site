import React from 'react';

interface OwlLogoProps {
  size?: number;
}

const OwlLogo: React.FC<OwlLogoProps> = ({ size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pulse.io Owl Logo"
    >
      {/* Owl body */}
      <ellipse cx="60" cy="70" rx="35" ry="40" fill="#1a1a1a" stroke="#ffa500" strokeWidth="2"/>
      
      {/* Owl head */}
      <circle cx="60" cy="40" r="30" fill="#2a2a2a" stroke="#ffa500" strokeWidth="2"/>
      
      {/* Left ear tuft */}
      <path d="M 35 20 L 30 5 L 40 15 Z" fill="#ffffff"/>
      
      {/* Right ear tuft */}
      <path d="M 85 20 L 90 5 L 80 15 Z" fill="#ffffff"/>
      
      {/* Left eye outer */}
      <circle cx="48" cy="40" r="12" fill="#ffffff"/>
      {/* Left eye inner */}
      <circle cx="48" cy="40" r="8" fill="#0a0a0a"/>
      {/* Left eye pupil */}
      <circle cx="50" cy="38" r="4" fill="#4a90e2"/>
      {/* Left eye reflection */}
      <circle cx="51" cy="37" r="2" fill="#ffffff"/>
      
      {/* Right eye outer */}
      <circle cx="72" cy="40" r="12" fill="#ffffff"/>
      {/* Right eye inner */}
      <circle cx="72" cy="40" r="8" fill="#0a0a0a"/>
      {/* Right eye pupil */}
      <circle cx="74" cy="38" r="4" fill="#4a90e2"/>
      {/* Right eye reflection */}
      <circle cx="75" cy="37" r="2" fill="#ffffff"/>
      
      {/* Beak */}
      <path d="M 60 48 L 55 58 L 65 58 Z" fill="#ffa500"/>
      
      {/* Left wing */}
      <ellipse cx="30" cy="75" rx="12" ry="20" fill="#1a1a1a" stroke="#ffa500" strokeWidth="1.5" transform="rotate(-20 30 75)"/>
      
      {/* Right wing */}
      <ellipse cx="90" cy="75" rx="12" ry="20" fill="#1a1a1a" stroke="#ffa500" strokeWidth="1.5" transform="rotate(20 90 75)"/>
      
      {/* Chest feathers detail */}
      <ellipse cx="60" cy="75" rx="15" ry="18" fill="#3a3a3a" opacity="0.5"/>
      
      {/* Feet */}
      <path d="M 50 105 L 48 112 M 50 105 L 52 112 M 50 105 L 50 112" stroke="#ffa500" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 70 105 L 68 112 M 70 105 L 72 112 M 70 105 L 70 112" stroke="#ffa500" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default OwlLogo;
