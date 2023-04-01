import React from "react";
import "./AboutBanner.css";
// import bannerOne from "@assets/images/aboutBannerAbsolute.png";

const AboutBannerSection = () => {
  return (
    <>
      <div className="container aboutbanner flex justify-center items-center">
        {/* <img src={bannerOne} /> */}

        <div className="basis-12/12">
          <h1 className="aboutbanner-text">Cardamom / Clove / Cumin</h1>
        </div>
      </div>
    </>
  );
};

export default AboutBannerSection;
