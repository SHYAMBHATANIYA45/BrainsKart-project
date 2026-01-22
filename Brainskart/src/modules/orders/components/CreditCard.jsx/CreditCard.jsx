import React from 'react'

export default function CreditCard() {
    let handleRefresh=(event)=>{
    event.preventDefault();
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    hlo
                </div>
                <div className='col mt-5'>
                    <div className="card p-2">
                        <div className="card-header">
                            <form>
                                <div className=' form-control'>
                                    <label htmlFor='card1 p-2' />Email
                                    <input type='email' id='card1' className='form-control'></input>
                                    <label htmlFor='card1' />Card Information
                                    <input type='text' id='card1' placeholder='1234 1234 1234 1234' className='form-control'></input>   
                                    <div className='row m-1'>
                                        
                                        <div className="col form-control ">
                                            <input type="date" name="card1" id="" className='form-control' placeholder='MM/YY' />
                                        </div>
                                        <div className="col form-control">
                                            <input type='number' className='form-control' placeholder='CVC'></input>
                                        </div>
                                    </div>
                                    <label htmlFor='card1 m-4' />Name
                                    <input type='text' id='card1' placeholder="Enter card name" className='form-control'></input>
                                
                                 <label htmlFor='card1 mt-3' />Country region
                                    <input type='country' id='card1' className='form-control'></input>
                                     <button onClick={handleRefresh} className='form-control btn btn-success mt-4'>Pay  &#8377; 2,213</button>
                                    </div>

                                   
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
