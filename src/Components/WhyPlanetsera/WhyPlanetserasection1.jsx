import React from "react";
import planetseraOne from "@assets/images/planetsera-1.png";
import planetseraTwo from "@assets/images/planetsera-2.png";

const WhyPlanetserasection1 = () => {
  return (
    <>
      <div className="container mt-40">
        <div className="basis-12/12 flex justify-center">
          <div className="basis-5/12">
            <img src={planetseraOne} />
          </div>
          <div className="basis-1/12"></div>

          <div className="basis-5/12">
            <img src={planetseraTwo} />
          </div>
        </div>

        <div className="container mt-40">
          <div className="basis-12/12">
            <div className="w-full mb-20 mt-20">
              <h1 className="planetseraHeading">Precision milling:</h1>
              <p className="planetseraText">
                The spices are precisely milled to preserve their authenticity
                and pungency for a longer period.
              </p>
            </div>
            <div className="w-full mb-20">
              <h1 className="planetseraHeading">Lab testing:</h1>
              <p className="planetseraText">
                Our spices undergo rigorous lab testing to ensure their safety,
                quality, and compliance with regulatory standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyPlanetserasection1;
