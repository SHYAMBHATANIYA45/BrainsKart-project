import React from "react";
import product from "../product";
import './kids.css'
export default function Kids() {
  return (
    
   <>
      <div className="womens-navbar">
        <h3 className="px-4 pt-2">Kids's Collection</h3>
      </div>
      <div className="container mt-3">
        <div className="row mt-3">
          {product.kids && product.kids.length > 0 ? (
            product.kids.map((item,index) => (
              <div className="col-md-3"> 
                <div className="card mt-5 mb-2"key={index}>
                  <div className="card-header bg-white" >
                    <img
                      src={item.image}
                      width="230"
                      height="350"
                      alt={item.msg}
                    />
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item text-center">{item.msg}</li>
                      <li className="list-group-item text-center">
                        Price: &#8377;{item.price}
                      </li>
                      <li className="list-group-item text-center">
                        <button className="mens-button">Add to Cart</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No kids's products available.</p>
          )}
        </div>
      </div>
    </>
  )
}