import React from "react";
import "./TechnologyPeopleSection.css";
import tech1 from "@assets/images/technologyplanet-1.png";
import tech2 from "@assets/images/technologyplanet-2.png";

const TechnologyPeopleSection = () => {
  return (
    <>
      <div className="container quality-container px-6">
        <div className="basis-12/12 flex">
          <div className="basis-6/12 self-center">
            <h1 className="technology-heading mb-5">TECHNOLOGY</h1>
            <p className="technology-text1">
              Thousands of people dream of having their own business and even
              more so be a successful entrepreneur. But what does it take to
              achieve success in the business industry? One of the most
              successful entrepreneurs featured at the Forbes website
            </p>
            <p className="technology-text2">
              Thousands of people dream of having their own business and even
              more so be a successful entrepreneur. But what does it take to
              achieve success in the business industry? One of the most
              successful entrepreneurs featured at the Forbes website
            </p>
            <p className="technology-text3">
              Thousands of people dream of having their own business and even
              more so be a successful entrepreneur. But what does it take to
              achieve success in the business industry? One of the most
              successful entrepreneurs featured at the Forbes website
            </p>
          </div>
          <div className="basis-2/12"></div>
          <div className="basis-4/12 relative">
            <img src={tech1} className="absolute" />
            <img src={tech2} className="absolute technologyPeople-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyPeopleSection;
