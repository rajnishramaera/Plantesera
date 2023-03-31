import React, { useState } from "react"
import "./InstagramRecipe.css"
import { InstagramEmbedDangerousHTML } from "./InstagramPost"
import { InstagramSocialIcon } from "./InstagramSocialIcon"
import InstagramHeading from "./InstagramHeading"
import InstagramButton from "./InstagramButton"
import insta from "@assets/images/instagramMasala.png"

const InstagramRecipe = () => {
  return (
    <div className="container mt-40 instagram-background relative">
      <InstagramHeading />
      <div className="basis-12/12 flex justify-center mt-16">
        {InstagramSocialIcon.map((item) => {
          return (
            <div className="basis-2/12 px-5">
              <div
                className="shadow-lg p-4 relative"
                style={{ backgroundColor: "white" }}
              >
                <InstagramEmbedDangerousHTML
                  url={`${item.instaLink}`}
                  className="myplaneteraPost"
                />
              </div>
            </div>
          )
        })}
      </div>
      <InstagramButton />
      <img loading="lazy" src={insta} className="instagram-masala" />
    </div>
  )
}

export default InstagramRecipe
