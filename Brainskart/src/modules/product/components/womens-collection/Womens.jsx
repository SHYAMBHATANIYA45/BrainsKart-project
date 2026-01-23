import React from "react";
import product from "../product";
import './womens.css';
import { useNavigate } from "react-router";

export default function Womens() {





  let naavigate = useNavigate()

  let handleAddCart=(event)=>
  {
    event.preventDefault();
    
  }

  let handleWomen=(event)=>{
     event.preventDefault()
     naavigate("/product")
  }
  return (
    <>
      <div className="womens-navbar">
        <h3 className="px-4 pt-2">Women's Collection</h3>
      </div>
      <div className="container mt-3">
        <div className="row mt-3">
          {product.Womens && product.Womens.length > 0 ? (
            product.Womens.map((item,index) => (
              <div className="col-md-3" key={index}>
                <div className="card mt-5 mb-2 ">
                  <div className="card-header bg-white"  onClick={handleWomen}>
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
                        <button className="mens-button" onClick={handleAddCart}>Add to Cart</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No women's products available.</p>
          )}
        </div>
      </div>
    </>
  );
}