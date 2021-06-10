import React, { useEffect, useState } from "react";
import axios from "axios";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

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
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <div>
            <a
              href="/DeliveryBoyHome"
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
              filename="deliveryBoy-order"
              sheet="tablexls"
              buttonText="Download as XLS"
            />
          </div>
        </div>

        <h3 className="my-3 text-center" data-aos="zoom-out-down">
          Delivery Boy Order
        </h3>
        {isValid === true ? (
          <table
            id="table-to-xls"
            className="table table-hover table-dark"
            data-aos="zoom-out-up"
          >
            <thead>
              <tr className="text-center">
                <th scope="col">user_id</th>
                <th scope="col">order_user_area</th>
                <th scope="col">order_user_city</th>
                <th scope="col">order_user_pincode</th>
                <th scope="col">order_user_contact</th>
                <th scope="col">order_id</th>
                <th scope="col">order_status</th>
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
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center mt-5 text-danger" data-aos="zoom-out-up">
            Order is not Available.
          </h3>
        )}
      </div>
    </>
  );
}
