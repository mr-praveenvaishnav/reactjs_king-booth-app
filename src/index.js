// Importing necessary modules
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./Dashboard-home.js"; /* ========================== No need to import here. Because Dashboard is not used here. */
import { RouterProvider } from "react-router-dom"; /* ================ Developer imported */
import { router } from "./Route/Route.js"; /* ================ Developer imported */
import "./index.css";

// Connecting to the root element in the index.html file
const root = ReactDOM.createRoot(document.getElementById("root"));

// Pushing the Dashboard component to the root element which is the "ID Root" div in the index.html file
root.render(
  <React.StrictMode>
    {/* <Dashboard /> */}{" "}
    {/* ====================================== Developer comment this code. */}
    <RouterProvider router={router} />{" "}
    {/* ========================== Created a Route.js and import it here. */}
  </React.StrictMode>
);

// Calling the function to measure and report web performance metrics
reportWebVitals();
