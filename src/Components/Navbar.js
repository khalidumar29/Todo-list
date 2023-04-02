import React from "react";
import { FcTodoList } from "react-icons/fc";
import Modal from "./Modal";

const Navbar = ({ children }) => {
  return (
    <div className='mx-[5%] mt-[25px]'>
      <div className='navbar bg-base-100 rounded py-2 my-3 shadow-lg'>
        <div className='flex-1 '>
          <a href='##' className='btn btn-ghost normal-case text-xl'>
            <FcTodoList className='text-[30px] mr-2'></FcTodoList>
            todo List
          </a>
        </div>
        <div className='flex-none mr-5'></div>
      </div>
      {children}
      <Modal></Modal>
    </div>
  );
};

export default Navbar;
