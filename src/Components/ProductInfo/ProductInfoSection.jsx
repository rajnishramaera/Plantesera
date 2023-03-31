import "./ProductInfo.css"
import masala3 from "@assets/images/ProductInfo-1.png"

const ProductInfoSection = () => {
  return (
    <>
      <div class="box">
        <a class="button" href="#myBox">
          <img loading="lazy" src={masala3} className="myBox" />
        </a>
      </div>
    </>
  )
}

export default ProductInfoSection
