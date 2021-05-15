import React from "react";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";

export default function DeliveryBoyHome({ setAuth }) {
  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div className="partner-body-2 pt-5 align-items-center">
          <div className="row text-center mt-5 pt-5">
            <div className="col-md-6">
              <img
                src="/photos/admin/order(1).png"
                alt="select-location"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
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
            <div className="col-md-6">
              <img
                src="/photos/admin/delivery(1).png"
                alt="delivering-service"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
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
                  Any Complaints
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
