import Header from "@components/Header/Header"
import SectionMain from "@components/SectionMain"
import SolutionSection from "@components/SolutionSection"
import MasalaGrid from "@components/MasalaGrid/MasalaGrid"
import ExperienceSection from "@components/experience/ExperienceSection"
import FoodyProduct from "@components/Foody/FoodySection"
import TechnologySection from "@components/Technology/TechnologySection"
import SpiceandHealth from "@components/SpiceandHealth/SpiceandHealth"
import Spices from "@components/Spices/Spices"
import Footer from "@components/Footer/Footer"
import Review from "@components/Review/Review"
import NewsandBlog from "@components/NewsandBlog/NewsandBlog"
import HandPicked from "@components/HandpickedSpices/HandPicked"
import Recipes from "@components/Recipes/Recipes"

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
