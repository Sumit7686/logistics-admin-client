import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { RiDeleteBinFill } from "react-icons/ri";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import AdminNavbar from "../navbar/AdminNavbar";

export default function AdminManagerDetails({ setAuth }) {
  const [value, setValue] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:5001/admin/allManager")
      .then((result) => {
        setValue(result.data.message);
      })
      .catch((err) => {
        console.log("admin user get data error :", err);
      });
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:5001/admin/deleteManager/${id}`)
      .then((result) => {
        toast.success(result.data.message);
        getData();
      })
      .catch((err) => {
        console.log("user delete error :", err);
        toast.error("Server Error.");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div className="pt-5 container">
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <div>
            <a
              href="/AdminManager"
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
              filename="admin-manager-details"
              sheet="tablexls"
              buttonText="Download as XLS"
            />
          </div>
        </div>

        <h3 className="my-3 text-center" data-aos="zoom-out-down">
          Manager Details
        </h3>
        <table
          id="table-to-xls"
          className="table table-hover table-dark"
          data-aos="zoom-out-up"
        >
          <thead>
            <tr className="text-center">
              <th scope="col">Role</th>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">City</th>
              <th scope="col">Area</th>
              <th scope="col">Pincode</th>
              <th scope="col">Contact</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  {element.role === "admin" ? (
                    ""
                  ) : (
                    <>
                      <td>{element.role}</td>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.city}</td>
                      <td>{element.area}</td>
                      <td>{element.pincode}</td>
                      <td>{element.contact}</td>
                      <td
                        onClick={() => deleteUser(element._id)}
                        style={{ fontSize: "20px" }}
                      >
                        <RiDeleteBinFill />
                      </td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
