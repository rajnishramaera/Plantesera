import React from "react";

export default function ExperienceSection2() {
  return (
    <>
      {/* <div className="basis-1/12"></div> */}
      <div className="basis-6/12 self-center p-14" data-aos="slide-left">
        <div>
          <h1 className="experience-heading mb-3">
            Extra ordinary taste And Experienced
          </h1>
          <div className="ordinaryLine"></div>
        </div>

        <p class="taste-text text-md mb-10" data-aos="fade-up">
          Families are created by love and warmth. Your love towards our spices
          has brought us together as a family because it is said, “ A family
          that eats together, stays together.”
          <br />
          <br />
          Your love and trust has made us one of the most trustworthy masala
          manufacturers and has enabled us to give years of excellence in taste.
        </p>
        <div className="experience-bg flex justify-around items-center">
          <div className="experience">
            <span>30+</span>
          </div>
          <div>
            <span className="experience-point-1">Year of</span>
            <br />
            <span className="experience-point-2">Experienced</span>
          </div>
        </div>
      </div>
    </>
  );
}
