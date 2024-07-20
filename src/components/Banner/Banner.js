import React from "react";
import "../container.css";

import SliderShow from "./SlideShow";
import "../Banner/css/Banner.css";
import congnghe from "../../Image/cong_nghe.png";
import gioithieu from "../../Image/gioi_thieu.png";
import hesinhthai from "../../Image/he_sinh_thai.png";
import trachnhiem from "../../Image/trach_nhiem.png";
import nanglucketnoi from "../../Image/nang_luc_ket_noi.png";
import mot from "../../Image/Hình ảnh Lĩnh vực hoạt động/1.jpg";
import hai from "../../Image/Hình ảnh Lĩnh vực hoạt động/2.jpg";
import ba from "../../Image/Hình ảnh Lĩnh vực hoạt động/3.jpg";
import bon from "../../Image/Hình ảnh Lĩnh vực hoạt động/4.jpg";
import nam from "../../Image/Hình ảnh Lĩnh vực hoạt động/5.jpg";
import sau from "../../Image/Hình ảnh Lĩnh vực hoạt động/6.jpg";
import bay from "../../Image/Hình ảnh Lĩnh vực hoạt động/7.jpg";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <SliderShow />
        <div>
          <div className="flex flex-col items-center space-y-16 p-8">
            <div className="text-center">
              <h2
                className="text-2xl font-bold"
                style={{
                  color: "#2D947A",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                Tầm nhìn
              </h2>
              <p className="mt-4">
                Power5 Technology hướng đến mục tiêu trở thành một hệ sinh thái
                đầu tư và công nghệ đột phá, đây cũng là nơi hội tụ những tinh
                anh trong lĩnh vực công nghệ, cùng nhau kiến tạo những giải pháp
                sáng tạo, mang đến những giá trị thiết thực cho cộng đồng.
              </p>
            </div>
            <div className="text-center">
              <h2
                className="text-2xl font-bold"
                style={{
                  color: "#2D947A",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                Nền tảng
              </h2>
              <p className="mt-4">
                Power5 Technology luôn tâm niệm rằng: "chúng tôi không chỉ là
                công nghệ".
                <br />
                Chúng tôi là sự hợp thành của Con người, Hệ sinh thái, Công
                nghệ, Năng lực Kết Nối và Trách nhiệm.
              </p>
            </div>
          </div>
          <div className="images-banner">
            <img src={gioithieu} alt="gioithieu" />
            <img src={congnghe} alt="congnghe" />
            <img src={hesinhthai} alt="hesinhthai" />
          </div>
          <div className="images-banner">
            <img
              src={nanglucketnoi}
              alt="nanglucketnoi"
              style={{ width: "242px", height: "188px" }}
            />
            <img src={trachnhiem} alt="trachnhiem" />
          </div>
          <div className="text-banner-1-2-3">
            <p
              style={{ fontWeight: "bold", fontSize: "32px", color: "#2D947A" }}
            >
              Lĩnh vực hoạt động
            </p>
            <p>
              Power5 Technology luôn tâm niệm rằng: "chúng tôi không chỉ là công
              nghệ". Chúng tôi là sự hợp thành của Con người, Hệ sinh thái, Công
              nghệ, Năng lực Kết Nối và Trách nhiệm.
            </p>
          </div>
        </div>
        <div className="banner-activity">
          <p>
            Power5 Technology tiến vào đầu tư công nghệ theo nhiều hình thức:
            <br />
            [1] Đầu tư Trực tiếp/Hợp tác đầu tư các dự án công nghệ.
            <br />
            [2] Đầu tư vào các công ty công nghệ thông qua hình thức M&A hoặc
            Góp vốn đầu tư
            <br />
            [3] Đầu tư vào các quỹ đầu tư, công ty quản lý vốn đầu tư chuyên đầu
            tư lĩnh vực công nghệ
          </p>

          <img src={mot} alt="mot" className="images-banner-activity" />
        </div>
        <div>
          <div>
            <img />
          </div>
          <p></p>
        </div>
        <div>
          <p></p>
          <div>
            <img />
          </div>
        </div>
        <div>
          <div>
            <img />
          </div>
          <p></p>
        </div>
        <div>
          <p></p>
          <div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
