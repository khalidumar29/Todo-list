import React, { useState } from "react";
import { useProduct } from "../Contex/TodoProvider";

const TodoDetailsModal = ({ id }) => {
  const todos = useProduct();
  const todo = todos.data.find((todo) => todo._id === id);
  const [editMode, setEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(updatedTodo);
  };

  return (
    <>
      <input type='checkbox' id='my-modal-5' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <label
            htmlFor='my-modal-5'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          {editMode ? (
            <>
              <form id='form' onSubmit={handleSubmit}>
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
                    defaultValue={todo?.title}
                    placeholder='Type here'
                    className='input input-bordered w-full '
                    onChange={(e) =>
                      setUpdatedTodo((value) => ({
                        ...value,
                        title: e.target.value,
                      }))
                    }
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
                    onChange={(e) =>
                      setUpdatedTodo((value) => ({
                        ...value,
                        description: e.target.value,
                      }))
                    }
                    name='description'
                    required
                    defaultValue={todo?.description}
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
                    onChange={(e) =>
                      setUpdatedTodo((value) => ({
                        ...value,
                        due_date: e.target.value,
                      }))
                    }
                    required
                    defaultValue={todo?.due_date}
                    className='cursor-pointer'
                    type='date'
                    name='due_date'
                  />
                </div>
                <div className='flex items-center gap-4 mt-6 justify-end'>
                  <input
                    value={"close"}
                    className='btn btn-error btn-outline'
                    onClick={() => setEditMode(!editMode)}
                  />

                  <input
                    defaultValue={"Update"}
                    className='btn btn-outline btn-success'
                    type='submit'
                  />
                </div>
              </form>
            </>
          ) : (
            <>
              {" "}
              <h3 className='font-bold text-lg'>{todo?.title}</h3>
              <p className='py-4'>{todo?.description}</p>
              <p> Due Date {todo?.due_date}</p>
              <div className='modal-action'>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className='btn btn-success btn-outline capitalize '
                >
                  edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoDetailsModal;
