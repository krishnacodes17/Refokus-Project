import React from 'react'
import NavBar from './Components/NavBar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Infinite from './Components/Infinite'

function App() {
  return (
    <div className=' bg-zinc-800 text-white'>
      <NavBar/>
      <Work/>
      <Infinite />
    </div>
  ) 
}

export default App
