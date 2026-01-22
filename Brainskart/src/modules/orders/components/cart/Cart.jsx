import React, { useState } from 'react'
import "./cart.css"
import { useNavigate } from 'react-router'
export default function Cart() {
    const [qty, setQty] = useState({
        qty: 0
    })

    let navigate = useNavigate()
    let increment = (event) => {
        setQty((prev) => ({
            qty: prev.qty + 1
        })



        )
    }


    let decrement = () => {
        setQty(prev => ({
            qty: prev.qty <= 0 ? 0 : prev.qty - 1
        }));
    };


    let checkout = () => {
        navigate("/Checkout")
    }
    return (<>
        <div className="CheckOut-list">
            <h3 className="px-4 pt-2"> <i className="fa-solid fa-cart-shopping"></i>All orders </h3>
        </div>
        <div className='container'>
            <div className="row">
                <div className="col-8 mt-5">
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
                                        <td >
                                            url
                                        </td>
                                        <td>
                                            mens
                                        </td>
                                        <td><i className="fa-solid fa-plus" onClick={increment}></i>{qty.qty}
                                            <i className="fa-solid fa-minus" onClick={decrement}></i>
                                        </td>
                                        <td>
                                            34
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

                                        <td>Total:</td>

                                    </tr>
                                    <tr>

                                        <td>Tax:</td>

                                    </tr>
                                    <tr>

                                        <td>Grand Total:</td>

                                    </tr>
                                </tbody>


                            </table>
                            <div className="row">
                                <div className="col-5"><button className='btn btn-mm btn-success ms-2' onClick={checkout}>Checkout</button></div>
                                <div className="col"><button className='btn btn-mm btn-info ms-2'>Shop More</button></div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    </>
    )
}
