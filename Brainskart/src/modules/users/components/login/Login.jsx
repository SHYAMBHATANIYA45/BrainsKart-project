import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./login.css";

// import LoginNav from "./loginNav";

export default function Login() {
    const [userData, setuserData] = useState({
        form: {
            email: "",
            password: ""
        }
    })
    const [emailFeedback, setemailfeedback] = useState("")
    const [passFeedback, setpassFeedback] = useState("")
    const [checkValidation, setCheckValidation] = useState({
        checkmail: false,
        checkPass: false,
    })


    let navigate = useNavigate()

    let handleMail = (event) => {
        setuserData(() => ({
            form: {
                ...userData.form,
                [event.target.name]: event.target.value
            }
        }))
    }


    let emailValidate = (email) => {
        let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailRegExp.test(email)) {



            setemailfeedback("ok verified")
            setCheckValidation(prev => ({ ...prev, checkmail: true }));


        } else {
            setemailfeedback("something looks invalid")
        }
    }


    let passwordFeedback = (password) => {
        let passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
        if (passRegExp.test(password)) {

            setpassFeedback("password created successfully")
            setCheckValidation(prev => ({ ...prev, checkPass: true }));
        }

        else {

            setpassFeedback("create strong password")
        }
    }
    let handleSubmit = (event) => {
        event.preventDefault(),
            emailValidate(userData.form.email)
        passwordFeedback(userData.form.password)

        setTimeout(() => {
            if (checkValidation.checkPass && checkValidation.checkmail) {
                alert("login successful")
                navigate('/RegisterPage')
            }
        },1000)
    }
    return (
        <>


            <div className="loginNav">
                <h3> <i className="fa-solid fa-right-to-bracket icon mt-3 ms-3"></i>Login</h3>
            </div>

            {/* <pre>{JSON.stringify(userData)}</pre> */}


            <div className="container">

                <div className="row">

                    <div className="col-2"></div>
                    <div className="col-9 mt-2">
                        <div className="form mx-5">
                            <div className="card w-75  m-5 card-login">
                                <div className="card-header bg-dark ">
                                    <h3 className="text-light">Login</h3>
                                </div>
                                <div className="card-body">
                                    <form id="Registration-form " onSubmit={handleSubmit}>
                                        <div className="form-group mt-2">
                                            <input
                                                type="email"

                                                name="email"
                                                value={userData.form.email}
                                                onChange={handleMail}
                                                onKeyUp={handleSubmit}
                                                className={`form-control mt-4 ${emailFeedback === "ok verified" ? "border-success" : "border-danger"}`}
                                                placeholder="Enter your email"
                                            />
                                            <div className={`form-text  ${emailFeedback === "ok verified" ? "text-success border-success" : "text-danger"}`}>{emailFeedback}</div>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input
                                                type="text"

                                                name="password"
                                                value={userData.form.password}
                                                onChange={handleMail}
                                                onKeyUp={handleSubmit}
                                                className={`form-control mt-4 ${passFeedback === "password created successfully" ? " border-success" : "border-danger"}`}
                                                placeholder="Enter your password"
                                            />
                                            <div className={`form-text ${passFeedback === "password created successfully" ? "text-success" : "text-danger"}`}>{passFeedback}</div>
                                        </div>

                                        <div className="form-group mt-4">
                                            <input type="submit" id="button" className="btn btn-md text-light" value="Login" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center bg-dark">
                                    <Link to="/">
                                        <img src="./src/assets/logocopy.png" className="m-2"></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
