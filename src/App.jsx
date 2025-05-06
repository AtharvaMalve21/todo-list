import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TodoForm from "./components/TodoForm";
import { useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

const App = () => {
  const { todoItems, setTodoItems } = useContext(TodoContext);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
    if (todos && todos.length > 0) {
      setTodoItems(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<TodoForm />} />
    </Routes>
  );
};

export default App;
