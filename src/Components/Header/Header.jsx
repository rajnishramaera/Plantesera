import "./Header.css"
import sliderImage0 from "@assets/images/slider.png"
import sliderImage1 from "@assets/images/slider3.png"
import sliderImage2 from "@assets/images/slider2.png"
import background0 from "@assets/images/background.png"
import background1 from "@assets/images/background2.png"
import background2 from "@assets/images/background3.png"
import LogoSection from "@Components/Navigation/LogoSection"
import NavItem from "@Components/Navigation/NavItem"
import NavigationMobile from "@Components/MobileNavigation/NavigationMobile"
import { useState } from "react"
import masala1 from "@assets/images/spi-2.png"
import { useDispatch } from "react-redux"
import { PouchData } from "./PouchData"
import { changeColor } from "../../../state/slice/colorUsSlice"
function Header() {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false)
  const [bgcolor, setBgcolor] = useState(background0)
  const [slider, setSlider] = useState(sliderImage0)

  const changeTheColor = (index) => {
    if (index === 0) {
      setBgcolor(background0)
      setSlider(sliderImage0)
      dispatch(changeColor("#FF4F4F"))
    }
    if (index === 1) {
      setBgcolor(background1)
      setSlider(sliderImage1)
      dispatch(changeColor("#ffde39"))
    }
    if (index === 2) {
      setBgcolor(background2)
      setSlider(sliderImage2)
      dispatch(changeColor("#2dc83c"))
    }
  }
  const toggleClick = () => {
    setShowMenu(true)
    // document.getElementById("navDropdown").style.display = "none";
    var x = document.getElementById("navDropdown")
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  return (
    <>
      <header className="bg-white">
        <nav className="relative">
          {/*   <NavigationMobile /> */}

          <div className="container nav-flex">
            <LogoSection />
            <div
              className="basis-8/12 slider-Image"
              style={{
                backgroundImage: `url(${bgcolor})`,
              }}
            >
              <div className="basis-12/12 flex items-center justify-center">
                <div className="basis-8/12">{/*  <NavItem /> */}</div>
              </div>
              <div className="basis-12/12 flex">
                <div className="basis-4/12 header-display"></div>
                <div className="basis-8/12 ">
                  <img src={slider} className="header-img" />
                </div>
              </div>
            </div>
            <div id="mobile-pouch">
              <div
                className="basis-12/12 flex absolute image-top w-full"
                style={{ right: "0%", top: "38%" }}
              >
                <div className="basis-12/12 flex justify-between relative w-full">
                  {PouchData.map((item, index) => {
                    return (
                      <div classsName={`${item.mobileBox1}`} flex justify-start>
                        <img
                          loading="lazy"
                          src={item.masalaImg}
                          onClick={() => {
                            changeTheColor(index)
                          }}
                          className={`${item.imageBox1}`}
                          absolute
                          z-10
                        />
                        <div
                          className={`${item.mobilePouch1}`}
                          flex
                          justify-center
                          items-end
                          absolute
                        ></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div id="desktop-pouch">
              <div
                className="basis-12/12 flex absolute image-top w-full"
                style={{ top: "100%" }}
              >
                <img loading="lazy" src={masala1} className="redChilli" />
                <div className="basis-4/12 flex"></div>

                <div className="basis-8/12 flex justify-end relative">
                  {PouchData.map((item, index) => {
                    return (
                      <div className="hover:scale-110 transition-all">
                        <img
                          loading="lazy"
                          src={item.masalaImg}
                          onClick={() => {
                            changeTheColor(index)
                          }}
                          width={"175px"}
                          className="pr-3 cursor-pointer"
                        />
                        <div
                          className={`${item.pouchProperty1} flex justify-center items-end absolute `}
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="clearfix"></div>
      </header>
    </>
  )
}

export default Header
