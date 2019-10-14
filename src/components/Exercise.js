import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      {/* //TODO: style as a button} */}
      <Link to={`/edit/${props.exercise._id}`}>Edit</Link> | <a href='#' onCLick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
    </td>
  </tr>
)

export default Exercise;
