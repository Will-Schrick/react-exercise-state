import { useState } from 'react';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      addTask(input);
      setInput(''); // Clear input box
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
