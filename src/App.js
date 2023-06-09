import React from 'react';
import Calculator from './components/Calculator';
import QuoteComponent from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App1">
        😎💫GDM Calculator 💫😎
      </h1>
      <div className="Container">
        <Calculator />
        <QuoteComponent />
      </div>
    </div>
  );
}

export default App;
