import React from "react";

const TodoItems = ({ todoItems,deleteTodo }) => {
  return (
    <>
      {todoItems.map((todo) => (
        <div className="todos" key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p className="date">Created At :- {todo.createdAt}</p>
          <button onClick={() => {
            deleteTodo(todo.id)
          }} className="delete">Delete</button>
        </div>
      ))}
    </>
  );
};

export default TodoItems;
