import { useState } from 'react';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input.trim() !== '') {
      addTask(input);
      setInput('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter a task..."
      className="task-input"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default TaskInput;
