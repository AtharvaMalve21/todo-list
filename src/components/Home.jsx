import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import TodoItems from "./TodoItems";
import { TodoContext } from "../context/TodoContext";

const Home = () => {
  const { todoItems, setTodoItems } = useContext(TodoContext);

  const deleteTodo = (id) => {
    var newTodo = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodo);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="todo-container">
        <TodoItems deleteTodo={deleteTodo} todoItems={todoItems} />
      </div>
      {todoItems.length === 0 && (
        <h2 className="message">No Items To Display!</h2>
      )}
    </div>
  );
};

export default Home;
