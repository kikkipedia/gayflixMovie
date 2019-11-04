import React from 'react';
import './App.css';
import Menu from './menu.js';
import MoviesHome from './components/movie/MoviesHome';




function App() {
  return (
    <div className="App">
      <Menu />
      <MoviesHome/>
      
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
