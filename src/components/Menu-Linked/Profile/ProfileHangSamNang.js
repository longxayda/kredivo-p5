// import React from "react";
// import headerprofile from "../../../Image/profile/headerprofile.png";
// import HangSamNang from "../../../Image/profile/HangSamNang.png";
// import image from "../../../Image/profile/image.png";
// import "./Profile.css";
// import CoVanKhac from "./CoVanKhac";
// const ProfileHangSamNang = () => {
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
//             HÀNG SẤM NANG
//           </div>
//         </div>
//       </div>
//       <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

//       <div className="body-profile-xs">
//         <div className="profile-item-body-2">
//           <div className="profile-item-body">
//             <div>
//               <img src={HangSamNang} alt="profile" />
//             </div>
//             <div>
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Các hoạt động nổi bật
//               </p>
//               <p>
//                 Tiến sĩ Hàng Sấm Nang tốt nghiệp tiến sĩ CNTT và thạc sĩ Kinh tế
//                 với 15 năm giảng dạy. <br /> CIO – Tân Thanh Group, CIO –
//                 Gemadept. <br />
//                 Hiện là P. Viện trưởng Viện Phát triển KTS VN. <br /> CEO
//                 SuperSoft và GĐ chương trình CEO 4.0.
//                 <br /> giảng viên cao cấp các chương trình quản trị tại VAM
//                 Academy.
//               </p>
//             </div>
//           </div>
//           <div className="profile-item-content">
//             <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
//               Tiểu sử
//             </p>
//             {/* Nhiều năm kinh nghiệm trong tư vấn, tái cấu trúc doanh nghiệp &
//             chuyến đổi số, triển
//             <br /> khai hệ thống thông tin quản lý cho các doanh nghiệp lớn tại
//             Việt Nam như:
//             <br />- Tổng Công ty Cà phê Trung Nguyên.
//             <br />- Tập đoàn Gemadept.
//             <br />- Tập đoàn ITL. */}
//             <h6>
//               <strong>Năng lực chuyên môn:</strong>
//             </h6>
//             <ul>
//               <li>Tiến sĩ MIS - Đại học UITM - Ba Lan.</li>
//               <li>Chứng chỉ Quản lý dự án PMP – PMI của Hoa Kỳ.</li>
//               <li>Chứng chỉ Tư vấn Chuyển Đổi Số Quốc Tế - Master DX.</li>
//               <li>Thạc sĩ Chuỗi Cung Ứng - Đại học Euro College.</li>
//               <li>Cử nhân Kinh tế - ĐH Kinh Tế Quốc Dân.</li>
//               <li>Kỹ sư phần mềm – Trường Đại học Bách Khoa TP.HCM.</li>
//               <li>Giảng viên Công nghệ và Quản trị ĐH Swinburne (Úc).</li>
//               <li>Chuyên gia chuyển đổi số quốc gia – Bộ KH&ĐT.</li>
//               <li>Chuyên gia chuyển đổi số quốc tế - USAID – Hoa Kỳ.</li>
//               <li>Giảng viên CNTT–Đại học Xây dựng Miền Tây (Bộ Xây Dựng).</li>
//               <li>Giảng viên MIS/CEO/XDX của PACE, VCCI.</li>
//               <li>
//                 Giảng viên Chuyên đề hệ thống thông tin quản lý cho các lớp cao
//                 học Quản trị của ĐH Kinh tế, ĐH Xây Dựng Miền Tây.
//               </li>
//             </ul>

//             <h6>
//               <strong>Hoạt động nổi bật:</strong>
//             </h6>
//             <ul>
//               <li>
//                 Nhiều năm kinh nghiệm trong tư vấn, tái cấu trúc doanh nghiệp &
//                 chuyển đổi số, triển khai hệ thống thông tin quản lý cho các
//                 doanh nghiệp lớn tại Việt Nam như:
//               </li>
//               <ul>
//                 <li>CIO - Tổng Công ty Cà phê Trung Nguyên.</li>
//                 <li>CIO - Tập đoàn Gemadept.</li>
//                 <li>Giám đốc dự án - Tập đoàn ITL.</li>
//                 <li>Tư vấn VPCFC (Phân Bón Cà Mau – Dầu khí Việt Nam).</li>
//                 <li>Tư vấn CĐS Tập Đoàn Liksin (Sản xuất – Phân phối).</li>
//                 <li>CTO - Tập đoàn Tân Thanh Container.</li>
//                 <li>CDO – Học viện quản lý PACE.</li>
//                 <li>Công ty Cổ Phần Đại Nam (Khu Du lịch Đại Nam).</li>
//                 <li>Tập đoàn Thức ăn gia súc Lái Thiêu.</li>
//                 <li>Công ty Silk Road Systems (UK).</li>
//                 <li>Công ty Worldsoft (USA).</li>
//                 <li>Công ty Sakura (Nhật).</li>
//                 <li>Công ty Dược Viphavet (Pháp).</li>
//                 <li>Chuỗi Siêu Thị Intimex.</li>
//               </ul>
//               <li>Chủ dự án phát triển giải pháp Supersoft ERP tổng thể.</li>
//               <li>
//                 Sản phẩm đã được độc giả báo Người Tiêu dùng và Viện Kinh tế
//                 quốc tế bình chọn là sản phẩm ERP tốt nhất trong hai năm liên
//                 tục và đạt giải thưởng quốc gia 2014 và 2016.
//               </li>
//             </ul>
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

