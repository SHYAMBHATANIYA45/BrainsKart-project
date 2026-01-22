import React from 'react'
import "./OrderSuccess.css"
export default function OrderSuccess() {
  return (
        <>
        <h2 className='order-success text-center p-2 fs-1 fw-normal text-success'>Order Sucess</h2>
        <div className=' bg-success rounded-circle success'>
            
                <i class="fa-solid fa-check text-light mt-5 pt-3 w-75"></i>
               </div>
               <div className='text-center mt-3 ms-2'>
                 <button className='btn btn-md  btn-success text-center order-button'>Done</button>
               </div>
               
</>
  )
}
