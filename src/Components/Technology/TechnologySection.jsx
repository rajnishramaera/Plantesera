import TechnologySection1 from "./TechnologySection1"
import TechnologySection2 from "./TechnologySection2"
import { useSelector } from "react-redux"
import manuabsolute from "@assets/images/manuabsolute.png"
import manuabsolute2 from "@assets/images/manuabsolute2.png"
import manuabsolute3 from "@assets/images/manuabsolute3.png"
function TechnologySection() {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkbg = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return manuabsolute
    }
    if (colorMe === "#ffde39") {
      return manuabsolute2
    }
    if (colorMe === "#2dc83c") {
      return manuabsolute3
    }
  }
  return (
    <>
      <div className="container flex mt-40 mb-20">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <h2 style={{ color: colorMe }} className="taste text-center mb-4">
              PlanetsEra Manufacturing Process
            </h2>
            <div
              style={{ backgroundColor: colorMe }}
              className="planetseraLine"
            ></div>
            <p className="manu-text">
              Spices have an inseparable bond with our Indian culture. Each and
              every flavor of different spices in our country reflect the taste
              of the region and carry the story of the richness of our country.
              Relishing your taste buds with the best quality of spices to add
              spice to your life and devouring delicacies, Planetsera spices is
              a step ahead.
            </p>
          </div>
        </div>
        <div className="basis-1/12"></div>
      </div>
      <div className="container relative">
        <TechnologySection1 />
        <TechnologySection2 />

        <img src={checkbg(colorMe)} className="manuAb" />
      </div>
    </>
  )
}

export default TechnologySection
