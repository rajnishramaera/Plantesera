import image from "@assets/ractangle.png"
import locationimage from "@assets/Location.png"
import mailimage from "@assets/Vector.png"
import callimage from "@assets/Call.png"
import instaimage from "@assets/Insta.png"
import facebookimage from "@assets/facebook.png"
import twitterimage from "@assets/twitter.png"
import { Grid } from "@mui/material"
import { width } from "@mui/system"
import { CREATE_CONTACT_RESPONSE } from "../../../apollo/queries"
import { useMutation } from "@apollo/client"

const ContactUsCentre = () => {
  const [createContactUsResponse] = useMutation(CREATE_CONTACT_RESPONSE)

  const handleSubmit = (e) => {
    console.log("form submit")
    e.preventDefault()
    // {
    //   createContactUsResponse({
    //     variables: {
    //       name: name,
    //       email: email,
    //       company: company,
    //       Subject: Subject,
    //       message: message,
    //     },
    //   })
    // }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className=" p-12 md:p-12 bg-cover flex flex-col md:flex-row"
    >
      <div className=" w-3/3 md:w-2/3 rounded-xl bg-white p-2 md:p-8 ">
        {/* <div className=" md:p-1 border-y-2  border-orange-200 w-fit	">MAIL US</div> */}
        <div className="tracking-[5px] md:tracking-[10px] text-xl md:text-4xl my-1 md:my-4">
          {" "}
          Have a Question?
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="border border-black rounded-2xl w-full md:w-[48%] md:my-4 my-1 p-2 md:mr-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="border  border-black rounded-2xl w-full md:w-[48%] md:my-4 my-1 p-2 m md:mr-2"
            type="text"
            placeholder="Email"
          />

          <input
            className="border border-black rounded-2xl w-full md:w-[48%] md:my-4 my-1 p-2 md:mr-2"
            type="text"
            placeholder="Subject"
          />
          <input
            className="border border-black rounded-2xl w-full md:w-[48%] md:my-4 my-1 p-2 md:mr-2"
            type="text"
            placeholder="Phone"
          />

          <textarea
            className="border border-black rounded-2xl w-full md:w-[97%] md:my-6 my-2 md:p-10 p-4 md:mr-2"
            type="text"
            placeholder="Message"
          />

          <button
            type="submit"
            className=" border rounded-full  md:w-[25vh] w-[25vh] h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white  border-black"
          >
            Send
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-white md:text-[30px] text-[25px] md:px-7 px-2 md:py-20 py-5 h-2 min-h-0 md:min-h-0">
          Contact Information
        </h2>

        <p className="text-white md:text-[17px] text-[12px]  md:px-7 px-3 md:py-2 py-5 hy-2">
          Bring the table win-win survival strategies
          <br /> ensure proactive domination the end of <br />
          the day going real times multiple touch
          <br />
          -points.
        </p>

        <div className="flex">
          <div className="md:p-8 p-3 hover:scale-105">
            <img src={locationimage} />
          </div>

          <div className="text-white md:p-6 ">
            H-150, Sector-63 Noida, Gauttam Budh Nagar, 201301
          </div>
        </div>

        <div className="flex">
          <div className="md:p-9 p-2  w-22  hover:scale-105">
            <img src={mailimage} />
          </div>

          <div className="text-white md:p-6 p-1 ">Care@ramaera.in</div>
        </div>

        <div className="flex">
          <div className="md:p-7 p-1 w-22  hover:scale-105">
            <img src={callimage} />
          </div>

          <div className="text-white md:p-8 p-1">0120-4152818</div>
        </div>

        <div className="flex md:p-9 p-4">
          <div className="pr-10  hover:scale-105">
            <img src={instaimage} />
          </div>

          <div className="pr-10  hover:scale-105">
            <img src={facebookimage} />
          </div>

          <div className="pr-10  hover:scale-105">
            <img src={twitterimage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsCentre
