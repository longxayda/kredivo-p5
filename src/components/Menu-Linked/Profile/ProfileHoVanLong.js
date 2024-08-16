// import React from "react";
// import headerprofile from "../../../Image/profile/headerprofile.png";
// import HoVanLong from "../../../Image/profile/HoVanLong.png";
// import image from "../../../Image/profile/image.png";
// import "./Profile.css";
// import CoVanKhac from "./CoVanKhac";
// const ProfileHoVanLong = () => {
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
//             HỒ VĂN LONG
//           </div>
//         </div>
//       </div>
//       <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

//       <div className="body-profile-xs">
//         <div className="profile-item-body-2">
//           <div className="profile-item-body">
//             <div>
//               <img src={HoVanLong} alt="profile" />
//             </div>
//             <div>
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Các hoạt động nổi bật
//               </p>
//               <p>
//                 -Cử nhân quản trị kinh doanh quốc tế đại - học Fontys-Hà Lan.
//                 <br />
//                 -MBA-Supply Chain Management, Linnaeus University, Thụy Điển.
//                 <br />- Giám đốc kinh doanh Phát Đạt Group.
//               </p>
//             </div>
//           </div>
//           <div className="profile-item-content">
//             <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
//               Tiểu sử
//             </p>
//             <p>Chưa có nội dung</p>
//           </div>
//         </div>

//         <div className="image-profile-right">
//           <img src={"bancovan/image.jpg"} alt="image-profile" />
//         </div>
//       </div>
//       <CoVanKhac />
//     </div>
//   );
// };

// export default ProfileHoVanLong;

import React from "react";
import "./Profile.css";
import CoVanKhac from "./CoVanKhac";

const ProfileHoVanLong = () => {
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
            HỒ VĂN LONG
          </h1>
        </div>
        <hr className="divider" />

        <div className="profile-content">
          <div className="profile-main-info">
            <img
              src="/bancovan/HoVanLong.png"
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="highlight-title">Các hoạt động nổi bật</h2>
              <p>
                - Cử nhân quản trị kinh doanh quốc tế - Đại học Fontys, Hà Lan.
                <br />
                - MBA - Supply Chain Management, Linnaeus University, Thụy Điển.
                <br />- Giám đốc kinh doanh Phát Đạt Group.
              </p>
              <h2 className="highlight-title">Tiểu sử</h2>
              <p>Chưa có nội dung</p>
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

export default ProfileHoVanLong;
