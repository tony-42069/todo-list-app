import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '300px', margin: 'auto' }}>
      <h1>Todo List</h1>
      <div>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Enter a todo item"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginTop: '10px' }}>{todo}</li>
        ))}
      </ul>
      <p>Total todos: {todos.length}</p>
    </div>
  );
}

export default App;
