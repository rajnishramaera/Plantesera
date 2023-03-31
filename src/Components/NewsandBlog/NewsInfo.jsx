import masala2 from "@assets/blogabsolute.png"

const NewsInfo = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img loading="lazy" src={masala2} />
      <div className="basis-12/12 flex">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h1 className="heading text-center">Latest News and Blog</h1>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="blog-para mt-4 text-center">
              Spices have an inseparable bond with our Indian culture. Each and
              every flavor of different spices in our country reflect the taste
              of the region and carry the story of the richness of our country.
              Relishing your taste buds with the best quality of spices to add
              spice to your life and devouring delicacies, Ramaera spices is a
              step ahead.
            </p>
          </div>
        </div>
        <div className="basis-1/12"></div>
      </div>
    </div>
  )
}

export default NewsInfo
