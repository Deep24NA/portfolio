import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = ["Hi, I'm Deepanshu", "Welcome to my portfolio", "Let's build something amazing"];
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentString = texts[textIndex];

    const interval = setInterval(() => {
      setCurrentText(currentString.substring(0, charIndex));

      if (isTyping) {
        if (charIndex < currentString.length + 1) {
          setCharIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
        } else {
          setIsTyping(true);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, isTyping, textIndex]);

  return (
    <div className='transition ease duration-300'>
      {currentText}
    </div>
  );
};

export default TextChange;
