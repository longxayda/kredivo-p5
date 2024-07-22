import React from "react";
import headerprofile from "../../../Image/profile/headerprofile.png";
import HangSamNang from "../../../Image/profile/HangSamNang.png";
import image from "../../../Image/profile/image.png";
import "./Profile.css";
const ProfileHangSamNang = () => {
  return (
    <div className="container">
      <div className="image-header">
        <img src={headerprofile} alt="headerprofile" />
      </div>

      <div className="body-item">
        <div class="banner-name">
          <div class="banner-content-name">
            GIẢNG VIÊN - LUẬT SƯ
            <br />
            Hàng Sấm Nang
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

      <div className="body-profile-xs">
        <div>
          <div className="profile-item-body">
            <div>
              <img src={HangSamNang} alt="hihihihihi" />
            </div>
            <div>
              <p style={{ color: "red", fontWeight: "bold" }}>
                Các hoạt động nổi bật
              </p>
              <p>
                -Tiến sĩ MIS – Đại học UITM Ba Lan.
                <br />- Chứng chỉ Quản lý dự án PMP – PMI của Hoa Kỳ.
                <br />- Thạc sĩ Quản trị kinh doanh <br />– Đại học Euro
                College.
              </p>
            </div>
          </div>
          <div className="profile-item-content">
            <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
              Tiểu sử
            </p>
            Nhiều năm kinh nghiệm trong tư vấn, tái cấu trúc doanh nghiệp &
            chuyến đổi số, triển
            <br /> khai hệ thống thông tin quản lý cho các doanh nghiệp lớn tại
            Việt Nam như:
            <br />- Tổng Công ty Cà phê Trung Nguyên.
            <br />- Tập đoàn Gemadept.
            <br />- Tập đoàn ITL.
          </div>
        </div>
        <div>
          <div>
            <img src={image} alt="image-profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHangSamNang;
