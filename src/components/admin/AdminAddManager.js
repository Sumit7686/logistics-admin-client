import React from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import "../../css/Login.css";

export default function AdminAddManager({ setAuth }) {
  return (
    <>
      <AdminNavbar setAuth={setAuth} />
      <div className="form-add">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body">
                  <h5 className="card-title text-center">Add Manager</h5>
                  <form>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label alt="Enter Email" placeholder="Email"></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="password"
                        name="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label
                        alt="Enter Password"
                        placeholder="Password."
                      ></label>
                    </div>

                    <div className="d-flex flex-column">
                      <button
                        type="submit"
                        className="btn btn-lg btn-outline-success btn-block text-uppercase mb-3"
                      >
                        Add Manager
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 container">
          <a href="/AdminManager" style={{ textDecoration: "none" }}>
            <button>Back</button>
          </a>
        </div>
      </div>
    </>
  );
}