// export default ProfileHangSamNang;

import React from "react";
import "./Profile.css";
import CoVanKhac from "./CoVanKhac";

const ProfileHangSamNang = () => {
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
            HÀNG SẤM NANG
          </h1>
        </div>
        <hr className="divider" />

        <div className="profile-content">
          <div className="profile-main-info">
            <img
              src="/bancovan/HangSamNang.png"
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="highlight-title">Các hoạt động nổi bật</h2>
              <p>
                Tiến sĩ Hàng Sấm Nang tốt nghiệp tiến sĩ CNTT và thạc sĩ Kinh tế
                với 15 năm giảng dạy.
                <br />
                CIO – Tân Thanh Group, CIO – Gemadept.
                <br />
                Hiện là P. Viện trưởng Viện Phát triển KTS VN.
                <br />
                CEO SuperSoft và GĐ chương trình CEO 4.0.
                <br />
                Giảng viên cao cấp các chương trình quản trị tại VAM Academy.
              </p>
            </div>
            <h2 className="highlight-title">Tiểu sử</h2>
            <ul>
              <li>Tiến sĩ MIS - Đại học UITM - Ba Lan.</li>
              <li>Chứng chỉ Quản lý dự án PMP – PMI của Hoa Kỳ.</li>
              <li>Chứng chỉ Tư vấn Chuyển Đổi Số Quốc Tế - Master DX.</li>
              <li>Thạc sĩ Chuỗi Cung Ứng - Đại học Euro College.</li>
              <li>Cử nhân Kinh tế - ĐH Kinh Tế Quốc Dân.</li>
              <li>Kỹ sư phần mềm – Trường Đại học Bách Khoa TP.HCM.</li>
              <li>Giảng viên Công nghệ và Quản trị ĐH Swinburne (Úc).</li>
              <li>Chuyên gia chuyển đổi số quốc gia – Bộ KH&ĐT.</li>
              <li>Chuyên gia chuyển đổi số quốc tế - USAID – Hoa Kỳ.</li>
              <li>
                Giảng viên CNTT – Đại học Xây dựng Miền Tây (Bộ Xây Dựng).
              </li>
              <li>Giảng viên MIS/CEO/XDX của PACE, VCCI.</li>
              <li>
                Giảng viên Chuyên đề hệ thống thông tin quản lý cho các lớp cao
                học Quản trị của ĐH Kinh tế, ĐH Xây Dựng Miền Tây.
              </li>
            </ul>

            <h2 className="highlight-title">Hoạt động nổi bật</h2>
            <ul>
              <li>
                Nhiều năm kinh nghiệm trong tư vấn, tái cấu trúc doanh nghiệp &
                chuyển đổi số, triển khai hệ thống thông tin quản lý cho các
                doanh nghiệp lớn tại Việt Nam như:
                <ul>
                  <li>CIO - Tổng Công ty Cà phê Trung Nguyên.</li>
                  <li>CIO - Tập đoàn Gemadept.</li>
                  <li>Giám đốc dự án - Tập đoàn ITL.</li>
                  <li>Tư vấn VPCFC (Phân Bón Cà Mau – Dầu khí Việt Nam).</li>
                  <li>Tư vấn CĐS Tập Đoàn Liksin (Sản xuất – Phân phối).</li>
                  <li>CTO - Tập đoàn Tân Thanh Container.</li>
                  <li>CDO – Học viện quản lý PACE.</li>
                  <li>Công ty Cổ Phần Đại Nam (Khu Du lịch Đại Nam).</li>
                  <li>Tập đoàn Thức ăn gia súc Lái Thiêu.</li>
                  <li>Công ty Silk Road Systems (UK).</li>
                  <li>Công ty Worldsoft (USA).</li>
                  <li>Công ty Sakura (Nhật).</li>
                  <li>Công ty Dược Viphavet (Pháp).</li>
                  <li>Chuỗi Siêu Thị Intimex.</li>
                </ul>
              </li>
              <li>Chủ dự án phát triển giải pháp Supersoft ERP tổng thể.</li>
              <li>
                Sản phẩm đã được độc giả báo Người Tiêu dùng và Viện Kinh tế
                quốc tế bình chọn là sản phẩm ERP tốt nhất trong hai năm liên
                tục và đạt giải thưởng quốc gia 2014 và 2016.
              </li>
            </ul>
          </div>

          {/* <div className="profile-bio"></div> */}

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

export default ProfileHangSamNang;
