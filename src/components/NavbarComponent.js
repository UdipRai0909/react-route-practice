import React from "react";
import { Link } from "react-router-dom";
import SettingsComponent from "./SettingsComponent";

function NavbarComponent(props) {
  const listZone = props["zone"];
  const openBtn = document.getElementsByClassName("open-btn");
  const closeBtn = document.getElementsByClassName("close-btn");
  const myNav = document.getElementsByClassName("navbar-c");
  // const myLinks = myNav[0].children;
  // myNav[0].style.display = "none";

  if (window.length > 500) {
    myNav[0].style.display = "flex !important";
  }

  // for (i = 0; i < myLinks.length; i++) {
  //   if (window.location.pathname === myLinks[i]) {
  //     document.getElementById("root").style.background = red;
  //   }
  // }

  // if (location.pathname == window.href) {
  //   document.getElementBy;
  // }

  const openSideNav = () => {
    myNav[0].style.display = "flex";
    myNav[0].style.width = "100%";
    openBtn[0].style.display = "none";
    closeBtn[0].style.display = "block";
  };

  const closeSideNav = () => {
    myNav[0].style.display = "none";
    // myNav[0].style.width = "0";
    openBtn[0].style.display = "block";
    closeBtn[0].style.display = "none";
  };
  return (
    <>
      <a href="#/" className="open-btn" onClick={openSideNav}>
        &#9776;
      </a>
      <a href="#/" className="close-btn" onClick={closeSideNav}>
        &times;
      </a>
      <nav className="navbar-c">
        <ul className="left-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          {listZone.map((myZones) => {
            return (
              <li key={myZones["zone"]}>
                <Link to={myZones["zone"]}>{myZones["zone"]}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="right-ul">
          <li>
            <SettingsComponent />
          </li>
        </ul>

        {/* <ul className="left-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Bagmati">Bagmati</Link>
          </li>
          <li>
            <Link to="/Gandaki">Gandaki</Link>
          </li>
          <li>
            <Link to="/Narayani">Narayani</Link>
          </li>
        </ul>
        <ul className="right-ul">
          <li>
            <SettingsComponent />
          </li>
        </ul> */}
      </nav>
    </>
  );
}

export default NavbarComponent;
