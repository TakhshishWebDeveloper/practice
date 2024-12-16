// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, removeTodo, toggleTodo, editTodo, clearCompleted } from './redux/todoSlice.js';
import './App.css';
import Main from './RtkQuery/Main.jsx';

const App = () => {
  // const [input, setInput] = useState('');
  // const [editText, setEditText] = useState('');
  // const [isEditing, setIsEditing] = useState(false);
  // const [editId, setEditId] = useState(null);

  // const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.todos);

  // const handleAddTodo = () => {
  //   if (input.trim()) {
  //     dispatch(addTodo(input));
  //     setInput('');
  //   }
  // };

  // const handleRemoveTodo = (id) => {
  //   dispatch(removeTodo(id));
  // };

  // const handleToggleTodo = (id) => {
  //   dispatch(toggleTodo(id));
  // };

  // const handleEditTodo = () => {
  //   if (editText.trim()) {
  //     dispatch(editTodo({ id: editId, newText: editText }));
  //     setIsEditing(false);
  //     setEditText('');
  //   }
  // };

  // const handleClearCompleted = () => {
  //   dispatch(clearCompleted());
  // };

  // const handleStartEdit = (id, text) => {
  //   setEditId(id);
  //   setEditText(text);
  //   setIsEditing(true);
  // };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {/* <div className="input-container">
        <input
          type="text"
          value={isEditing ? editText : input}
          onChange={(e) => (isEditing ? setEditText(e.target.value) : setInput(e.target.value))}
          placeholder="Enter a new task"
        />
        <button onClick={isEditing ? handleEditTodo : handleAddTodo}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleStartEdit(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear Completed
      </button> */}
      <Main />
    </div>
  );
};

export default App;
