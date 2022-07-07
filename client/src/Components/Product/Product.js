import React, { useState, Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../graph";
import Button from "react-bootstrap/Button";
import Category from "../Category/Category";


import * as mdb from 'mdb-react-ui-kit';

export default function Product() {

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
                <mdb.MDBInput name="name" className='mb-4' id='form1Example1'  label='Name' readonly
                    value={user.name}
                    onChange={handleInput}
                />
                
            <div  className='mb-4'>
            < Category />
            </div>
           


                <mdb.MDBInput name="price" id='priceproduct' type='number' className='mb-4'  label='Price' 
                    value="0"
                    onChange={handleInput}
                />

                <mdb.MDBTextArea className='mb-4' label='Message' id='textAreaExample' rows={3} />

                

                <div style={{ width: "22rem" }}>
                    <mdb.MDBFile className='mb-4' id='customFile' />
                </div>

                <mdb.MDBBtn type='submit' name="seller" onClick={PostData} block>
                    Sign in
                </mdb.MDBBtn>
            </form> 

            <div className="App">
                <p>{!data ? "Loading..." : data}</p>
            </div>

        </div>
        
    );
}