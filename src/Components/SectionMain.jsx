import "../App.css"
import mOne from "@assets/images/m1.png"

function SectionMain() {
  return (
    <div className="container mt-401 bg-no-repeat relative">
      <div className="basis-12/12 flex taste-cooking">
        <div className="basis-12/12 w-full">
          <div data-aos="slide-left" data-aos-anchor-placement="top-bottom">
            <h2 className="text-center produce-heading my-5">
              Producing the treasures of the Indian cuisines
            </h2>
          </div>
        </div>
      </div>
      <div className="basis-12/12 flex px-5">
        <div className="basis-12/12 w-full">
          <div data-aos="slide-right">
            <p class="taste-text text-center text-md">
              Spices have an inseparable bond with our Indian culture. Each and
              every flavor of different spices in our country reflect the taste
              of the region and carry the story of the richness of our country.
              Relishing your taste buds with the best quality of spices to add
              spice to your life and devouring delicacies, Ramaera spices is a
              step ahead.
            </p>
          </div>
        </div>
      </div>

      <div className="basis-12/12 flex my-3 px-5">
        <div className="basis-12/12 w-full">
          <img
            loading="lazy"
            src={mOne}
            class="max-w-full h-auto vert-move mx-auto"
          />
        </div>
      </div>
    </div>
  )
}
export default SectionMain
