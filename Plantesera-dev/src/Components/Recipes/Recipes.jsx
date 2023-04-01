import "./recipes.css"
import { InstagramEmbedDangerousHTML } from "./InstagramFeed"
import { SocialIcon } from "./SocialIcon"

const Recipes = () => {
  return (
    <div className="recipes lg:w-[95%] mx-auto mt-32">
      <div className="flex justify-center">
        <h1 className="heading" data-aos="fade-up">
          Check out the yummiest recipes{" "}
        </h1>
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center">
        {SocialIcon.map((item) => {
          return (
            <div className="video-cards flex w-11/12 justify-around mx-auto mt-10 items-center">
              <div
                className="shadow-lg p-4 relative"
                style={{ border: "1px solid #dbdbdb" }}
              >
                <div
                  className="z-[100]bg-500-red h-8 w-8 absolute"
                  style={{ right: "7%", top: "40%" }}
                >
                  <a href={`${item.instaLink}`} target="_blank">
                    <img
                      loading="lazy"
                      src={`${item.shareIcon}`}
                      className="mb-10"
                    />
                  </a>
                  <a href={`${item.instaLink}`} target="_blank">
                    <img
                      loading="lazy"
                      src={`${item.commentIcon}`}
                      className="mb-10"
                    />
                  </a>

                  <a href={`${item.instaLink}`} target="_blank">
                    <img
                      loading="lazy"
                      src={`${item.likeIcon}`}
                      className="mb-10"
                    />
                  </a>
                </div>
                <InstagramEmbedDangerousHTML url={`${item.instaLink}`} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center"></div>
    </div>
  )
}

export default Recipes
