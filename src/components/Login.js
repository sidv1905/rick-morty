import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      history.push("/home");
    }
    return () => {};
  }, []);
  const responseGoogle = (res) => {
    dispatch({
      type: "LOGIN",
      payload: res.profileObj,
    });

    localStorage.setItem("user", JSON.stringify(res.profileObj));
    history.push("/home");
  };

  const responseFail = (e) => {
    console.log(e.error, "Error");
    console.log(e);
    console.log("LOGIN FAILED");
  };

  return (
    <div className="login-box">
      {" "}
      <img
        className="login-gif"
        height={300}
        width={500}
        src="https://thumbs.gfycat.com/AlarmedInsistentGrayreefshark-size_restricted.gif"
      />
      <GoogleLogin
        clientId={process.env.REACT_APP_API_URL}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseFail}
      />
    </div>
  );
};

export default Login;
