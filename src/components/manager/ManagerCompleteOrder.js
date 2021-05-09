import React, { useState, useEffect } from "react";
import ManagerNavbar from "../navbar/ManagerNavbar";
import axios from "axios";

export default function ManagerCompleteOrder({ setAuth }) {
  const [value, setValue] = useState([]);
  const [ID] = useState(localStorage.getItem("id"));

  const getData = async () => {
    await axios
      .get(`http://localhost:5001/manager/managerAllOrder/${ID}`)
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

      <div className="container">
        <div className="d-flex pt-5 w-50 text-center">
          <a href="/ManagerOrder">
            <button className="btn btn-outline-dark rounded">
              Current Order
            </button>
          </a>
          <a href="/ManagerCompleteOrder">
            <button className="btn btn-outline-dark rounded">
              Complete Order
            </button>
          </a>
        </div>
      </div>

      <div className="pt-4 container">
        <h3 className="my-3 text-center">Manager Complete Order</h3>
        <table className="table table-hover table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">user_id</th>
              <th scope="col">order_id</th>
              <th scope="col">order_status</th>
              <th scope="col">awb_number</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  {element.order_status !== "Done" ? (
                    ""
                  ) : (
                    <>
                      <td>{element.user_id}</td>
                      <td>{element.order_id}</td>
                      <td>{element.order_status}</td>
                      <td>{element.awb_number}</td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-5 container">
        <a href="/ManagerOrder" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
