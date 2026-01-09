export default function OwlLogo({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pulse.io Owl Logo"
    >
      {/* Owl Body */}
      <ellipse cx="100" cy="120" rx="60" ry="70" fill="#FFA500" />
      
      {/* Owl Head */}
      <circle cx="100" cy="70" r="50" fill="#FFA500" />
      
      {/* Left Ear/Tuft */}
      <path d="M 60 35 Q 55 20 65 25 Q 70 30 68 40 Z" fill="#FFA500" />
      
      {/* Right Ear/Tuft */}
      <path d="M 140 35 Q 145 20 135 25 Q 130 30 132 40 Z" fill="#FFA500" />
      
      {/* Left Eye White */}
      <circle cx="80" cy="70" r="18" fill="white" />
      
      {/* Right Eye White */}
      <circle cx="120" cy="70" r="18" fill="white" />
      
      {/* Left Pupil */}
      <circle cx="80" cy="70" r="10" fill="#0a0a0a" />
      
      {/* Right Pupil */}
      <circle cx="120" cy="70" r="10" fill="#0a0a0a" />
      
      {/* Left Eye Highlight */}
      <circle cx="83" cy="67" r="4" fill="white" />
      
      {/* Right Eye Highlight */}
      <circle cx="123" cy="67" r="4" fill="white" />
      
      {/* Beak */}
      <path d="M 100 85 L 90 95 L 110 95 Z" fill="#FF8C00" />
      
      {/* Left Wing */}
      <ellipse cx="55" cy="130" rx="20" ry="35" fill="#FF8C00" transform="rotate(-20 55 130)" />
      
      {/* Right Wing */}
      <ellipse cx="145" cy="130" rx="20" ry="35" fill="#FF8C00" transform="rotate(20 145 130)" />
      
      {/* Left Foot */}
      <path d="M 75 180 L 70 185 M 75 180 L 75 185 M 75 180 L 80 185" stroke="#FF8C00" strokeWidth="3" fill="none" />
      
      {/* Right Foot */}
      <path d="M 125 180 L 120 185 M 125 180 L 125 185 M 125 180 L 130 185" stroke="#FF8C00" strokeWidth="3" fill="none" />
    </svg>
  );
}
