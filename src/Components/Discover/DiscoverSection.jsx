import React from "react";
import "./DiscoverSection.css";
import DiscoverOne from "@assets/images/discoverAb.png";

const DiscoverSection = () => {
  return (
    <>
      <div id="discover" className="container mb-40 relative">
        <img src={DiscoverOne} className="discover-alignment" />
        <div className="basis-12/12 mb-24 relative">
          <h1 className="discover-heading">Discover more about PlanetsEra</h1>
          <div className="discover-line"></div>
          <h2 className="discover-quality mt-20">QUALITIES</h2>
        </div>

        <div class="basis-12/12 lg:flex md:flex sm:block quality-alignment">
          <div class="flex items-center quality-alignment1">
            <h1>Exotic Spices</h1>
          </div>
          <div class="flex items-center quality-alignment1">
            <h1>Savoury Taste</h1>
          </div>
          <div class="flex items-center quality-alignment1">
            <h1>Premium Ingredients</h1>
          </div>

          <div class="flex items-center quality-alignment1">
            <h1>Superior Quality</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverSection;
