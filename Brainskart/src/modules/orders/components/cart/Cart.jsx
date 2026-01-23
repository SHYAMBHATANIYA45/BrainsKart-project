import React, { useState } from 'react'
import "./cart.css"
import { useNavigate } from 'react-router'
import product from '../../../product/components/product'

export default function Cart() {
    const [qty, setQty] = useState({
        quantity: 0
       
    })

    let navigate = useNavigate()
    let increment = (event) => {
        setQty((prev) => ({
            quantity: prev.quantity + 1,
            
        })



        )
    }


    let decrement = () => {
        setQty(prev => ({
            quantity: prev.quantity <= 0 ? 0 : prev.quantity - 1
        }));
    };


    let checkout = (e,item) => {
    navigate("/Checkout", { state: {
         quantity: qty.quantity,
         price: item.price
     } });
}
    return (
    <>
        <div className="CheckOut-list">
            <h3 className="px-4 pt-2"> <i className="fa-solid fa-cart-shopping"></i>All orders </h3>
        </div>
        <div className='container'>
            <div className="row">
                 { product.Cart.map((item,index)=>{
                                return(
                                    <>
                <div className="col-8 mt-5" key={index}>
                    <div className="card">
                        <div className="card-header cart-Items">
                            <h3 className=''>Your Cart Items</h3>
                        </div>
                        <div className="card-body">
                           
                                      <table className='table border text-center cart-table'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='border-top mt-3'>
                                    <tr>
                                        <td>
                                           <img src={item.image} alt="kids" width={60} height={70} />
                                        </td>
                                        <td>
                                      {item.name}
                                        </td>
                                        <td>
                                            <i className="fa-solid fa-plus" onClick={increment}></i>{qty.quantity}
                                            <i className="fa-solid fa-minus" onClick={decrement}></i>
                                        </td>
                                        <td>
                                          {item.price*qty.quantity}
                                        </td>

                                        <td>
                                            <button type='submit' className='cart-delete'>Delete</button>
                                        </td>

                                    </tr>
                                </tbody>
                                </table>
                        </div>

                    </div>
                </div>


                <div className="col mt-5">

                    <div className="card">
                        <div className="card-header cart-Items">
                            <h3 className=''>Your Cart Items</h3>
                        </div>
                        <div className="card-body">
                            <table className='table border cart-table'>

                                <tbody className='border-top mt-3'>

                                    <tr>

                                        <td>Total: {qty.quantity*item.price}</td>

                                    </tr>
                                    <tr>

                                        <td>Tax(40%): {0.4*qty.quantity*item.price} </td>

                                    </tr>
                                    <tr>

                                        <td>Grand Total: {0.4*qty.quantity*item.price+qty.quantity*item.price} </td>

                                    </tr>
                                </tbody>


                            </table>
                            <div className="row">
                                <div className="col-5"><button className='btn btn-mm btn-success ms-2' onClick={(e)=>checkout(e,item)}>Checkout</button></div>
                                <div className="col"><button className='btn btn-mm btn-info ms-2'>Shop More</button></div>
                            </div>
                        </div>

                    </div>



                </div>
                </>
                   )})}
            </div>
        </div>
    </>
    )
}
