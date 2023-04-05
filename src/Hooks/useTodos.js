import { useState, useEffect } from "react";
import auth from "../firebase.init";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const idToken = await auth.currentUser?.getIdToken(); // get the user's ID token

      const response = await fetch(
        "https://moont-tech-khalidumar29.vercel.app/todo",
        {
          headers: {
            authorization: `Bearer ${idToken}`, // include the ID token in the Authorization header
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTodos(data);
    };

    fetchTodos().catch((error) => console.error(error));
  }, []);

  return [todos, setTodos];
};

export default useTodos;
