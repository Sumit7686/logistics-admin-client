import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import "../../css/ProfileCard.css";

export default function AdminProfile({ setAuth }) {
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const profileDetail = async () => {
    setId(localStorage.getItem("id"));
    await axios
      .get(`http://localhost:5001/admin/personalDetailAdmin/${id}`)
      .then((result) => {
        setRole(result.data.message.role);
        setEmail(result.data.message.email);
        // setPassword(result.data.message.password);
        setName(result.data.message.name);
      })
      .catch((err) => {
        console.log("admin profile err :", err);
      });
  };

  useEffect(() => {
    profileDetail();
  });

  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div
        className="px-3 pt-5 items-center profileCard"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-center">Admin Profile Card</h2>
        <div className="profileCard">
          <img
            src="/photos/profile/profile(1).png"
            alt="profileAdmin"
            className="w-100"
          />
          <h3 className="my-4">{name}</h3>
          <p className="title">Role : {role}</p>
          <p className="title">Email : {email}</p>
          {/* <p className="title">Password : {password}</p> */}
          <button>Change Password</button>
        </div>
      </div>
    </>
  );
}
