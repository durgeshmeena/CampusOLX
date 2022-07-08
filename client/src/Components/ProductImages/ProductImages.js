import React, {useState, useEffect} from "react"


export default function ProductImages() {
    const [data, setData] = React.useState(null);

    useEffect(() => {
      fetch("/api/get/images")
        .then((res) => res.json())
        .then((dataS) => setData(dataS));
        console.log(data);
    }, []);
  
    return (

      <div className="ProductImages">
        <h1>ProductImages</h1>
          { data && data.map((product)=>{
          <p>{product.name}</p>    
        }) }
      </div>
    );
    // const [images, setImages] = useState(null);

    // // fetch images from server on reloading\
    // useEffect(() => {
    //     fetch("/api/get/images")
    //     .then((res) => res.json())
    //     .then((data) => setImages(data));
    //     console.log(images);
    // }, []);

  


    // return (
    //     <div>
    //         <h1>ProductImages</h1>
            
    //     </div>
    // )
}





{/* <img src={file ? URL.createObjectURL(file) : ""}  alt="product" className="img-fluid" /> */}