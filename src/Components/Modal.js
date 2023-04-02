import React from "react";
import { toast } from "react-hot-toast";

const Modal = () => {
  const handleSubmitNewTodo = (e) => {
    e.preventDefault();
    const todo = {
      title: e.target.title.value,
      description: e.target.description.value,
      due_date: e.target.due_date.value,
      activity: "todo",
    };

    fetch("https://moont-tech-khalidumar29.vercel.app/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Task Added Successfully");
          document.getElementById("modalClose").click();
          document.getElementById("form").reset();
        }
      });
  };
  return (
    <>
      <input type='checkbox' id='add_todo_modal' className='modal-toggle' />
      <div className='modal justify-center'>
        <div className='modal-box relative'>
          <label
            id='modalClose'
            htmlFor='add_todo_modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form id='form' onSubmit={handleSubmitNewTodo}>
            <h1 className='text-[32px] text-primary text-center my-2'>
              Add Todo
            </h1>
            <div className='mt-3'>
              <label
                className='text-[22px] text-bold text-slate-900'
                htmlFor='title'
              >
                Title:
              </label>
              <br />
              <input
                name='title'
                type='text'
                required
                placeholder='Type here'
                className='input input-bordered w-full '
              />
            </div>
            <div className='mt-3'>
              <label
                className='text-[22px] text-bold text-slate-900'
                htmlFor='title'
              >
                Description:
              </label>
              <br />
              <textarea
                name='description'
                required
                className='textarea textarea-bordered w-full'
                placeholder='Description...'
              ></textarea>
            </div>
            <div className='mt-3'>
              <label
                className='text-[18px] text-bold text-slate-900'
                htmlFor='title'
              >
                Due Date:
              </label>
              <br />
              <input
                required
                className='cursor-pointer'
                type='date'
                name='due_date'
              />
            </div>
            <input
              value={"Add Todo"}
              className='btn btn-outline btn-success w-full mt-3'
              type='submit'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
