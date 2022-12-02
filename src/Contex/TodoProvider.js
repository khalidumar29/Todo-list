import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const TODO_CONTEX = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://moont-tech-khalidumar29.vercel.app/todo")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);

  return <TODO_CONTEX.Provider value={todos}>{children}</TODO_CONTEX.Provider>;
};

export const useProduct = () => {
  const context = useContext(TODO_CONTEX);
  return context;
};

export default TodoProvider;
