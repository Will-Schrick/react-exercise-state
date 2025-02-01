import { useState } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]); // Add new task as an object
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, removeTask, toggleTaskCompletion };
}

export { useTasks }; // Export at the end
