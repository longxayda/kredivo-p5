import React from "react";
import { Link } from "react-router-dom";

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
              <img
                src={"/bancovan/DaoTienPhong.png"}
                alt="Advisor 2"
                className="leader-img"
              />
            </div>
            <p>LS Đào Tiến Phong</p>
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
              <img
                src={"/bancovan/HoVanLong.png"}
                alt="Advisor 3"
                className="leader-img"
              />
            </div>
            <p>Ông Hồ Vân Long</p>
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
              <img
                src={"/bancovan/HangSamNang.png"}
                alt="Advisor 3"
                className="leader-img"
              />
            </div>
            <p>TS Hàng Sấm Nang</p>
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
                src={"/bancovan/trantrongphong.png"}
                alt="Advisor 3"
                className="leader-img"
              />
            </div>
            <p>TS Trần Trọng Phòng</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoVanKhac;
