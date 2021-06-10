import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";

export default function DeliveryBoyViewComplaints({ setAuth }) {
  const [id, setId] = useState("");
  const [value, setValue] = useState([]);

  const getComplaintsData = () => {
    setId(localStorage.getItem("id"));

    axios
      .get(
        `http://localhost:5001/complaints/deliveryBoyPersonalComplaints/${id}`
      )
      .then((result) => {
        setValue(result.data.message);
      });
  };

  useEffect(() => {
    getComplaintsData();
  });

  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />

      <div className="pt-5 container">
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <div>
            <a
              href="/DeliveryBoyComplaints"
              style={{
                textDecoration: "none",
                fontSize: "45px",
                color: "black",
              }}
            >
              <i class="las la-angle-double-left"></i>
            </a>
          </div>
          <div style={{ position: "absolute", right: "0%" }}>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="deliveryBoy-view-complaints"
              sheet="tablexls"
              buttonText="Download as XLS"
            />
          </div>
        </div>

        <h3 className="my-3 text-center" data-aos="zoom-out-down">
          Your Complaints
        </h3>
        <table
          id="table-to-xls"
          className="table table-hover table-dark"
          data-aos="zoom-out-up"
        >
          <thead>
            <tr className="text-center">
              <th scope="col">Subject</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  <>
                    <td>{element.subject}</td>
                    <td>{element.description}</td>
                  </>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
