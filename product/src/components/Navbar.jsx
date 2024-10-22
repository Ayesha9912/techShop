import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <div>
        <div className='h-20 w-full bg-green-400 flex justify-center items-center'>
            <div className='w-[90%] justify-between items-center flex'>
                <Link to={'/'}>
            <h1 className='font-bold text-3xl '>TECHSHOP</h1>
                </Link>
            <Link to={'/cart'}>
            <h1 className='font-semibold text-2xl'>Cart Page</h1>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar