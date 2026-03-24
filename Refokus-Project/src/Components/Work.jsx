import React, { useState } from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img5 from "../assets/img5.jpg"
import img4 from "../assets/img4.jpg"

import {useScroll } from "framer-motion"


function Work() {

  const [images , setImages]= useState([
        {url: img1,top:"35%" , left:"50%", isActive:true},
        {url: img5,top:"44%" , left:"42%", isActive:false},
        {url: img2,top:"56%" , left:"48%", isActive:false},
        {url: img3 ,top:"44%" , left:"54%", isActive:false},
        {url: img4 ,top:"44%" , left:"51%", isActive:false},
    ])


    const {scrollYProgress} = useScroll()

    scrollYProgress.on("change",(data)=>{
      function imagesShow(arr){
        setImages(prev => (
          prev.map((item,index)=>(
            arr.indexOf(index) === -1 ?({...item, isActive:false}) : {...item , isActive:true}
          ))
        ))
      }


      switch(Math.floor(data*100)){
        case 0 :
          imagesShow([])
          break
          case 1 :
          imagesShow([0]);
          break
          case 2 :
          imagesShow([0,1]);
          break
          case 4 :
          imagesShow([0,1,2]);
          break
          case 6 :
          imagesShow([0,1,2,3]);
          break
          case 8 :
          imagesShow([0,1,2,3,4]);
          break
          case 9:
          imagesShow([0,1,2,3,4,5]);
          break
      }
    })
    
  return (
    <>
      <div className='w-full'>
        <div className='max-w-screen-xl mx-auto text-center relative'>
            <h1  className=' text-[25vw] font-medium tracking-tight select-none '>Work</h1>
            <div className='absolute w-full h-full   top-0'>
                {images.map((elem,index)=> (elem.isActive &&  <img key={index}  className='w-80 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]'  src={elem.url} style={{top:elem.top , left:elem.left}} alt="" />)                   
                )}
            </div> 
        </div>
      </div>
    </>
  )
}

export default Work
