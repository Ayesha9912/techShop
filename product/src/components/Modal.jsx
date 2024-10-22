import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { RemoveModal } from '../Action/Action';
function Modal(){
    const dispatch = useDispatch()
    const selector = useSelector((state)=> state.Modal.status)
    console.log(selector, "modal Selector");
  return(

    <div className={`${selector ? "flex": "hidden"} fixed z-10 top-4 left-[40%] bg-white shadow-xl p-5 md:p-10 `}>
        <p className="text-green-600 text-md md:text-lg  font-bold">✅ Product has been successfully added to the cart!</p>
        <RxCross2 onClick={()=>{dispatch(RemoveModal())}}  className='absolute cursor-pointer right-3 top-2'/>
    </div>
  )
}

export default Modal