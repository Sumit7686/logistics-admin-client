import React from "react";
import "../../css/Navbar.css";
import AdminNavbar from "../navbar/AdminNavbar";
import "../../css/Darshan.css";

export default function AdminHome({ setAuth }) {
  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div className="container">
        <div className="partner-body-2 pt-3 align-items-center">
          <div className="row text-center mt-5 pt-5">
            <div className="col-md-3" data-aos="fade-right">
              <div className="contactcard">
                <img
                  src="/photos/admin/user(1).png"
                  alt="sign-up"
                  className="has-retina img-responsive"
                />
                <div className="mb-5"></div>
                <a href="/AdminUser" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    User
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-right">
              <div className="contactcard">
                <img
                  src="/photos/admin/admin(1).png"
                  alt="sign-up"
                  className="has-retina img-responsive"
                />
                <div className="mb-5"></div>
                <a href="/AdminManager" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Manager
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left">
              <div className="contactcard">
                <img
                  src="/photos/admin/order(1).png"
                  alt="select-location"
                  className="has-retina img-responsive"
                />
                <div className="mb-5"></div>
                <a href="/AdminOrder" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Order
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left">
              <div className="contactcard">
                <img
                  src="/photos/admin/deliveryBoy.png"
                  alt="delivering-service"
                  className="has-retina img-responsive"
                />
                <div className="mb-5"></div>
                <a href="/AdminDeliveryBoy" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 mt-3 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Delivery Boy
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
