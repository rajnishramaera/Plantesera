import React from "react";
import QualitySection from "@components/QualityManagement/QualitySection";
import StorySection from "@components/HowtoStory/StorySection";
import TechnologyPeopleSection from "@components/TechnologyPeople/TechnologyPeopleSection";
import AboutBannerSection from "@components/AboutBanner/AboutBannerSection";
import WhyPlanetseraSection from "@components/WhyPlanetsera/WhyPlanetseraSection";
import ProcessSection from "@components/Process/ProcessSection";
import AdvanceSection from "@components/AdvanceTechnology/AdvanceSection";
const index = () => {
  return (
    <>
      <AdvanceSection />
      <ProcessSection />
      <WhyPlanetseraSection />
      <AboutBannerSection />
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
    </>
  );
};

export default index;
