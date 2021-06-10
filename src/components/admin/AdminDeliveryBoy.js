import React from "react";
import AdminNavbar from "../navbar/AdminNavbar";

export default function AdminDeliveryBoy({ setAuth }) {
  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div data-aos="zoom-out">
          <a
            href="/AdminHome"
            style={{ textDecoration: "none", fontSize: "45px", color: "black" }}
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
                  alt="sign-up"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a
                  href="/AdminDeliveryBoyDetails"
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
                  src="/photos/admin/complaints(2).png"
                  alt="sign-up"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a
                  href="/AdminDeliveryBoyComplaints"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="p py-1 px-4 rounded"
                    style={{ border: "1px solid" }}
                  >
                    Delivery Boy Complaints
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
