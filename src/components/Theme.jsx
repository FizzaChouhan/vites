import React, { useState, useEffect } from 'react';
import '../App.css'; // Include your styles here

function Theme() {
  // State to manage theme
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Update the class on the <body> element whenever theme changes
  useEffect(() => {
    document.body.className = theme; // Apply 'light' or 'dark' class to body
  }, [theme]);

  return (
    <div className="app">
      
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default Theme;
