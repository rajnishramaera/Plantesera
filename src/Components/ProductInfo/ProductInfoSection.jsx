import "./ProductInfo.css"
import Data from "./ProductInfoData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductInfoSection = () => {
  return (
    <div className="boxZoom">

      {Data.map((items,index) => (
         
        <div className={("containerZoom sliderrr"+`${index}`)}>
          {console.log(("containerZoom sliderrr"+`${index}`))}
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
                src={items.productImage}
                className="fa fa-user-circle"
              />
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="contentZoom">
              <div className="masala-details-arrow">
                <div style={{color:"white"}}><ArrowBackIosIcon/></div>
                <div style={{color:"white"}}><ArrowForwardIosIcon/></div>
              </div>
              <h1 className="headingZoom">{items.productHeading}</h1>
              <h3 className="titleZoom">{items.productTitle}</h3>
              <div className="masala-details">
              <div><p>{items.productLine1}</p></div>
              <div><p>{items.productLine1G}</p></div>
             </div>
              
              <div className="masala-details">
              <div><p>{items.productLine2}</p></div>
              <div><p>{items.productLine2G}</p></div>
              </div>

              <div className="masala-details">
              <div><p>{items.productLine3}</p></div>
              <div><p>{items.productLine3G}</p></div>
              </div>

              <div className="masala-details">
              <div><p>{items.productLine4}</p></div>
              <div><p>{items.productLine4G}</p></div>
              </div>

              <div className="masala-details">
              <div><p>{items.productLine5}</p></div>
              <div><p>{items.productLine5G}</p></div>
              </div>

            </div>
          </div>
        </div>
    </div> 
 ))}
    </div>
  );
};

export default ProductInfoSection;

