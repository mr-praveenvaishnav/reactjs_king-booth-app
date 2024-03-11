import React from "react";
// Import Routing Components For Linking to Web pages
import { NavLink } from "react-router-dom";

// const Sidebar is a function that holds the side bar

// sidebarOpen is a boolean that is passed in from the Dashboard-home.js

//  ({ sidebarOpen }) => {...} is a function that uses 'sidebarOpen' to decide whether the sidebar should be open or not.

const Sidebar = ({ sidebarOpen }) => (
  // '${sidebarOpen ? 'open' : ''}` Adds 'open' class when 'sidebarOpen' is true, else adds nothing.
  <div className={`sidebar pe-0 pt-4 bg-blue ${sidebarOpen ? "open" : ""}`}>
    <nav className="navbar bg-light bg-blue">
      <a href="index.html" className="navbar-brand mx-5 mb-3">
        <h3 className="text-white">LOGO</h3>
      </a>
      <div className="navbar-nav w-100 pt-5">
        {/* <a
          href="index.html"
          className="nav-item nav-link active text-uppercase"
        >
          <i className="fa fa-home me-3" />
          Dashboard
        </a> */}{" "}
        {/* ================================= Developer commented this code */}
        <NavLink
          to={"/"}
          className="nav-item nav-link text-uppercase"
          activeClassName="active"
        >
          <i className="fa fa-home me-3" /> Dashboard
        </NavLink>
        {/* We use NavLink so that we can use active route class. */}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle text-uppercase"
            data-bs-toggle="dropdown"
          >
            <i className="fa-solid fa-calendar-days me-3" />
            Calendar
          </a>
          <div className="dropdown-menu border-0 m-0 p-0" id="bg-dropdown">
            <a href="#" className="dropdown-item nav-link">
              36 Month Avaibility
            </a>
            <a href="#" className="dropdown-item nav-link">
              Month View
            </a>
            <a href="#" className="dropdown-item nav-link">
              Day View
            </a>
          </div>
        </div>
        {/* <a href="templates.html" className="nav-item nav-link text-uppercase">
          <i className="fa-solid fa-briefcase me-3" />
          Templates
        </a> */}
        <NavLink
          to={"/templates"}
          className="nav-item nav-link text-uppercase"
          activeClassName="active"
        >
          <i className="fa-solid fa-briefcase me-3" /> Templates
        </NavLink>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle text-uppercase"
            data-bs-toggle="dropdown"
          >
            <i className="fa-solid fa-calendar-plus me-3" />
            Events
          </a>
          <div className="dropdown-menu border-0 m-0 py-0" id="bg-dropdown">
            <a href="#" className="dropdown-item nav-link text-uppercase">
              All Events
            </a>
            <a href="#" className="dropdown-item nav-link">
              Up Coming
            </a>
            <a href="#" className="dropdown-item nav-link">
              Past Events
            </a>
            <a href="#" className="dropdown-item nav-link">
              Latest
            </a>
          </div>
        </div>
        <a href="#" className="nav-item nav-link text-uppercase">
          <i className="fa-solid fa-images me-3" />
          Gallery
        </a>{" "}
        {/* =============================== Developer commend this code */}
        {/* <NavLink to={'/gallery'} className="nav-item nav-link text-uppercase" activeClassName="active"><i className="fa-solid fa-images me-3" /> Gallery</NavLink> */}
        {/* We use NavLink so that we can use active route class. */}
      </div>
    </nav>
  </div>
);

export default Sidebar;
