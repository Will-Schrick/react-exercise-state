import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import '../styles/App.css';
import TaskInput from '../components/TaskInput';
import { useTasks } from '../hooks/TrackTasks';
import '../styles/TaskList.css';

function App() {
  const { tasks, addTask, removeTask, toggleTaskCompletion } = useTasks();

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className={task.completed ? 'completed-task' : ''}>
              {task.text}
            </span>
            <input
              type="radio"
              className="radio-button"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <button onClick={() => removeTask(index)} className="delete-button">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
