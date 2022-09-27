import logo from './logo.svg';
import './App.css';
import Emission from './Emission.js';

import express from 'express';

function App() {
  var emission = new Emission();

  return (
      <html>
        <head>
        </head>
        <body>
      { emission.getNames() } 
        </body>
      </html>
  )
}

export default App;
