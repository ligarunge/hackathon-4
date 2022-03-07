
import React from 'react';
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/plantsLogin.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
            <div className="row justify-content-center">
                <div className='col-md-3'>
                    <img src="/Images/cat_logo3_1.png" className="img-fluid ms-3" alt="cat_logo.png" />
                </div>
                <div className='row justify-content-center'>
                    <form className="col-md-3" onSubmit={handleSubmit}>
                        <div className="email row justify-content-center">
                            <div className='col-12 text-center lead' style={{color:' rgb(50, 105, 84)', fontWeight: 'bolder'}}>
                                <p>Email</p>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="password row mt-2 justify-content-center">
                            <div className='col-12 text-center lead' style={{color:' rgb(50, 105, 84)', fontWeight: 'bolder'}}>
                                <p>Password</p>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className='col-md-3'>
                                <Link to="/categories"><button className="btn btn-lg btn-outline-light" style={{backgroundImage: "url(/Images/button.jpg)", backgroundSize: 'cover', color:'white', fontWeight: 'bold' }} type="submit" disabled={!validateForm()}>
                                    Login
                                </button>
                                </Link>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;