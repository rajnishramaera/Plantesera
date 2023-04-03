import { useState } from "react"
import { Link } from "react-router-dom"
import logoImage from "@assets/images/logo.png"
import { useDispatch } from "react-redux"

const NavigationMobile = () => {
  const dispatch = useDispatch()

  const changeColor = () => {
    dispatch(changeColor("#FF4F4F"))
  }
  const [showMenu, setShowMenu] = useState(false)
  const toggleClick = () => {
    setShowMenu(true)
    // document.getElementById("navDropdown").style.display = "none";
    var x = document.getElementById("navDropdown")
    if (x.style.display === "none") {
      x.style.display = "block"
      // x.style.marginBottom = "500px";
      // x.style.transition = "all 3s";
    } else {
      x.style.display = "none"
    }
  }

  return (
    <div className="container">
      <div id="mobileNav" className="container flex w-full pb-1">
        <div className="basis-3/12 pl-3">
          <img
            loading="lazy"
            src={logoImage}
            alt="logo"
            className="h-auto my-4"
          />
        </div>
        {/* <div className="basis-9/12 flex justify-end pr-3">
          <i
            class="fa fa-bars self-center icon-design"
            aria-hidden="true"
            onClick={toggleClick}
          ></i>
        </div> */}
      </div>
      {/* {showMenu && (
        <div id="navDropdown" className="w-full">
          <ul id="mobilenavigation">
            <li>
              <Link to="/" onClick={() => changeColor()}>
                Home
              </Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>

            <li className="flex relative group">
              <a href="#" className="mr-1">
                Pages
              </a>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  )
}

export default NavigationMobile
