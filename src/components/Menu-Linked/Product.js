import React from "react";
import "../container.css";
import "./Style/Product.css";
import logo1 from "../../Image/Sản phẩm/3b852a404296b500f7d9df32a4024c4c (1).jpg";
import logo2 from "../../Image/Sản phẩm/KinhDoanh.jpg";
import logo3 from "../../Image/Sản phẩm/PhatTrien.jpg";
import logo4 from "../../Image/Sản phẩm/PhanMem.jpg";
import logo5 from "../../Image/Sản phẩm/DichVu.jpg";
const Product = () => {
  return (
    <main>
      <div className="Product-content">
        <div className="product-header">
          <div className="glowing-border-container">
            <div className="glowing-border">
              <img src={logo1} alt="Product" className="product-img" />
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#2D947A",
                    fontSize: "20px",
                  }}
                >
                  Hệ thống e-learning <br /> chuyên nghiệp
                </p>
              </div>
              <div>
                <p>
                  Quản lý khóa học, học viên, tiến trình học <br /> tập, tài
                  liệu học tập, đánh giá và <br />
                  kiểm tra một cách dễ dàng
                </p>
              </div>

              <div className="parent-container">
                <div className="chi-tiet-form">
                  <div className="chi-tiet">
                    <div>Chi tiết</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glowing-border-container">
            <div className="glowing-border">
              <img src={logo2} alt="Product" className="product-img" />
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#2D947A",
                    fontSize: "20px",
                  }}
                >
                  Kinh doanh khóa học,
                  <br />
                  dịch vụ tư vấn
                </p>
              </div>
              <div>
                <p>
                  Hỗ trợ đầy đủ các cổng thanh toán, hệ
                  <br /> thống quản lý mã học, hệ thống coupon, hệ <br />
                  thống affiliate
                </p>
              </div>
              <div className="parent-container">
                <div className="chi-tiet-form">
                  <div className="chi-tiet">
                    <div>Chi tiết</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glowing-border-container">
            <div className="glowing-border">
              <img src={logo3} alt="Product" className="product-img" />
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#2D947A",
                    fontSize: "20px",
                  }}
                >
                  Phát triển và cung cấp
                  <br /> nền tảng/giải pháp
                  <br /> công nghệ thông tin theo yêu
                  <br /> cầu
                </p>
                <div style={{ border: "1px solid #FFFFFF", marginTop: "45px" }}></div>
               
              </div>
              <div></div>
              <div className="parent-container">
                <div className="chi-tiet-form">
                  <div className="chi-tiet">
                    <div>Chi tiết</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-header">
          <div>
            <div className="glowing-border-container">
              <div className="glowing-border">
                <img src={logo4} alt="Product" className="product-img" />
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#2D947A",
                      fontSize: "20px",
                    }}
                  >
                    Phát triển phần mềm
                  </p>
                </div>
                <div>
                  <p>
                    Thiết kế, phát triển và triển khai các ứng <br /> dụng phần
                    mềm <br /> Tích hợp các ứng dụng CNTT khác nhau <br /> Bảo
                    trì và hỗ trợ phần mềm
                  </p>
                </div>
                <div className="parent-container">
                  <div className="chi-tiet-form">
                    <div className="chi-tiet">
                      <div>Chi tiết</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="glowing-border-container">
              <div className="glowing-border">
                <img src={logo5} alt="Product" className="product-img" />
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#2D947A",
                      fontSize: "20px",
                    }}
                  >
                    Dịch Vụ cho thuê IT / Helpdesk
                  </p>
                </div>
                <div>
                  <p>
                    Thiết kế, phát triển và triển khai các ứng <br /> dụng phần
                    mềm <br /> Tích hợp các ứng dụng CNTT khác nhau <br /> Bảo
                    trì và hỗ trợ phần mềm
                  </p>
                </div>
                <div className="parent-container">
                  <div className="chi-tiet-form">
                    <div className="chi-tiet">
                      <div>Chi tiết</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
