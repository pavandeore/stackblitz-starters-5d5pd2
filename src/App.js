import React, { useState } from 'react';

import FuncContextCompo from './FuncContextCompo';
import ClassContextCompo from './ClassContextCompo';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>click</button>

        <FuncContextCompo />
        <ClassContextCompo />
      </ThemeContext.Provider>
    </div>
  );
}
