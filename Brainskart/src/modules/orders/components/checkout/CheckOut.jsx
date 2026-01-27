import React, { use, useState } from 'react'
import "./checkout.css"
import { Link, useLocation, useNavigate } from 'react-router'
export default function CheckOut() {
const[creditPayment,setCreditPayment] = useState(0);


  let navigate = useNavigate()
    const { state } = useLocation();

    const qty = state?.quantity || 0;
    const price = state?.price || 0

    let handlePayment = () => {
        navigate("/CreditCard_details")
    }
    let handleCredit=()=>{
     setCreditPayment(1)
    
}
    return (
        <>

            <div className="CheckOut-list">
                <h3 className="px-4 pt-2"> <i className="fa-solid fa-cart-shopping"></i>All orders </h3>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col mt-3">
                        <div className="card checkout-card1">
                            <div className="card-header checkout-header">
                                <h3 className=''>Billing Address</h3>
                            </div>
                            <div className="card-body ">
                                <div>
                                    <form className='form-control checkout'>

                                        <label htmlFor="HNO">HNO:
                                            <input type='text' id='HNO' placeholder='' className=' m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="HNO">Street:
                                            <input type='text' id='HNO' className='m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="HNO">Landmark:
                                            <input type='text' id='HNO' placeholder='' className=' m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="HNO">City:
                                            <input type='text' id='HNO' placeholder='' className=' m-2 checkout-input'></input>
                                        </label>

                                        <label htmlFor="HNO">State:
                                            <input type='text' id='HNO' placeholder='' className=' m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="HNO">Country:
                                            <input type='text' id='HNO' placeholder='' className=' m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="HNO">PinCode:
                                            <input type='text' id='HNO' placeholder='' className=' m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="HNO">Mobile:
                                            <input type='text' id='HNO' placeholder='sbko alg alg id class deni he' className=' m-2 checkout-input'></input>
                                        </label>
                                    </form>
                                </div></div>
                        </div>



                     
                        <div className="card mt-2">
                            <div className="card-header cart-Items">
                                <h3 className=''>  Payment Mode</h3>
                            </div>
                            <div className="card-body">

                                <input type='radio' id='cash-on-delivery' name='payment-method' className='fs-6 mt-2' />
                                <label htmlFor='cash-on-delivery' className='fs-6 ms-2'>Cash on Delivery</label><br />


                              <input type='radio' id='other-method'  className="" name='payment-method' onChange={handleCredit} />
                                <label htmlFor='other-method' className='ms-2' >Credit card Payment</label>
                            </div>
                        </div>
                    </div>


                    <div className="col mt-3">        

                        <div className="card">
                            <div className="card-header cart-Items">
                                <h3 className=''>Your Cart</h3>
                            </div>
                            <div className="card-body">
                                <table className='table border cart-table'>
                                    <tbody>
                                        <tr className=''>
                                            <td className='text-center'>
                                                <img src='.\src\assets\image3.png' width={100} height={130} />
                                            </td>
                                            <td>
                                                <p className='fs-6'> Mens fit shirt</p>
                                                <p className='fs-6'>&#x20B9;{state?.price}</p>
                                                <p className='fs-6'>Qty: {state?.quantity}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>
                                                <img src='.\src\assets\image3.png' width={100} height={130}  />
                                            </td>
                                            <td>
                                                <p className='fs-6'> Mens fit shirt</p>
                                                <p className='fs-6'>&#x20B9;{state?.price}</p>
                                                <p className='fs-6'>Qty: {state?.quantity}</p>
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>
                                <table className='table border cart-table'>
                                    <tbody>
                                        <tr><td id='billing'>
                                            Total :&#x20B9; {state?.quantity*state?.price}
                                        </td></tr>
                                        <tr><td id='billing'>
                                            Tax(40%) :&#x20B9; {0.4*state?.quantity*state?.price}
                                        </td></tr>
                                        <tr><td id='billing'>
                                            Grand Total :&#x20B9;{0.4*state?.quantity*state?.price+state?.quantity*state?.price}
                                        </td></tr>
                                    </tbody>
                                </table>
                             {
                                <button className='btn btn-success form-control checkout-button' onClick={handlePayment} >Pay now &#x20B9; {0.4*state?.quantity*state?.price+state?.quantity*state?.price}</button>
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
