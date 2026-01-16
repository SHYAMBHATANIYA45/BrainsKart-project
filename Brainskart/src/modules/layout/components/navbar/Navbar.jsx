import React from "react";
import "./navbar.css"
import { Link } from "react-router";
export default function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Link to="/"><img src="./src/assets/logo.png"className="m-2"></img></Link>
            <Link to="/MensWear" className="text-light ms-5 m-3 text-decoration-none">Mens's wear</Link>
            <Link to="/KidsWear" className="text-light m-2 text-decoration-none">Kid's wear</Link>
            <Link to="/WomensWear"   className="text-light m-2 text-decoration-none">Womens's wear</Link>
            <a href="#" className="text-light m-2"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>

          <div className="col text-end m-3 me-5 ">
            <Link to="/LoginPage" className="text-light m-4 text-decoration-none"> <i className="fa-solid fa-right-to-bracket icon"></i>Login</Link>
            <Link to="/RegisterPage" className="text-light me-5 text-decoration-none"><i className="fa-solid fa-user"></i>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}  