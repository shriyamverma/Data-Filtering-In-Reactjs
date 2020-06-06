import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Filter from './components/Filter'

function App() {
  return (
    <div>
      <NavBar />
      <Filter />
    </div>
  );
}

export default App;