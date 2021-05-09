import React from "react";
import AdminNavbar from "../navbar/AdminNavbar";

export default function AdminManager({ setAuth }) {
  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div className="partner-body-2 align-items-center">
          <div className="row text-center mt-5">
            <div className="col-md-6">
              <img
                src="/photos/admin/user(1).png"
                alt="sign-up"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
              />
              <div className="mb-5"></div>
              <a href="/AdminManagerDetails" style={{ textDecoration: "none" }}>
                <span
                  className="p py-1 px-4 rounded"
                  style={{ border: "1px solid" }}
                >
                  Manager Details
                </span>
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="/photos/admin/admin(1).png"
                alt="sign-up"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
              />
              <div className="mb-5"></div>
              <a href="/AdminAddManager" style={{ textDecoration: "none" }}>
                <span
                  className="p py-1 px-4 rounded"
                  style={{ border: "1px solid" }}
                >
                  Add New Manager
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 container">
        <a href="/AdminHome" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
