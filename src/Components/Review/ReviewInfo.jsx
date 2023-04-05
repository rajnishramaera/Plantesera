import Quotes from "@assets/Quotes.png"
import Quotes2 from "@assets/Quotes2.png"
import Quotes3 from "@assets/Quotes3.png"
import customer from "@assets/customer.png"
import WestIcon from "@mui/icons-material/West"
import EastIcon from "@mui/icons-material/East"
import { useSelector } from "react-redux"

const ReviewInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color)
  const checkbg = (colorMe) => {
    if (colorMe === "#FF4F4F") {
      return Quotes
    }
    if (colorMe === "#ffde39") {
      return Quotes2
    }
    if (colorMe === "#2dc83c") {
      return Quotes3
    }
  }
  return (
    <div className="review-info   mt-64 md:mt-0">
      <h1 style={{ color: colorMe }} className="heading">
        Customer Review
      </h1>
      <div className="flex lg:ml-2 mt-6">
        <img
          src={checkbg(colorMe)}
          alt=""
          className="lg:mr-2 h-[60px] w-[60px] quotes"
        />
      </div>
      <p className="review-info-para mt-8">
        Families are created by love and warmth. Your love towards our spices
        has brought us together as a family because it is said, “ A family that
        eats together, stays together.”
      </p>
      <div className="customer-info flex mt-10 items-center">
        <img src={customer} alt="" className="rounded-full w-[72px] h-[72px]" />
        <div className="customer-name ml-5 flex w-[60%] justify-between">
          <div>
            <p
              style={{
                fontFamily: "Original Surfer",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "26px",
              }}
            >
              Anas Ahmad Khan
            </p>
            <p
              style={{
                fontFamily: "Josefin Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Customer
            </p>
          </div>
          {/*  <div>
            <WestIcon />
            <EastIcon className="ml-2" />
          </div> */}
        </div>
      </div>
      {/* <img src={transparentbg} alt="" className="absolute transbg" /> */}
    </div>
  )
}

export default ReviewInfo
