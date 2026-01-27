import React, { useContext, useState } from "react";
import product from "../product";
import './mens.css';
import { Link, useNavigate } from "react-router";
import { GlobalContext } from "../../../GlobalContext";

export default function Mens() {

  const{setAddCart,loginCount} = useContext(GlobalContext)

let navigate = useNavigate()
let handlemens =(event,product)=>{
   event.preventDefault()
   if(loginCount){
   navigate(`/product/Products/${product.id}`)   
}}
let handleCart =()=>{
setAddCart(prev=>prev+1)

}



  return (
    <>
      <div className="mens-navbar">
        <h3 className="px-4 pt-2">Mens Collection</h3>
      </div>
      <div className="container mt-1">
        <div className="row mt-5">
          {product.Products && product.Products.length > 0 ? (
            product.Products.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card mt-1 mb-2">
                  <div className="card-header bg-white text-center"  onClick={(e)=>handlemens(e,item)}>
                    <img
                      src={item.image}
                      width={"230px"}
                      height="350"
                      alt={item.msg}
                    />
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item text-center">{item.msg}</li>
                      <li className="list-group-item text-center">
                        Price: &#8377;{item.rate}
                      </li>
                      <li className="list-group-item text-center">
                        <button className="mens-button" onClick={handleCart}>Add to Cart</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </>
  )
}