import React from "react";
import headerprofile from "../../../Image/profile/headerprofile.png";
import HoVanLong from "../../../Image/profile/HoVanLong.png";
import image from "../../../Image/profile/image.png";
import "./Profile.css";
const ProfileHoVanLong = () => {
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
            HỒ VĂN LONG
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

      <div className="body-profile-xs">
        <div>
          <div className="profile-item-body">
            <div>
              <img src={HoVanLong} alt="hihihihihi" />
            </div>
            <div>
              <p style={{ color: "red", fontWeight: "bold" }}>
                Các hoạt động nổi bật
              </p>
              <p>
                -Cử nhân quản trị kinh doanh quốc tế đại - học Fontys-Hà Lan.
                <br />
                -MBA-Supply Chain Management, Linnaeus University, Thụy Điển.
                <br />- Giám đốc kinh doanh Phát Đạt Group.
              </p>
            </div>
          </div>
          <div className="profile-item-content">
            <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
              Tiểu sử
            </p>
           <p>Chưa có nội dung</p>
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

export default ProfileHoVanLong;
