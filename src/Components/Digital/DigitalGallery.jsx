import { swiffyslider } from "swiffy-slider";
import "./DigitalGallery.css";
import digitalOne from "@assets/images/digitalAb.png";
window.swiffyslider = swiffyslider;
window.addEventListener("load", () => {
  window.swiffyslider.init();
});
const DigitalGallery = () => {
  return (
    <div className="swiffy-slider slider-item-show2 slider-nav-sm slider-nav-page slider-item-snapstart slider-item-nogap slider-nav-round slider-nav-dark slider-indicators-sm slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-slideup slider-item-first-visible mt-40">
      <div className="slider-container">
        <div className="p-3 p-xl-5 text-light slide-visible">
          <h3 className="choose-heading">
            The Reasons to Choose PlanetsEra Spices
          </h3>
        </div>
        <div className="p-3 p-xl-5 text-light slide-visible relative">
          <h3 className="reason-heading mb-5">Quality Control Measures</h3>
          <div className="quality-line"></div>
          <p className="reason-text">
            At PlanetsEra Spices, we prioritise quality control. We meticulously
            monitor every stage of the manufacturing process to ensure
            consistency and high-quality standards. We only accept the highest
            quality raw materials, use industry best practices, and conduct
            rigorous testing to ensure our spices meet our strict quality
            standards. Our dedication to quality control ensures our customers
            receive fresh, delicious, and safe spices every time.
          </p>
          <a href="#" class="read-button">
            Read More
          </a>
          <div className="read-line"></div>
        </div>

        <div className="p-3 p-xl-5 text-light slide-visible">
          <h3 className="choose-heading">
            The Reasons to Choose PlanetsEra Spices
          </h3>
        </div>
        <div className="p-3 p-xl-5 text-light slide-visible">
          <h3 className="reason-heading mb-5">Quality Control Measures</h3>
          <p className="reason-text">
            At PlanetsEra Spices, we prioritise quality control. We meticulously
            monitor every stage of the manufacturing process to ensure
            consistency and high-quality standards. We only accept the highest
            quality raw materials, use industry best practices, and conduct
            rigorous testing to ensure our spices meet our strict quality
            standards. Our dedication to quality control ensures our customers
            receive fresh, delicious, and safe spices every time.
          </p>
          <a href="#" class="read-button">
            Read More
          </a>
          <div className="read-line"></div>
        </div>

        <div className="p-3 p-xl-5 text-light slide-visible">
          <h3 className="choose-heading">
            The Reasons to Choose PlanetsEra Spices
          </h3>
        </div>
        <div className="p-3 p-xl-5 text-light slide-visible">
          <h3 className="reason-heading mb-5">Quality Control Measures</h3>
          <p className="reason-text">
            At PlanetsEra Spices, we prioritise quality control. We meticulously
            monitor every stage of the manufacturing process to ensure
            consistency and high-quality standards. We only accept the highest
            quality raw materials, use industry best practices, and conduct
            rigorous testing to ensure our spices meet our strict quality
            standards. Our dedication to quality control ensures our customers
            receive fresh, delicious, and safe spices every time.
          </p>
          <a href="#" class="read-button">
            Read More
          </a>
          <div className="read-line"></div>
        </div>
      </div>

      <button
        type="button"
        className="slider-nav"
        aria-label="Go left"
      ></button>
      <button
        type="button"
        className="slider-nav slider-nav-next"
        aria-label="Go left"
      ></button>

      <div className="slider-indicators d-md-none">
        <button className="active" aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
      </div>
      <img src={digitalOne} className="w-full" />
    </div>
  );
};

export default DigitalGallery;
