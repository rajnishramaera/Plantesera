import React from "react";
import "./DishSection.css";
import boxOne from "@assets/images/dish-1.png";
import boxTwo from "@assets/images/dish-2.png";

const DishSection = () => {
  return (
    <div class="container relative">
      <div className="basis-12/12 flex">
        <div className="basis-6/12">
          <img src={boxOne} />
          <a href="#" className="dish-button">
            Shop Now
          </a>
          <div className="shop-line"></div>
        </div>
        <div className="basis-6/12 relative">
          <img src={boxTwo} className="w-full" style={{ height: "396px" }} />
          <a href="#" className="dish-button2">
            Shop Now
          </a>
          <div className="shop-line2"></div>
        </div>
      </div>
    </div>
  );
};

export default DishSection;
