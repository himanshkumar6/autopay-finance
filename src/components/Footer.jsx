import React from 'react'

const Footer = () => {
  return (
    <div className='text-white bg-gradient-to-br from-gray-800 to-zinc-900 lg:mx-64 mx-4 rounded-md lg:px-10 px-6 py-8 flex flex-col md:flex-row items-start md:items-start justify-between my-20 gap-y-6 md:gap-y-0'>
      <div className='md:max-w-xl'>
        <h1 className='text-xl lg:text-4xl font-bold mb-3'>Connect with us to get you started ⚡</h1>
        <p className='text-sm lg:text-xl font-light'>
          We'll help you setup everything you need to accept recurring payments in crypto and grow your business anywhere on the planet.
        </p>
      </div>
      <div>
        <button className='text-sm lg:text-lg bg-lime-500 hover:bg-lime-600 transition-all rounded-md px-6 py-2 cursor-pointer font-semibold'>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Footer
