import React from "react";
import "../container.css";
import "./Style/AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logo1 from "../../Image/1.png";

const AboutUs = () => {
  return (
    <main className="about-us-main container">
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-intro">
            <h6>
              Hành trình khởi đầu của Power5 Technology trước hết là một công ty
              phát triển công nghệ trong lĩnh vực giáo dục (chuyển đổi số dự án
              an toàn học đường, nền tảng LMS Power5.edu.vn). Với những thành
              công đạt được, Power5 tiếp tục mở rộng sang các lĩnh vực công nghệ
              trọng yếu như Blockchain và AI, đồng thời tham gia vào tiến trình
              chuyển đổi số của doanh nghiệp.
            </h6>
          </div>
          <div className="about-us-milestones">
            <h3>Cột mốc chính</h3>
            <div className="milestone">
              <div className="milestone-year">
                <FontAwesomeIcon icon={faStar} />
                <p>2024</p>
              </div>
              <div className="milestone-description">
                <p>
                  Trải qua quá trình sáp nhập và phát triển, Power5 Technology
                  là pháp nhân mới được thành lập độc lập với doanh nghiệp ban
                  đầu nhưng kế thừa nguồn lực và kết nối vững vàng từ công ty
                  tiền thân. Là một pháp nhân mới, Power5 Technology còn là biểu
                  tượng cho sự hợp nhất của trí tuệ, đam mê và khát vọng chinh
                  phục những thử thách mới.
                </p>
              </div>
            </div>
            <div className="milestone">
              <div className="milestone-year">
                <FontAwesomeIcon icon={faStar} />
                <p>2018</p>
              </div>
              <div className="milestone-description">
                <p>
                  Ngọn lửa đam mê công nghệ được khơi dậy bởi đội ngũ kỹ sư đầy
                  nhiệt huyết và giàu kinh nghiệm. Từ đó, Power5 được thành lập
                  dưới hình thức Công ty TNHH, đánh dấu bước đầu tiên trên hành
                  trình công nghệ.
                </p>
              </div>
            </div>
            <h3>Ban lãnh đạo cấp cao</h3>
            <div>
              <div className="leaders">
                <a href="/ProfileDaoXuanSon">
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "200px",
                        border: "1px solid #2D947A",
                        borderRadius: "50%",
                      }}
                    >
                      <img src={logo1} alt="Leader 1" className="leader-img" />
                    </div>
                    <p>LS Đào Xuân Sơn</p>
                  </button>
                </a>

                <div className="leader">
                  <a href="/ProfileDaoTienPhong">
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          border: "1px solid #2D947A",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={logo1}
                          alt="Leader 1"
                          className="leader-img"
                        />
                      </div>
                      <p>LS Đào Tiến Phong</p>
                    </button>
                  </a>
                </div>
              </div>
              <div className="leaders1">
                <div className="leader">
                  <a href="/ProfileHangSamNang">
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          border: "1px solid #2D947A",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={logo1}
                          alt="Leader 1"
                          className="leader-img"
                        />
                      </div>{" "}
                      <p>TS Hàng Sấm Nang</p>
                    </button>
                  </a>
                </div>
                <div className="leader">
                  <a href="/ProfileHoVanLong">
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          border: "1px solid #2D947A",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={logo1}
                          alt="Leader 1"
                          className="leader-img"
                        />
                      </div>{" "}
                      <p>Ông Hồ Vân Long</p>
                    </button>
                  </a>
                </div>
                <div className="leader">
                  <a href="/ProfileHaHuyHieu">
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          border: "1px solid #2D947A",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={logo1}
                          alt="Leader 1"
                          className="leader-img"
                        />
                      </div>
                      <span style={{ color: "green" }}>
                        Kỹ sư công nghệ thông tin
                      </span>
                      <p>Hà Huy Hiệu</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
