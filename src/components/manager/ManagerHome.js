import React from "react";
import ManagerNavbar from "../navbar/ManagerNavbar";

export default function ManagerHome({ setAuth }) {
  return (
    <>
      <ManagerNavbar setAuth={setAuth} />

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
              <a href="/ManagerOrder" style={{ textDecoration: "none" }}>
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
              <a href="/ManagerDeliveryBoy" style={{ textDecoration: "none" }}>
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
    </>
  );
}
