import React from "react";
import ManagerNavbar from "../navbar/ManagerNavbar";

export default function ManagerHome({ setAuth }) {
  return (
    <>
      <ManagerNavbar setAuth={setAuth} />
      <div>
        <h1>ManagerHome</h1>
      </div>
    </>
  );
}
