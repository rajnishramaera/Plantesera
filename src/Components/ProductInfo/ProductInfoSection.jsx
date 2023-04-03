import "./ProductInfo.css"
import Data from "./ProductInfoData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from "@assets/images/Sabji Masala.png"
import image2 from "@assets/images/Garam Masala.png"
import image3 from "@assets/images/Jaljeera Masala.png"
import image4 from "@assets/images/Jeera Powder.png"

const ProductInfoSection = () => {
  return (
    <div className="boxZoom">

         
        <div className={("containerZoom")} id="containerZoom1">
         <div className="cardZoom">
          <div className="slide slide1">
            <div className="contentZoom">
              <div className="iconZoom">
                 <img
                src={image1}
                className="fa fa-user-circle"
              />
              </div>
            </div>
          </div>

          <div className="slide slide2" id="slider-2-1" style={{background:"linear-gradient(to right, #CED8CF, #C9D2B3)"}}>
            <div className="contentZoom">
              <div className="masala-details-arrow">
                <div style={{color:"white"}}><ArrowBackIosIcon/></div>
                <div style={{color:"white"}}><ArrowForwardIosIcon/></div>
              </div>
              <h1 className="headingZoom">Sabji Masala</h1>
              <h3 className="titleZoom">PlanetsEra’s Sabji Masala is an evergreen everyday Indian spice added to Indian food. A blend of spices for day-to-day  preparations in any vegetarian/non-vegetarian dish.</h3>
              <button className="buttonZoomView">View</button>
              </div>
          </div>
        </div>
    </div> 


{/* 1 */}

<div className={("containerZoom")} id="containerZoom2">
         <div className="cardZoom">
          <div className="slide slide1">
            <div className="contentZoom">
              <div className="iconZoom">
                {/* <img
                  className="fa fa-user-circle"
                  href="#"
                  src="../src/assets/images/Sabji Masala.png"
                /> */}
                 <img
                src={image2}
                className="fa fa-user-circle"
              />
              </div>
            </div>
          </div>

           <div className="slide slide2" id="slider-2-2" style={{background:"linear-gradient(to right, #B79891, #94716B)"}}>
            <div className="contentZoom">
              <div className="masala-details-arrow">
                <div style={{color:"white"}}><ArrowBackIosIcon/></div>
                <div style={{color:"white"}}><ArrowForwardIosIcon/></div>
              </div>
              <h1 className="headingZoom">Garam Masala</h1>
              <h3 className="titleZoom">PlanetsEra’s Garam Masala is an evergreen everyday Indian spice added to Indian food. A blend of spices for day-to-day  preparations in any vegetarian/non-vegetarian dish.</h3>
              <button className="buttonZoomView">View</button>        
            </div>
          </div>
        </div>
    </div> 

{/* 2 */}
<div className={("containerZoom")} id="containerZoom3" >
         <div className="cardZoom">
          <div className="slide slide1">
            <div className="contentZoom">
              <div className="iconZoom">
                {/* <img
                  className="fa fa-user-circle"
                  href="#"
                  src="../src/assets/images/Sabji Masala.png"
                /> */}
                 <img
                src={image3}
                className="fa fa-user-circle"
              />
              </div>
            </div>
          </div>

           <div className="slide slide2" id="slider-2-3" style={{background:"linear-gradient(to right, #B8B1CD, #A89FC5)"}}>
            <div className="contentZoom">
              <div className="masala-details-arrow">
                <div style={{color:"white"}}><ArrowBackIosIcon/></div>
                <div style={{color:"white"}}><ArrowForwardIosIcon/></div>
              </div>
              <h1 className="headingZoom">Jaljeera MASALA</h1>
              <h3 className="titleZoom">PlanetsEra’s Jaljeera Masala is an evergreen everyday Indian spice added to Indian food. A blend of spices for day-to-day  preparations in any vegetarian/non-vegetarian dish.</h3>
              <button className="buttonZoomView">View</button>
            </div>
          </div>
        </div>
    </div> 

    {/* 3 */}

    <div className={("containerZoom")} id="containerZoom4">
         <div className="cardZoom">
          <div className="slide slide1">
            <div className="contentZoom">
              <div className="iconZoom">
                {/* <img
                  className="fa fa-user-circle"
                  href="#"
                  src="../src/assets/images/Sabji Masala.png"
                /> */}
                 <img
                src={image4}
                className="fa fa-user-circle"
              />
              </div>
            </div>
          </div>

           <div className="slide slide2" id="slider-2-4" style={{background:"linear-gradient(to right, #E4B980, #E2B87F)"}}>
            <div className="contentZoom">
              <div className="masala-details-arrow">
                <div style={{color:"white"}}><ArrowBackIosIcon/></div>
                <div style={{color:"white"}}><ArrowForwardIosIcon/></div>
              </div>
              <h1 className="headingZoom">Cumin Powder</h1>
              <h3 className="titleZoom">PlanetsEra’sCumin Powder is an evergreen everyday Indian spice added to Indian food. A blend of spices for day-to-day  preparations in any vegetarian/non-vegetarian dish.</h3>
              <button className="buttonZoomView">View</button>
            </div>
          </div>
        </div>
    </div> 

    </div>
  );
};

export default ProductInfoSection;

