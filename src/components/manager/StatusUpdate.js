import React, { useEffect, useState } from "react";
import axios from "axios";
import ManagerNavbar from "../navbar/ManagerNavbar";
import { toast } from "react-toastify";

export default function StatusUpdate(props, { setAuth }) {
  const [id] = useState(localStorage.getItem("order_id"));
  const [orderStatusData, setOrderStatusData] = useState("");
  const [userID, setUserID] = useState("");
  const [orderID, setOrderID] = useState("");
  const [awbNumber, setAwbNumber] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPincode, setUserPincode] = useState("");

  const [orderStatus, setOrderStatus] = useState("");

  //   let id = props.location.state;
  const getDataStatusData = async () => {
    await axios
      .get(`http://localhost:5001/order/orderStatusData/${id}`)
      .then((result) => {
        setOrderStatusData(result.data.message.order_status);
        setUserID(result.data.message.user_id);
        setOrderID(result.data.message.order_id);
        setAwbNumber(result.data.message.awb_number);
        setUserCity(result.data.message.order_user_city);
        setUserPincode(result.data.message.order_user_pincode);
      })
      .catch((err) => {
        console.log("status get data user get data error :", err);
      });
  };

  const updateStatus = async () => {
    const body = { orderStatus };

    await axios
      .post(`http://localhost:5001/order/orderStatusUpdate/${id}`, body)
      .then((result) => {
        toast.success(result.data.message);
      });
  };

  useEffect(() => {
    getDataStatusData();
  });

  return (
    <>
      <ManagerNavbar setAuth={setAuth} />

      <div className="py-5 items-center container">
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <a
            href="/ManagerCurrentOrder"
            style={{
              textDecoration: "none",
              fontSize: "45px",
              color: "black",
            }}
            onClick={() => localStorage.removeItem("order_id")}
          >
            <i class="las la-angle-double-left"></i>
          </a>
        </div>

        <h2 className="text-center" data-aos="zoom-out">
          Order Status Update
        </h2>
        <div
          className="profileCard pt-5"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <label className="text-bold h4">Status Update</label>
          <select
            className="custom-select"
            onChange={(e) => {
              const selectedValue = e.target.value;
              setOrderStatus(selectedValue);
            }}
          >
            {/* Pick_up */}
            {orderStatusData === "Pick_up" ? (
              <option value="Pick_up" selected disabled>
                Pick up
              </option>
            ) : (
              <option value="Pick_up">Pick up</option>
            )}
            {/* City_Ware_House */}
            {orderStatusData === "City_Ware_House" ? (
              <option value="City_Ware_House" selected disabled>
                City_Ware_House
              </option>
            ) : (
              <option value="City_Ware_House">City_Ware_House</option>
            )}
            {/* Area_Ware_House */}
            {orderStatusData === "Area_Ware_House" ? (
              <option value="Area_Ware_House" selected disabled>
                Area_Ware_House
              </option>
            ) : (
              <option value="Area_Ware_House">Area_Ware_House</option>
            )}
            {/* Shipped */}
            {orderStatusData === "Shipped" ? (
              <option value="Shipped" selected disabled>
                Shipped
              </option>
            ) : (
              <option value="Shipped">Shipped</option>
            )}
            {/* Done */}
            {orderStatusData === "Done" ? (
              <option value="Done" selected disabled>
                Done
              </option>
            ) : (
              <option value="Done">Done</option>
            )}
          </select>

          <p className="title pt-4">User ID : {userID} </p>
          <p className="title">Order ID : {orderID} </p>
          <p className="title">AWB Number : {awbNumber} </p>
          <p className="title">User City : {userCity} </p>
          <p className="title">User Pincode : {userPincode} </p>
          <button onClick={() => updateStatus()}>Update Status</button>
        </div>
      </div>
    </>
  );
}
