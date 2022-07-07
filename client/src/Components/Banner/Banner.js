import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">Choose From Here</option>
              <option value="Cars">Stationary</option>
              <option value="Cameras & Lenses">Electonics</option>
              <option value="Computers & Laptops">Musical Instruments</option>
              <option value="Mobile Phones">Cycles</option>
              <option value="Motorcycles">Mobiles and Laptops</option>
              <option value="Tablets">Other Accessories</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Stationary")} >Stationary</span>
            <span onClick={()=>setCategory("Cameras & Lenses")} >Electonics</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Musical Instruments</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Cycles</span>
            <span onClick={()=>setCategory("Motorcycles")} >Mobiles and Laptops</span>
            <span onClick={()=>setCategory("Tablets")} >Other Accessories</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../Images/iitg-text.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
