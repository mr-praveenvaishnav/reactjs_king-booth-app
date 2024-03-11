// Importing the createBrowserRouter function from react-router-dom library to handle routing in our React application
import { createBrowserRouter } from "react-router-dom";
// Important Components so i can connect the Template Button to the Template Page

// ============== ******* Importing the Components that will be used as pages for the different routes ******* ==============

// When you import a component and it does not have the {} around it, it means that it is the default export of the file.
import Dashboard from "../Dashboard-home";

// Importing the components that will be used as pages for the different routes
import { Templates } from "../Templates";
import { Products } from "../Products";
import { AddProduct } from "../Add-product";
import  { CompanySetting } from '../Companysetting';



// ============== ******* Importing the Components that will be used as pages for the different routes ******* ==============

// React Router Funciton used for Creating Routes / Links that are used to navigate between pages
export const router = createBrowserRouter([
  // 'path' is the URL path, 'element' is the React component (or "page") that gets rendered for that path

  {
    path: "/",
    element: <Dashboard></Dashboard>,
  },

  {
    path: "/templates",
    element: <Templates></Templates>,
  },

  {
    path: "/products",
    element: <Products></Products>,
  },

  {
    path: "/add-product",
    element: <AddProduct></AddProduct>,
  },

  {
    path: "/company-setting",
    element: <CompanySetting></CompanySetting>,
  },

 
  
]);
/* ============================= This whole page is dedicatedly created for routing. */
