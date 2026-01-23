import React, { useContext } from "react";
import "./navbar.css"
import { Link} from "react-router";
import { UserContext } from "../../../Usercontext";
// import Login from "../../../users/components/login/Login";
import "./Logged.css"


export default function Navbar() {
const {count} = useContext(UserContext)
console.log(count);
let handleLogout =(event)=>{
  event.preventdefault()
   count = 0;
}
  return (

   
    <>

    {count==0?(
      <div className="container-fluid navbar-container">
        <div className="row">
          <div className="col">
            <Link to="/"><img src="./src/assets/logo.png"className="m-2 navbar-img"></img></Link>
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
      </div>): (

  <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <Link to="/"><img src="./src/assets/logo.png"className="m-2 navbar-img"></img></Link>
            <Link to="/MensWear" className="text-light ms-5 m-3 text-decoration-none">Mens's wear</Link>
            <Link to="/KidsWear" className="text-light m-2 text-decoration-none">Kid's wear</Link>
            <Link to="/WomensWear"   className="text-light m-2 text-decoration-none">Womens's wear</Link>
             <Link to="/Upload" className="text-light m-2 text-decoration-none">Upload</Link>
            <Link to="/Cart" className="text-light m-2 border-light text-decoration-none"><i className="fa-solid fa-cart-shopping"></i>{count}</Link>
            <Link to="/All_orders" className="text-light m-2 text-decoration-none">Orders</Link>
           
          </div>

          <div className="col text-end m-3 me-5 ">
            <Link to="/User_Profile" className="text-light m-4 text-decoration-none"> <i className="fa-solid fa-user"></i>user</Link>
            <Link to="/LoginPage" className="text-light me-5 text-decoration-none" onClick={handleLogout}> <i className="fa-solid fa-right-to-bracket icon"></i>logout</Link>
          </div>
        </div>
      </div>


      )}
    
     

    
    </>
  );
}  