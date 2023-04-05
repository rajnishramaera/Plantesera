import "./GalleryMenu.css"

const GalleryMenu = () => {
  return (
    <div className="container mt-56 mb-20 galleryContainer">
      <div className="basis-12/12 flex text-center justify-center">
        {/* <div className="basis-3/12"></div> */}
        <div >
          <h1 className="GalleryMenuHeading" id="exploreSection">CHOOSE HAND SELECTED PREMIUM SPICES</h1>
          <p className="GalleryMenuText">
          PlanetsEra spices offers variety of the most desirable spices that relish your the taste buds and display the true essence of Indian cuisine.
          </p>
        </div>
        {/* <div className="basis-3/12"></div> */}
      </div>
    </div>
  )
}

export default GalleryMenu
