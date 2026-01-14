import { useState, useEffect } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
<TodoForm addTodo={addTodo} />
<TodoList
  todos={todos}
  deleteTodo={deleteTodo}
  toggleTodo={toggleTodo}
/>


    </div>
  );
}

export default App;
