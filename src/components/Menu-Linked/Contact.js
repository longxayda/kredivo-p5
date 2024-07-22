import React from "react";
import "./Style/Contact.css";

const Contact = () => {
  return (
    <main className="container">
      <div className=" contact-main">
        <div className="contact-container">
          <h3 className="contact-heading">Địa chỉ</h3>
          <p className="contact-info">
            Số 7A-9 Đường số 12, Khu phố 6, P.Bình Chiểu, Thủ Đức, Tp.Hồ Chí
            Minh
          </p>
          <h3 className="contact-heading">Email</h3>
          <p className="contact-info">service@power5.edu.vn</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15672.419467273785!2d106.74266293097764!3d10.87962804962214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d80b477d0001%3A0x50b01e72af9e4f1e!2zN2EgxJAuIFPhu5EgMTIsIEtodSBQaOG7kSA2LCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrCBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721632180496!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ borderRadius:'15px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="contact-map"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
