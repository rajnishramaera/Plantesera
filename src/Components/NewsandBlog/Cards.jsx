const Cards = ({ item }) => {
  return (
    <div className="cards">
      <div className="card flex flex-col justify-center w-[100%] h-[80vh]">
        <div
          className="img-div card1 mx-auto"
          style={{
            backgroundImage: `url(${item.productImg})`,
          }}
        />
        <h1 className="text-center product-name mt-4">{item.productName}</h1>
        <p className="product-desc">{item.productDesc}</p>
      </div>
    </div>
  )
}

export default Cards
