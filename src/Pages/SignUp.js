import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-hot-toast";
const SignUp = () => {
  const [passwordError, setPasswordError] = useState(true);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const [users, setUsers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const ConfirmPassword = e.target.ConfirmPassword.value;
    if (password === ConfirmPassword) {
      createUserWithEmailAndPassword(email, password);
      if ((email, password)) {
        setUsers({ email, password });
      }
      user && navigate("/");
    } else if (password !== ConfirmPassword) {
      setPasswordError("your password & confirm password dosen't match");
    }
  };

  if (user && users) {
    fetch("https://moont-tech-khalidumar29.vercel.app/signup", {
      method: "POST",
      body: JSON.stringify(users),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  if (error) {
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      toast.error("email already in use", { id: 1 });
    }
  }

  return (
    <div className='min-h-[85.9vh] flex items-center justify-center bg-gradient-to-r from-teal-300 to-gray-400'>
      <div className='max-w-md w-full p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-2xl font-medium text-gray-800 mb-4'>Sign Up</h1>
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
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-medium mb-2'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='ConfirmPassword'
              name='ConfirmPassword'
              placeholder='Enter Confirm Password'
              required
              className='w-full p-2 border border-gray-400 rounded-md'
            />
            <p className='text-error'>{passwordError}</p>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'
          >
            {loading ? "..." : "Sign Up"}
          </button>
          <p className='capitalize text-center mt-2 text-black-300 text-[14px]'>
            if you alreay have an account please{" "}
            <Link
              className='text-primary underline cursor-pointer'
              to={"/log-in"}
            >
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
