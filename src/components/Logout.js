import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      {" "}
      <GoogleLogout
        clientId={process.env.REACT_APP_API_URL}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
