// SlideShowDoiTac.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/SlideShowDoiTac.css"; // Đường dẫn đến tệp CSS tùy chỉnh của bạn

import doitac0 from "../../Image/Logo đối tác/trusted-by-0.png";
import doitac1 from "../../Image/Logo đối tác/1.png";
import doitac2 from "../../Image/Logo đối tác/2.png";
import doitac3 from "../../Image/Logo đối tác/3.png";
import doitac4 from "../../Image/Logo đối tác/4.png";
import doitac5 from "../../Image/Logo đối tác/5.png";

const logos = [
  { src: doitac0, alt: "Logo 1" },
  { src: doitac1, alt: "Logo 2" },
  { src: doitac2, alt: "Logo 3" },
  { src: doitac3, alt: "Logo 4" },
  { src: doitac4, alt: "Logo 5" },
  { src: doitac5, alt: "Logo 6" },
  // Thêm các logo khác vào đây
];

const SlideShowDoiTac = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="logo-carousel-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShowDoiTac;
