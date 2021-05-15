import React, { useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import "../../css/Register.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminAddManager({ setAuth }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { name, email, area, city, pincode, contact, password };

    await axios
      .post("http://localhost:5001/auth/registerAdmin", body)
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error("Server Error.");
        console.log("err :", err);
      });
  };

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
                  <form onSubmit={(e) => onSubmitForm(e)}>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label alt="Enter Name" placeholder="Name"></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label alt="Enter Email" placeholder="Email"></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />
                      <label alt="Enter Area" placeholder="Area."></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                      <label alt="Enter City" placeholder="City."></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="number"
                        name="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                      <label alt="Enter Pincode" placeholder="Pincode."></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                      />
                      <label alt="Enter Contact" placeholder="Contact."></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
