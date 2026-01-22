import React from 'react'
import Home from '../../../layout/components/home/Home'

import product from '../product'

export default function Upload() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          {product.Products.map((item) => { })}
          <div className='col-3 m-5'>
            <img src='.\src\assets\image3.png' width={250}></img>
          </div>
          <div className='col'>
            <form>
              <div className='m-5'>
                <p className='fs-4 text-inline'>Name: <span className='fw-medium'>Men's shirt</span></p>
                <p className='fs-4 text-inline'>Brand Name: <span className='fw-medium fs-5'>US POLO</span></p>
                <p className='fs-4 text-inline'>Item-price: <span className='fw-medium fs-5'>$500</span></p>
                <select className="form-select w-25"  >
                  <option>Add Quantity</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>


              </div>


            </form>
          </div>

        </div>
      </div>

    </>
  )
}
