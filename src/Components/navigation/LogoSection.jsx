import "../Header/Header.css"
import logoImage from "@assets/images/logo.png"
const LogoSection = () => {
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
          <a href="#" className="heading-text myHover">
            Diverse blend
          </a>

          <a href="#" class="heading-text myHover">
            {" "}
            of culture and{" "}
          </a>
          <a href="#" class="heading-text myHover-taste">
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
