import foodImage from "@assets/images/foodimage.png"

import ExperienceSection2 from "./ExperienceSection2"
import ExperienceSection1 from "./ExperienceSection1"
function ExperienceSection() {
  return (
    <div className="container experience-flex px-5 py-2 mx-auto lg:pt-24 relative">
      <ExperienceSection1 />
      <ExperienceSection2 />
    </div>
  )
}

export default ExperienceSection
