import React, { useEffect, useState } from 'react'
import "./upload.css"
import { replace, useNavigate } from 'react-router'
export default function Upload() {
const[uploadProduct,setUploadProduct] = useState({
  productType:"",
  productImage:"",
  productCatagory:"",
  productPrice:"",
  productDetails:""
})

let handleInput =(event)=>{
  setUploadProduct((prev)=>({
    ...prev,
    [event.target.name]:event.target.value
  }))
}
let handleSubmit =(event)=>{
event.preventDefault();
console.log(uploadProduct)
}
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-2">

          </div>
          <div className="col-8">

            <div className="card">
              <div className="card-header bg-success text-light upload-header p-3">
                <h4>Upload your Product</h4>
              </div>
            </div>
            <div className="card-body ">
            <form className="form-group" onSubmit={handleSubmit}>
              <div className="form-control upload-body">

                <label htmlFor="typeOfProduct"
                  className='ps-2 p-2 fs-6'>Product type:</label>
                <input
                  type="text"
                  id="typeOfProduct"
                  className="form-control"
                  name='productType'
                  onChange={handleInput}
                  value={uploadProduct.productType}
                  placeholder="Enter product type">
                </input>

                <label
                  htmlFor='image-upload '
                  className='ps-2 p-2 fs-6'>Add product Image: </label>
                <input
                  type="file"
                  className="form-control "
                  placeholder="Product image"
                   onChange={handleInput}
                  name="productImage"
                  value={uploadProduct.productImage}
                  id='image-upload'
                  required
                />

                {/* <button className="input-append d-flex btn btn-sm btn-danger mt-2">
                          Browse
                        </button> */}

                <label htmlFor="typeOfProduct" className=' mps-2 p-2 fs-6'> Category :    </label>
                <select className='form-control ' onChange={handleInput}  name='productCatagory' value={uploadProduct.productCatagory} required>
                  <option value="category">Add your category</option>
                  <option value="Mens">Men's</option>
                  <option value="womens">Women's</option>
                  <option value="kids">Kids</option>
                </select>

               
                 <label
                  htmlFor='image-upload '
                  className='ps-2 p-2 fs-6'>Add product Image: </label>
                <input
                  type="number"
                  className="form-control "
                  placeholder="Product image"
                   onChange={handleInput}
                  name="productPrice"
                  value={uploadProduct.productPrice}
                  id='image-upload'
                  required
                />


                <label
                  htmlFor="typeOfProduct"
                  className='ps-2 p-2 fs-6'> Product details : </label>
                <textarea
                  name="productDetails"
                  cols={90}
                  placeholder='enter product detail'
                  className='form-control'
                  value={uploadProduct.productDetails}
                   onChange={handleInput}
                
                  required>
                </textarea>


                <button className='btn btn-md m-2 btn-success upload-btn'>Upload</button>
              </div>
            </form>
</div>
          </div>
        </div>
      </div>

    </>
  )
}
