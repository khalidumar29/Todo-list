import React from "react";
import { FcTodoList } from "react-icons/fc";
import Modal from "./Modal";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  return (
    <div className='mx-[5%] mt-[25px]'>
      <div className='navbar bg-base-100 rounded py-2 my-3 shadow-lg'>
        <div className='flex-1 '>
          <Link
            to={"/"}
            href='##'
            className='btn btn-ghost normal-case text-xl'
          >
            <FcTodoList className='text-[30px] mr-2'></FcTodoList>
            todo List
          </Link>
        </div>
        <div className='flex-none mr-5 dropdown dropdown-end'>
          {user ? (
            <>
              <div className='avatar'>
                <div tabindex='0' className='w-16 rounded-full cursor-pointer'>
                  <img src='./avatar.jpg' alt='avatar' />
                </div>
              </div>
              <ul
                tabindex='0'
                class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link to={"#"}>Sing Out</Link>
                </li>
              </ul>
            </>
          ) : (
            <Link
              to={"/sing-up"}
              className='btn btn-outline btn-gray capitalize'
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
      {children}
      <Modal></Modal>
    </div>
  );
};

export default Navbar;
