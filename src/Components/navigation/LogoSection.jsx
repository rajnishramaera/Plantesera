import "../Header/Header.css"
import logoImage from "@assets/images/logo.png"
import { useSelector } from "react-redux"

const LogoSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  return (
    <div className="basis-4/12 pl-5 myPos">
      <img
        loading="lazy"
        id="desktopNav"
        src={logoImage}
        alt="logo"
        className="max-w-auto h-auto my-4"
      />
      <div className="basis-4/12 text-alignment">
        <h1
          style={{ color: colorMe }}
          className="heading-textt text-4xl md:text-7xl"
        >
          Diverse blend of culture and taste
        </h1>

        <p className="sub-text my-3">
          Uniting the diverse blend of our cultural richness and taste with
          Planetsera spices
        </p>

        <a
          href="#produce"
          className="explore btn1 "
          style={{ backgroundColor: colorMe, cursor: "pointer", zIndex: "99" }}
        >
          Explore More
        </a>
      </div>
    </div>
  )
}

export default LogoSection
