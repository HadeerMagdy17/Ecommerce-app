import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const Profile = () => {
  const [name, setName] = useState(null);

  if (name === null) {
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>;
  }
  useEffect(() => {
    const x = jwtDecode(localStorage.getItem("token"));
    // console.log("token data", x);
    setName(x.name);
  }, []);

  return <div className="container">
    <h1 className="text-center my-5">Hello {name}</h1>
  </div>;
};

export default Profile;
