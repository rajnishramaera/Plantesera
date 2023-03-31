import "./SuccessSection.css"
import masala1 from "@assets/images/success-1.png"
import masala2 from "@assets/images/ciricle-1.png"
import masala3 from "@assets/images/pizza.png"

const SuccessSection = () => {
  return (
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <div className="basis-12/12 flex mt-40">
              <div className="basis-6/12">
                <div className="basis-12/12 flex">
                  <div className="basis-6/12">
                    <img
                      loading="lazy"
                      src={masala1}
                      className="success-img-1"
                    />
                  </div>
                  <div className="basis-6/12 success-alignment">
                    <img loading="lazy" src={masala2} className="success-img" />
                  </div>
                </div>
              </div>
              <div className="basis-5/12">
                <h1 className="success-heading">
                  Part of the secret of success is to eat what you like and let
                  the food fight it out inside.
                </h1>
                <p className="success-text mt-10">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a comple I must explain to you how all this mistaken idea
                  of denouncing pleasure and praising pain was bmplete account
                  of the system....
                </p>
                <a href="#" className="SuccessButton  block">
                  Learn More
                </a>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
        </li>

        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <div className="basis-12/12 flex mt-40">
              <div className="basis-6/12">
                <div className="basis-12/12 flex">
                  <div className="basis-6/12">
                    <img
                      loading="lazy"
                      src={masala1}
                      className="success-img-1"
                    />
                  </div>
                  <div className="basis-6/12 success-alignment">
                    <img loading="lazy" src={masala2} className="success-img" />
                  </div>
                </div>
              </div>
              <div className="basis-5/12">
                <h1 className="success-heading">
                  Part of the secret of success is to eat what you like and let
                  the food fight it out inside.
                </h1>
                <p className="success-text mt-10">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a comple I must explain to you how all this mistaken idea
                  of denouncing pleasure and praising pain was bmplete account
                  of the system....
                </p>
                <a href="#" className="SuccessButton  block">
                  Learn More
                </a>
              </div>
              <div className="basis-1/12"></div>
            </div>
          </div>
        </li>
      </ol>
      <aside class="carousel__navigation mt-10">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item  pr-6">
            <a href="#carousel__slide1" class="carousel__navigation-button">
              <i className="fa fa-arrow-left"></i>
            </a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2" class="carousel__navigation-button">
              <i className="fa fa-arrow-right"></i>
            </a>
          </li>
        </ol>
      </aside>
      <img loading="lazy" src={masala3} className="pizza-img" />
    </section>
  )
}

export default SuccessSection
