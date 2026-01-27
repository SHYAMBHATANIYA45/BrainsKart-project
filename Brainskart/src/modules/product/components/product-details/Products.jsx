import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import product from '../product'
import "./products.css"
import { GlobalContext } from '../../../GlobalContext'

export default function Products() {
  const [totalQty, setTotalQty] = useState(0)
  const { setAddCart } = useContext(GlobalContext);
  const { category, id } = useParams()
  const productItem = product[category]?.find(p => p.id === Number(id));
  let handleProduct = (event) => {
    event.preventDefault()
    setAddCart(prev => prev+(totalQty) )
  }
  let handleQty = (event) => {
    setTotalQty(
   Number( event.target.value)
)
  }
  console.log(totalQty)

  if (!productItem) {
    return <h3>Product not found</h3>;
  }
  return (
    <>

      <div className='container'>
        <div className='row'>

          <div className='col-3 m-5'>
            <img src={productItem.image} width={250}></img>
          </div>
          <div className='col'>
            <form className='form'>
              <div className='m-5'>
                <p>Product Type : {productItem.msg}</p>
                <p>Price : {productItem.price}</p>
                <select
                  className="form-select w-25"
                  name="quantity"
                  value={totalQty}
                  onChange={handleQty}
                >
                    <option value={0}>add quantity</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
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
