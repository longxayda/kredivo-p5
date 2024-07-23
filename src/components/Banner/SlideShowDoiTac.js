// SlideShowDoiTac.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/SlideShowDoiTac.css"; // Đường dẫn đến tệp CSS tùy chỉnh của bạn

import doitac1 from "../../Image/Logo đối tác/admas.png";
import doitac2 from "../../Image/Logo đối tác/iny.png";
import doitac3 from "../../Image/Logo đối tác/jlf.png";
import doitac4 from "../../Image/Logo đối tác/vta.png";

const logos = [
  { src: doitac1, alt: "Logo 1" },
  { src: doitac2, alt: "Logo 2" },
  { src: doitac3, alt: "Logo 3" },
  { src: doitac4, alt: "Logo 4" },
  // Thêm các logo khác vào đây
];

const SlideShowDoiTac = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4 /* Điều chỉnh số lượng slides hiển thị cùng lúc */,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3 /* Điều chỉnh số lượng slides hiển thị cùng lúc */,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 /* Điều chỉnh số lượng slides hiển thị cùng lúc */,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1 /* Điều chỉnh số lượng slides hiển thị cùng lúc */,
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
            <img src={logo.src} alt={logo.alt} className="logo-image" style={{ maxWidth: "282px", height: "128px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShowDoiTac;
