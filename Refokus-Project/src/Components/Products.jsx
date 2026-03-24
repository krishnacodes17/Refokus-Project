import React from 'react'
import Product from './Product'

function Products() {

    let products = [
        {
            title:"Arqitel",
            description: "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and story telling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
            live:true,
            case:true
        },
         {
            title:"Meridian",
            description: "The first Visibility Engine that gets your brand ranked #1 by AI. In a nutshell, Meridian helps brands see what AI is saying about them, uncover opportunities to improve, and take action before anyone else.We worked with Meridian to build their brand from the ground up starting with strategy, " ,
            live:true,
            case:false
        },
         {
            title:"Himdall Power",
            description: "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and story telling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
            live:true,
            case:true
        },
         {
            title:"cula",
            description: "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and story telling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
            live:true,
            case:true
        },
         {
            title:"Layout Land",
            description: "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and story telling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
            live:true,
            case:false
        },
         
    ]


  return (
    <div>
      {products.map((val,index)=> <Product key={index} val={val} />)}
    </div>
  )
}

export default Products
