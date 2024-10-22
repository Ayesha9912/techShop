import React, { useState } from 'react'
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

function ToolKit(){
    let toolkit = [
        {name: "cart", icons: <BsCart/> , line: "cart"},
        {name: "heart", icons: <CiHeart/> , line: "Wishlist"},
        {name: "view", icons: <FaEye/> , line: "view"},
    ]
    const [hoverd, sethoverd] = useState(null)

  return (
    <div>
        {toolkit.map((item ,index)=>{
            return(
                <div className='relative gap-y-2 flex flex-col justify-center items-center'

                key={index}
                onMouseEnter={()=>sethoverd(item.name)}
                onMouseLeave={()=> sethoverd(null)}
                >
                     <div className='size-10 flex justify-center items-center'>{item.icons}</div>
                    {hoverd === item.name &&
                    <div className='bg-black rounded-sm py-2 px-5 text-white flex justify-center items-center absolute right-[40px] top-[10%]'>{item.line}</div>
                    }
                </div>
            )
        })}


    </div>
  )
}

export default ToolKit