import HeaderTwo from "@components/HeaderTwo"
import ProductSection from "@components/ProductSection/ProductSection"
import InboxSection from "@components/InboxSection/InboxSection"
import GallerySection from "@components/Gallery/GallerySection"
import ExtraOrdinarySection from "@components/ExtraOrdinary/ExtraOrdinarySection"
import SpicySection from "@components/Spicy/SpicySection"
import OurProduct from "@components/OurProduct/OurProduct"
import RecipeMethod from "@components/RecipeMethod/RecipeMethod"
import MasalaGallery from "@components/masalaGallery/masalaGallery"
import FallLove from "@components/FallInLove/FallLove"
import GalleryMenu from "@components/GalleryMenu/GalleryMenu"
import InstagramRecipe from "@components/InstagramRecipe/InstagramRecipe"
import SliderProduct from "@components/Slider/SliderProduct"
import SuccessSection from "@components/ScreteSuccess/SuccessSection"
import DelightSection from "@components/HomeDelight/DelightSection"
import BlendedSection from "@components/Blended/BlendedSection"
import Footer from "@components/Footer/Footer"
import ProductInfoSection from "@components/ProductInfo/ProductInfoSection"

const Products = () => {
  return (
    <>
      <HeaderTwo />
      <GalleryMenu />
      <MasalaGallery />
      <SuccessSection />
      <ExtraOrdinarySection />
      <SpicySection />
      <FallLove />
      <ProductInfoSection />
      <SliderProduct />
      <ProductSection />
      <DelightSection />
      <BlendedSection />
      <OurProduct />
      <GallerySection />
      <RecipeMethod />
      <InstagramRecipe />
      <InboxSection />
      <Footer />
    </>
  )
}

export default Products
