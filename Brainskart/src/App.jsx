import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./modules/layout/components/home/Home";
import Navbar from "./modules/layout/components/navbar/Navbar";
import Mens from "./modules/product/components/mens-collection/Mens";
import Kids from "./modules/product/components/kids-collection/Kids";
import Womens from "./modules/product/components/womens-collection/Womens";
import Login from "./modules/users/components/login/Login.jsx";
import Register from "./modules/users/components/register/Register";

import Upload from "./modules/product/components/upload-products/Upload.jsx";
import Cart from "./modules/orders/components/cart/Cart.jsx";
import OrderSuccess from "./modules/orders/components/order-success/OrderSuccess.jsx";
import All_orders from "./modules/orders/components/order-list/All_orders.jsx";
import CheckOut from "./modules/orders/components/checkout/CheckOut.jsx";
import Profile from "./modules/users/components/profile/Profile.jsx";
import CreditCard from "./modules/orders/components/CreditCard.jsx/CreditCard.jsx";
import Products from "./modules/product/components/product-details/Products.jsx";
import { GlobalContext } from "./modules/GlobalContext.js";


function App(props) {
  const [loginCount, setLoginCount] = useState(0);
  const[addCart,setAddCart] =useState(0);

 

  return (
    <>
      <BrowserRouter>
      <GlobalContext.Provider value={{
        loginCount,
        setLoginCount,
        addCart,
        setAddCart
      }}>
       
      <Navbar />
    
    
      
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/Home" element={<Home/>}></Route> */}
          
          <Route path="/MensWear" element={<Mens/>}></Route>
          <Route path="/kidsWear" element={<Kids/>}></Route>
          <Route path="/womensWear" element={<Womens />}></Route>
          <Route path = "/Cart" element={<Cart/>}/> 
          <Route path="/product/:category/:id" element={<Products/>}></Route>
          <Route path="/LoginPage" element={<Login/>}></Route>
          <Route path="/RegisterPage" element={<Register/>}></Route>
          
          <Route path="/Upload" element={<Upload/>}></Route>
          <Route path="/Success" element={<OrderSuccess/>}></Route>
          <Route path="/All_Orders" element={<All_orders/>}></Route>
          <Route path="/Checkout" element={<CheckOut/>}></Route>
          <Route path="/User_Profile" element={<Profile/>}></Route>
          <Route path="/CreditCard_details" element={<CreditCard/>}></Route>
        </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
