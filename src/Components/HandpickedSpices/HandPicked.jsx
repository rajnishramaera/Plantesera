import React, { useEffect } from "react"
import mixSpices from "../../../src/assets/mixspices.png"
import "./handpicked.css"
import AOS from "aos"
import "aos/dist/aos.css"

const HandPicked = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="mix-spices flex flex-col items-center justify-center relative">
      <div
        data-aos="slide-up"
        data-aos-duration="1000"
        // data-aos-anchor-placement="top-center"
      >
        <div className="mix-spices-img">
          <img src={mixSpices} alt="" />
        </div>
      </div>
      <div className="handpicked absolute top-[40%] bg-center bg-cover flex items-center">
        <div className="para-container lg:ml-10">
          <div data-aos="fade-right">
            <p className="hand-para">
              Spices that are grown organically and handpicked for uncompromised
              taste.
            </p>
          </div>
          <div data-aos="fade-left">
            <p className="hand-desc lg:w-[80%] mt-8">
              PlanetsEra spices give you unmatched taste and tempting aroma. Get
              your desired flavor of spices blessed with the benefits of Nature
              and heavenly delicacy.
            </p>
          </div>
          <div className="btn-container" data-aos="fade-up">
            {/* <button className="hand-btn rounded-full text-white mt-7 uncompromiseButton">
              Read More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandPicked
