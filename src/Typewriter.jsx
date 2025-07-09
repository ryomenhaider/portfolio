import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const words = ["I am Haider Ali", "Welcome to my Portfolio", "I am a AI Automation Expert"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  useEffect(() => {
    const currentWord = words[i];

    let typingSpeed = 150;

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ(prev => prev - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI(prev => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ(prev => prev + 1);
        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [j, isDeleting, i]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-4xl font-bold">{text}</h1>
    </div>
  );
};

export default Typewriter;
