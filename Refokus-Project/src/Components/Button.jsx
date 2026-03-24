import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Stated"}) {
  return (
    <div className='max-w-38 min-w-31 px-3 py-2 flex items-center justify-between text-2xl cursor-pointer bg-zinc-100 text-black rounded-full bg-amber-50'>
      <span className='text-base font-medium'>{title}</span> <IoIosReturnRight />
    </div>
  )
}

export default Button
