
import React from 'react';

const CurvedLightBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Curved Light */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="curvedGlow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="30%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="60%" stopColor="rgba(244, 114, 182, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>
            
            <linearGradient id="curvedLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(244, 114, 182, 0.4)" />
            </linearGradient>
          </defs>
          
          {/* Background Glow */}
          <ellipse
            cx="600"
            cy="240"
            rx="500"
            ry="300"
            fill="url(#curvedGlow)"
            className="animate-pulse-glow"
          />
          
          {/* Animated Curved Light Path with Wave Effect */}
          <path
            d="M 100 300 Q 400 150 700 300 T 1100 300"
            stroke="url(#curvedLine)"
            strokeWidth="3"
            fill="none"
            className="animate-wave-flow"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
              strokeDasharray: '10 5',
              animation: 'wave-flow 3s ease-in-out infinite'
            }}
          />
          
          {/* Secondary Curve with Wave Animation */}
          <path
            d="M 200 400 Q 500 250 800 400 T 1000 400"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="2"
            fill="none"
            className="animate-wave-flow-delayed"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.3))',
              strokeDasharray: '8 4',
              animation: 'wave-flow 3s ease-in-out infinite 1.5s'
            }}
          />
        </svg>
      </div>
      
      {/* Floating Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default CurvedLightBackground;
