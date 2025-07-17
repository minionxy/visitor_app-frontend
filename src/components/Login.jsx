import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [login,changeLogin]=useState(
        {username:"",password:""}
    )
    const inputHandler=(e)=>{
        changeLogin({...login,[e.target.name]:e.target.value})
    }
    const readValues=()=>{
        console.log(login)
        if (login.username=="admin" && login.password=="12345") {
            navigate("/add")
        } else {
            alert("Invalid credentials")
        }
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='username' value={login.username} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={login.password} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                            <button className="btn btn-success" onClick={readValues}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login