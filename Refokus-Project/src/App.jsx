import React from 'react'
import NavBar from './Components/NavBar'
import Work from './Components/Work'
import Infinite from './Components/Infinite'
import Products from './Components/Products'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
const scroll = new LocomotiveScroll();

  return (
    <div className=' bg-zinc-800 text-white'>
      <NavBar/>
      <Work/>
      <Infinite />
      <Products />
      <Cards />
      <Footer />
    </div>
  ) 
}

export default App
