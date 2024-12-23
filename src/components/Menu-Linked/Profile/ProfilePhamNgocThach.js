import React, { useState } from "react";
import headerprofile from "../../../Image/profile/headerprofile.png";
import PNT from "../../../Image/profile/PhamNgocThach.png";
import image from "../../../Image/profile/image.png";
import CoVanKhac from "./CoVanKhac";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const ProfilePhamNgocThach = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="image-header">
        <img src={"bancovan/headerprofile.jpg"} alt="headerprofile" />
      </div>
      <div className="body-item">
        <div class="banner-name">
          <div class="banner-content-name">
            TỔNG GIÁM ĐỐC
            <br />
            PHẠM NGỌC THẠCH
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>
      <div className="body-profile-xs">
        <div className="profile-item-body-2">
          <div className="profile-item-body">
            <div>
              <img src={PNT} alt="profile" />
            </div>
            <div>
              <p style={{ color: "red", fontWeight: "bold" }}>
                Các hoạt động nổi bật
              </p>
              <p>
                -Luật sư điều hành - Investpush Legal
                <br />
                -Thành viên Ủy ban Chính sách và Pháp lý –<br /> Hiệp hội
                Blockchain Việt Nam
                <br />
                -Đồng trưởng làng công nghệ Blockchain –<br /> Techfest Việt Nam
                <br />
              </p>
            </div>
          </div>
          {isOpen && (
            <p>
              Thành viên Hội đồng chuyên gia – Hiệp hội tư vấn tài chính Việt
              Nam (VFCA)
              <br /> Cố vấn cấp cao quỹ đầu tư Khởi nghiệp sáng tạo DIF Fund
            </p>
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
              Luật sư Đào Tiến Phong có gần 20 năm kinh nghiệm trong lĩnh vực tư
              vấn pháp lý <br />
              doanh nghiệp và dự án với đa dạng loại hình như sản xuất,
              logistics, phân phối, bán lẻ,
              <br /> xây dựng, bất động sản, giáo dục, y tế, sức khoẻ, F&B,
              FMCG…
            </p>
            <p>
              - Tư vấn các lĩnh vực đặc thù như Startup, Thương mại điện tử,
              Fintech, Blockchain, Metaverse, Cryptocurrency,
              <br /> Gamefi, DAO, Web 3…
              <br />- Tư vấn pháp lý và thành lập các công ty nước ngoài
              (offshore) như Singapore, Hồng Kông, Cayman, BVI,
              <br />
              Seychelle, Marshall, Belize, St Vincent…
              <br />- Tư vấn các giao dịch M&A, Due Dilligence, gọi vốn, tái cấu
              trúc doanh nghiệp.
            </p>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src={"bancovan/image.jpg"} alt="image-profile" />
          </div>
        </div>
      </div>
      <CoVanKhac />
    </div>
  );
};

export default ProfilePhamNgocThach;
