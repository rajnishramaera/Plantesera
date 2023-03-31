import { useSelector } from "react-redux"

const Cards = ({ item }) => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="cards">
      <div className="card flex flex-col justify-center w-[100%] h-[80vh]">
        <div
          className="img-div card1 mx-auto"
          style={{
            backgroundImage: `url(${item.productImg})`,
          }}
        />
        <h1
          style={{ color: colorMe }}
          className="text-center product-name mt-4"
        >
          {item.productName}
        </h1>
        <p className="product-desc">{item.productDesc}</p>
      </div>
    </div>
  )
}

export default Cards
