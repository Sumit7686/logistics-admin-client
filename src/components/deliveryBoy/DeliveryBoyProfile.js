import React, { useEffect, useState } from "react";
import axios from "axios";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import "../../css/ProfileCard.css";

export default function DeliveryBoyProfile({ setAuth }) {
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact, setContact] = useState("");

  const profileDetail = async () => {
    setId(localStorage.getItem("id"));
    await axios
      .get(`http://localhost:5001/deliveryBoy/personalDetailDeliveryBoy/${id}`)
      .then((result) => {
        setRole(result.data.message.role);
        setEmail(result.data.message.email);
        // setPassword(result.data.message.password);
        setName(result.data.message.name);
        setArea(result.data.message.area);
        setCity(result.data.message.city);
        setPincode(result.data.message.pincode);
        setContact(result.data.message.contact);
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
      <DeliveryBoyNavbar setAuth={setAuth} />

      <div className="py-5 items-center">
        <h2 className="text-center">User Profile Card</h2>
        <div className="profileCard">
          <img src="/photos/profile/1.jpg" alt="profile" className="w-100" />
          <h3 className="my-4">{name}</h3>
          <p className="title">Role : {role} </p>
          <p className="title">Email : {email} </p>
          <p className="title">City : {city} </p>
          <p className="title">Area : {area} </p>
          <p className="title">Pincode : {pincode} </p>
          <p className="title">Contact : {contact} </p>
          {/* <p className="title">Password : {password} </p> */}
          <button>Change Password</button>
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
