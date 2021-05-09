import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../navbar/AdminNavbar";

export default function AdminCurrentOrder({ setAuth }) {
  const [value, setValue] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:5001/admin/allOrder")
      .then((result) => {
        setValue(result.data.message);
      })
      .catch((err) => {
        console.log("admin user get data error :", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div className="pt-4 container">
        <h3 className="my-3 text-center">Admin Current Order</h3>
        <table className="table table-hover table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">user_id</th>
              <th scope="col">order_status</th>
              <th scope="col">order_user_city</th>
              <th scope="col">order_id</th>
              <th scope="col">awb_number</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  {element.order_status === "Done" ? (
                    ""
                  ) : (
                    <>
                      <td>{inx}</td>
                      <td>{element.user_id}</td>
                      <td>{element.order_status}</td>
                      <td>{element.order_user_city}</td>
                      <td>{element.order_id}</td>
                      <td>{element.awb_number}</td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-5 container">
        <a href="/AdminOrder" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
