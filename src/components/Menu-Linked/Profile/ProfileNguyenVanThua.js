import React, { useState } from "react";
import headerprofile from "../../../Image/profile/headerprofile.png";
import NVT from "../../../Image/profile/NguyenVanThua.png";
import image from "../../../Image/profile/image.png";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const ProfileNguyenVanThua = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="image-header">
        <img src={headerprofile} alt="headerprofile" />
      </div>
      <div className="body-item">
        <div class="banner-name">
          <div class="banner-content-name">
            PHÓ TỔNG GIÁM ĐỐC
            <br />
            PHẠM NGỌC THẠCH
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>
      <div className="body-profile-xs">
        <div>
          <div className="profile-item-body">
            <div>
              <img src={NVT} alt="hihihihihi" />
            </div>
            <div>
              <p style={{ color: "red", fontWeight: "bold" }}>
                Các hoạt động nổi bật
              </p>
              <p>
              -Giám Đốc Điều Hành CÔNG TY TNHH POWER 5 <br/> Nhà đồng sáng lập Công Ty Cổ Phần Công Nghệ Power 5 Technology
                
              </p>
            </div>
          </div>
          {isOpen && (
           <p>Chưa nội dung</p>
          )}
          <div
            style={{
              // border: "1px solid #2D947A",
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{ border: "none", background: "none" }}
              onClick={toggleContent}
            >
              <FontAwesomeIcon
                style={{ fontWeight: "100" }}
                icon={isOpen ? faAngleUp : faAngleDown}
              />
            </button>
          </div>
          <div className="profile-item-content">
            <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
              Tiểu sử
            </p>
            <p>
            -Có hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ. Tôi luôn cố gắng cập nhật những xu hướng công nghệ mới, hướng đến các giải pháp chuyển đổi số nhằm mang lại những giải pháp để công nghệ tối ưu.
            </p>
            <p>
              - Nhà sáng lập Công Ty TNHH Power 5
            </p>
            <p>
              - Tư vấn các giải pháp về LMS, nRMS, TMS, SAP …
            </p>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src={image} alt="image-profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNguyenVanThua;
