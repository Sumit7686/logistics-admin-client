import React from "react";
import ManagerNavbar from "../navbar/ManagerNavbar";
import "../../css/Darshan.css";

export default function ManagerDeliveryBoy({ setAuth }) {
  return (
    <>
      <ManagerNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <a
            href="/ManagerHome"
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
                  src="/photos/admin/user(1).png"
                  alt="select-location"
                  className="has-retina img-responsive rounded"
                  style={{ border: "5px solid" }}
                />
                <div className="mb-5"></div>
                <a
                  href="/ManagerDeliveryBoyDetails"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Delivery Boy Details
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-4 offset-2" data-aos="fade-left">
              <div className="contactcard">
                <img
                  src="/photos/admin/add_manager.png"
                  alt="delivering-service"
                  className="has-retina img-responsive rounded"
                  style={{ border: "5px solid" }}
                />
                <div className="mb-5"></div>
                <a
                  href="/ManagerAddDeliveryBoy"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="p py-1 px-4 mt-3 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Add New Delivery Boy
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
