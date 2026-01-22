import React from "react";
import "./order.css"
import product from "../../../product/components/product";
export default function All_orders() {
    return (
        <>
            <div className="orderList">
                <h3 className="px-4 pt-2"><i className="fa-solid fa-bars"></i> All orders </h3>
            </div>

            <div className="container">
                <div className="row ">

                    <div className="col mt-5">

                        <table className="table border">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Order ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Order Date</th>
                                </tr>
                            </thead>
                            <tbody className="success">
                                {product.Products.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr>
                                                <td scope="row">{index}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td><p>{item.items}</p>
                                                    <p>{item.price}</p></td>
                                                <td>{item.amount}</td>
                                                <td>
                                                    {(item.orderDate)}
                                                    <p>2:34</p></td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}