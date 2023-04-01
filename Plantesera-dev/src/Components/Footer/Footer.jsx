import React from "react"
import "./footer.css"
import Icons from "./Icons"
import FooterEnd from "./FooterEnd"
import SideBar from "./SideBar"

const Footer = () => {
  return (
    <>
      <div className="main-container lg:w-[100%] mt-20 imaged">
        <div className="footer flex bg-center bg-cover">
          <div className="basis-9/12 flex items-center">
            <div className="basis-12/12 flex">
              <div className="basis-1/12"></div>
              <div className="basis-10/12">
                <h1 className="diverse-text text-center">
                  Authentic taste of culture with PlanetsEra's spices
                </h1>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
          <div className="basis-3/12">
            <div className="lg:basis-3/12 social lg:h-48 bg-[#1E1E1E] flex flex-col justify-center lg:items-start">
              <p className="text-white lg:text-xl lg:ml-10 social-text">
                Social Media
              </p>
              <Icons />
            </div>
            <SideBar />
          </div>
        </div>
        <></>
      </div>
      <FooterEnd />
    </>
  )
}

export default Footer
