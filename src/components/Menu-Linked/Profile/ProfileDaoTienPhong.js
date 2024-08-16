// import React from "react";
// import headerprofile from "../../../Image/profile/headerprofile.png";
// import DaoTienPhong from "../../../Image/profile/DaoTienPhong.png";
// import image from "../../../Image/profile/image.png";
// import "./Profile.css";
// import CoVanKhac from "./CoVanKhac";
// const ProfileDaoTienPhong = () => {
//   return (
//     <div className="container">
//       <div className="image-header">
//         <img src={"bancovan/headerprofile.jpg"} alt="headerprofile" />
//       </div>
//       <div className="body-item-123">
//         <div className="body-item">
//           <div class="banner-name">
//             <div class="banner-content-name">
//               LUẬT SƯ
//               <br />
//               ĐÀO TIẾN PHONG
//             </div>
//           </div>
//         </div>
//         <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>
//         <div className="body-profile-xs">
//           <div className="profile-item-body-2">
//             <div className="profile-item-body">
//               <div>
//                 <img src={DaoTienPhong} alt="profile" />
//               </div>
//               <div>
//                 <p style={{ color: "red", fontWeight: "bold" }}>
//                   Các hoạt động nổi bật
//                 </p>
//                 <p>
//                   -Luật sư điều hành - Investpush Legal
//                   <br />
//                   -Thành viên Ủy ban Chính sách và Pháp lý –<br /> Hiệp hội
//                   Blockchain Việt Nam
//                   <br />
//                   -Đồng trưởng làng công nghệ Blockchain –<br /> Techfest Việt
//                   Nam
//                   <br />
//                 </p>
//               </div>
//             </div>

//             <div className="profile-item-content" style={{ fontSize: "14px" }}>
//               <p
//                 style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}
//               >
//                 Tiểu sử
//               </p>
//               <p>
//                 Luật sư Đào Tiến Phong có gần 20 năm kinh nghiệm trong lĩnh vực
//                 tư vấn pháp lý <br />
//                 doanh nghiệp và dự án với đa dạng loại hình như sản xuất,
//                 logistics, phân phối, bán lẻ,
//                 <br /> xây dựng, bất động sản, giáo dục, y tế, sức khoẻ, F&B,
//                 FMCG…
//               </p>
//               <p>
//                 - Tư vấn các lĩnh vực đặc thù như Startup, Thương mại điện tử,
//                 Fintech, Blockchain, Metaverse,Cryptocurrency,
//                 <br /> Gamefi, DAO, Web 3…
//                 <br />- Tư vấn pháp lý và thành lập các công ty nước ngoài
//                 (offshore) như Singapore, Hồng Kông, Cayman, BVI,
//                 <br />
//                 Seychelle, Marshall, Belize, St Vincent…
//                 <br />- Tư vấn các giao dịch M&A, Due Dilligence, gọi vốn, tái
//                 cấu trúc doanh nghiệp.
//               </p>
//             </div>
//           </div>
//           <div>
//             <div className="image-container">
//               <img src={"bancovan/image.jpg"} alt="image-profile" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <CoVanKhac />
//     </div>
//   );
// };

// export default ProfileDaoTienPhong;

import React from "react";
import "./Profile.css";
import CoVanKhac from "./CoVanKhac";

const ProfileDaoTienPhong = () => {
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
            LUẬT SƯ
            <br />
            ĐÀO TIẾN PHONG
          </h1>
        </div>
        <hr className="divider" />

        <div className="profile-content">
          <div className="profile-main-info">
            <img
              src="/bancovan/DaoTienPhong.png"
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="highlight-title">Các hoạt động nổi bật</h2>
              <p>
                - Luật sư điều hành - Investpush Legal
                <br />
                - Thành viên Ủy ban Chính sách và Pháp lý – Hiệp hội Blockchain
                Việt Nam
                <br />- Đồng trưởng làng công nghệ Blockchain – Techfest Việt
                Nam
              </p>
              <h2 className="highlight-title">Tiểu sử</h2>
              <p>
                Luật sư Đào Tiến Phong có gần 20 năm kinh nghiệm trong lĩnh vực
                tư vấn pháp lý doanh nghiệp và dự án với đa dạng loại hình như
                sản xuất, logistics, phân phối, bán lẻ, xây dựng, bất động sản,
                giáo dục, y tế, sức khoẻ, F&B, FMCG,...
              </p>
              <p>
                - Tư vấn các lĩnh vực đặc thù như Startup, Thương mại điện tử,
                Fintech, Blockchain, Metaverse, Cryptocurrency, Gamefi, DAO, Web
                3,...
                <br />
                - Tư vấn pháp lý và thành lập các công ty nước ngoài (offshore)
                như Singapore, Hồng Kông, Cayman, BVI, Seychelle, Marshall,
                Belize, St Vincent,...
                <br />- Tư vấn các giao dịch M&A, Due Dilligence, gọi vốn, tái
                cấu trúc doanh nghiệp.
              </p>
            </div>
          </div>

          <div className="profile-sidebar">
            <img
              src="/bancovan/image.jpg"
              alt="side-profile"
              className="sidebar-image"
            />
          </div>
        </div>
      </div>

      <CoVanKhac />
    </div>
  );
};

export default ProfileDaoTienPhong;
