import React from 'react'
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus, Remove } from '../Action/Action';


function Cart() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.Reducer.cart)
    console.log(selector, "selector");
    return (
        <div>
            <Navbar />
            <div>
                <ul>
                    {selector.length === 0 ? (
                        <li className='font-semibold text-center text-xl mt-5'>No Product in the cart</li>
                    ):(
                    selector.map((item, index) => {
                        return (
                            <li key={index} className='h-30 p-3 md:p-0 w-full border md:flex  items-center'>
                                <img src={item.img} alt={item.name}
                                    className='w-[100%] md:w-[20%] h-[100%]'
                                />
                                <div className='flex flex-col gap-y-3 '>
                                    <h1 className='font-bold text-lg md:text-2xl '>{item.name}</h1>
                                    <h1 className='font-bold text-lg md:text-2xl'>Price: $<span className='font-normal'>{item.price}</span> </h1>
                                    <div className='flex gap-x-2 items-center'>
                                        <button onClick={() => { dispatch(Plus(item.id)) }} className='size-10 rounded-full bg-green-400 flex justify-center items-center text-white cursor-pointer'>+</button>
                                        <h1 className='font-semibold text-xl'>{item.quantity}</h1>
                                        <button onClick={() => { dispatch(Minus(item.id)) }} className='size-10 rounded-full bg-red-400 flex justify-center items-center text-white cursor-pointer'>-</button>
                                    </div>
                                    <h1 className='font-bold text-lg md:text-2xl'>TotalPrice: $ <span className='font-normal'>{item.totalprice}</span> </h1>
                                    <button onClick={() => { dispatch(Remove(item.id)) }} className='bg-red-500 rounded-lg py-2 px-4 text-white'>Remove</button>
                                </div>
                            </li>
                        )
                    })
                )}

                </ul>
            </div>

        </div>
    )
}

export default Cart