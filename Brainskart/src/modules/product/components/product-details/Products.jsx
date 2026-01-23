import React from 'react'
import { useParams } from 'react-router'

import product from '../product'
import "./products.css"

export default function Products() {
 
  const{id} = useParams()
  const productItem = product.kids.find(p => p.id === parseInt(id));
  let handleProduct = (event)=>{
   event.preventDefault()
  }



  return (
    <>
      <div className='container'>
        <div className='row'>
         
          <div className='col-3 m-5'>
            {/* <img src={productItem.image} width={250}></img> */}
          </div>
          <div className='col'>
            <form className='form'>
              <div className='m-5'>
                <p>Product Type : {productItem.msg}</p>
                <p>Price : {productItem.price}</p>
                <select className="form-select w-25"  >
                  <option>Add Quantity</option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
                <button className=' btn btn-md  mt-3 p-2 product-detail text-light' onClick={handleProduct}>ADD TO CART</button>


              </div>


            </form>
          </div>

        </div>
      </div>

      

    </>
  )
}
