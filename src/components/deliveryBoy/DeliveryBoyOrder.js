import React, { useEffect, useState } from "react";
import axios from "axios";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import { toast } from "react-toastify";

export default function DeliveryBoyOrder({ setAuth }) {
  const [isValid, setIsValid] = useState();
  const [id, setId] = useState("");
  const [value, setValue] = useState([]);

  const getData = async () => {
    setId(localStorage.getItem("id"));
    await axios
      .get(`http://localhost:5001/deliveryBoy/deliveryAllOrder/${id}`)
      .then((result) => {
        setIsValid(result.data.isValid);
        if (result.data.isValid === false) {
          toast.error(result.data.message);
          setValue(result.data.message);
        } else {
          setValue(result.data.message);
        }
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
      <DeliveryBoyNavbar setAuth={setAuth} />

      <div className="pt-4 container">
        <h3 className="my-3 text-center">Delivery Boy Order</h3>
        {isValid === true ? (
          <table className="table table-hover table-dark">
            <thead>
              <tr className="text-center">
                <th scope="col">user_id</th>
                <th scope="col">order_user_area</th>
                <th scope="col">order_user_city</th>
                <th scope="col">order_user_pincode</th>
                <th scope="col">order_user_contact</th>
                <th scope="col">order_id</th>
                <th scope="col">order_status</th>
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
                        <td>{element.user_id}</td>
                        <td>{element.order_user_area}</td>
                        <td>{element.order_user_city}</td>
                        <td>{element.order_user_pincode}</td>
                        <td>{element.order_user_contact}</td>
                        <td>{element.order_id}</td>
                        <td>{element.order_status}</td>
                        <td>{element.awb_number}</td>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center mt-5 text-danger">
            Order is not Available.
          </h3>
        )}
      </div>
    </>
  );
}
