import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminNavbar from "../navbar/AdminNavbar";
import { RiDeleteBinFill } from "react-icons/ri";

export default function AdminUser({ setAuth }) {
  const [value, setValue] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:5001/admin/allUser")
      .then((result) => {
        setValue(result.data.message);
      })
      .catch((err) => {
        console.log("admin user get data error :", err);
      });
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:5001/admin/deleteUser/${id}`)
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

      <div className="pt-4 container">
        <h3 className="my-3 text-center">User Details</h3>
        <table className="table table-hover table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Pincode</th>
              <th scope="col">Contact</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  <td>{element._id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.pincode}</td>
                  <td>{element.contact}</td>
                  <td
                    onClick={() => deleteUser(element._id)}
                    style={{ fontSize: "20px" }}
                  >
                    <RiDeleteBinFill />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-5 container">
        <a href="/AdminHome" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
