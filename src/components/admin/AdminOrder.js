import React from "react";
import AdminNavbar from "../navbar/AdminNavbar";

export default function AdminOrder({ setAuth }) {
  return (
    <>
      <AdminNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div className="partner-body-2 align-items-center">
          <div className="row text-center mt-5">
            <div className="col-md-6">
              <img
                src="/photos/admin/user(1).png"
                alt="sign-up"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
              />
              <div className="mb-5"></div>
              <a href="/AdminCurrentOrder" style={{ textDecoration: "none" }}>
                <span
                  className="p py-1 px-4 rounded"
                  style={{ border: "1px solid" }}
                >
                  Current Order Details
                </span>
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="/photos/admin/admin(1).png"
                alt="sign-up"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
              />
              <div className="mb-5"></div>
              <a href="/AdminCompleteOrder" style={{ textDecoration: "none" }}>
                <span
                  className="p py-1 px-4 rounded"
                  style={{ border: "1px solid" }}
                >
                  Complete Order Details
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-4 container">
        <h3 className="my-3 text-center">Admin Order</h3>
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
      </div> */}

      <div className="text-center mt-5 container">
        <a href="/AdminHome" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
