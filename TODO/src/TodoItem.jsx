function TodoItem({ todo, deleteTodo, toggleTodo }) {
  if (!todo) return null; 
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
