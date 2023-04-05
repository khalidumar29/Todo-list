import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const TODO_CONTEX = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("https://moont-tech-khalidumar29.vercel.app/todo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, [token, todos]);

  return <TODO_CONTEX.Provider value={todos}>{children}</TODO_CONTEX.Provider>;
};

export const useProduct = () => {
  const context = useContext(TODO_CONTEX);
  return context;
};

export default TodoProvider;
