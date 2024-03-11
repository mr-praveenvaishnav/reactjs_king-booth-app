import React from "react";
// Import Routing Components For Linking to Web pages
import { NavLink } from "react-router-dom";

// const Navbar is a function that holds the navbar
// toggleSidebar is a function that is passed in from the Dashboard-home.js
const Navbar = ({ toggleSidebar }) => (
  // JSX Code for the Navbar
  <nav className="navbar navbar-expand bg-light bg-white sticky-top px-lg-5 px-2 py-0">
    <a href="index.html" className="navbar-brand d-flex d-none d-lg-none me-4">
      <h3 className="m-0">LOGO</h3>
    </a>
    {/* ====== Hamburger Button to Toggle The side Bar =========== */}
    <a className="sidebar-toggler flex-shrink-0" onClick={toggleSidebar}>
      <i className="fa fa-bars" />
    </a>

    <form className="d-none d-flex align-items-center d-md-flex ms-4">
      <h3>Customer Business Name</h3>
    </form>
    <div className="navbar-nav align-items-center ms-auto">
      <div className="money-container nav-item dropdown mx-lg-5 mx-md-2 mx-sm-2">
        <a href="#" className="nav-link py-3" data-bs-toggle="dropdown">
          <span className="d-none d-lg-inline-flex me-lg-1">Earn Cash</span>
          <i className="fa-solid fa-sack-dollar ms-1" />
        </a>
      </div>
      <div className="nav-item dropdown" id="top-user-nav">
        <a href="#" className="nav-link dropdown" data-bs-toggle="dropdown">
          <span
            className="d-inline-flex p-lg-3 p-md-2 p-2 rounded-circle lead"
            id="user-av"
          >
            <strong>RE</strong>
          </span>
        </a>
        <div
          className="dropdown-menu bg-white shadow-sm border-0 py-2 rounded-0 rounded-bottom"
          id="cm-dropdown"
        >
          <a href="#" className="dropdown-item py-2">
            <div className="d-flex align-items-center">
              <div className="me-2 p-3 rounded-circle text-black" id="user-dp">
                RE
              </div>
              <span>
                <div>
                  <strong>Ruben Esquivel</strong>
                </div>
                <div>Company Name</div>
              </span>
            </div>
          </a>
          <hr className="my-1 py-0" />
          <a href="#" className="dropdown-item py-2">
            <i className="fa-solid fa-user me-2" />
            My Account
          </a>
          <NavLink
          to={"/company-setting"}
          className="dropdown-item py-2"
          activeClassName="active"
        >
           <i className="fa-solid fa-hotel me-2" />
            Company Settings
        </NavLink>
          
          <div className="dropdown-item py-2">
            <div className="d-flex align-items-center justify-content-between mt-5">
              <a href="#" className="text-dark">
                Logout
              </a>
              <a href="#" className="text-dark">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
