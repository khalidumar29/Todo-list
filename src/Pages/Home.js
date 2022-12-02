import React from "react";
import TodoCart from "../Components/TodoCart";
import { useProduct } from "../Contex/TodoProvider";

const Home = () => {
  const data = useProduct();
  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className='grid grid-cols-3 h-screen gap-3'>
        <div>
          <div className='bg-base-200 text-center mb-3 py-1 rounded'>Todo</div>
          {data.data
            .filter((todo) => todo.activity === "todo")
            ?.map((todo) => (
              <TodoCart key={todo._id} todo={todo}></TodoCart>
            ))}
        </div>
        <div>
          <div className='bg-yellow-400 text-center mb-3 py-1 rounded'>
            in-progress
          </div>
          {data?.data
            .filter((todo) => todo.activity === "in-progress")
            ?.map((todo) => (
              <TodoCart key={todo._id} todo={todo}></TodoCart>
            ))}
        </div>
        <div>
          <div className='bg-success text-center mb-3 py-1 rounded'>Done</div>
          {data?.data
            .filter((todo) => todo.activity === "done")
            ?.map((todo) => (
              <TodoCart key={todo._id} todo={todo}></TodoCart>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
