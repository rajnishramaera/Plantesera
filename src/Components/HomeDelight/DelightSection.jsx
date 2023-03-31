import "./HomeDelight.css"
import masala1 from "@assets/images/delight-1.png"
import masala2 from "@assets/images/delight-2.png"
import masala3 from "@assets/images/delight-3.png"
import masala4 from "@assets/images/delight-4.png"
import masala5 from "@assets/images/delight-5.png"
import masala6 from "@assets/images/menu.png"

const DelightSection = () => {
  return (
    <div className="container relative">
      <div className="basis-12/12 flex my-24">
        <div className="basis-3/12"></div>
        <div className="basis-6/12">
          <h1 className="traditionalHead">Our Product</h1>
          <p className="traditionalText">
            Live in deliciousness every day. Cookme brings you authentic recipes
            and cooking range to give your taste buds a traditional treat.
          </p>
        </div>
        <div className="basis-3/12"></div>
      </div>
      <div className="basis-12/12 delightbg"></div>
      <div className="basis-12/12 flex">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <p className="delight-text">
            Live in deliciousness every day. Cookme brings you authentic recipes
            and cooking range to give your taste buds a traditional treat.
          </p>
        </div>
        <div className="basis-1/12"></div>
      </div>

      <div class="container grid grid-cols-3 gap-2 mx-auto">
        <div class="w-full rounded">
          <img loading="lazy" src={masala1} className="mx-auto pouch-size" />
          <h2 className="delight-text2">Sabji Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded">
          <img loading="lazy" src={masala2} className="mx-auto pouch-size" />
          <h2 className="delight-text2">Jaljeera Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded">
          <img loading="lazy" src={masala3} className="mx-auto pouch-size" />
          <h2 className="delight-text2">Garam Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded">
          <img loading="lazy" src={masala4} className="mx-auto pouch-size1" />
          <h2 className="delight-text2">Chat Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
        <div class="w-full rounded">
          <img
            loading="lazy"
            src={masala5}
            className="mx-auto pouch-size1"
            style={{ marginLeft: "50px" }}
          />
          <h2 className="delight-text2">Meat Masala</h2>

          <p className="delight-text3">(Pouch)</p>
        </div>
      </div>

      <div className="basis-12/12 absolute blendedMenuImg">
        <img loading="lazy" src={masala6} />
      </div>
    </div>
  )
}

export default DelightSection
