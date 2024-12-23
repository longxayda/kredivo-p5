import React from "react";
import "../container.css";
import "./Style/AboutUs.css";
import { Link } from "react-router-dom";
import DXS from "../../Image/profile/daoxuanson.png";
import DTP from "../../Image/profile/DaoTienPhong.png";
import HVL from "../../Image/profile/HoVanLong.png";
import HSN from "../../Image/profile/HangSamNang.png";
import NVT from "../../Image/profile/NguyenVanThua.png";
import PNT from "../../Image/profile/PhamNgocThach.png";
import TTP from "../../Image/profile/trantrongphong.png";

const AboutUs = () => {
  return (
    <div className="about-us-content">
      <div className="about-us-intro"></div>
      <div className="about-us-milestones">
        <h3>Ban lãnh đạo cấp cao</h3>
        <div className="leaders">
          <div className="leader">
            <Link to="/ProfileDaoXuanSon">
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
                  <img src={DXS} alt="Advisor 1" className="leader-img" />
                </div>
                <span style={{ color: "#2D947A", fontWeight: "700" }}>
                  Chủ tịch
                </span>
                <p style={{ color: "red", fontWeight: "600" }}>
                  LS Đào Xuân Sơn
                </p>
              </button>
            </Link>
          </div>
          <Link>
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
                <img src={PNT} alt="Leader 1" className="leader-img" />
              </div>
              <span style={{ color: "#2D947A", fontWeight: "700" }}>
                Tổng Giám đốc
              </span>
              <p style={{ color: "red", fontWeight: "600" }}>
                Ông Phạm Ngọc Thạch
              </p>
            </button>
          </Link>
        </div>
        <h3 style={{ marginTop: "30px" }}>Ban cố vấn</h3>
        <div className="leaders-advisors">
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
            to={"/ProfileNguyenVanThua"}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid #2D947A",
                borderRadius: "50%",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <img src={NVT} alt="Leader 1" className="leader-img" />
            </div>
            <span style={{ color: "#2D947A", fontWeight: "600" }}>
              Phó Tổng Giám đốc
            </span>
            <p>Ông Nguyễn Văn Thừa</p>
          </Link>
          <Link to="/ProfileDaoTienPhong">
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
                <img src={DTP} alt="Advisor 2" className="leader-img" />
              </div>
              <p>LS Đào Tiến Phong</p>
            </button>
          </Link>
          <Link to="/ProfileHangSamNang">
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
                <img src={HSN} alt="Advisor 3" className="leader-img" />
              </div>
              <p>TS Hàng Sấm Nang</p>
            </button>
          </Link>
          <Link to="/ProfileHoVanLong">
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
                <img src={HVL} alt="Advisor 4" className="leader-img" />
              </div>
              <p>Ông Hồ Vân Long</p>
            </button>
          </Link>
          <Link to="/ProfileTranTrongPhong">
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
                  src={"bancovan/trantrongphong.png"}
                  alt="Advisor 5"
                  className="leader-img"
                />
              </div>
              <p>TS Trần Trọng Phòng</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
