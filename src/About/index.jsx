import React from "react"
import QualitySection from "@Components/QualityManagement/QualitySection"
import StorySection from "@Components/HowtoStory/StorySection"
import TechnologyPeopleSection from "@Components/TechnologyPeople/TechnologyPeopleSection"
import AboutBannerSection from "@Components/AboutBanner/AboutBannerSection"
const index = () => {
  ////erfref
  return (
    <>
      <AboutBannerSection />
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
    </>
  )
}

export default index
