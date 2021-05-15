import React, { useEffect, useState } from "react";
import axios from "axios";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import { toast } from "react-toastify";

export default function DeliveryBoyComplaints({ setAuth }) {
  const [subject, setSubject] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  const getId = async () => {
    setId(localStorage.getItem("id"));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { subject, description };

    axios
      .post(`http://localhost:5001/complaints/complaints/${id}`, body)
      .then((result) => {
        toast.success(result.data.message);
      });
  };

  useEffect(() => {
    getId();
  });

  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Complaints Box</h5>
                <form onSubmit={(e) => onSubmitForm(e)}>
                  <div className="form-group">
                    <input
                      className="cssField"
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                    <label alt="Enter Subject" placeholder="Subject"></label>
                  </div>
                  <div className="form-group">
                    <input
                      className="cssField"
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <label
                      alt="Enter Description"
                      placeholder="Description."
                    ></label>
                  </div>

                  <div className="d-flex flex-column">
                    <button
                      type="submit"
                      className="btn btn-lg btn-outline-success btn-block text-uppercase mb-3"
                    >
                      Send Complaints
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-3 container">
        <a href="/DeliveryBoyHome" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
