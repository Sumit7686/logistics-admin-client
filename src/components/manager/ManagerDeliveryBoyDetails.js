import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ManagerNavbar from "../navbar/ManagerNavbar";

export default function ManagerDeliveryBoyDetails({ setAuth }) {
  const [id, setId] = useState("");
  const [value, setValue] = useState([]);

  const getData = async () => {
    setId(localStorage.getItem("id"));
    await axios
      .get(`http://localhost:5001/manager/allDeliveryBoyManager/${id}`)
      .then((result) => {
        setValue(result.data.message);
      })
      .catch((err) => {
        console.log("admin user get data error :", err);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <ManagerNavbar setAuth={setAuth} />

      <div className="pt-4 container">
        <h3 className="my-3 text-center">Manager Delivery Boy</h3>
        <table id="table-to-xls" className="table table-hover table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">City</th>
              <th scope="col">Area</th>
              <th scope="col">Pincode</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.city}</td>
                  <td>{element.area}</td>
                  <td>{element.pincode}</td>
                  <td>{element.contact}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="container mt-5 pt-3">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="manager-deliveryBoy-details"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
      </div>

      <div className="text-center mt-3 container">
        <a href="/ManagerDeliveryBoy" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}