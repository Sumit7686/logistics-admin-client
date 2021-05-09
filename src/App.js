import "./App.css";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Components.
// Login.
import Login from "./components/authComponents/Login";

// Admin.
import AdminHome from "./components/admin/AdminHome";
import AdminProfile from "./components/admin/AdminProfile";
import AdminManager from "./components/admin/AdminManager";
import AdminManagerDetails from "./components/admin/AdminManagerDetails";
import AdminAddManager from "./components/admin/AdminAddManager";
import AdminOrder from "./components/admin/AdminOrder";
import AdminCompleteOrder from "./components/admin/AdminCompleteOrder";
import AdminCurrentOrder from "./components/admin/AdminCurrentOrder";
import AdminDeliveryBoy from "./components/admin/AdminDeliveryBoy";
import AdminUser from "./components/admin/AdminUser";

// Manager.
import ManagerHome from "./components/manager/ManagerHome";
import ManagerProfile from "./components/manager/ManagerProfile";
import ManagerOrder from "./components/manager/ManagerOrder";
import ManagerDeliveryBoy from "./components/manager/ManagerDeliveryBoy";
import ManagerAddDeliveryBoy from "./components/manager/ManagerAddDeliveryBoy";
import StatusUpdate from "./components/manager/StatusUpdate";
import ManagerCompleteOrder from "./components/manager/ManagerCompleteOrder";

// Delivery Boy.
import DeliveryBoyHome from "./components/deliveryBoy/DeliveryBoyHome";
import DeliveryBoyProfile from "./components/deliveryBoy/DeliveryBoyProfile";
import DeliveryBoyOrder from "./components/deliveryBoy/DeliveryBoyOrder";
import DeliveryBoyFeedback from "./components/deliveryBoy/DeliveryBoyFeedback";

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5001/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      parseRes.message === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          {/* Login Routes. */}
          <Route
            exact
            path="/"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/" />
              )
            }
          />

          {/* Admin Routes. */}
          <Route
            exact
            path="/AdminHome"
            render={(props) =>
              isAuthenticated ? (
                <AdminHome {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminHome" />
              )
            }
          />
          <Route
            exact
            path="/AdminProfile"
            render={(props) =>
              isAuthenticated ? (
                <AdminProfile {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminProfile" />
              )
            }
          />
          <Route
            exact
            path="/AdminOrder"
            render={(props) =>
              isAuthenticated ? (
                <AdminOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminOrder" />
              )
            }
          />
          <Route
            exact
            path="/AdminManager"
            render={(props) =>
              isAuthenticated ? (
                <AdminManager {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminManager" />
              )
            }
          />
          <Route
            exact
            path="/AdminUser"
            render={(props) =>
              isAuthenticated ? (
                <AdminUser {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminUser" />
              )
            }
          />
          <Route
            exact
            path="/AdminAddManager"
            render={(props) =>
              isAuthenticated ? (
                <AdminAddManager {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminAddManager" />
              )
            }
          />
          <Route
            exact
            path="/AdminDeliveryBoy"
            render={(props) =>
              isAuthenticated ? (
                <AdminDeliveryBoy {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminDeliveryBoy" />
              )
            }
          />
          <Route
            exact
            path="/AdminCompleteOrder"
            render={(props) =>
              isAuthenticated ? (
                <AdminCompleteOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminCompleteOrder" />
              )
            }
          />
          <Route
            exact
            path="/AdminManagerDetails"
            render={(props) =>
              isAuthenticated ? (
                <AdminManagerDetails {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminManagerDetails" />
              )
            }
          />
          <Route
            exact
            path="/AdminCurrentOrder"
            render={(props) =>
              isAuthenticated ? (
                <AdminCurrentOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/AdminCurrentOrder" />
              )
            }
          />

          {/* Manager Routes. */}
          <Route
            exact
            path="/ManagerHome"
            render={(props) =>
              isAuthenticated ? (
                <ManagerHome {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/ManagerHome" />
              )
            }
          />
          <Route
            exact
            path="/ManagerProfile"
            render={(props) =>
              isAuthenticated ? (
                <ManagerProfile {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/ManagerProfile" />
              )
            }
          />
          <Route
            exact
            path="/ManagerOrder"
            render={(props) =>
              isAuthenticated ? (
                <ManagerOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/ManagerOrder" />
              )
            }
          />
          <Route
            exact
            path="/ManagerDeliveryBoy"
            render={(props) =>
              isAuthenticated ? (
                <ManagerDeliveryBoy {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/ManagerDeliveryBoy" />
              )
            }
          />
          <Route
            exact
            path="/ManagerAddDeliveryBoy"
            render={(props) =>
              isAuthenticated ? (
                <ManagerAddDeliveryBoy {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/ManagerAddDeliveryBoy" />
              )
            }
          />
          <Route
            exact
            path="/StatusUpdate"
            render={(props) =>
              isAuthenticated ? (
                <StatusUpdate {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/StatusUpdate" />
              )
            }
          />
          <Route
            exact
            path="/ManagerCompleteOrder"
            render={(props) =>
              isAuthenticated ? (
                <ManagerCompleteOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/ManagerCompleteOrder" />
              )
            }
          />

          {/* Delivery Boy Routes. */}
          <Route
            exact
            path="/DeliveryBoyHome"
            render={(props) =>
              isAuthenticated ? (
                <DeliveryBoyHome {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/DeliveryBoyHome" />
              )
            }
          />
          <Route
            exact
            path="/DeliveryBoyProfile"
            render={(props) =>
              isAuthenticated ? (
                <DeliveryBoyProfile {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/DeliveryBoyProfile" />
              )
            }
          />
          <Route
            exact
            path="/DeliveryBoyOrder"
            render={(props) =>
              isAuthenticated ? (
                <DeliveryBoyOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/DeliveryBoyOrder" />
              )
            }
          />
          <Route
            exact
            path="/DeliveryBoyFeedback"
            render={(props) =>
              isAuthenticated ? (
                <DeliveryBoyFeedback {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/DeliveryBoyFeedback" />
              )
            }
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
