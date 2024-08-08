import React from "react";
import "./Style/Honor.css";

const Honor = () => {
  return (
    <main className="honor-main">
      <div className="honor-container" style={{ marginTop: "1rem" }}>
        <h3 className="honor-title">
          Vinh danh các thành viên xuất sắc của dự án An Toàn Học Đường
        </h3>
        <p className="honor-subtitle">
          Tôn vinh những đóng góp đáng quý của các thành viên thiện nguyện.
        </p>
        <div className="honor-content">
          <p>
            Dự án "An Toàn Học Đường" là một sáng kiến nhằm đảm bảo an toàn cho
            học sinh, sinh viên bằng cách trang bị cho họ những kiến thức và kỹ
            năng cần thiết để phòng chống tai nạn và xử lý các tình huống nguy
            hiểm. Dự án tập trung vào các vấn đề như đuối nước, cháy nổ và các
            tai nạn thường gặp trong cuộc sống hàng ngày. Thông qua các buổi học
            thực hành và lý thuyết, học sinh sẽ được hướng dẫn cách nhận diện và
            phòng tránh nguy hiểm, cũng như các bước sơ cứu cơ bản để bảo vệ bản
            thân và những người xung quanh.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Honor;
