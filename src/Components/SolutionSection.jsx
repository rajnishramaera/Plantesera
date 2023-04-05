/*import "../App.css"
import spice from "@assets/images/spcies.png"
import solutionBg from "@assets/images/desireAb.png"

function SolutionSection() {
  return (
    <div className="container mt-96">
      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-7/12 solution-background" data-aos="slide-right">
          <img
            loading="lazy"
            src={spice}
            class="solution-image w-max-full h-auto"
          />
        </div>

        <div className="basis-5/12 self-center spices-pad">
          <div data-aos="fade-up">
            <h1 class="bussiness-head-mobile my-3">
              Get the Desired Flavour and Aroma with PlanetsEra Spices
            </h1>
          </div>
          <div data-aos="fade-down">
            <p className="taste-text my-5">
              Using the most advanced tech of Air Classifying Mills, spices are
              produced at subzero temperature which helps them retain the
              uniqueness of their flavour.
            </p>
          </div>
        </div>
      </div>
      <img loading="lazy" src={solutionBg} />
    </div>
  )
}

export default SolutionSection
*/

import "../App.css"

import spice from "@assets/images/spcies.png"
import spice2 from "@assets/images/spcies2.png"
import spice3 from "@assets/images/spcies3.png"
import spicebg from "@assets/images/desireAb.png"
import { useSelector } from "react-redux"

function SolutionSection() {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkbg = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return spice
    }
    if (colorMe === "#ffde39") {
      return spice2
    }
    if (colorMe === "#2dc83c") {
      return spice3
    }
  }
  return (
    <div className="container mt-[500px] md:mt-96">
      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-7/12 solution-background" data-aos="slide-right">
          <img
            src={checkbg(colorMe)}
            className="solution-image w-max-full h-auto my-12 md:my-0"
          />
        </div>
        <div className="basis-1/12"></div>
        <div className="basis-5/12 self-center spices-pad">
          <div data-aos="fade-up">
            <h1
              style={{ color: colorMe }}
              class="bussiness-head-mobile my-24 md:my-3"
            >
              Get the Desired Flavour and Aroma with PlanetsEra Spices
            </h1>
            <div className="desireLine"></div>
          </div>
          <div data-aos="fade-down">
            <p className="taste-text my-5">
              Using the most advanced tech of Air Classifying Mills, spices are
              produced at subzero temperature which helps them retain the
              uniqueness of their flavour.
            </p>
          </div>
        </div>
      </div>
      <img src={spicebg} />
    </div>
  )
}

export default SolutionSection
