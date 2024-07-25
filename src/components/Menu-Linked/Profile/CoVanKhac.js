import React from "react";
import { Link } from "react-router-dom";
import DTP from "../../../Image/profile/DaoTienPhong.png";
import HSN from "../../../Image/profile/HangSamNang.png";
import NVT from "../../../Image/profile/NguyenVanThua.png";
import PNT from "../../../Image/profile/PhamNgocThach.png";
import "./CoVanKhac.css";
const CoVanKhac = () => {
  return (
    <div>
      <div class="banner-name">
        <div class="banner-content-name">
          <h3>Ban cố vấn</h3>
        </div>
      </div>
      <div className="leaders-advisors-1">
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
        <div className="leader">
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
        </div>
      </div>
    </div>
  );
};

export default CoVanKhac;
