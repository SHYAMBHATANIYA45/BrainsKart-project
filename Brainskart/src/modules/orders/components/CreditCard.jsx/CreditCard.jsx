import React from 'react'
import "./creditCard.css"
import { Link } from 'react-router';
export default function CreditCard() {
    let handlecredibtn = (event) => {
        event.preventDefault();
    }
    return (
        <>
            




            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-6">

                        <i class="fa-solid fa-arrow-left"><p></p></i>
                        <div className="credit-left">
                               <p>BrainsKart Items <br></br> <h3 className=''>&#8377;2023.00</h3></p>
                          
                        </div>
                       
                    
                    <div className='credit-terms'>
                        <Link to={"/https://stripe.com/in"} className='mt-5 pt-5 text-decoration-none'><p className='mt-5 pt-5'>Powerd by stripe |Terms Privacy </p></Link>
                    </div>
                    </div>
                    <div className="col">

                        <div className="card">
                            <div className="card-header text-light credit-header p-3">
                                <h4>Pay With Card</h4>
                            </div>
                        </div>
                        <div className="card-body ">
                            <form className="form-group">
                                <div className="form-control credit-body">

                                    <label htmlFor="typeOfProduct"
                                        className='ps-2 p-2 fs-6'>Email:</label>
                                    <input
                                        type="Email"
                                        id="typeOfProduct"
                                        className="form-control"
                                        name='productType'

                                        placeholder="Enter your Email">
                                    </input>

                                    <label />
                                    <label htmlFor="typeOfProduct"
                                        className='ps-2 p-2 fs-6'>Card Information:</label>
                                    <table className='table form-group text-decoration-none'>
                                        <thead className=''>
                                            <tr>
                                                <th className='table'>
                                                    <input
                                                        type="text"
                                                        id="typeOfProduct"
                                                        className="w-100"
                                                        name='productType'
                                                        placeholder="1234 1234 1234 5433">
                                                    </input>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <div className="row ms-1 me-1">
                                                    <div className="col">
                                                        <input
                                                            type="date"
                                                            id="typeOfProduct"
                                                            className="form-control"
                                                            name='productType'
                                                            placeholder="1234 1234 1234 5433">
                                                        </input>
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                id="typeOfProduct"
                                                                className="w-100 form-control"
                                                                name='productType'
                                                                placeholder="cvc">

                                                            </input>
                                                            <i class="fa-solid fa-credit-card" className='input-group'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <label />

                                    <label htmlFor="typeOfProduct"
                                        className='ps-2 fs-6'>Enter Name:</label>
                                    <input
                                        type="text"
                                        id="typeOfProduct"
                                        className="form-control mt-1"
                                        name='productType'

                                        placeholder="Enter your name">
                                    </input>

                                    <label />
                                    <label htmlFor="typeOfProduct"
                                        className='ps-2 mt-1 fs-6'>Country region:</label>
                                    <select
                                        type="text"
                                        id="typeOfProduct"
                                        className="form-control m-1"
                                        name='productType'
                                        placeholder="Enter country name"
                                    >

                                        <option>India</option>
                                        <option>U.S.A</option>
                                        <option>China</option>
                                    </select>

                                    <label />

                                    <button className='form-control btn text-light mt-4 credit-btn' onClick={handlecredibtn}>Pay  &#8377; 2,213</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}
