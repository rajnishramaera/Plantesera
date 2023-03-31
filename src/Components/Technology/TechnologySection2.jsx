import React from "react";
import machines from "@assets/images/machine.png";
const TechnologySection2 = () => {
  return (
    <div className="basis-12/12 bussiness-Flex">
      {/* <div data-aos="fade-right" data-aos-duration="1000"> */}
      <div
        className="basis-5/12 bussiness-Item pl-141"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="bussiness-head-mobile-technology my-3">
          Quality Preservation Using Latest Technology
        </h1>
        <div className="technologyLine"></div>

        <p className="taste-text mb-3">
          To maintain the quality and originality of the spices, we make sure
          that the spices are stored and maintained at lower temperatures
        </p>

        <p className="taste-text mb-3">
          Contemporary spice industries, use hammer mills that enable the
          temperature to rise upto 120°C , which causes the spices to lose their
          pungency and flavors.
        </p>
      </div>
      {/* </div> */}
      {/* <div className="basis-1/12"></div> */}
      <div
        className="basis-7/12 relative bussiness-background"
        data-aos="fade-down-left"
      >
        <div data-aos="fade-up-left">
          <img
            src={machines}
            className="float-right bussiness-image w-max-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologySection2;
