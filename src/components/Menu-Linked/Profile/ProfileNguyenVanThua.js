// import React from "react";
// import NVT from "../../../Image/profile/NguyenVanThua.png";
// import CoVanKhac from "./CoVanKhac";
// import "./Profile.css";

// const ProfileNguyenVanThua = () => {
//   return (
//     <div className="container">
//       <div className="image-header">
//         <img src={"bancovan/headerprofile.jpg"} alt="headerprofile" />
//       </div>
//       <div className="body-item">
//         <div class="banner-name">
//           <div class="banner-content-name">
//             PHÓ TỔNG GIÁM ĐỐC
//             <br />
//             PHẠM NGỌC THẠCH
//           </div>
//         </div>
//       </div>
//       <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>
//       <div className="body-profile-xs">
//         <div className="profile-item-body-2">
//           <div className="profile-item-body">
//             <div>
//               <img src={NVT} alt="profile" />
//             </div>
//             <div>
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Các hoạt động nổi bật
//               </p>
//               <p>
//                 -Giám Đốc Điều Hành CÔNG TY TNHH POWER 5 <br /> Nhà đồng sáng
//                 lập Công Ty Cổ Phần Công Nghệ Power 5 Technology
//               </p>
//             </div>
//           </div>
//           <div className="profile-item-content">
//             <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
//               Tiểu sử
//             </p>
//             <p>
//               -Có hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ. Tôi luôn cố
//               gắng cập nhật những xu hướng công nghệ mới, hướng đến các giải
//               pháp chuyển đổi số nhằm mang lại những giải pháp để công nghệ tối
//               ưu.
//             </p>
//             <p>- Nhà sáng lập Công Ty TNHH Power 5</p>
//             <p>- Tư vấn các giải pháp về LMS, nRMS, TMS, SAP …</p>
//           </div>
//         </div>
//         <div>
//           <div className="image-container">
//             <img src={"bancovan/image.jpg"} alt="image-profile" />
//           </div>
//         </div>
//       </div>
//       <CoVanKhac />
//     </div>
//   );
// };

// export default ProfileNguyenVanThua;

import React from "react";
import "./Profile.css";
import CoVanKhac from "./CoVanKhac";

const ProfileNguyenVanThua = () => {
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
            PHÓ TỔNG GIÁM ĐỐC
            <br />
            PHẠM NGỌC THẠCH
          </h1>
        </div>
        <hr className="divider" />

        <div className="profile-content">
          <div className="profile-main-info">
            <img
              src="/bancovan/NguyenVanThua.png"
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="highlight-title">Các hoạt động nổi bật</h2>
              <p>
                - Giám Đốc Điều Hành Công Ty TNHH Power 5.
                <br />- Nhà đồng sáng lập Công Ty Cổ Phần Công Nghệ Power 5
                Technology.
              </p>
              <h2 className="highlight-title">Tiểu sử</h2>
              <p>
                - Có hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ. Tôi luôn
                cố gắng cập nhật những xu hướng công nghệ mới, hướng đến các
                giải pháp chuyển đổi số nhằm mang lại những giải pháp để công
                nghệ tối ưu.
              </p>
              <p>- Nhà sáng lập Công Ty TNHH Power 5.</p>
              <p>- Tư vấn các giải pháp về LMS, nRMS, TMS, SAP,…</p>
            </div>
          </div>

          <div className="profile-bio"></div>

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

export default ProfileNguyenVanThua;
