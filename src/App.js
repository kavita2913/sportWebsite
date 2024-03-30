import './App.css';
import React, { useEffect, useState } from 'react';
import UpperContent from './Component/UpperContent';
import LowerContent from './Component/LowerContent';

function App() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleMode = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <button onClick={() => toggleMode()}>Dark/Light</button>
      <UpperContent theme={theme} />
      <LowerContent theme={theme} />
    </div>
  );
}

export default App;
