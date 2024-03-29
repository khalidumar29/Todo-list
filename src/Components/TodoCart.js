import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
const TodoCart = ({ todo, setTodoId }) => {
  const [taskState, setTaskState] = useState("todo");

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const UpdatedTodos = { activity: taskState };
    fetch(`https://moont-tech-khalidumar29.vercel.app/todo/${todo._id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedTodos),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Task Updated Successfully");
        }
      });
  };

  const handleDeleteTask = () => {
    const token = localStorage.getItem("token");

    fetch(`https://moont-tech-khalidumar29.vercel.app/todo/${todo._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.deletedCount) {
          toast.error(`${todo.title} deleted successfully`);
        }
      });
  };

  return (
    <div className='shadow-lg bg-base-100 p-3 rounded-sm mt-3'>
      <div className='flex justify-between items-center'>
        <label
          onClick={() => setTodoId(todo._id)}
          htmlFor='my-modal-5'
          className='cursor-pointer'
        >
          <h1 className='font-bold text-[22px] text-slate-900'>{todo.title}</h1>
        </label>
        <AiFillDelete
          onClick={handleDeleteTask}
          className='h-[24px] w-[24px] text-error cursor-pointer'
        ></AiFillDelete>
      </div>{" "}
      <p>{todo.description.split(" ").slice(0, 20).join(" ")}</p>
      {todo.due_date && <p>Due Date: {todo?.due_date}</p>}
      <p
        className='mt-3 font-bold text-gray-700'
        htmlFor='todo-acitvity-option'
      >
        Update Your Task
      </p>
      <form onSubmit={handleUpdateTask} className='mt-1 flex gap-2'>
        <select
          onChange={(e) => setTaskState(e.target.value)}
          name='taskUpdateOption'
          className='select select-bordered max-w-sm '
        >
          <option value={"todo"}>Todo</option>
          <option value={"in-progress"}>In-progress</option>
          <option value={"done"}>Done</option>
        </select>

        <input
          value={"Update Task"}
          type='submit'
          className='btn btn-outline btn-ghost'
        />
      </form>
    </div>
  );
};

export default TodoCart;
