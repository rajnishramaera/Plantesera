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
        className="max-w-auto h-14 mt-4 "
      />
      <div className="basis-4/12 mt-12   text-alignment">
        <h1
          style={{ color: colorMe }}
          className="heading-textt absolute top-32 text-4xl mt-32 md:text-8xl hidden md:block"
        >
          Diverse blend
          <br />
          of culture and
          <br />
          taste
        </h1>
        <h1
          style={{ color: "white" }}
          className="heading-textt text-4xl mt-32 md:text-8xl text-white hidden md:block select-none	"
        >
          Diverse blend of culture and taste
        </h1>
        <h1
          style={{ color: colorMe }}
          className="heading-textt text-4xl mt-32 md:text-8xl text-white md:hidden "
        >
          Diverse blend of culture and taste
        </h1>

        <p className="sub-text my-3">
          Uniting the diverse blend of our cultural richness and taste with
          Planetsera spices
        </p>

        <a
          href="#produce"
          className="explore btn1 py-4"
          style={{
            backgroundColor: colorMe,
            cursor: "pointer",
            zIndex: "19",
            fontWeight: "bold",
          }}
        >
          Explore More
        </a>
      </div>
    </div>
  )
}

export default LogoSection
