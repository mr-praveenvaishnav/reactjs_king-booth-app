import React, { useState, useEffect } from "react";
// Import Routing Components For Linking to Web pages
import { Link } from "react-router-dom";

// COMPONENTS
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Products() {
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
        <div className="container-fluid p-lg-5 p-md-5 p-3">
          <div className="row g-lg-5 g-md-5 g-3">
            <div className="col-sm-12 col-md-12 col-xl-12">
              {/* Product Templates Description about this page */}
              <div className="mb-4">
                <h3 className="mb-1">Product Templates</h3>
                <p>
                  Product templates save time by streamling to integration of
                  induvisuals items into verius documents like brochares
                  <br />
                  Product templates save time by streamling to integration of
                  induvisuals items
                </p>
              </div>
            </div>
            {/* ========= Create a New Product Button ========= */}
            <div id="product-items" className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-white rounded p-3 shadow-sm">
                <Link
                  to="/add-product"
                  id="p-urls"
                  className="h-100 d-flex align-items-center justify-content-center px-2 py-5"
                  style={{ border: "1px dashed #534dbb" }}
                >
                  <div className="mb-4 text-center">
                    <h1 className="mb-0 fw-light text-uppercase">+</h1>
                    <h6 className="mb-0 fw-light text-uppercase">
                      Create a new Product
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
            {/* ========= Product Template ========= */}
            <div id="product-items" className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-white rounded p-4 shadow-sm position-relative">
                <div className="d-flex justify-content-between">
                  <div id="p-meta">
                    <h5>
                      Memoery Book
                      <br />
                      (Product Example)
                    </h5>
                    <p style={{ fontSize: 12 }}>Created at May 10,2023</p>
                  </div>
                  <div id="p-dot" style={{ fontSize: 6 }}>
                    <i className="fa fa-circle pe-1" aria-hidden="true" />
                    <i className="fa fa-circle pe-1" aria-hidden="true" />
                    <i className="fa fa-circle" aria-hidden="true" />
                  </div>
                </div>
                <div id="product-cart" style={{ fontSize: 12 }}>
                  <i className="fa fa-shopping-cart pe-2" aria-hidden="true" />
                  Product
                </div>
              </div>
            </div>
            {/* ========= Product Template - END ========= */}
          </div>
        </div>

        {/* ================= *****  TEMPLATES BODY JSX ***** ================= */}
      </div>
    </div>
  );
}

export { Products }; /* ========================= We had to remove default. */
