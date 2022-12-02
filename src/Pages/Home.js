import React from "react";
import TodoCart from "../Components/TodoCart";

const Home = () => {
  return (
    <div className='grid grid-cols-3 h-screen'>
      <div>
        <div className='bg-base-200 text-center mb-3 py-1 rounded'>Todo</div>
        <TodoCart></TodoCart>
      </div>
      <div>
        <div className='bg-yellow-400 text-center mb-3 py-1 rounded'>
          in-progress
        </div>
      </div>
      <div>
        <div className='bg-success text-center mb-3 py-1 rounded'>Done</div>
      </div>
    </div>
  );
};

export default Home;
