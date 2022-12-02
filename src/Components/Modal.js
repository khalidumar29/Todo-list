import React from "react";

const Modal = () => {
  const handleSubmitNewTodo = (e) => {
    e.preventDefault();
    console.log("new todo submitted");
  };
  return (
    <>
      <input type='checkbox' id='add_todo_modal' className='modal-toggle' />
      <div className='modal justify-center'>
        <div className='modal-box relative'>
          <label
            htmlFor='add_todo_modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form onSubmit={handleSubmitNewTodo}>
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
                className='textarea textarea-bordered w-full'
                placeholder='Description...'
              ></textarea>
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
