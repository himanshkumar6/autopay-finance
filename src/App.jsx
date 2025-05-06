import React from 'react'
import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'
import Laptop from './components/Laptop'
import Bar from './components/Bar'
import Feature from './components/Feature'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='items-center justify-center grid grid-rows-1 font-light '><button className='text-white bg-red-400 px-4 py-1.5 rounded-md'>Find us on Product Hunt</button></div>
      <HeroComponent></HeroComponent>
      <Laptop></Laptop>
      <Bar></Bar>
      <Feature></Feature>
      <Footer></Footer>
    </div>
  )
}

export default App