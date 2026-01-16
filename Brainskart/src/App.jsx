import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./modules/layout/components/home/Home";
import Navbar from "./modules/layout/components/navbar/Navbar";
import Mens from "./modules/product/components/mens-collection/Mens";
import Kids from "./modules/product/components/kids-collection/Kids";
import Womens from "./modules/product/components/womens-collection/Womens";
import Login from "./modules/users/components/login/Login";
import Register from "./modules/users/components/register/Register";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/Home" element={<Home/>}></Route> */}
          <Route path="/mensWear" element={<Mens/>}></Route>
          <Route path="/kidsWear" element={<Kids/>}></Route>
          <Route path="/womensWear" element={<Womens />}></Route>
          {/* <Route path='/product' to ></Route>  sir se puchna*/}
          <Route path="/LoginPage" element={<Login/>}></Route>
          <Route path="/RegisterPage" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
