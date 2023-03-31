import React from "react";
import "./QualitySection.css";
import spiac from "@assets/images/quality-1.png";
const QualitySection = () => {
  return (
    <>
      <div className="container quality-container px-4">
        <div className="basis-12/12 flex">
          <div className="basis-4/12 relative">
            <img src={spiac} className="absolute" />
            <img src={spiac} className="absolute quality-img" />
          </div>
          <div className="basis-2/12"></div>
          <div className="basis-6/12 self-center">
            <h1 className="management-heading">QUALITY MANAGEMENT</h1>
            <p className="management-text1">
              Thousands of people dream of having their own business and even
              more so be a successful entrepreneur. But what does it take to
              achieve success in the business industry? One of the most
              successful entrepreneurs featured at the Forbes website
            </p>
            <p className="management-text2">
              Thousands of people dream of having their own business and even
              more so be a successful entrepreneur. But what does it take to
              achieve success in the business industry? One of the most
              successful entrepreneurs featured at the Forbes website
            </p>
            <p className="management-text3">
              Thousands of people dream of having their own business and even
              more so be a successful entrepreneur. But what does it take to
              achieve success in the business industry? One of the most
              successful entrepreneurs featured at the Forbes website
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualitySection;
