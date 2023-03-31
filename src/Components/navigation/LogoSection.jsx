import "../Header/Header.css"
import logoImage from "@assets/images/logo.png"
import { useSelector } from "react-redux"

const LogoSection = () => {
  const color = useSelector((state) => state.colorUs.color)
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
        <h1 className="heading-text">
          <a href="#" className="heading-text myHover text-red-400">
            Diverse blend
          </a>

          <a href="#" class="heading-text myHover text-red-400">
            {" "}
            of culture and{" "}
          </a>
          <a href="#" class="heading-text myHover-taste text-red-400">
            taste
          </a>
        </h1>

        <p className="sub-text my-3">
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>

        <a href="#" className="explore btn1 my-5">
          Explore More
        </a>
      </div>
    </div>
  )
}

export default LogoSection
