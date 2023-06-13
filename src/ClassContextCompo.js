import React, { Component } from 'react';
import { ThemeContext } from './App';

class ClassContextCompo extends Component {
  themeStyle(dark) {
    return {
      background: dark ? '#333' : '#ccc',
      color: dark ? '#CCC' : '#333',
      padding: '3rem',
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(darkTheme) => {
            return <div style={this.themeStyle(darkTheme)}> Class theme</div>;
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}
