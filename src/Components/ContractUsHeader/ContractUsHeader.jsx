import image from "@assets/Headerimage.png"
import logo from "@assets/logo.png"
import frame from "@assets/Frame.png"

const ContactUsHeader = () => {
  return (
    <div
      className="md:h-[80vh] h-[22vh] bg-contain  bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="w-20 md:w-48 p-3 md:p-[3vh] absolute">
        <img src={logo} />
      </div>

      <div className="text-white text-center py-12 md:py-[21vh]  md:mx-4 mx-[10vh]  md:text-6xl text-xs  body-font font-poppins  ">
        Experience a burst of flavors with every sprinkle only with PlanetsEra
        premium spices
      </div>

      <div className="md:mt-[-25vh] mt-[-9vh] md:p-24 p-8  md:w-full w-95 ">
        <img src={frame} />
        <p className="text-center md:text-6xl  mt-[-5vh] md:mt-[-20vh] md:tracking-[18px] tracking-[4px] font-light">
          Contact Us
        </p>
      </div>
    </div>
  )
}

export default ContactUsHeader
