import React from "react";
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
import hanhtrinh from "../../Image/hanhtrinh.png";
import team1 from "../../Image/Đội ngũ P5/team1.jpg"
import team2 from "../../Image/Đội ngũ P5/team2.jpg"
import team3 from "../../Image/Đội ngũ P5/team3.jpg"
import team4 from "../../Image/Đội ngũ P5/team4.jpg"
import team5 from "../../Image/Đội ngũ P5/team5.jpg"
import team6 from "../../Image/Đội ngũ P5/team6.jpg"
const Banner = () => {
  return (
    <div className="container mt-5">
      <SliderShow />
      <div className="content-section">
        <div style={{ textAlign: "center" ,display:'flex',justifyContent:'center',alignContent:'center'}}>
          <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <h1 className="main-title">Power5 Technology</h1>
            <blockquote className="main-quote">
              “Nơi công nghệ kết nối sức mạnh và giá trị nhân văn”
            </blockquote>
            <h2 className="sub-title">Số 5</h2>
            <p className="sub-description">
              Trong nhiều nền văn hóa, số 5 được coi là một con số mạnh mẽ,
              tượng trưng cho sự cân bằng, hài hòa và kết nối. Power5 Technology
              lấy cảm hứng từ ý nghĩa sâu sắc này để truyền tải thông điệp về sứ
              mệnh của mình: kết nối sức mạnh công nghệ với những giá trị nhân
              văn sâu sắc.
            </p>
            <h3 className="section-title">
              Công nghệ phục vụ con người và giữ gìn giá trị nhân văn
            </h3>
            <p className="section-description">
              Với Power5 Technology, công nghệ không chỉ là những con số và
              thuật toán khan khan. Chúng tôi luôn hướng đến việc phát triển
              công nghệ có giá trị ứng dụng cao, phục vụ con người và giữ vững
              những giá trị nhân văn (giá trị đạo đức, giá trị xã hội). Mỗi sản
              phẩm, dịch vụ của Power5 đều được tạo ra với tinh thần trách nhiệm
              cao, đảm bảo mang lại lợi ích thiết thực cho cộng đồng.
            </p>
          </div>
        </div>

        <div className="custom-text-banner">
          <h2 className="section-title">
            Hành trình khởi đầu từ đam mê và sự kết nối
          </h2>
          <div className="section-description">
            <p>
              Năm 2018, ngọn lửa đam mê công nghệ được khơi dậy bởi đội ngũ kỹ
              sư đầy nhiệt huyết và giàu kinh nghiệm. Từ đó, Power5 được thành
              lập dưới hình thức Công ty TNHH, đánh dấu bước đầu tiên trên hành
              trình công nghệ.
            </p>
            <p>
              Trải qua quá trình sáp nhập và phát triển, Power5 Technology là
              pháp nhân mới được thành lập độc lập với doanh nghiệp ban đầu
              nhưng kế thừa nguồn lực và kết nối vững vàng từ công ty tiền
              thân. Là một pháp nhân mới, Power5 Technology còn là biểu tượng
              cho sự hợp nhất của trí tuệ, đam mê và khát vọng chinh phục những
              thử thách mới.
            </p>
          </div>
          <div className="flex-content section-description">
            <img src={hanhtrinh} alt="Hành trình khởi đầu" className="intro-image" />
            <p className="flex-text">
              Với tầm nhìn chiến lược, Power5 Technology hướng đến mục tiêu phát
              triển thành một hệ sinh thái đầu tư và công nghệ mở rộng. Hệ sinh
              thái này bao gồm những thành tựu trong lĩnh vực công nghệ, cũng
              như kiên trì đồng hành cùng các sáng tạo, mang đến những giá trị
              thiết thực cho cộng đồng.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-16 p-8">
          <div className="text-center">
            <h2 className="section-title">Nền tảng</h2>
            <p className="section-description">
              Power5 Technology luôn tâm niệm rằng: "chúng tôi không chỉ là công
              nghệ".
              <br />
              Chúng tôi là sự hợp thành của Con người, Hệ sinh thái, Công nghệ,
              Năng lực Kết Nối và Trách nhiệm.
            </p>
          </div>
          <div className="images-banner">
            <div className="image-item">
              <img
                style={{ width: "255px", height: "188px" }}
                src={gioithieu}
                alt="gioithieu"
              />
            </div>
            <div className="image-item">
              <img
                style={{ width: "255px", height: "188px" }}
                src={congnghe}
                alt="congnghe"
              />
            </div>
            <div className="image-item">
              <img
                style={{ width: "255px", height: "188px" }}
                src={hesinhthai}
                alt="hesinhthai"
              />
            </div>
          </div>
          <div className="images-banner">
            <div className="image-item">
              <img
                src={nanglucketnoi}
                alt="nanglucketnoi"
                style={{ width: "255px", height: "188px" }}
              />
            </div>
            <div className="image-item">
              <img
                style={{ width: "255px", height: "188px" }}
                src={trachnhiem}
                alt="trachnhiem"
              />
  
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="section-title">
            Khởi nguồn từ công nghệ cho giáo dục và vươn đến Blockchain và AI
          </h2>
          <p className="section-description">
            Hành trình khởi đầu của Power5 Technology trước hết là một công ty
            phát triển công nghệ trong lĩnh vực giáo dục (chuyển đổi số dự án an
            <br /> toàn học đường, nền tảng LMS Power5.edu.vn). Với những thành
            công đạt được, Power5 tiếp tục mở rộng sang các lĩnh vực công nghệ
            trọng yếu
            <br /> như Blockchain và AI, đồng thời tham gia vào tiến trình
            chuyển đổi số của doanh nghiệp.
          </p>
        </div>

        <div className="team-section">
          <h2 className="section-title">Đội ngũ Power5 Technology</h2>
          <div className="team-slider">
            <div className="team-slide"><img src={team1} alt="Team 1" /></div>
            <div className="team-slide"><img src={team2} alt="Team 2" /></div>
            <div className="team-slide"><img src={team3} alt="Team 3" /></div>
            <div className="team-slide"><img src={team4} alt="Team 4" /></div>
            <div className="team-slide"><img src={team5} alt="Team 5" /></div>
            <div className="team-slide"><img src={team6} alt="Team 6" /></div>
          </div>
          <p className="team-description">Đội ngũ Power5 Technology Hãy cùng Power5 Technology kết nối công nghệ và giá trị nhân văn để kiến tạo tương lai tốt đẹp hơn.</p>
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
