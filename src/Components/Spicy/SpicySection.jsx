import "./SpicySection.css"
import SpicyData from "./SpicyData"

const SpicySection = () => {
  return (
    <div className="container mt-40 px-6">
      <div className="basis-12/12 flex ml-7">
        {SpicyData.map((items) => {
          return (
            <div className="basis-2/12 relative flex">
              <div className="background" style={{ width: "81%" }}>
                <img
                  loading="lazy"
                  src={items.spicyImage}
                  className="w-full mt-14"
                />
              </div>
              <div className="myImpor">
                <img loading="lazy" src={items.spicyImageBox} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpicySection
