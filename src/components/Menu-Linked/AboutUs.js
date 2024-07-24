import React from "react";
import "../container.css";
import "./Style/AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logo1 from "../../Image/1.png";
import { Link } from "react-router-dom";
import DXS from "../../Image/profile/daoxuanson.png";
import DTP from "../../Image/profile/DaoTienPhong.png";
import HVL from "../../Image/profile/HoVanLong.png";
import HSN from "../../Image/profile/HangSamNang.png";
const AboutUs = () => {
  return (
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
                    <span style={{ color: "#2D947A", fontWeight:'700' }}>
                       Tổng Giám đốc
                      </span>
                    <p style={{color:'red',fontWeight:'500'}}>Ông Phạm Ngọc Thạch</p>
                  </button>
                </a>

                <div className="leader">
                  <Link style={{textDecoration:'none' , display:'flex', flexDirection:'column',alignContent:'center',alignItems:'center'}} to={'/ProfileDaoTienPhong'}>
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          border: "1px solid #2D947A",
                          borderRadius: "50%",
                          alignItems:'center',
                          alignContent:'center'
                        }}
                      >
                        <img
                          src={logo1}
                          alt="Leader 1"
                          className="leader-img"
                        />
                      </div>
                      <span style={{ color: "#2D947A" , fontWeight:'700' }}>
                       Phó Tổng Giám đốc - Phụ trách kỹ thuật 
                      </span>
                      <p>Ông Nguyễn Văn Thừa</p>
                    </Link>
                </div>
              </div>
            </div>
            <h3 style={{marginTop:'30px'}}>Ban cố vấn</h3>
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
                      <img src={DXS} alt="Leader 1" className="leader-img" />
                    </div>
                    <p style={{color:'red',fontWeight:'500'}}>LS Đào Xuân Sơn</p>
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
                          src={DTP}
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
                          src={HSN}
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
                          src={HVL}
                          alt="Leader 1"
                          className="leader-img"
                        />
                      </div>
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
            
                      <p>Hà Huy Hiệu</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default AboutUs;
