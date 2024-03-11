import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Dashboard() {
  // State for managing the sidebar's open/close status
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for managing the loader
  const [showLoader, setShowLoader] = useState(true);

  // Function that toggles the state controlling the sidebar's open/close status
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Funciton for showing the loader for 1 second only when the page loads
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(loaderTimeout);
  }, []);

  // The return statement contains the JSX code which is rendered and displayed on the page
  return (
    // Main DIV for the main body & contains IF-Else Javascript that holds the Sidebar-open class
    <div
      className={`position-relative bg-white d-flex p-0 ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >
      {/* ============== loader ============== */}
      {showLoader && (
        <div className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* === Sidebar Component. The 'sidebarOpen' prop controls whether the Sidebar is open or closed. ===== */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* ========= Main Content Area ========= */}
      <div className={`content ${sidebarOpen ? "open" : ""}`}>
        {/* Navbar Component with a 'toggleSidebar' prop, which is a function to toggle the sidebar's open/closed state */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* =========== Main Content Area for JSX =========== */}
        <div className="container-fluid p-lg-5 p-md-5 p-3">
          <div className="row g-lg-5 g-md-5 g-3 align-items-center justify-content-center">
            <div className="col-sm-12 col-md-12 col-xl-5">
              <div className="h-100 bg-white rounded p-4 shadow" id="box-wrap">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">To Do List - DONE - Jan 22 @ 7:16PM</h6>
                </div>
                <div className="d-flex mb-2 px-lg-3 px-0">
                  <input
                    className="form-control bg-transparent"
                    type="text"
                    placeholder="What Need to be done?"
                  />
                </div>
                <div className="d-flex align-items-center py-2 px-lg-3 px-0">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        View tutorials page on how to setup this software?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 px-lg-3 px-0">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 px-lg-3 px-0">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 px-lg-3 px-0">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 px-lg-3 px-0">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-xl-5">
              <div className="h-100 bg-white rounded p-4 shadow" id="box-wrap">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Upcoming Events</h6>
                </div>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Event Date:</th>
                      <th scope="col">Event Name:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10/10/23</td>
                      <td>
                        <u>Priscilla Wedding Coprate event</u>
                      </td>
                    </tr>
                    <tr>
                      <td>10/10/23</td>
                      <td>
                        <u>Priscilla Wedding Coprate event</u>
                      </td>
                    </tr>
                    <tr>
                      <td>10/10/23</td>
                      <td>
                        <u>Priscilla Wedding Coprate event</u>
                      </td>
                    </tr>
                    <tr>
                      <td>10/10/23</td>
                      <td>
                        <u>Priscilla Wedding Coprate event</u>
                      </td>
                    </tr>
                    <tr>
                      <td>10/10/23</td>
                      <td>
                        <u>Priscilla Wedding Coprate event</u>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
