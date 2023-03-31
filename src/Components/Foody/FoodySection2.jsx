import product1 from "@assets/images/product-1.png"
import product2 from "@assets/images/product-2.png"
import product3 from "@assets/images/product-3.png"
const FoodySection2 = () => {
  return (
    <div className="basis-6/12 self-center pr-5">
      <div className="basis-12/12 pb-2.5">
        <img loading="lazy" src={product1} class="mx-w-full height-auto" />
      </div>
      <div
        className="basis-12/12 flex"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="basis-6/12">
          <img loading="lazy" src={product2} class="mx-w-full height-auto" />
        </div>
        <div className="basis-6/12">
          <img loading="lazy" src={product3} class="mx-w-full height-auto" />
        </div>
      </div>
    </div>
  )
}

export default FoodySection2
