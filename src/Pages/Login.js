
import React from 'react';
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }

      function handleSubmit(event) {
        event.preventDefault();
      }

        return(
            <div className="container h-100">
                <div className="content-wraper d-flex align-items-center flex-column">
                <img src="/Images/cat_logo.png" className="card-img-top w-50" alt="cat_logo.png"/>

                <form className="d-flex flex-column w-50" onSubmit={handleSubmit}>
                <div className="email">
                    <p>Email</p>
                    <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                <p>Password</p>
                    <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-inline-flex justify-content-center ">
                    <button className="w-25 my-3 text-dark" type="submit" disabled={!validateForm()}>
                    Login
                </button>
                </div>
              
                </form>
            </div>
          </div>
        )
    }

export default Login;