import React, { useState, Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";



import * as mdb from 'mdb-react-ui-kit';

export default function Product() {

    
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
    
    });

    const [file, setFile] = useState(null);

    const [data2, setData] = useState(null);

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setProduct({...product, [name]:value});
        console.log(product);
    }

    const handleFile = (e) => {
        const file = e.target.files[0];
        console.log(file);
        if(file.size > 10000000){
            window.alert("File size cannot exceed more than 8MB");
            setFile(null);
        }
        else{
            setFile(file);
        }
            
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product);
        const { name,category, price, description} = product;
        if( !name || !category || !price || !description || !file){
            window.alert("Please fill all the fields");
        }
        else {

            const formData = new FormData();
            formData.append('name', name);
            formData.append('category', category);
            formData.append('price', price);
            formData.append('description', description);
            formData.append('image', file);
            

            const res = await fetch("/api/add/product", {
                method: "POST",
                body: formData
            })
            const data = await res.json();
            console.log(data);

            
            setData(data.message);
        }


    }

    


    return (
        <div className="d-lg-inline-flex">
            <form method="POST" className="register-form">
                <mdb.MDBInput name="name" className='mb-4' id='form1Example1'  label='Product Name' 
                    onChange={handleInput}
                />
                
                

                <mdb.MDBInput list ="category" name="category" className="mb-4" label="Product Category" autoComplete='off' onChange={handleInput}/>
                    <datalist id="category">
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                        <option value="Others">Others</option>
                    </datalist>
           


                <mdb.MDBInput name="price" id='priceproduct' type='number' className='mb-4'  label='Price' 
                    onChange={handleInput}
                />


                <mdb.MDBTextArea  name="description" className='mb-4' label='Message' id='textAreaExample' rows={3} 
                    onChange={handleInput}
                />

                

                <div style={{ width: "22rem" }}>
                    <mdb.MDBFile name="file" className='mb-4' id='customFile' accept="image/x-png,image/jpeg,image/gif"
                        onChange={handleFile}
                    />
                </div>

                <br/>
                <img src={file ? URL.createObjectURL(file) : ""}  alt="product" className="img-fluid" />

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