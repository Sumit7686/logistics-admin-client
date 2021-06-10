import React, { useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import "../../css/ManagerMetting.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminManagerMetting({ setAuth }) {
  const history = useHistory();

  const [subject, setSubject] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { subject, dateTime, description };

    axios
      .post("http://localhost:5001/metting/sendMail", body)
      .then((result) => {
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          history.push("/AdminHome");
        } else {
          toast.error(result.data.message);
        }
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
                  <h5 className="card-title text-center">
                    Manager send Notice
                  </h5>
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
                      <label alt="Enter Subject" placeholder="Subject."></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="datetime-local"
                        name="dateTime"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                      />
                      <label alt="" placeholder="Date & Time."></label>
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
                        Send Notice
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
