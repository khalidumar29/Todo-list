import React, { useState } from "react";
import TodoCart from "../Components/TodoCart";
import { useProduct } from "../Contex/TodoProvider";
import { GrAdd } from "react-icons/gr";
import TodoDetailsModal from "../Components/TodoDetailsModal";
const Home = () => {
  const data = useProduct();
  const [todoId, setTodoId] = useState("");

  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className='grid grid-cols-3 h-screen gap-3'>
        <div>
          <div className='bg-base-200 text-center mb-3 py-1 rounded flex items-center justify-center'>
            <p>Todos </p>
            <label className='ml-4 cursor-pointer' htmlFor='add_todo_modal'>
              <GrAdd />
            </label>
          </div>
          {data.data
            .filter((todo) => todo.activity === "todo")
            ?.map((todo) => (
              <TodoCart
                setTodoId={setTodoId}
                key={todo._id}
                todo={todo}
              ></TodoCart>
            ))}
        </div>
        <div>
          <div className='bg-yellow-400 text-center mb-3 py-1 rounded'>
            in-progress
          </div>
          {data?.data
            .filter((todo) => todo.activity === "in-progress")
            ?.map((todo) => (
              <TodoCart
                setTodoId={setTodoId}
                key={todo._id}
                todo={todo}
              ></TodoCart>
            ))}
        </div>
        <div>
          <div className='bg-success text-center mb-3 py-1 rounded'>Done</div>
          {data?.data
            .filter((todo) => todo.activity === "done")
            ?.map((todo) => (
              <TodoCart
                setTodoId={setTodoId}
                key={todo._id}
                todo={todo}
              ></TodoCart>
            ))}
        </div>
        <TodoDetailsModal id={todoId} />
      </div>
    </>
  );
};

export default Home;
