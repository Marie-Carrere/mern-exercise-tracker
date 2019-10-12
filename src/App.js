import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <br/>
    </Router>
    
  );
}

export default App;
