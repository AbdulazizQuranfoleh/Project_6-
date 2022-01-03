import "./style/App.css";
import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageProfile from "./manageAccount/ManageProfile";
import ManageReservations from "./manageAccount/ManageReservations";
import LandingPage from "./landing/LandingPage";
import OurNavBar from "./components/OurNavBar";
import Registration from "./registration/Registration";
import Booking from "./pages/Booking";
import About from "./About/About";
import Account from "./manageAccount/Account";
import Footer from "./components/Footer";

export const UserContext = createContext();

function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    userimage: "",
  });

  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("isLoggedIn")));
  }, []);
  return (
    <div className="appContainer">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            logged,
            setLogged,
            userLoginInformation,
            setUserLoginInformation,
            userSignupInformation,
            setUserSignupInformation,
            submitted,
            setSubmitted,
          }}
        >
          <OurNavBar isLoggedIn={logged} />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Class" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="account" element={<Account />}>
              <Route path="/account" element={<ManageProfile />} />
              <Route
                path="ManageReservations"
                element={<ManageReservations />}
              />
            </Route>
            <Route path="/login" element={<Registration />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
