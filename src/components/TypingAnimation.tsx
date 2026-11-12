
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

const TypingAnimation = ({ text, className = "" }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText('');
            setIsTyping(true);
          }, 3000); // Longer pause before restarting
        }
      }
    }, isTyping ? 200 : 100); // Slower typing speed for smoother animation

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text]);

  return (
    <span className={`${className} inline-block`} style={{ minHeight: '1.2em', minWidth: '150px' }}>
      {displayText}
      <span className="inline-block w-0.5 h-4 xs:h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 bg-neon-blue animate-pulse ml-1" style={{ transform: 'translateZ(0)' }}>|</span>
    </span>
  );
};

export default TypingAnimation;
