import React from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.jpg"



function Work() {
    const images = [
        {url: img1,top:"50%" , left:"50%", isActive:true},
        {url: img2,top:"56%" , left:"44%", isActive:false},
        {url: img2,top:"54%" , left:"48%", isActive:false},
        {url: img3 ,top:"45%" , left:"56%", isActive:false},
        {url: img4 ,top:"51%" , left:"51%", isActive:false},
    ]
  return (
    <>
      <div className='w-full  '>
        <div className='max-w-4xl mx-auto text-center relative'>
            <h1 className='text-[25vw] font-medium tracking-tight select-none '>Work</h1>
            <div className='absolute w-full h-full  top-0'>
                {images.map((elem,index)=> (elem.isActive &&  <img className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]'  src={elem.url} style={{top:elem.top , left:elem.left}} alt="" />)
                   
                )}
            </div>
        </div>
      </div>
    </>
  )
}

export default Work
