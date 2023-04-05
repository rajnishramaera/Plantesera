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
import DigitalGallery from "@components/Digital/DigitalGallery";
import AboutHeader from "@components/AboutHeader/AboutHeader";
import CompanySection from "@components/CompanyGallery/CompanySection";
import Footer from "@components/Footer/Footer";
const index = () => {
  return (
    <>
      <AboutHeader />
      <DiscoverSection />
      <DishSection />
      <DigitalGallery />
      <PlanetseraSection />
      <IngredientSection />
      <AdvanceSection />

      <ProcessSection />
      <WhyPlanetseraSection />
      <AboutBannerSection />
      <StorySection />
      <QualitySection />
      <TechnologyPeopleSection />
      <CompanySection />
      <Footer />
    </>
  );
};

export default index;
