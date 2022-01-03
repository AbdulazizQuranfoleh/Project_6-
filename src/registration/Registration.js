import React, { useState } from "react";
import Login from "../registration/Login";
import Signup from "../registration/Signup";
import "./registration.css";


function Registration() {
  const [login_register, setlogin_register] = useState(false);
  return (
    <div>

      {login_register ? (
        <div className="Registration-App">
          <Signup
            setlogin_register={setlogin_register}
            login_register={login_register}

          />

        </div>
      ) : (
        <div className="login-App">

          <Login
            setlogin_register={setlogin_register}
            login_register={login_register}
          />
        </div>
      )}
    </div>
  );
}

export default Registration;
