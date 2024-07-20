import React from "react";
import "../container.css";
import "./Style/Product.css";
const Product = () => {
  return (
    <main>
      <div className="container">
        <div className="flex flex-col items-center space-y-8 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold" style={{ color: "#2D947A" }}>
              Hệ thống e-learning chuyên nghiệp
            </h2>
            <p className="text-muted-foreground mt-2">
              Quản lý khóa học, học viên, tiến trình học tập, tài liệu học tập,
              đánh giá
              <br />
              và kiểm tra một cách dễ dàng
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold" style={{ color: "#2D947A" }}>
              Kinh doanh khóa học, dịch vụ tư vấn
            </h2>
            <p className="text-muted-foreground mt-2">
              Hỗ trợ đầy đủ các cổng thanh toán, hệ thống quản lý mã học, hệ
              thống
              <br />
              coupon, hệ thống affiliate
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold" style={{ color: "#2D947A" }}>
              Phát triển và cung cấp nền tảng/giải pháp công nghệ thông tin theo
              yêu cầu
            </h2>
            <h3 className="text-xl font-bold mt-2" style={{ color: "#2D947A" }}>
              Phát triển phần mềm
            </h3>
            <p className="text-muted-foreground mt-2">
              Thiết kế, phát triển và triển khai các ứng dụng phần mềm
              <br />
              Tích hợp các ứng dụng CNTT khác nhau
              <br />
              Bảo trì và hỗ trợ phần mềm
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold" style={{ color: "#2D947A" }}>
              Dịch Vụ cho thuê IT / Helpdesk
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
