import React from "react";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import "../../css/Darshan.css";

export default function DeliveryBoyComplaints({ setAuth }) {
  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />

      <div className="container pt-5">
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <a
            href="/DeliveryBoyHome"
            style={{
              textDecoration: "none",
              fontSize: "45px",
              color: "black",
            }}
          >
            <i class="las la-angle-double-left"></i>
          </a>
        </div>

        <div className="partner-body-2 align-items-center">
          <div className="row text-center mt-5">
            <div className="col-md-4 offset-1" data-aos="fade-right">
              <div className="contactcard">
                <img
                  src="/photos/admin/order(1).png"
                  alt="select-location"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a
                  href="/DeliveryBoyViewComplaints"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    View Complaints
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
                  href="/DeliveryBoyAddComplaints"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="p py-1 px-4 mt-3 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Add Complaints
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
