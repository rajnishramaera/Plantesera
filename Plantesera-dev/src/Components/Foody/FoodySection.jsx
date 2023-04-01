import FoodySection1 from "./FoodySection1";
import FoodySection2 from "./FoodySection2";
function FoodySection() {
  return (
    <div class="container flex mt-40">
      <div
        class="basis-12/12 foodyBackground bussiness-Flex bg-no-repeat"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <FoodySection1 />
        <div class="col-1"></div>
        <FoodySection2 />
      </div>
    </div>
  );
}
export default FoodySection;
