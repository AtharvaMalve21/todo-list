import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const navigate = useNavigate();

  const { setTodoItems } = useContext(TodoContext);

  const [todoDetails, setTodoDetails] = useState({
    id: "",
    title: "",
    description: "",
    createdAt: "",
  });

  const changeHandler = (e) => {
    let { name, value } = e.target;

    setTodoDetails((prevTodoDetails) => {
      return {
        ...prevTodoDetails,
        [name]: value,
      };
    });
  };

  const addTodos = (e) => {
    e.preventDefault();
    setTodoItems((prevTodoItems) => {
      return [
        ...prevTodoItems,
        {
          id: Date.now(),
          title: todoDetails.title,
          description: todoDetails.description,
          createdAt: todoDetails.createdAt,
        },
      ];
    });
    setTodoDetails({
      title: "",
      description: "",
      createdAt: "",
    });
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={addTodos} className="todo-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={todoDetails.title}
            onChange={changeHandler}
            placeholder="Enter a Todo..."
            id="title"
            name="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={todoDetails.description}
            onChange={changeHandler}
            id="description"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Due Date</label>
          <input
            type="date"
            value={todoDetails.createdAt}
            id="date"
            onChange={changeHandler}
            name="createdAt"
          />
        </div>
        <button className="submit-btn">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
