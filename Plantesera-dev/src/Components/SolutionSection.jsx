import "../App.css"
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
