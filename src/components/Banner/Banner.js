import React from "react";
// import "../container.css";
import SliderShow from "./SlideShow";
import "../Banner/css/Banner.css";
import congnghe from "../../Image/cong_nghe.png";
import gioithieu from "../../Image/gioi_thieu.png";
import hesinhthai from "../../Image/he_sinh_thai.png";
import trachnhiem from "../../Image/trach_nhiem.png";
import nanglucketnoi from "../../Image/na_luc_hoat_dong.png";
import SlideShowDoiTac from "./SlideShowDoiTac";
import "../../components/container.css";
import AboutUs from "../Menu-Linked/AboutUs";

const Banner = () => {
  return (
    <div className="container mt-5">
      <SliderShow />
      <div className="content-section">
        <div style={{ textAlign: "center" }}>
          <div>
            <h1
              style={{
                color: "#2D947A",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Power5 Technology
            </h1>
            <blockquote
              style={{
                color: "red",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              “Nơi công nghệ kết nối sức mạnh và giá trị nhân văn”
            </blockquote>
            <h2
              style={{
                color: "#2D947A",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Số 5
            </h2>
            <p>
              Trong nhiều nền văn hóa, số 5 được coi là một con số mạnh mẽ,
              tượng trưng cho sự cân bằng, hài hòa và kết nối. Power5 Technology
              lấy cảm hứng từ ý nghĩa sâu sắc này để truyền tải thông điệp về sứ
              mệnh của mình: kết nối sức mạnh công nghệ với những giá trị nhân
              văn sâu sắc.
            </p>
            <h3
              style={{
                color: "#2D947A",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Công nghệ phục vụ con người và giữ gìn giá trị nhân văn
            </h3>
            <p>
              Với Power5 Technology, công nghệ không chỉ là những con số và
              thuật toán khan khan. Chúng tôi luôn hướng đến việc phát triển
              công nghệ có giá trị ứng dụng cao, phục vụ con người và giữ vững
              những giá trị nhân văn (giá trị đạo đức, giá trị xã hội). Mỗi sản
              phẩm, dịch vụ của Power5 đều được tạo ra với tinh thần trách nhiệm
              cao, đảm bảo mang lại lợi ích thiết thực cho cộng đồng.
            </p>
          </div>
        </div>

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
              Nền tảng
            </h2>
            <p className="mt-4">
              Power5 Technology luôn tâm niệm rằng: "chúng tôi không chỉ là công
              nghệ".
              <br />
              Chúng tôi là sự hợp thành của Con người, Hệ sinh thái, Công nghệ,
              Năng lực Kết Nối và Trách nhiệm.
            </p>
          </div>
        </div>

        <div className="images-banner">
          <img
            style={{ width: "255px", height: "188px" }}
            src={gioithieu}
            alt="gioithieu"
          />
          <img
            style={{ width: "255px", height: "188px" }}
            src={congnghe}
            alt="congnghe"
          />
          <img
            style={{ width: "255px", height: "188px" }}
            src={hesinhthai}
            alt="hesinhthai"
          />
        </div>

        <div className="images-banner">
          <img
            src={nanglucketnoi}
            alt="nanglucketnoi"
            style={{ width: "255px", height: "188px" }}
          />
          <img
            style={{ width: "255px", height: "188px" }}
            src={trachnhiem}
            alt="trachnhiem"
          />
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
            Khởi nguồn từ công nghệ cho giáo dục và vươn đến Blockchain và AI
          </h2>
          <p className="mt-4">
            Hành trình khởi đầu của Power5 Technology trước hết là một công ty
            phát triển công nghệ trong lĩnh vực giáo dục (chuyển đổi số dự án an
            <br /> toàn học đường, nền tảng LMS Power5.edu.vn). Với những thành
            công đạt được, Power5 tiếp tục mở rộng sang các lĩnh vực công nghệ
            trọng yếu
            <br /> như Blockchain và AI, đồng thời tham gia vào tiến trình
            chuyển đổi số của doanh nghiệp.
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
            Tầm nhìn
          </h2>
          <p className="mt-4">
            Power5 Technology hướng đến mục tiêu trở thành một hệ sinh thái đầu
            tư và công nghệ đột phá, đây cũng là nơi hội tụ những tinh anh trong
            lĩnh vực công nghệ, cùng nhau kiến tạo những giải pháp sáng tạo,
            mang đến những giá trị thiết thực cho cộng đồng.
          </p>
        </div>

        <AboutUs />
        <div className="">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "32px",
              color: "#2D947A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Đối tác của chúng tôi
          </p>
          <SlideShowDoiTac />
        </div>
      </div>
    </div>
  );
};
export default Banner;
