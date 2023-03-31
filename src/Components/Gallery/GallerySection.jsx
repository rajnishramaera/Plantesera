import "./GallerySection.css"

import GalleryImageOne from "./GalleryImageOne"
import GalleryImageTwo from "./GalleryImageTwo"
import GalleryImageThree from "./GalleryImageThree"
import GalleryImageFour from "./GalleryImageFour"
import GalleryImageFive from "./GalleryImageFive"
import GalleryImageSix from "./GalleryImageSix"

const GallerySection = () => {
  return (
    <div className="container mt-40 px-6">
      <div className="basis-12/12 flex justify-evenly w-full ">
        <div className="">
          <div class="content">
            <a href="#">
              <GalleryImageTwo />
            </a>
          </div>
          <div class="content">
            <a href="#">
              <GalleryImageThree />
            </a>
          </div>
        </div>

        <div className="">
          <div class="content">
            <a href="#">
              <GalleryImageFive />
            </a>
          </div>

          <div class="content">
            <a href="#">
              <GalleryImageSix />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
