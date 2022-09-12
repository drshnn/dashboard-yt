import React from "react";
import "./sidebar.scss";
import Logo from "../../assets/svg/Logo.svg";
import Home from "../../assets/svg/home.svg";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={Logo} alt="" />
      </div>
      <div className="center">
        <ul>
          <li>
            <img src={Home} alt="" className="icon" />
            <span className="menu-name">Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
}

export default Sidebar;
