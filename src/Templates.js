import React, { useState, useEffect } from "react";

// Import Routing Components For Linking to Web pages
import { Link } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Templates() {
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

      {/* === ***** Sidebar Component w/ Prop ***** The 'sidebarOpen' prop controls whether the Sidebar is open or closed. ===== */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* ========= Main Content Area ========= */}
      <div className={`content ${sidebarOpen ? "open" : ""}`}>
        {/* Navbar Component with a 'toggleSidebar' prop, which is a function to toggle the sidebar's open/closed state */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* ================= *****  TEMPLATES BODY JSX ***** ================= */}
        <>
          <div className="container-fluid p-lg-5 p-md-5 p-3">
            <div className="row g-lg-0 g-md-0 g-0">
              <div className="col-sm-12 col-md-12 col-xl-12">
                <div className="mb-0">
                  <h3 className="mb-1">Templates</h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <div className="h-100 p-2">
                  <Link
                    to="/products"
                    id="p-urls2"
                    className="d-block px-2 py-2"
                  >
                    <div className="mb-4 text-center">
                      <img className="w-50" src="img/product.png" />
                      <h6 className="mb-0 fw-light">Products</h6>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <div className="h-100 p-2">
                  <a
                    href="products.html"
                    id="p-urls2"
                    className="d-block px-2 py-2"
                  >
                    <div className="mb-4 text-center">
                      <img className="w-50" src="img/packages.png" />
                      <h6 className="mb-0 fw-light">Packages</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <div className="h-100 p-2">
                  <a
                    href="products.html"
                    id="p-urls2"
                    className="d-block px-2 py-2"
                  >
                    <div className="mb-4 text-center">
                      <img className="w-50" src="img/contaracts.png" />
                      <h6 className="mb-0 fw-light">Contracts</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <div className="h-100 p-2">
                  <a
                    href="products.html"
                    id="p-urls2"
                    className="d-block px-2 py-2"
                  >
                    <div className="mb-4 text-center">
                      <img className="w-50" src="img/invoice.png" />
                      <h6 className="mb-0 fw-light">Invoices</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <div className="h-100 p-2">
                  <a
                    href="products.html"
                    id="p-urls2"
                    className="d-block px-2 py-2"
                  >
                    <div className="mb-4 text-center">
                      <img className="w-50" src="img/proposel.png" />
                      <h6 className="mb-0 fw-light">Proposals</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <div className="h-100 p-2">
                  <a
                    href="products.html"
                    id="p-urls2"
                    className="d-block px-2 py-2"
                  >
                    <div className="mb-4 text-center">
                      <img className="w-50" src="img/contact form.png" />
                      <h6 className="mb-0 fw-light">Contact Form</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* ================= *****  TEMPLATES BODY JSX ***** ================= */}
      </div>
    </div>
  );
}

export { Templates }; /* ========================= We had to remove default. */
