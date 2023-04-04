import "./OurProduct.css"
import Our from "./OurProductData"

import masala2 from "@assets/images/masalabg.png"
import masala3 from "@assets/images/menu.png"
const OurProduct = () => {
  return (
    <div className="container relative mt-40 containerBorder">
      <div className="basis-12/12 absolute ourbg">
        <img loading="lazy" src={masala2} />
      </div>
      <div className="basis-12/12 groundbg"></div>
      <div className="basis-12/12 flex">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <p className="grounded-text">
            Spices are the beautiful expressions of a dish. And Cookme’s age old
            signature spices speak of the timeless traditions of authentic
            Indian cuisine.
          </p>
        </div>
        <div className="basis-1/12"></div>
      </div>
      <div className="basis-12/12 flex flex-wrap ml-4">
        {Our.map((items) => {
          return (
            <div className="basis-4/12 mb-20">
              <img
                loading="lazy"
                src={items.ourproductImage}
                style={{ width: "fit-content", height: "fit-content" }}
              />

              <h2 className="grounded-text5">{items.productText}</h2>
              <p className="grounded-text3">{items.productGaram}</p>
              <p className="grounded-text4">(Zipper Pouch)</p>
            </div>
          )
        })}
      </div>
      <div className="basis-12/12 absolute myMenu">
        <img loading="lazy" src={masala3} />
      </div>
    </div>
  )
}

export default OurProduct
