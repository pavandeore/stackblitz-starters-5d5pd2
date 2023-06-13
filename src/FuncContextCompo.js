import React, { useContext } from 'react';
import { ThemeContext } from './App';

function FuncContextCompo() {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    background: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#CCC' : '#333',
    padding: '3rem',
  };
  return (
    <>
      <div style={themeStyle}>function theme</div>
    </>
  );
}

export default FuncContextCompo;
