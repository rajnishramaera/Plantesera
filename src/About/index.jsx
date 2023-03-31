import React from "react";
import QualitySection from "@components/QualityManagement/QualitySection";
import StorySection from "@components/HowtoStory/StorySection";
import TechnologyPeopleSection from "@components/TechnologyPeople/TechnologyPeopleSection";
import AboutBannerSection from "@components/AboutBanner/AboutBannerSection";
const index = () => {
  return (
    <>
      <AboutBannerSection />
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
    </>
  );
};

export default index;
