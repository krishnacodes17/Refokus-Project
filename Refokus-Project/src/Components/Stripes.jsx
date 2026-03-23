import React from 'react'
import Stripe from './Stripe'
import str1 from "../assets/str1.svg"
import str2 from "../assets/str2.svg"
import str3 from "../assets/str3.svg"
import str4 from "../assets/str4.svg"
import str5 from "../assets/str5.svg"
import str6 from "../assets/str6.svg"



function Stripes() {

    const data = [
        {url:str1, num:48},
        {url:str2 , num:2},
        {url:str3 , num:11},
        {url:str4 , num:48},
        {url:str5 , num:2},
        {url:str6 , num:11},
        {url:str6 , num:11},
        {url:str4 , num:48},
        {url:str5 , num:2},
        {url:str6 , num:11},

    ]

  return (
    <div className='flex  items-center mt-20 pb-13'>
      {data.map((ele,index)=> <Stripe val={ele}/>)}
    </div>
  )
}

export default Stripes
