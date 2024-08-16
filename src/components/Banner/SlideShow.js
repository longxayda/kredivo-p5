import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Slideshow.css";
import mau1 from "../../Image/Banner/Banner/mẫu 1.png";
// import mau2 from "../../Image/Banner/Banner/mẫu 2.png";
import mau3 from "../../Image/Banner/Banner/MẪU 3.png";
import mau4 from "../../Image/Banner/Banner/mẫu 4.png";
import mau5 from "../../Image/Banner/Banner/mẫu 5.png";
const SliderShow = () => {
  return (
    <div className=" mt-5">
      <Carousel interval={2000} wrap={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={"/banners/mau4.png"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={"/banners/mau1.JPG"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={"/banners/mau2.JPG"}
            alt="Third slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={mau2}
            alt="Third slide"
          />
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src={"/banners/mau3.JPG"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderShow;
