import React from "react";
import Quotes from "../../../src/assets/Quotes.png";
import customer from "../../../src/assets/customer.png";
import WestIcon from "@mui/icons-material/West";
import transparentbg from "../../../src/assets/transbg.png";
import EastIcon from "@mui/icons-material/East";

const ReviewInfo = () => {
  return (
    <div className="review-info lg:ml-10">
      <h1 className="heading">Customer Review</h1>
      <div className="flex lg:ml-2 mt-6">
        <img src={Quotes} alt="" className="lg:mr-2 h-[60px] w-[60px] quotes" />
      </div>
      <p className="review-info-para mt-8">
        Families are created by love and warmth. Your love towards our spices
        has brought us together as a family because it is said, “ A family that
        eats together, stays together.”
      </p>
      <div className="customer-info flex mt-10 items-center">
        <img src={customer} alt="" className="rounded-full w-[72px] h-[72px]" />
        <div className="customer-name ml-5 flex w-[60%] justify-between">
          <div>
            <p
              style={{
                fontFamily: "Original Surfer",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "26px",
              }}
            >
              Anas Ahmad Khan
            </p>
            <p
              style={{
                fontFamily: "Josefin Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Customer
            </p>
          </div>
          <div>
            <WestIcon />
            <EastIcon className="ml-2" />
          </div>
        </div>
      </div>
      {/* <img src={transparentbg} alt="" className="absolute transbg" /> */}
    </div>
  );
};

export default ReviewInfo;
