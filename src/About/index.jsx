import React from "react";
import QualitySection from "@components/QualityManagement/QualitySection";
import StorySection from "@components/HowtoStory/StorySection";
import TechnologyPeopleSection from "@components/TechnologyPeople/TechnologyPeopleSection";
import AboutBannerSection from "@components/AboutBanner/AboutBannerSection";
import WhyPlanetseraSection from "@components/WhyPlanetsera/WhyPlanetseraSection";
import ProcessSection from "@components/Process/ProcessSection";
import AdvanceSection from "@components/AdvanceTechnology/AdvanceSection";
import DishSection from "@components/Dish/DishSection";
import IngredientSection from "@components/Ingredients/IngredientSection";
import PlanetseraSection from "@components/PlanetseraMasala/PlanetseraSection";
import DiscoverSection from "@components/Discover/DiscoverSection";
const index = () => {
  return (
    <>
      <DiscoverSection />
      <DishSection />
      <IngredientSection />
      <AdvanceSection />
      <PlanetseraSection />
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
