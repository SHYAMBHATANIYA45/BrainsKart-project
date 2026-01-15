import React from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css"
// import image from "./src/assets/Shopping.png"

function Home() {
  return (
    <>
    <div className="home position-absolute">
        <img src="./src/assets/shopping.jpg" alt="" 
        style={{
            height:"570px",
            width:"100%",
            position:"absolute",
           
        }}/>
      <div className="text-center home position-relative m-5" >
        <h1 className="text-light">Welcome to Brainskart</h1>
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio
          aperiam consequatur, illo, consectetur quos veritatis quisquam eum
          laudantium ex accusamus, culpa enim ut? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, blanditiis?
        </p>
        <button className="btn btn-dark btn-md">SHOP NOW</button>
      </div>
      </div>
     
      
    </>
  );
}

export default Home;
