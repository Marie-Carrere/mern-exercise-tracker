import React, { Component }from 'react';
import Exercise from './Exercise';
import axios from 'axios';

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      exercises: []
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/exercices/')
    .then(res => {
      this.setState({
        exercises: res.data
      })
    })
    .catch((err) => console.log(err));
  }
  
  deleteExercice = id => {
    axios.delete(`http://localhost:5000/exercices/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
      
    this.setState({
      exercises: this.state.exercises.filter(element => element._id !== id)
    })
  }
  
  exerciseList = () => {
    return this.state.exercises.map(currentExercise => (
      <Exercise  key={ currentExercise._id } exercise={ currentExercise } deleteExercice={ this.deleteExercice } />
    ))
  }
  
  render() {
    return(
      <div> 
        <h3>Logged Exercises</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
            <tbody>
              { this.exerciseList() }
            </tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList