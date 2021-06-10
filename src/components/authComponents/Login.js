import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../css/Login.css";

export default function Login({ setAuth }) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = { email, password };

    axios.post("http://localhost:5001/auth/login", body).then((result) => {
      if (result.data.token !== undefined) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.id);
        toast.success(result.data.message);
        if (result.data.role === "deliveryBoy") {
          history.push("/DeliveryBoyHome");
        } else if (result.data.role === "manager") {
          history.push("/ManagerHome");
        } else {
          history.push("/AdminHome");
        }
        setAuth(true);
      } else {
        toast.error(result.data.message);
      }
    });
  };

  return (
    <div className="form">
      <Fragment>
        <div
          className="container"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body">
                  <h5 className="card-title text-center">Login</h5>
                  <form onSubmit={onSubmitForm}>
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
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
