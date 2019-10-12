import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExercise';
import ExercisesList from './components/ExercisesList';

function App() {
  return (
    <Router>
      <Navigation />
      <br/>
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' exact component={EditExercise} />
      <Route path='/create' exact component={CreateExercise} />
      <Route path='/user' exact component={CreateUser} />
    </Router>
    
  );
}

export default App;
