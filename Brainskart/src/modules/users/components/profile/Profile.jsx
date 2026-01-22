import React from 'react'
import "./Profile.css"
export default function Profile() {
    return (
        <>

            <div className="User-navbar">
                <h3 className="px-4 pt-2"> <i className="fa-solid fa-user"></i> Your profile</h3>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-4">
                      <img src=".\src\assets\image5.png" width={200} height={200} className='rounded-circle m-5'/>
                    </div>
                    <div className="col-7">

                        <div className="card mt-3">
                            <div className="card-header profile-header"><h3>Your Information</h3></div>
                            <div className="card-body">
                                <table className='table border cart-table'>
                                    <tbody>
                                        <tr><td id='billing'>
                                            Total : 678
                                        </td></tr>
                                        <tr><td id='billing'>
                                            Tax : 678
                                        </td></tr>
                                        <tr><td id='billing'>
                                            Grand Total : 678
                                        </td></tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-header d-flex checkout-header">
                                <h3 className=''>Billing Address</h3>

                                <div className=" form-check form-switch ms-5 mt-2">
                                    <input className="form-check-input position" type="checkbox" id="flexSwitchCheckDefault" role="switch" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Address</label>
                                </div>

                            </div>
                            <div className="card-body">
                                <div>
                                    <form className='form-control checkout'>

                                        <label htmlFor="user">HNO:
                                            <input type='text' id='user' placeholder='' className=' m-2 user-input'></input>
                                        </label>
                                        <label htmlFor="user">Street:
                                            <input type='text' id='user' className='m-2 checkout-input'></input>
                                        </label>
                                        <label htmlFor="user">Landmark:
                                            <input type='text' id='user' placeholder='' className=' m-2 user-input'></input>
                                        </label>
                                        <label htmlFor="user">City:
                                            <input type='text' id='user' placeholder='' className=' m-2 user-input'></input>
                                        </label>

                                        <label htmlFor="user">State:
                                            <input type='text' id='user' placeholder='' className=' m-2 user-input'></input>
                                        </label>
                                        <label htmlFor="user">Country:
                                            <input type='text' id='user' placeholder='' className=' m-2 user-input'></input>
                                        </label>
                                        <label htmlFor="user">PinCode:
                                            <input type='text' id='user' placeholder='' className=' m-2 user-input'></input>
                                        </label>
                                        <label htmlFor="user">Mobile:
                                            <input type='text' id='user' placeholder='sbko alg alg id class deni he' className=' m-2 user-input'></input>
                                        </label>
                                    </form>
                                </div></div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
