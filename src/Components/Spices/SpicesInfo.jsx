import { useSelector } from "react-redux"

const SpicesInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="spices-info lg:mt-[28%] lg:mr-20 relative">
      <h1 className="heading">Why We are best ?</h1>
      <div className="whyLine"></div>
      <p className="para mt-10 lg:w-[95%]">
        PlanetsEra Spices are enriched with the most authentic taste and
        enchanting aroma. Each step in the manufacturing process is responsibly
        supervised from picking out from the farms to delivering it to the
        stores, so that there is no compromise in the health of our consumers.
      </p>
      <div className="flex btn-container mt-10">
        <div
          style={{ backgroundColor: colorMe, cursor: "default" }}
          className="btn hand"
        >
          Handpicked from the <br />
          best farms
        </div>
        <div
          style={{ backgroundColor: colorMe, cursor: "default" }}
          className="btn ml-5 hand"
        >
          Grinded at lower temperatures
        </div>
      </div>
      <div className="flex btn-container mt-4">
        <div
          style={{ backgroundColor: colorMe, cursor: "default" }}
          className="btn hand"
        >
          Hygienic manufacturing
        </div>
        <div
          style={{ backgroundColor: colorMe, cursor: "default" }}
          className="btn ml-5 hand"
        >
          Quality preservation
        </div>
      </div>
    </div>
  )
}

export default SpicesInfo
