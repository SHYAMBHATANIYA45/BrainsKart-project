import React from "react";
import product from "../product";
import './womens.css';

export default function Womens() {
  return (
    <>
      <div className="womens-navbar">
        <h3 className="px-4 pt-2">Women's Collection</h3>
      </div>
      <div className="container mt-3">
        <div className="row mt-3">
          {product.Womens && product.Womens.length > 0 ? (
            product.Womens.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card mt-5 mb-2">
                  <div className="card-header bg-white">
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
            <p>No women's products available.</p>
          )}
        </div>
      </div>
    </>
  );
}