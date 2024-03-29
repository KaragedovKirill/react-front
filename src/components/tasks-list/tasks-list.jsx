import React from 'react';

import Task from '../task/task';
import Button from '../button';
import TaskForm from '../task-form';

const tasks = [
  { id: 1, title: 'React', completed: true },
  { id: 2, title: 'Props', completed: true },
  { id: 3, title: 'State', completed: false },
  { id: 4, title: 'Lifecycle', completed: false }
];

class TasksList extends React.Component {
  state = { tasks };

  filterActive = () => {
    const activeTasks = this.state.tasks.filter(task => !task.completed);
    this.setState({ tasks: activeTasks });
  };

  toggleCompleted = event => {
    const { tasks } = this.state;
    const id = Number(event.target.dataset.id);

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    this.setState({ tasks: updatedTasks });
  };

  addTask = title => {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        { id: Math.random(), title, completed: false }
      ]
    }));
  };

  render() {
    return (
      <div className='tasks-list'>
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.map(({ title, completed, id }) => (
          <Task
            title={title}
            completed={completed}
            toggleCompleted={this.toggleCompleted}
            id={id}
            key={id}
          />
        ))}
        <Button label='Выполненные' onClick={this.filterActive} />
      </div>
    );
  }
}

export default TasksList;
