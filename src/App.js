// src/App.js
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
};

export default App;
