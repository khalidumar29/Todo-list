import { useState } from "react";
import { useEffect } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://moont-tech-khalidumar29.vercel.app/todo")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);
  return [todos, setTodos];
};

export default useTodos;
