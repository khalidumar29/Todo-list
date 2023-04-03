import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className='min-h-[85.9vh] flex items-center justify-center bg-gradient-to-r from-teal-300 to-gray-400'>
      <div className='max-w-md w-full p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-2xl font-medium text-gray-800 mb-4'>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-medium mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              placeholder='Enter Email'
              className='w-full p-2 border border-gray-400 rounded-md'
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-medium mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter Password'
              required
              className='w-full p-2 border border-gray-400 rounded-md'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'
          >
            Log In
          </button>
          <p className='capitalize text-center mt-2 text-black-300 text-[14px]'>
            if you don't have any account create an{" "}
            <Link
              className='capitalize text-primary underline cursor-pointer'
              to={"/sing-up"}
            >
              account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
