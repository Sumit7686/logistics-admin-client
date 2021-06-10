import React from "react";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import "../../css/Darshan.css";

export default function DeliveryBoyHome({ setAuth }) {
  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />

      <div className="container">
        <div className="partner-body-2 pt-3 align-items-center">
          <div className="row text-center mt-5 pt-5">
            <div className="col-md-4 offset-1" data-aos="fade-right">
              <div className="contactcard">
                <img
                  src="/photos/admin/order(1).png"
                  alt="select-location"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a href="/DeliveryBoyOrder" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Order
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-4 offset-2" data-aos="fade-left">
              <div className="contactcard">
                <img
                  src="/photos/admin/complaints(2).png"
                  alt="delivering-service"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a
                  href="/DeliveryBoyComplaints"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="p py-1 px-4 mt-3 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Complaints
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
