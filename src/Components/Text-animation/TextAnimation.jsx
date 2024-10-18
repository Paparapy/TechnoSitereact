import React, { useEffect } from 'react';
import './TextAnimation.css'; // Assurez-vous de créer un fichier CSS séparé pour les animations

const TextAnimation = ({ text }) => {
  useEffect(() => {
    const letters = document.querySelectorAll('.animated-letter');
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add('fade-in');
      }, i * 100); // 100ms delay between each letter
    });

    const intervalId = setInterval(() => {
      letters.forEach((letter, i) => {
        setTimeout(() => {
          letter.classList.remove('fade-in');
          void letter.offsetWidth;
          letter.classList.add('fade-in');
        }, i * 100);
      });
    }, text.length * 100 + 1000); // Adjust timing as needed

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="text-container">
      {text.split('').map((letter, index) => (
        <span key={index} className="font-bold text-pink-600 opacity-0 lg:text-4xl sm:text-2xl animated-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;


