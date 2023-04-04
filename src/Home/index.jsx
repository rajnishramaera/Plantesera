import Header from "@Components/Header/Header"
import SectionMain from "@Components/SectionMain"
import SolutionSection from "@Components/SolutionSection"
import MasalaGrid from "@Components/MasalaGrid/MasalaGrid"
import ExperienceSection from "@Components/experience/ExperienceSection"
import FoodyProduct from "@Components/Foody/FoodySection"
import TechnologySection from "@Components/Technology/TechnologySection"
import SpiceandHealth from "@Components/SpiceandHealth/SpiceandHealth"
import Spices from "@Components/Spices/Spices"
import Footer from "@Components/Footer/Footer"
import Review from "@Components/Review/Review"
import NewsandBlog from "@Components/NewsandBlog/NewsandBlog"
import HandPicked from "@Components/HandpickedSpices/HandPicked"
import Recipes from "@Components/Recipes/Recipes"

const Home = () => {
  return (
    <>
      <Header />
      <SectionMain />
      <FoodyProduct />
      <TechnologySection />
      <SolutionSection />
      <ExperienceSection />
      <MasalaGrid />
      <Recipes />
      <HandPicked />
      <NewsandBlog />
      <Review />
      <SpiceandHealth />
      <Spices />
      <Footer />
    </>
  )
}

export default Home
