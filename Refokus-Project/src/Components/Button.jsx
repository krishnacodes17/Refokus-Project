import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className='min-w-32 px-3 py-1 flex items-center justify-between text-2xl cursor-pointer bg-zinc-100 text-black rounded-full bg-amber-50'>
      <span className='text-sm font-medium'>Get Stated</span> <IoIosReturnRight />
    </div>
  )
}

export default Button
