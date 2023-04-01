import "./HeaderTwo.css"
import Logo from "./logo"
import Navigation from "./Navigation"
import SocialSection from "./SocialSection"
import PouchSection from "./PouchSection"
import bg from "@assets/images/HeroSlider.png"
import NavigationMobile from "./MobileNavigation/NavigationMobile"
const HeaderTwo = () => {
  return (
    <>
      <div className="navMobile">
        <NavigationMobile />
      </div>

      <div className="image-box flex absolute z-10 w-full flex-wrap px-6 ">
        <div className="basis-2/12 flex justify-start detailContainer">
          <Logo />
        </div>
        <div className="basis-9/12 flex justify-end items-baseline detailContainer">
          <Navigation />
        </div>

        <div className="basis-1/12 detailContainer">
          <SocialSection />
        </div>

        <div className="container flex flex-wrap w-full mt-40">
          <div className="basis-12/12 w-full flex">
            <div className="basis-1/12"></div>
            <div className="basis-10/12">
              <h1 className="text-center SecondPageHeading">
                Experience a burst of flavors with every sprinkle only with
                Planetera premium spices
              </h1>

              <p className="SecondPageHeading-text mt-5">
                Unlock the secrets of ancient spice blends and bring the
                timeless flavors of history into your kitchen
              </p>
            </div>

            <div className="basis-1/12"></div>
          </div>
          <div className="basis-12/12 flex w-full justify-center">
            <div className="basis-5/12"></div>
            <div className="basis-2/12 flex justify-center">
              <button type="button" class="text-white SecondPageButton btn2">
                Explore More
              </button>
            </div>
            <div className="basis-5/12"></div>
          </div>

          <div className="basis-12/12 flex w-full justify-around mt-5 ">
            <div className="basis-5/12"></div>
            <div className="basis-2/12 StarIcon flex justify-center">
              <i className="fa fa-star "></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="basis-5/12"></div>
          </div>
        </div>
        <PouchSection />
      </div>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container flex hero-Image"
      ></div>
    </>
  )
}

export default HeaderTwo
