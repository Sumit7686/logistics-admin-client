import React from "react";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";

export default function DeliveryBoyHome({ setAuth }) {
  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />
      <div>
        <h1>DeliveryBoyHome</h1>
      </div>
    </>
  );
}
