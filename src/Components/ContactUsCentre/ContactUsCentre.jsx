import image from "@assets/ractangle.png";
import locationimage from "@assets/Location.png";
import mailimage from "@assets/Vector.png";
import callimage from "@assets/Call.png";
import instaimage from "@assets/Insta.png";
import facebookimage from "@assets/facebook.png";
import twitterimage from "@assets/twitter.png";
import { Grid } from "@mui/material";
import { width } from "@mui/system";
import { CREATE_CONTACT_RESPONSE } from "../../../apollo/queries";
import { useMutation } from "@apollo/client";
import "./ContactUsCenter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsCentre = () => {
  const [createContactUsResponse] = useMutation(CREATE_CONTACT_RESPONSE);

  const handleSubmit = (e) => {
    console.log("form submit");
    e.preventDefault();
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
    clearForm();
  };
  const clearForm = () => {
    toast.success("Message Submitted!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      location.reload();
    }, "3200");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className=" p-12 md:p-14 bg-cover flex flex-col md:flex-row"
    >
      <div className=" w-3/3 md:w-2/3 rounded-xl bg-white p-2 md:p-8 md:m-4 ">
        {/* <div className=" md:p-1 border-y-2  border-orange-200 w-fit	">MAIL US</div> */}
        <div className="tracking-[5px] md:tracking-[10px] text-xl md:text-4xl my-1 md:my-4 HeadText">
          {" "}
          Have a Question?
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ToastContainer />

          <input
            className="border  h-16 placeholder:text-slate-800 placeholder:font-light placeholder:text-xl pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4  my-1 p-2 md:mr-2 FontText"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border h-16 placeholder:text-slate-800 placeholder:font-light placeholder:text-xl pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4 md:mx-2 my-1 p-2 m md:mr-2 FontText"
            type="email"
            placeholder="Email"
            required
          />

          <input
            className="border h-16 placeholder:text-slate-800 placeholder:font-light placeholder:text-xl pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4 my-1 p-2 md:mr-2 FontText"
            type="text"
            placeholder="Subject"
            required
          />
          <input
            className="border h-16 placeholder:text-slate-800 placeholder:font-light placeholder:text-xl pl-4 border-black rounded-2xl w-full md:w-[48%] md:my-4 md:mx-2 my-1 p-2 md:mr-2 FontText"
            type="number"
            placeholder="Phone"
            required
          />

          <textarea
            className="border placeholder:text-slate-800 placeholder:font-light placeholder:text-xl placeholder:pl-0  border-black rounded-2xl w-full md:w-[98%] md:my-6  my-2 md:p-4 p-4 md:mr-2 h-36 FontText"
            type="text"
            placeholder="Message"
            required
          />

          <button
            type="submit"
            className=" border rounded-2xl  md:w-36 w-[25vh] h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white  border-black FontText"
          >
            Send
          </button>
        </form>
      </div>
      <div className=" flex flex-col gap-[0px] md:pl-4">
        <h2 className="text-white md:text-[31px] text-[25px] font-black tracking-wider	 md:px-0 px-2  py-5 md:py-10 md:pt-20 md:pb-12 h-2 min-h-0 md:min-h-0  infoText">
          Contact Information
        </h2>

        <p className="text-white md:text-[21px] text-[12px] tracking-wide md:px-0 px-3 md:py-2 py-5 hy-2 font-light">
          Bring the table win-win survival strategies
          <br /> ensure proactive domination the end of <br />
          the day going real times multiple touch-
          <br />
          points.
        </p>

        <div className="flex">
          <div className="  md:p-[-3vh] p-3 hover:scale-105">
            <img src={locationimage} />
          </div>

          <div className="text-white md:pb-3 md:m-1 p-1 address">
            H-150, Sector-63 Noida, Gautam Budh Nagar, 201301
          </div>
        </div>

        <div className="flex">
          <div className="md:p-4 p-2  w-22  hover:scale-105">
            <img src={mailimage} />
          </div>

          <div className="text-white md:p-3 p-1 infoText ">Care@ramaera.in</div>
        </div>

        <div className="flex">
          <div className="md:p-3 p-1 w-22  hover:scale-105">
            <img src={callimage} />
          </div>

          <div className="text-white md:p-4 p-1 infoText">0120-4152818</div>
        </div>

        <div className="flex md:p-5  p-4">
          <div className="pr-10  hover:scale-105">
            <a
              href="https://www.instagram.com/planetseraspices/"
              target="_blank"
            >
              <img src={instaimage} />
            </a>
          </div>

          <div className="pr-10  hover:scale-105">
            <a href="https://www.facebook.com/planetseraspices" target="_blank">
              <img src={facebookimage} />
            </a>
          </div>

          <div className="pr-10  hover:scale-105">
            <a href="https://twitter.com/Planetseraspice" target="_blank">
              <img src={twitterimage} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCentre;
