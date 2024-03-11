import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddCategoryButton from "./components/Add-category-btn";

function AddProduct() {
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

        <div className="container-fluid">
          {/* ========== Untitled Product Bar & Back Arrow ========== */}
          {/* ========== Untitled Product Bar & Back Arrow  ========== */}
          <nav id="untitled-navbar" className="px-5 my-3">
            <div className="d-flex align-items-center">
              <a
                href="products.html"
                className="text-dark me-3"
                style={{ fontSize: "2rem" }}
              >
                <i className="fa-solid fa-chevron-left" />
              </a>
              <div>
                <p className="mb-0 fw-bold">Untitled Product</p>
                <a href="templates.html" className="text-dark">
                  <i className="fa-regular fa-folder" /> Template
                </a>
              </div>
            </div>
          </nav>
          {/* ========== Product Item Window Container 01 ========== */}
          <div
            id="product-window"
            className="row g-lg-5 g-md-5 g-3 justify-content-center"
          >
            {/*========== Product Item Window ========== */}
            <div className="product-window-container col-sm-12 col-md-9 col-xl-9 bg-white rounded p-lg-5 p-md-3 p-2 shadow-sm">
              {/*========== Item Title ========== */}
              <div className="product-window-title-container d-flex">
                <div className="product-window-heading w-50">
                  <h5>Product Item</h5>
                </div>
                <div className="item-cell-container w-50 d-flex justify-content-around">
                  <div className="item-cell">QTY</div>
                  <div className="item-cell">UNIT</div>
                  <div className="item-cell">TAX</div>
                  <div className="item-cell">PRICE</div>
                </div>
              </div>
              {/* put a line going all the way across */}
              <hr className="my-3" />
              {/*========== Product Body ========== */}
              <div
                className="product-body rounded p-lg-3 p-md-2 p-2 my-4"
                id="p-details"
                style={{ background: "#f5f5f5", border: "2px solid #e6e6e6" }}
              >
                {/* Item Body Text */}
                <div className="title-container d-flex mb-3">
                  <div className="item-heading w-50">
                    <h5>Product Item</h5>
                  </div>
                  <div className="item-cell-container w-50 d-flex justify-content-around pe-2">
                    <div className="item-cell">QTY</div>
                    <div className="item-cell">UNIT</div>
                    <div className="item-cell">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        defaultValue=""
                        aria-label="Checkbox for following text input"
                      />
                    </div>
                    <div className="item-cell">PRICE</div>
                  </div>
                </div>
                <p>Product Description - Updated 6:25pm</p>
              </div>
              {/* Additional Charge Per Hour */}
              <div
                className="rounded p-lg-3 p-md-2 p-2 my-4"
                style={{ background: "#f5f5f5", border: "2px solid #e6e6e6" }}
              >
                <table className="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td className="w-75">
                        <h5 className="m-0 fw-normal">
                          Additional Charge Per Hour
                        </h5>
                      </td>
                      <td className="w-10 text-end">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ======= ADD CATEGORY DROPDOWN MENU BUTTON COMPONENT ======= */}

              <AddCategoryButton />

              {/* ======= ADD CATEGORY DROPDOWN MENU BUTTON ======= */}
              {/* <div id="add-category-btn" className="accordion">
                <p className="overflow-hidden m-0" id="p-categ">
                  Product Category
                </p>
                <div className="accordion-header">
                  <span className="selected-option"> </span>
                  <span className="icon overflow-hidden">
                    <i className="fa-solid fa-caret-down" />
                  </span>
                </div>
                <div
                  className="accordion-content overflow-hidden"
                  id="accordion-content"
                >
                  <div className="option">Photo Booth</div>
                  <div className="option">Backdrop</div>
                  <div className="option">Props</div>
                  <div className="option">Additional items</div>
                  <div className="input-with-button" id="input">
                    <input type="text" placeholder="New Category..." />
                    <button id="createButton">CREATE</button>
                  </div>
                  <button id="button">+ Add Category</button>
                </div>
              </div> */}

              {/* ========== UPLOAD IMAGES ========== */}
              <div className="row g-lg-3 g-sm-3 g-2 justify-content-center mt-4">
                <div className="col-md-3 col-sm-4 col-4">
                  <div className="upload-btn-wrapper p-0">
                    <img
                      src="img/file-upload.png"
                      className="img-fluid"
                      alt=""
                    />
                    <input
                      className="input-upload-btn"
                      type="file"
                      name="myfile"
                    />
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-4">
                  <div className="upload-btn-wrapper p-0">
                    <img
                      src="img/file-upload.png"
                      className="img-fluid"
                      alt=""
                    />
                    <input
                      className="input-upload-btn"
                      type="file"
                      name="myfile"
                    />
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-4">
                  <div className="upload-btn-wrapper p-0">
                    <img
                      src="img/file-upload.png"
                      className="img-fluid"
                      alt=""
                    />
                    <input
                      className="input-upload-btn"
                      type="file"
                      name="myfile"
                    />
                  </div>
                </div>
              </div>
              {/* ========== UPLOAD IMAGES ========== */}
            </div>
            {/* ========== DONE BUTTON ========== */}
            <div className="text-center pt-2">
              <button
                id="submit-btn"
                type="button"
                className="px-5 rounded-pill btn btn-primary btn-lg text-uppercase"
              >
                Done
              </button>
            </div>
          </div>
          {/* ========== Product Item Window Container 01 - END ========== */}
        </div>

        {/* ================= *****  TEMPLATES BODY JSX ***** ================= */}
      </div>
    </div>
  );
}

export { AddProduct };
