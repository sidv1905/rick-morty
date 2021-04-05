import React, { useState } from "react";

import { useSelector } from "react-redux";
import Logout from "./Logout";

export default function Header() {
  const { user, loggedIn } = useSelector((state) => state.user);
  const [showLogout, setshowLogout] = useState(false);

  const togglelogout = () => {
    setshowLogout(!showLogout);
  };

  return (
    <nav className="header">
      <img
        alt="iamge"
        height={100}
        width={200}
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          flexBasis: "55%",
        }}
      >
        {loggedIn ? (
          <img
            alt="iamge1"
            className="login-gif"
            id="user-img"
            src={user.imageUrl}
            onClick={togglelogout}
            height={50}
            width={50}
          />
        ) : (
          ""
        )}

        {loggedIn ? (
          showLogout ? (
            <div>
              <Logout />{" "}
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <h3>{loggedIn ? user.name : "Pickle Rick"}</h3>
      </div>
    </nav>
  );
}
