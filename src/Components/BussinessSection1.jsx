import "../App.css"
import { useSelector } from "react-redux"
import machines from "@assets/images/machine3.png"
import machines2 from "@assets/images/machine2.png"
import machines3 from "@assets/images/machine3.png"

function BussinessSection() {
  const colorMe = useSelector((state) => state.colorUs.color)
  //console.log("machine", colorMe)
  const checkbg = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return machines
    }
    if (colorMe === "#ffde39") {
      return machines2
    }
    if (colorMe === "#2dc83c") {
      return machines3
    }
  }
  return (
    <div className="container mt-40">
      <div className="basis-12/12">
        <h2 className="taste text-center mb-10">
          PlanetsEra Manufacturing Process
        </h2>
      </div>

      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-5/12 bussiness-Item pl-14">
          <h1 className="bussiness-head my-3">
            Preservation Using Latest Technology
          </h1>

          <p className="taste-text mb-3">
            To maintain the quality and originality of the spices, we make sure
            that the spices are stored and maintained at lower temperatures
          </p>

          <p className="taste-text mb-3">
            Contemporary spice industries, use hammer mills that enable the
            temperature to rise upto 120°C , which causes the spices to lose
            their pungency and flavors.
          </p>
        </div>
        <div className="basis-2/12"></div>
        <div className="basis-5/12 relative">
          <img loading="lazy" className="absolute w-max-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default BussinessSection
