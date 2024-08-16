// import React from "react";
// import headerprofile from "../../../Image/profile/headerprofile.png";
// import daoxuanson from "../../../Image/profile/daoxuanson1.png";
// import image from "../../../Image/profile/image.png";
// import "./Profile.css";
// import CoVanKhac from "./CoVanKhac";
// const ProfileDaoXuanSon = () => {
//   return (
//     <div className="container">
//       <div className="image-header">
//         <img src={"bancovan/headerprofile.jpg"} alt="headerprofile" />
//       </div>

//       <div className="body-item">
//         <div class="banner-name">
//           <div class="banner-content-name">
//             GIẢNG VIÊN - LUẬT SƯ
//             <br />
//             ĐÀO XUÂN SƠN
//           </div>
//         </div>
//       </div>
//       <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

//       <div className="body-profile-xs">
//         <div className="profile-item-body-2">
//           <div className="profile-item-body">
//             <div>
//               <img src={daoxuanson} alt="profile" />
//             </div>
//             <div>
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Các hoạt động nổi bật
//               </p>
//               <p>
//                 - Phó Chủ tịch thường trực kiêm Tổng Thư <br />
//                 Ký Hiệp hội Nhà Vệ Sinh Việt Nam thuộc Bộ
//                 <br /> Tài Nguyên và Môi trường (2018 đến nay).
//                 <br />- Luật sư điều hành - hãng luật Jusitva Law
//                 <br />- Cố vấn - Alfacens Capital
//               </p>
//             </div>
//           </div>
//           <div className="profile-item-content">
//             <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
//               Tiểu sử
//             </p>
//             <p>
//               Hơn 20 năm hoạt động và tư vấn trong lĩnh vực tư vấn tài chính,
//               đầu tư, bất động sản,
//               <br /> tái cấu trúc doanh nghiệp; sản xuất, thương mại điện tử;
//               M&A, gọi vốn, Blockchain; Due
//               <br /> Dilligence; Logistíc; giáo dục, y tế; FMCG; F&B.
//               <br />
//               Nguyên Phó TGĐ Tập Đoàn Daso Việt Nam, Tập đoàn Dung Thanh
//               <br />
//               Nguyên Phó TGĐ Công ty Cổ phần chứng khoán Thiên Phú.
//               <br />
//               Nguyên GĐ Khu Công nghiệp Tân Đông Hiệp A – Dĩ An, Bình Dương
//             </p>
//           </div>
//         </div>

//         <div>
//           <div>
//             <img src={"bancovan/image.jpg"} alt="image-profile" />
//           </div>
//         </div>
//       </div>
//       <CoVanKhac />
//     </div>
//   );
// };

// export default ProfileDaoXuanSon;

import React from "react";
import "./Profile.css";
import CoVanKhac from "./CoVanKhac";

const ProfileDaoXuanSon = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="/bancovan/headerprofile.jpg"
          alt="header"
          className="profile-header-image"
        />
      </div>

      <div className="profile-body">
        <div className="profile-name-banner">
          <h1>
            GIẢNG VIÊN - LUẬT SƯ
            <br />
            ĐÀO XUÂN SƠN
          </h1>
        </div>
        <hr className="divider" />

        <div className="profile-content">
          <div className="profile-main-info">
            <img
              src="/bancovan/daoxuanson1.png"
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="highlight-title">Các hoạt động nổi bật</h2>
              <p>
                - Phó Chủ tịch thường trực kiêm Tổng Thư <br />
                Ký Hiệp hội Nhà Vệ Sinh Việt Nam thuộc Bộ <br />
                Tài Nguyên và Môi trường (2018 đến nay).
                <br />
                - Luật sư điều hành - hãng luật Jusitva Law
                <br />- Cố vấn - Alfacens Capital
              </p>
              <h2 className="highlight-title">Tiểu sử</h2>
              <p>
                Hơn 20 năm hoạt động và tư vấn trong lĩnh vực tư vấn tài chính,
                đầu tư, bất động sản, tái cấu trúc doanh nghiệp; sản xuất,
                thương mại điện tử; M&A, gọi vốn, Blockchain; Due Dilligence;
                Logistics; giáo dục, y tế; FMCG; F&B.
              </p>
              <p>
                Nguyên Phó TGĐ Tập Đoàn Daso Việt Nam, Tập đoàn Dung Thanh
                <br />
                Nguyên Phó TGĐ Công ty Cổ phần chứng khoán Thiên Phú.
                <br />
                Nguyên GĐ Khu Công nghiệp Tân Đông Hiệp A – Dĩ An, Bình Dương
              </p>
            </div>
          </div>

          <div className="profile-sidebar">
            <img
              src="/bancovan/image.jpg"
              alt="sidebar-profile"
              className="sidebar-image"
            />
          </div>
        </div>
      </div>

      <CoVanKhac />
    </div>
  );
};

export default ProfileDaoXuanSon;
