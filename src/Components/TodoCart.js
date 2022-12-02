import React from "react";

const TodoCart = () => {
  return (
    <div className='shadow-lg bg-base-200 p-3 rounded-sm'>
      <h1 className='font-bold text-[22px] text-slate-900'>khalid umar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid,
        ducimus vero recusandae inventore voluptatum! Tempore aut
      </p>
      <p
        className='mt-3 font-bold text-gray-700'
        htmlFor='todo-acitvity-option'
      >
        Update Your Task
      </p>
      <div className='mt-1 flex gap-2'>
        <select
          name='todo-acitvity-option'
          className='select select-bordered max-w-sm '
        >
          <option disabled selected>
            Todo
          </option>
          <option>In-progress</option>
          <option>Done</option>
        </select>

        <button className='btn btn-outline btn-ghost'>Update Task</button>
      </div>
    </div>
  );
};

export default TodoCart;
