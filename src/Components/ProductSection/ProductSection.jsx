import "./ProductSection.css"
import masala1 from "@assets/images/spi.png"

const ProductSection = () => {
  return (
    <>
      <div className="container spi-container">
        <img loading="lazy" src={masala1} className="spi-alignment" />
      </div>
      <div className="container w-full flex ProductSectionImg mt-40 flex-wrap relative">
        <div className="basis-12/12 flex justify-center items-center w-full productSec">
          <h2 className="ProductSection-text">Cardamom / Clove / Cumin</h2>
        </div>
      </div>
    </>
  )
}
export default ProductSection
