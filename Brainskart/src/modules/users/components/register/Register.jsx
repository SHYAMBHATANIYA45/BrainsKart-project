import react, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import "./register.css"
export default function Register() {

  const [user, setUser] = useState({

    username: "",
    email: "",
    password: "",
    confirmPassword: ""

  })
  let navigate = useNavigate()

  const [userNameFeedback, setuserNameFeedback] = useState("")
  const [userEmailFeedback, setuserEmailfeedback] = useState("")
  const [userPassFeedback, setuserPassFeedback] = useState("")
  const [confirmPasswordFeedback, setconfirmPasswordFeedback] = useState("")

  const[checkValidation,setCheckValidation]=useState({
    checkuser:false,
    checkemail:false,
    checkpass:false,
    checkconfirmPass:false

  })

  let handleChange = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    })
    )
  }



  let checkUserName = (username) => {
    let regExp = /^[a-zA-Z0-9]{3,20}$/
    let userName = username.trim()
    if (regExp.test(userName)) {
      setuserNameFeedback("okay"),

      setCheckValidation((prev)=>({
        ...prev,
        checkuser : true})
      )
    }
    else {
      setuserNameFeedback("username required");
    }

  }

  let checkEmail = (email) => {
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regExp.test(email)) {
      setuserEmailfeedback("okay"),
       setCheckValidation((prev)=>({
         ...prev,
         checkemail: true
       })
      
      )
    } else {
      setuserEmailfeedback("email required")
    }
  }

  let checkPass = (pass) => {
    let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (regExp.test(pass)) {
      setuserPassFeedback("password looks strong"),

      setCheckValidation((prev)=>({
         ...prev,
         checkpass: true
       }))
    } else {
      setuserPassFeedback("strong password of 8 charater required")
    }

  }


  let confirmPass = (password) => {

    if (user.password === password && password) {
      setconfirmPasswordFeedback("oaky"),
       setCheckValidation(
        (prev)=>({
          ...prev,
          checkconfirmPass:true
        })
      )
    }
    else {
      setconfirmPasswordFeedback("password Unmatched")
    }
  }


  let handleSubmit = (event) => {
    event.preventDefault(),
     
    checkUserName(user.username,checkValidation.checkuser)
    checkEmail(user.email)
    checkPass(user.password)
    confirmPass(user.confirmPassword)
  }

  let checkAllvalidation=()=>{
      setTimeout(() => {
            if (checkValidation.checkuser && checkValidation.checkpass && checkValidation.checkemail && checkValidation.checkconfirmPass ) {
                alert("login successful")
                navigate('/LoginPage')
            }
        },1000)
      }


  return (
    <>
      <div className='w-100 registerNav'>
        <h3>
          <i className="fa-solid fa-user mt-3 ms-3" />
          Register
        </h3>
      </div>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-3'></div>
          <div className='col-6 '>
            <form onSubmit={handleSubmit}>
              <div className='card'>

                < div className='card-header register-header'>
                  <h3 className='mt-2'>Registeration</h3>
                </div>

                <div className='card-body register-body'>
                  <div className='form-group'>

                    <div className='form-group mt-3'>
                      <input
                        className={`form-control ${userNameFeedback==="okay"?"border-success":"border-danger"}`}
                        placeholder='Enter username'
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={user.username}
                        onKeyUp={handleSubmit}
                      >
                      </input>
                    </div>
                    <div className={`userNameFeedback  ${userNameFeedback === "okay"?"text-success":"text-danger"}`}>{userNameFeedback}</div>

                    <div className='form-group mt-3'>
                      <input
                        className={`form-control ${userEmailFeedback==="okay"?"border-success":"border-danger"}`}
                        type='email'
                        name='email'
                        placeholder="Enter Email"
                        value={user.email}
                        onChange={handleChange}
                        onKeyUp={handleSubmit}

                      ></input>
                    </div>
                    <div className={`mailFeedback   ${userEmailFeedback === "okay"?"text-success":"text-danger"}`}>{userEmailFeedback}</div>


                    <div className='form-group mt-3'>
                      <input
                        className={`form-control ${userPassFeedback==="password looks strong"?"border-success":"border-danger"}`}
                        name='password'
                        type='password'
                        placeholder='Enter Password'
                        onChange={handleChange}
                        onKeyUp={handleSubmit}
                        value={user.password}
                      ></input>

                    </div>
                    <div className={`passwordFeedback ${userPassFeedback === "password looks strong"?"text-success":"text-danger"}`}>{userPassFeedback}</div>


                    <div className='form-group mt-3'>
                      <input
                        className={`form-control confirmPassFeedback ${confirmPasswordFeedback === "oaky"?"border-success":"border-danger"}`}
                        type='password'
                        name='confirmPassword'
                        placeholder='confirm Password'
                        value={user.confirmPassword}
                        onChange={handleChange}
                        onKeyUp={handleSubmit}
                      ></input>

                    </div>
                    <div className={`confirmPassFeedback  ms-1 ${confirmPasswordFeedback === "oaky"?"text-success":"text-danger"}`}>{confirmPasswordFeedback}</div>

                    <div className='form-group mt-3'>
                      <input type='submit' value="Register" className='btn btn-md ms-1 mt-1' onClick={checkAllvalidation}></input>
                    </div>


                  </div>


                </div>
                <div className='card-footer register-footer bg-dark text-center'>
                  <Link to="/">
                    <img src="./src/assets/logocopy.png" className="m-2"></img>
                  </Link>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>


    </>
  )
}