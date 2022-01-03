import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../manageAccount/manageProfile.css";
import { UserContext } from "../App";

const ManageProfile = () => {
  let navigate = useNavigate();

  const { setLogged } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!isLoggedIn) {
      navigate("/login");
    }
    let user = JSON.parse(localStorage.getItem("loggedAccount"));
    setUser(user);
  }, []);
  const handelUserName = (e) => {
    let newUser = user;
    newUser.username = e.target.value;
    setUser({ ...newUser });
  };
  const handelPassword = (e) => {
    let newPassword = user;
    newPassword.password = e.target.value;
    setUser({ ...newPassword });
  };
  const handelImage = (e) => {
    let newImg = user;
    newImg.img = e.target.value;
    setUser({ ...newImg });
  };
  const handelDefaultImage = () => {
    if (user.img) {
      return user.img;
    } else {
      return "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
  };

  const logOut = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("loggedAccount", "");
    setLogged(false);
    navigate("/");
  };
  return (
    <section className="manageProfile">
      <div className="profileImage1">
        <img
          src={handelDefaultImage()}
          className="profileImage"
          alt="user profile picture"

        />
      </div>
      <div className="personalInformation">
        <form>
          <div className="accountDiv">
            <label className="profileLabel">UserName:</label>
            <br />
            <input
              className="profileInput"
              type="text"
              value={user.username}
              onChange={(event) => handelUserName(event)}
              disabled
            />
          </div>
          <div className="accountDiv">
            <label className="profileLabel">Password:</label>
            <br />
            <input
              className="profileInput"
              type="password"
              value={user.password}
              onChange={(event) => handelPassword(event)}
              disabled
            />
          </div>
          <div className="accountDiv">
            <label className="">Email:</label>
            <br />
            <input
              className="profileInput"
              type="email"
              disabled
              value={user.email}
            />
          </div>

          <div className="profileBtn1">

            <button className="logOut" onClick={logOut}>
              Log out
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ManageProfile;
