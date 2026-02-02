import { useState, useEffect, useRef } from 'react';
import styles from './DarkModeToggle.module.css';

// Dark Side reacting to user choosing Light Mode 🦹‍♂️
const DARK_SIDE_SAYINGS = [
  "You disappoint me, hero... I expected more ambition.",
  "Running to the light? How predictably noble of you.",
  "Enjoy your sunshine while it lasts, do-gooder.",
  "The shadows will remember this betrayal.",
  "Choosing hope over power? Foolish... but brave.",
  "Go ahead, be the hero. We'll meet again.",
  "The light blinds you to your true potential.",
  "How quaint. Another soul lost to righteousness.",
  "You think the light will protect you? Amusing.",
  "Fine, run to your heroes. The darkness is patient.",
];

// Light Side reacting to user choosing Dark Mode 🦸‍♀️
const LIGHT_SIDE_SAYINGS = [
  "You were supposed to be one of the good ones...",
  "The darkness calls to many. We hoped not you.",
  "Even in shadow, a hero can still return to us.",
  "This isn't you. The light will be here when you're ready.",
  "Another one falls... but hope is never lost.",
  "The dark path is seductive, friend. Tread carefully.",
  "We'll leave the light on for you. Always.",
  "So, you've chosen the easy path. We expected more.",
  "The shadows may welcome you, but they won't save you.",
  "A hero lost today may be a hero reborn tomorrow.",
];

function getRandomSaying(sayings: string[]): string {
  return sayings[Math.floor(Math.random() * sayings.length)];
}

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showBubble, setShowBubble] = useState(false);
  const [currentSaying, setCurrentSaying] = useState('');
  const [bubbleStyle, setBubbleStyle] = useState<'dark' | 'light'>('dark');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    // Save preference
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Set the saying and bubble style based on the new mode
    // Going to dark mode = Light Side comments (light bubble)
    // Going to light mode = Dark Side comments (dark bubble)
    if (newDarkMode) {
      setCurrentSaying(getRandomSaying(LIGHT_SIDE_SAYINGS));
      setBubbleStyle('light');
    } else {
      setCurrentSaying(getRandomSaying(DARK_SIDE_SAYINGS));
      setBubbleStyle('dark');
    }
    
    // Show speech bubble on toggle
    setShowBubble(true);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Hide after 3 seconds
    timeoutRef.current = window.setTimeout(() => {
      setShowBubble(false);
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      <button 
        className={styles.toggle}
        onClick={handleClick}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Light mode' : 'Dark mode'}
      >
        <span className={styles.icon}>{isDarkMode ? '☀️' : '🌙'}</span>
      </button>
      
      {showBubble && (
        <div className={`${styles.speechBubble} ${bubbleStyle === 'dark' ? styles.dark : styles.light}`}>
          {currentSaying}
        </div>
      )}
    </div>
  );
}

export default DarkModeToggle;
