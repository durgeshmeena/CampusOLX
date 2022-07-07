import React, { useState, Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../graph";
import Button from "react-bootstrap/Button";


import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Sell() {

    const { accounts } = useMsal();
    const [user, setUser] = useState({
        _id : accounts[0].homeAccountId.split('.')[0],
        name: accounts[0].name,
        email: accounts[0].username,
        mobile: "",
        otherInfo: "" 
    });

    const [data, setData] = useState(null);

    let name, value;

    const handleInput = (e) => {
        console.log(user);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        console.log(user);
        const { _id, name, email, mobile, otherInfo } = user;

        const res = await fetch("/api/create/seller", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _id, name, email, mobile, otherInfo
            })
        })
        const data = await res.json();
        console.log(data);

        // .then((res) => res.json())
        // .then((dataS) => setData(dataS.message));
        
        setData(data.message);


    }

    


    return (
        <div className="d-lg-inline-flex">
            <form method="POST" className="register-form">
                <MDBInput name="name" className='mb-4' id='form1Example1'  label='Name' readonly
                    value={user.name}
                    onChange={handleInput}
                />


                <MDBInput name="email" type="email" className='mb-4' id='form1Example2' label='Email address' readonly
                    value={user.email}
                    onChange={handleInput}
                />


                <MDBInput name="mobile" id='typePhone' type='tel' className='mb-4'  label='Mobile No.' 
                    value={user.mobile}
                    onChange={handleInput}
                />


                <MDBInput name="otherInfo" className='mb-4' id='other' label='Other Info' 
                    value={user.otherInfo}
                    onChange={handleInput}
                />


                <MDBBtn type='submit' name="seller" onClick={PostData} block>
                    Sign in
                </MDBBtn>
            </form> 

            <div className="App">
                <p>{!data ? "Loading..." : data}</p>
            </div>

        </div>
        
    );
}