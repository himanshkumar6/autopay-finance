import React, { useState } from 'react';
import { MdAutoMode } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='text-white flex md:justify-around justify-between my-10 mb-16 mx-5 relative z-50'>
      {/* Logo */}
      <div className='text-2xl font-bold flex gap-2'>
        <MdAutoMode size={35} />
        <div><span className='text-lime-600'>Auto</span>Pay</div>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-10 font-light justify-center items-center'>
        {['Home', 'Contact Us', 'Merchant App', 'Checkout Demo'].map((item) => (
          <li key={item} className="relative cursor-pointer group">
            <span className={`transition-colors duration-300 text-sm ${item === 'Home' ? 'text-primary' : ''}`}>{item}</span>
            <span className="absolute left-1/2 bottom-0 w-4 h-[2px] bg-primary -translate-x-1/2 transition-all duration-300 group-hover:w-6 group-hover:bg-green-400"></span>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center cursor-pointer" onClick={() => setOpen(true)}>
        <IoReorderThree size={30} />
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/80 backdrop-blur-md text-white transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)} className="text-3xl font-bold">✕</button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl font-light">
          {['Home', 'Contact Us', 'Merchant App', 'Checkout Demo'].map((item) => (
            <li key={item} onClick={() => setOpen(false)} className="hover:text-lime-500 transition duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
