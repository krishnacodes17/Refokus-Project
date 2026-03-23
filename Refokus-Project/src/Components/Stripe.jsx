import React from 'react'

function Stripe({val}) {
  return (
    <div className='max-w-[28.66%] px-4 py-5 h-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center '>
      <span className='w-22 text-white '><img src={val.url} alt="" /></span>
      <span className='text-zinc-300 ml-10'>{val.num}</span>
    </div>
  )
}

export default Stripe
