import React from 'react'
import { products } from '../ProductArray'
import { useState } from 'react';
import ToolKit from './toolkit'
import {useDispatch} from 'react-redux'
import { AddtoCart } from '../Action/Action';
import Navbar from './Navbar';
import Modal from './Modal';

function Mainpage(){
    const [hovered, sethovered] = useState({})
    const handleMouseIn = (index)=>{
        sethovered((prevstate)=>({...prevstate,[index]: true}))
    }
    const handleMouseout = (index)=>{
        sethovered((prevstate)=>({...prevstate,[index]: false}))
    }
    const dispatch = useDispatch()
    return(
        <div>
            <Navbar/>
            <Modal/>
            <div className='w-full p-5  h-auto flex flex-col items-center'>
                <h1 className='text-5xl font-bold mt-5 text-center underline mb-10'>SHOP NOW 50% OFF</h1>
                {products && <div className='flex flex-wrap justify-center items-center p-5 md:p-20 gap-x-20 gap-y-10'>
                    {products.map((ele, index) =>{
                        const isHovered = hovered[index]
                        return (
                            <div key={index}>
                                
                                <div className='w-[350px] cursor-pointer rounded-lg shadow-lg flex flex-col items-center'>
                                    <div className='w-full'>
                                        <div className='overflow-hidden' onMouseOver={()=>handleMouseIn(index)}
                                        onMouseOut={()=>handleMouseout(index)}>
                                        {isHovered ? (
                                        <div className='relative'>
                                            <div className='absolute p-2 flex justify-center items-center rounded-full border shadow-2xl shadow-slate-400 top-2 z-10 right-5'>
                                                <ToolKit/>
                                            </div>
                                            <img src={ele.imghover} alt={ele.name}/>
                                        </div>
                                        ):(
                                        <img src={ele.img} alt={ele.name}/>
                                        )}
                                        </div>
                                        <h1 className='text-2xl ml-5 mt-5'>{ele.name}</h1>
                                        <p className='ml-5 mt-5 font-bold text-xl mb-10'>Price:{ele.price}$</p>
                                        <button onClick={()=>{dispatch(AddtoCart(ele.id, ele.price, ele.name, ele.imghover))}}  className='bg-green-500 px-3 py-2 ml-5 mb-5 rounded-lg text-white font-bold'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Mainpage