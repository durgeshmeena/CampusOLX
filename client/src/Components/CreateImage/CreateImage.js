function CreateImage (product)  {
    // console.log(product);
    const imgData = product.image.data.data;
    const base64ImageString = Buffer.from(imgData, 'binary').toString('base64')
    // console.log(base64ImageString);
    const imgSrc = `data:${product.image.contentType};base64,${base64ImageString}`;

    // const imgWidth = {
    //   // width: "20rem",
    // }
    return imgSrc;  
    // return <img src={imgSrc} alt="product" className="img-fluid" width="200rem"  />
  }

export default CreateImage;