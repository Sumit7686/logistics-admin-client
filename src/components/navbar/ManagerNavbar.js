import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../../css/Navbar.css";

export default function ManagerNavbar({ setAuth }) {
  let history = useHistory();

  const logout = () => {
    toast.success("Logout");
    setAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  };

  return (
    <div className="mb-5 pb-5">
      <nav className="navbar-shadow navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div className="container">
          <a href="/ManagerHome" className="navbar-brand m-3">
            <span onClick={() => history.push("/ManagerHome")}>
              <img
                src="/photos/logo.jpg"
                alt="logo"
                className="has-retina img-responsive"
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ml-auto">
              <ul className="header nav navbar-nav navbar-right">
                <li className="nav-item dropdown px-5 active">
                  <a
                    className="name-btn nav-link dropdown-toggle btn rounded p-2"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    // aria-haspopup="true"
                    aria-expanded="false"
                    href="/ManagerHome"
                  >
                    Welcome
                  </a>
                  <div
                    className="dropdown-menu text-center"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a href="/ManagerProfile" className="dropdown-item">
                      Profile
                    </a>
                    <a
                      href="/"
                      className="dropdown-item"
                      onClick={() => logout()}
                    >
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
