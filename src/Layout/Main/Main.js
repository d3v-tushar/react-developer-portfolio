import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Template/Footer";
import Header from "./../../Pages/Template/Header";

const Main = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "light" : "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
