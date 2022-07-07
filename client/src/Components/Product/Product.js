import React, { useState, Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Category from "../Category/Category";


import * as mdb from 'mdb-react-ui-kit';

export default function Product() {

    
    const [product, setproduct] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        file: "",
    
    });

    // const [file, setFile] = useState({
    //     data: "",
    //     contentType: ""
    // });

    const [data2, setData] = useState(null);

    let name, value;
    const handleInput = (e) => {
        console.log(product);
        name = e.target.name;
        value = e.target.value;

        setproduct({...product, [name]:value});
    }

    const handleFile = (e) => {
        console.log(e.target.files[0]);
        setproduct({...product, file:e.target.files[0]});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product);
        const { name,category, price, desciption,file } = product;

        const res = await fetch("/api/add/product", {
            method: "POST",
            //headers for sending the file
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json"
            },
            body: new FormData(product)
        })
        const data = await res.json();
        console.log(data);


        //     body: JSON.stringify({
        //         name,category, price, desciption,file
        //     })
        // })
        // const data = await res.json();
        // console.log(data);

        // .then((res) => res.json())
        // .then((dataS) => setData(dataS.message));
        
        setData(data2.message);


    }

    


    return (
        <div className="d-lg-inline-flex">
            <form method="POST" className="register-form">
                <mdb.MDBInput name="name" className='mb-4' id='form1Example1'  label='Name' 
                    onChange={handleInput}
                />
                
                <div  className='mb-4'>
                < Category name="category" />
                </div>
           


                <mdb.MDBInput name="price" id='priceproduct' type='number' className='mb-4'  label='Price' 
                    onChange={handleInput}
                />


                <mdb.MDBTextArea  name="description" className='mb-4' label='Message' id='textAreaExample' rows={3} 
                    onChange={handleInput}
                />

                

                <div style={{ width: "22rem" }}>
                    <mdb.MDBFile name="file" className='mb-4' id='customFile' 
                        onChange={handleFile}
                    />
                </div>

                <br/>
                <img src={product.file ? URL.createObjectURL(product.file) : ""}  alt="product" className="img-fluid" />

                <mdb.MDBBtn type='submit' name="seller" onClick={handleSubmit} block>
                    Create Product
                </mdb.MDBBtn>
            </form> 

            <div className="App">
                <p>{!data2 ? "Loading..." : data2}</p>
            </div>

        </div>
        
    );
}