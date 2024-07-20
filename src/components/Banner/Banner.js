import React from "react";
// import "../container.css";
import SliderShow from "./SlideShow";
import "../Banner/css/Banner.css";
import congnghe from "../../Image/cong_nghe.png";
import gioithieu from "../../Image/gioi_thieu.png";
import hesinhthai from "../../Image/he_sinh_thai.png";
import trachnhiem from "../../Image/trach_nhiem.png";
import nanglucketnoi from "../../Image/nang_luc_ket_noi.png";
import mot from "../../Image/Hình ảnh Lĩnh vực hoạt động/1.jpg";
import hai from "../../Image/Hình ảnh Lĩnh vực hoạt động/2.jpg";
import nam from "../../Image/Hình ảnh Lĩnh vực hoạt động/5.jpg";
import sau from "../../Image/Hình ảnh Lĩnh vực hoạt động/6.jpg";
import bay from "../../Image/Hình ảnh Lĩnh vực hoạt động/7.jpg";
import SlideShow_doi_tac from "./SlideShow_doi_tac";
import "../../components/container.css";

const Banner = () => {
  return (
    <div className="container mt-5">
      <SliderShow />
      <div className="content-section">
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
              đầu tư và công nghệ đột phá, đây cũng là nơi hội tụ những tinh anh
              trong lĩnh vực công nghệ, cùng nhau kiến tạo những giải pháp sáng
              tạo, mang đến những giá trị thiết thực cho cộng đồng.
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
              Power5 Technology luôn tâm niệm rằng: "chúng tôi không chỉ là công
              nghệ".
              <br />
              Chúng tôi là sự hợp thành của Con người, Hệ sinh thái, Công nghệ,
              Năng lực Kết Nối và Trách nhiệm.
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
          <p style={{ fontWeight: "bold", fontSize: "32px", color: "#2D947A" }}>
            Lĩnh vực hoạt động
          </p>
        </div>
        <div className="banner-activity">
          <div className="banner-item-left">
            <div className="item-left-content-1">
              <p className="text-1" >Đầu tư công nghệ</p>
              <p>
                Power5 Technology tiến vào đầu tư công nghệ theo nhiều hình
                thức:
                <br />
                [1] Đầu tư Trực tiếp/Hợp tác đầu tư các dự án công nghệ.
                <br /> [2] Đầu tư vào các công ty công nghệ thông qua hình thức
                M&A hoặc
                <br /> Góp vốn đầu tư
                <br />
                [3] Đầu tư vào các quỹ đầu tư, công ty quản lý vốn đầu tư chuyên
                đầu
                <br />
                tư lĩnh vực công nghệ
              </p>
            </div>
            <div className="item-left-image-1">
              <img src={nam} alt="mot" className="img-activity" />
            </div>
            <div className="item-left-content-2">
              <p className="text-1">Quỹ đầu tư khởi nghiệp sáng tạo</p>
              <p>
                Power5 Technology đang tiến hành các thủ tục pháp lý để thành
                lập
                <br />
                quỹ đầu tư khởi nghiệp sáng tạo...Chúng tôi với nguồn lực và hệ
                <br />
                sinh thái rất mong muốn được tham gia vào tiến trình đồng hành
                với
                <br />
                các Dự án khởi nghiệp.
              </p>
            </div>
            <div className="item-left-image-2">
              <img src={hai} alt="hai" className="img-activity" />
            </div>
            <div className="item-left-content-3">
              <p className="text-1">Tư vấn và triển khai chuyển đổi số cho doanh nghiệp</p>
              <p>
                Xuất phát từ nhu cầu và hiện trạng ứng dụng công nghệ số cùng
                định hướng <br />
                chuyển đổi số của doanh nghiệp, Power5 cùng đội ngũ chuyên gia
                sẽ:
                <br />
                [1]Đánh giá hiện trạng ứng dụng công nghệ số
                <br />
                [2]Lập kế hoạch chuyển đổi số
                <br />
                [3]Triển khai và hỗ trợ triển khai kế hoạch chuyển đổi số
                <br />
                [4]Giám sát việc triển khai
                <br />
                [5]Cung cấp dịch vụ hỗ trợ sau triển khai
                <br />
                Ngoài ra, Power5 cùng đội ngũ chuyên gia sẽ tư vấn cho khách
                hàng các mô <br />
                hình pháp lý phù hợp cho việc chuyển đổi số và thu thập dữ liệu
                cá nhân.
              </p>
            </div>
          </div>
          <div className="banner-item-right">
            <div className="item-right-image-1">
              <img src={mot} alt="nam" className="img-activity" />
            </div>
            <div className="item-right-content-1" style={{ marginTop: "20px" }}>
              <p className="text-1">Phát triển công nghệ</p>
              <p>
                -Power5 Technology đang đẩy mạnh chuyển đổi số cho dự án an toàn
                <br />
                học đường, một dự án có giá trị xã hội lớn.
                <br /> -Đồng thời, nền tảng
                <a href="https://www.power5.edu.vn">LMS Power5.edu.vn</a> đang
                được triển khai với <br />
                tầm nhìn kết nối nhà trường, doanh nghiệp, học sinh/sinh viên và
                hỗ trợ
                <br />
                các hoạt động chuyển đổi số và xã hội tại địa phương.
              </p>
            </div>
            <div className="item-right-image-2">
              <img src={sau} alt="sau" className="img-activity" />
            </div>
            <div className="item-right-content-2">
              <p className="text-1">Cung cấp các dịch vụ công nghệ</p>
              <p>
                Chúng tôi cũng cung cấp các dịch vụ công nghệ theo yêu cầu của
                <br />
                khách hàng,...xem thêm
              </p>
            </div>
            <div className="item-right-image-3">
              <img src={bay} alt="ba" className="img-activity" />
            </div>
          </div>
        </div>
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
            <SlideShow_doi_tac />
         
        </div>
      </div>
    </div>
  );
};
export default Banner;
