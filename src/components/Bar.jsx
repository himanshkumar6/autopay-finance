import React from 'react'

const Bar = () => {
  return (
    <div className='text-white mb-20 flex justify-evenly items-center font-semibold lg:mx-96'>
      <button className='text-white bg-lime-500 py-1 px-4 rounded-md font-light transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        Explore App
      </button>
      <button className='text-white bg-cyan-500 py-1 px-4 rounded-md font-light transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        Checkout Demo
      </button>
    </div>
  )
}

export default Bar
