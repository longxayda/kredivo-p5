import React, { useState } from "react";
import "../container.css";
import "./Style/Activity.css";
import mot from "../../Image/Hình ảnh Lĩnh vực hoạt động/1.jpg";
import hai from "../../Image/Hình ảnh Lĩnh vực hoạt động/2.jpg";
import nam from "../../Image/Hình ảnh Lĩnh vực hoạt động/4.jpg";
import sau from "../../Image/Hình ảnh Lĩnh vực hoạt động/6.jpg";
import bay from "../../Image/Hình ảnh Lĩnh vực hoạt động/7.jpg";

const Activity = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
    setMenuOpen(false); // Close menu on section click
  };

  return (
    <main className="container page-activity">
      <div className="menu">
        <div className="menu-toggle" onClick={toggleMenu}>
          <span>Các lĩnh vực hoạt động</span>
          <span>{menuOpen ? '✖' : '☰'}</span>
        </div>
        <ul className={menuOpen ? 'show' : ''}>
          <li><a href="#investment" onClick={() => scrollToSection('investment')}>Đầu tư công nghệ</a></li>
          <li><a href="#development" onClick={() => scrollToSection('development')}>Phát triển công nghệ</a></li>
          <li><a href="#startup" onClick={() => scrollToSection('startup')}>Quỹ đầu tư khởi nghiệp sáng tạo</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Cung cấp các dịch vụ công nghệ</a></li>
          <li><a href="#digital" onClick={() => scrollToSection('digital')}>Tư vấn và triển khai chuyển đổi số cho doanh nghiệp</a></li>
        </ul>
      </div>
      <div className="text-banner-1-2-3">
        <p style={{ fontWeight: "bold", fontSize: "32px", color: "#2D947A" }}>
          Lĩnh vực hoạt động
        </p>
      </div>
      <div className="banner-activity">
        <div className="banner-item" id="investment">
          <div className="item-content">
            <p className="text-1">Đầu tư công nghệ</p>
            <p>
              Power5 Technology tiến vào đầu tư công nghệ theo nhiều hình thức:
              <br />
              [1] Đầu tư Trực tiếp/Hợp tác đầu tư các dự án công nghệ.
              <br /> [2] Đầu tư vào các công ty công nghệ thông qua hình thức
              M&A hoặc Góp vốn đầu tư
              <br />
              [3] Đầu tư vào các quỹ đầu tư, công ty quản lý vốn đầu tư chuyên
              đầu tư lĩnh vực công nghệ
            </p>
          </div>
          <div className="item-image">
            <img src={mot} alt="mot" className="img-activity" />
          </div>
        </div>
        <div className="banner-item" id="development">
          <div className="item-content">
            <p className="text-1">Phát triển công nghệ</p>
            <p>
              - Power5 Technology đang đẩy mạnh chuyển đổi số cho dự án an toàn
              học đường, một dự án có giá trị xã hội lớn.
              <br /> - Đồng thời, nền tảng
              <a href="https://www.power5.edu.vn">LMS Power5.edu.vn</a> đang
              được triển khai với tầm nhìn kết nối nhà trường, doanh nghiệp,
              học sinh/sinh viên và hỗ trợ các hoạt động chuyển đổi số và xã hội
              tại địa phương.
            </p>
          </div>
          <div className="item-image">
            <img src={nam} alt="nam" className="img-activity" />
          </div>
        </div>
        <div className="banner-item" id="startup">
          <div className="item-content">
            <p className="text-1">Quỹ đầu tư khởi nghiệp sáng tạo</p>
            <p>
              Power5 Technology đang tiến hành các thủ tục pháp lý để thành lập
              quỹ đầu tư khởi nghiệp sáng tạo...Chúng tôi với nguồn lực và hệ
              sinh thái rất mong muốn được tham gia vào tiến trình đồng hành
              với các Dự án khởi nghiệp.
            </p>
          </div>
          <div className="item-image">
            <img src={hai} alt="hai" className="img-activity" />
          </div>
        </div>
        <div className="banner-item" id="services">
          <div className="item-content">
            <p className="text-1">Cung cấp các dịch vụ công nghệ</p>
            <p>
              Chúng tôi cũng cung cấp các dịch vụ công nghệ theo yêu cầu của
              khách hàng,...xem thêm
            </p>
          </div>
          <div className="item-image">
            <img src={bay} alt="bay" className="img-activity" />
          </div>
        </div>
        <div className="banner-item" id="digital">
          <div className="item-content">
            <p className="text-1">Tư vấn và triển khai chuyển đổi số cho doanh nghiệp</p>
            <p>
              Xuất phát từ nhu cầu và hiện trạng ứng dụng công nghệ số cùng
              định hướng chuyển đổi số của doanh nghiệp, Power5 cùng đội ngũ
              chuyên gia sẽ:
              <br />
              [1] Đánh giá hiện trạng ứng dụng công nghệ số
              <br />
              [2] Lập kế hoạch chuyển đổi số
              <br />
              [3] Triển khai và hỗ trợ triển khai kế hoạch chuyển đổi số
              <br />
              [4] Giám sát việc triển khai
              <br />
              [5] Cung cấp dịch vụ hỗ trợ sau triển khai
              <br />
              Ngoài ra, Power5 cùng đội ngũ chuyên gia sẽ tư vấn cho khách hàng
              các mô hình pháp lý phù hợp cho việc chuyển đổi số và thu thập dữ
              liệu cá nhân.
            </p>
          </div>
          <div className="item-image">
            <img src={sau} alt="sau" className="img-activity" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Activity;
