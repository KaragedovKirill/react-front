import React from 'react';
import PropTypes from 'prop-types';

import './task.scss';

const Task = props => {
  return (
    <div
      className={`task ${props.completed ? 'task__completed' : ''}`}
      data-id={props.id}
      onClick={props.toggleCompleted}
    >
      {props.title}
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Task;
