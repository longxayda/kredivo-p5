import React from "react";
import headerprofile from "../../../Image/profile/headerprofile.png";
import daoxuanson from "../../../Image/profile/daoxuanson1.png";
import image from "../../../Image/profile/image.png";
import "./Profile.css";
import CoVanKhac from "./CoVanKhac";
const ProfileDaoXuanSon = () => {
  return (
    <div className="container">
      <div className="image-header">
        <img src={headerprofile} alt="headerprofile" />
      </div>

      <div className="body-item" >
        <div class="banner-name">
          <div class="banner-content-name">
            GIẢNG VIÊN - LUẬT SƯ
            <br />
            ĐÀO XUÂN SƠN
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

      <div className="body-profile-xs">
        <div className="profile-item-body-2">
          <div className="profile-item-body">
            <div style={{ width: "320px", height: "320px", overflow: "content" }}>
              <img src={daoxuanson} alt="hihihihihi" />
            </div>
            <div>
              <p style={{ color: "red",fontWeight: "bold" }}>Các hoạt động nổi bật</p>
              <p>
                - Phó Chủ tịch thường trực kiêm Tổng Thư <br />
                Ký Hiệp hội Nhà Vệ Sinh Việt Nam thuộc Bộ
                <br /> Tài Nguyên và Môi trường (2018 đến nay).
                <br />- Luật sư điều hành - hãng luật Jusitva Law
                <br />- Cố vấn - Alfacens Capital
              </p>
            </div>
          </div>
          <div className="profile-item-content">
            <p style={{ color: "red",fontWeight: "bold",marginTop:"10px" }}>Tiểu sử</p>
            <p>
              Hơn 20 năm hoạt động và tư vấn trong lĩnh vực tư vấn tài chính,
              đầu tư, bất động sản,
              <br /> tái cấu trúc doanh nghiệp; sản xuất, thương mại điện tử;
              M&A, gọi vốn, Blockchain; Due
              <br /> Dilligence; Logistíc; giáo dục, y tế; FMCG; F&B.
              <br />
              Nguyên Phó TGĐ Tập Đoàn Daso Việt Nam, Tập đoàn Dung Thanh
              <br />
              Nguyên Phó TGĐ Công ty Cổ phần chứng khoán Thiên Phú.
              <br />
              Nguyên GĐ Khu Công nghiệp Tân Đông Hiệp A – Dĩ An, Bình Dương
            </p>
          </div>
        </div>

        <div>
          <div>
            <img src={image} alt="image-profile" />
          </div>
        </div>
      </div>
      <CoVanKhac />
    </div>
  );
};

export default ProfileDaoXuanSon;
