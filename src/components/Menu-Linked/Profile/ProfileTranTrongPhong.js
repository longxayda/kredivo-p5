// import React from "react";
// import headerprofile from "../../../Image/profile/headerprofile.png";
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
//             TIẾN SỸ
//             <br />
//             TRẦN TRỌNG PHÒNG
//           </div>
//         </div>
//       </div>
//       <div style={{ border: "1px solid #2D947A", marginTop: "20px" }}></div>

//       <div className="body-profile-xs">
//         <div className="profile-item-body-2">
//           <div className="profile-item-body">
//             <div>
//               <img
//                 src={"/bancovan/trantrongphong.png"}
//                 alt="trantrongphong"
//                 style={{ height: "200px" }}
//               />
//             </div>
//             <div>
//               <p style={{ color: "red", fontWeight: "bold" }}>
//                 Các hoạt động nổi bật
//               </p>
//               <p>
//                 Bảo vệ thành công luận án Tiến Sỹ với những công trình nghiên
//                 cứu được đánh giá cao, mang lại giá trị thực tiễn và lý luận.
//                 <br />
//                 Đảm nhiệm nhiều vị trí quan trọng tại các tổ chức giáo dục và
//                 nghiên cứu uy tín.
//                 <br />
//                 Tích cực tham gia các hội thảo kinh doanh quốc tế, nơi trình bày
//                 những nghiên cứu tiên tiến.
//                 <br /> Công bố nhiều công trình nghiên cứu và bài báo kinh doanh
//                 trên các tạp chí uy tín trong và ngoài nước. <br /> Truyền đạt
//                 kiến thức và kinh nghiệm cho các thế hệ học trò, truyền cảm hứng
//                 cho nhiều nhà nghiên cứu trẻ.
//               </p>
//             </div>
//           </div>
//           <div className="profile-item-content">
//             <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
//               Tiểu sử
//             </p>
//             <p>
//               Tiến Sỹ Trần Trọng Phòng là một người có niềm đam mê sâu sắc với
//               lĩnh vực kinh doanh và giáo dục. Ông đã theo đuổi học vấn tại
//               nhiều trường đại học danh tiếng và không ngừng nghiên cứu, khám
//               phá những kiến thức mới. Với sự nghiệp gắn bó với giáo dục và
//               nghiên cứu, ông đã giữ nhiều vị trí quan trọng tại các tổ chức uy
//               tín và luôn tận tụy trong công việc. Ngoài ra, ông còn tích cực
//               tham gia các hội thảo quốc tế và công bố nhiều công trình nghiên
//               cứu giá trị, góp phần phát triển nền kinh doanh và giáo dục nước
//               nhà.
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

const ProfileTranTrongPhong = () => {
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
            TIẾN SỸ
            <br />
            TRẦN TRỌNG PHÒNG
          </h1>
        </div>
        <hr className="divider" />

        <div className="profile-content">
          <div className="profile-main-info">
            <img
              src="/bancovan/trantrongphong.png"
              alt="trantrongphong"
              className="profile-image"
              style={{ height: "200px" }}
            />
            <div className="profile-details">
              <h2 className="highlight-title">Các hoạt động nổi bật</h2>
              <p>
                Bảo vệ thành công luận án Tiến Sỹ với những công trình nghiên
                cứu được đánh giá cao, mang lại giá trị thực tiễn và lý luận.
                <br />
                Đảm nhiệm nhiều vị trí quan trọng tại các tổ chức giáo dục và
                nghiên cứu uy tín.
                <br />
                Tích cực tham gia các hội thảo kinh doanh quốc tế, nơi trình bày
                những nghiên cứu tiên tiến.
                <br />
                Công bố nhiều công trình nghiên cứu và bài báo kinh doanh trên
                các tạp chí uy tín trong và ngoài nước.
                <br />
                Truyền đạt kiến thức và kinh nghiệm cho các thế hệ học trò,
                truyền cảm hứng cho nhiều nhà nghiên cứu trẻ.
              </p>
              <h2 className="highlight-title">Tiểu sử</h2>
              <p>
                Tiến Sỹ Trần Trọng Phòng là một người có niềm đam mê sâu sắc với
                lĩnh vực kinh doanh và giáo dục. Ông đã theo đuổi học vấn tại
                nhiều trường đại học danh tiếng và không ngừng nghiên cứu, khám
                phá những kiến thức mới. Với sự nghiệp gắn bó với giáo dục và
                nghiên cứu, ông đã giữ nhiều vị trí quan trọng tại các tổ chức
                uy tín và luôn tận tụy trong công việc. Ngoài ra, ông còn tích
                cực tham gia các hội thảo quốc tế và công bố nhiều công trình
                nghiên cứu giá trị, góp phần phát triển nền kinh doanh và giáo
                dục nước nhà.
              </p>
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

export default ProfileTranTrongPhong;
