import masalaBackground from "@assets/images/masalabg.png"
import absol from "@assets/images/masalaAbsolute.png"
import Our from "../OurProduct/OurProductData"
// image size too big
function MasalaGrid() {
  return (
    <>
      <div className="container px-28 mx-auto lg:pt-22 mt-24">
        <div className="basis-12/12">
          <div data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-center my-5 bussiness-head">
              Perfect spicy twist for every occasion
            </h2>
          </div>
          <div data-aos="slide-left" data-aos-duration="1000">
            <p className="taste-text text-center text-md mb-3">
              Spices have an inseparable bond with our Indian culture. Each and
              every flavor of different spices in our country reflect the taste
              of the region and carry the story of the richness of our country.
              Relishing your taste buds with the best quality of spices to add
              spice to your life and devouring delicacies, Ramaera spices is a
              step ahead.
            </p>
          </div>
        </div>
        <div className="masalaMobile-flex" data-aos="slide-up">
          {Our.map((item) => {
            return (
              <div className="m-[2%] masalaMobile-width">
                <div className="w-full p-1 md:p-2 relative flex justify-center items-center">
                  <div className="flex justify-center items-end absolute h-3">
                    <h3 className={item.gradientProperty1}>
                      {item.masalaName}
                    </h3>
                  </div>
                  <img
                    loading="lazy"
                    src={item.masalaImg}
                    className="gra-img"
                  />
                </div>
              </div>
            )
          })}
          <img
            loading="lazy"
            src={masalaBackground}
            className="masala-background"
          />
        </div>
        <div className="basis-12/12 flex my-10">
          <div className="basis-5/12"></div>
          <div className="basis-2/12 flex justify-center items-center">
            <a
              href="#"
              className="masala-button mx-auto flex justify-center items-center btn-masala"
            >
              See All
            </a>
          </div>
          <div className="basis-5/12"></div>
        </div>
      </div>
      <img loading="lazy" src={absol} />
    </>
  )
}
export default MasalaGrid
