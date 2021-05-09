import React from "react";
import DeliveryBoyNavbar from "../navbar/DeliveryBoyNavbar";

export default function DeliveryBoyFeedback({ setAuth }) {
  return (
    <>
      <DeliveryBoyNavbar setAuth={setAuth} />
      <div>
        <h1>DeliveryBoyFeedback</h1>
      </div>
    </>
  );
}
