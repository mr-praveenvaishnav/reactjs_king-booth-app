import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddCategoryButton from "./components/Add-category-btn";


function CompanySetting() {
  // State for managing the sidebar's open/close status
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
            <nav id="untitled-navbar" className="px-5 my-2">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 fw-bold fs-4">Settings </p>
                </div>
              </div>
            </nav>


            <div class="container mt-1">
                    <ul class="nav nav-tabs border-0 border-primary  " id="myTabs">
                      <li class="nav-item ">
                        <a class="nav-link fs-5 active  border-0 " id="home-tab" data-bs-toggle="tab" href="#MyAccount_Info">
                        MY ACCOUNT </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link fs-5  border-0  border-bottom-1  " id="profile-tab" data-bs-toggle="tab" href="#COMPANY_Info">COMPANY</a>
                      </li>
                    </ul>

         
            <div class="tab-content">
              <div class="tab-pane margin-top-80  fade show active" id="MyAccount_Info">

                  <div  className="container mainsection1" >
                        <div  className="company-setting-box rounded p-lg-3 p-md-2 p-2 my-4 bg-white"  >
                
                              <div class="row">
                                <div class="mb-3 col-md-6">
                                  <label for="fullName" className="form-label">Full Name</label>
                                  <input type="text" className="form-control" id="fullName"  required />
                                </div>
                                <div class="mb-3 col-md-6 ">
                                  <label for="jobTitle" className="form-label">Job Title</label>
                                  <input type="text" className="form-control" id="jobTitle"  required />
                                </div>
                                
                                <div class="mb-3 col-md-6 ">
                                  <label for="description" className="form-label">Email Address </label>
                                  <input type="text" className="form-control" id="jobTitle"  placeholder="name@companyemail.com" required />
                                </div>

                                <div class="mb-3 col-md-6 ">
                                  <label for="description" className="form-label">Phone Number </label>
                                  <input type="text" className="form-control" id="jobTitle"  placeholder="name@companyemail.com"  required />
                                </div>

                                <div class="mb-3 col-md-6 ">
                                  <label for="description" className="form-label">Personal Address </label>
                                  <input type="text" className="form-control" id="jobTitle"  placeholder="name@companyemail.com"  required />
                                </div>
                            </div>

                        </div>

                        <div className="company-setting-box rounded p-lg-3 p-md-2 p-2 my-4 bg-white"  
                            >
                               <h5>Change Password</h5>
                            <div class="row my-3"  > 
                                <div class="mb-3 col-md-6">
                                  <label for="fullName" className="form-label">Current Password</label>
                                  <input type="text" className="form-control" id="fullName"  required />
                                </div>

                                <div class="mb-3 col-md-6">
                                  <label for="fullName" className="form-label">New Password</label>
                                  <input type="text" className="form-control" id="fullName"  required />
                                </div>

                                <div class="mb-3 col-md-6">
                                  <label for="fullName" className="form-label">Confirm New Password</label>
                                  <input type="text" className="form-control" id="fullName"  required />
                                </div>
                                
                                <div class="mb-3 col-md-6 justify-content-center ">
                                            <button
                                              id="submit-btn"
                                              type="button"
                                              className="px-5 mt-4 rounded-pill btn btn-primary btn-lg text-uppercase"
                                            >
                                              Change Password 
                                            </button>
                                </div>
                
                              </div>
                        

                        </div>


                  </div>
               </div>


              <div class="tab-pane fade" id="COMPANY_Info">
              <div id="companysetting-window" className="row justify-content-center" >
                        <div className="companysetting-window-container ">
                              <div class="container mt-5">

                    <div class="row">
                        <div class="col-md-3">
                          <ul class="nav flex-column">
                            <li class="nav-item">
                              <a class="nav-link text-muted active" id="tab1" data-bs-toggle="pill" href="#content1">COMPANY BRAND </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-muted"   id="tab2" data-bs-toggle="pill" href="#content2">PREFERENCES </a>
                            </li>
                            
                            <li class="nav-item">
                              <a class="nav-link text-muted" id="tab3" data-bs-toggle="pill" href="#content3">PAYMENT METHODS</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-muted" id="tab3" data-bs-toggle="pill" href="#content4">TEAM </a>
                            </li>
                          </ul>
                        </div>

              <div class="col-md-9">
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="content1">
              
                    <div className="row" >
                        <p className=" fw-bolder fs30 ">BUILD UP YOUR PROFESSIONAL PRESENCE </p>
                              <p className=" fs16  m-0">Only visible to admin</p>

                                  <div className="companysetting-window-container ">
                                      <div class="row  mt-2"  > 

                                          {/* company brand section-1  start */}

                                           <div class="my-3 row  col-md-12  company-setting-box  ">
                                                          <div class="mb-3 col-md-4  pl-5 border-right "> 
                                                                <span className="fw-bolder fs24" >Company Photo </span><span class="mx-3"><i class="fa-solid fa-pencil"></i></span>
                                                                <p className="fw-bolder fs24" > Booth Name Here  </p> 
                                                                <p className="fw-bolder fs16" > Ruben Esquivel </p> 
                                                            </div>

                                                              <div class="mb-3 col-md-8">
                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Company Email</label>
                                                                    <input type="text" className="form-control" placeholder="name@companyemail.com" id="fullName"  required />
                                                                  </div>

                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Phone Number</label>
                                                                    <input type="text" className="form-control" id="fullName" placeholder="214-555-5555" required />
                                                                  </div>

                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Company Website</label>
                                                                    <input type="text" className="form-control" id="fullName" placeholder="www.website-name.com" required />
                                                                  </div>
                                                                  </div>
                                        
                                                          </div>
                                             {/* company brand section-1  end  */}

                                                {/* company brand section-2  start */}

                                            <div class="my-3  row col-md-12 company-setting-box ">
                                                         
                                            <p className="fw-bolder fs-4" >Brand Elements  </p> 

                                                <div class="mb-3  col-md-6 pl-5 border-left "> 
                                                              <div class="mb-3  col-md-12 d-flex ">

                                                                  <div class=" mx-1  col-md-4 ">
                                                                       <p class="card-title">Main Logo</p>
                                                                      <div className="MainLogo" >
                                                                      <img src="img/image.png"  width={30} className="mainimgpath img-fluid"  alt="" />
                                                                        <spna class="text-content d-block">100x100 px</spna>
                                                                      </div>
                                                                  </div>

                                                                  <div class="col-md-8" >
                                                                    <p class="card-title">Secondary Logo</p>
                                                                    <div className="SecondaryLogo  justify-content-center d-flex" >
                                                                    <img src="img/image.png"  className="SecondaryLogopath img-fluid " alt="main" />
                                                                    <spna class="text-content">300x100 px</spna>
                                                                    </div>
                                                                  </div>

                                                              </div>

                                                              <div class="col-md-12" >
                                                                    <p class="card-title">Default Header Images </p>
                                                                    <div className="DefaultHeaderlogo justify-content-center " >
                                                                    <img src="img/image.png" width="50" className="h-10 img-fluid" alt="main" />
                                                                    <spna class="text-content d-block">750x300 px</spna>

                                                                    </div>
                                                              </div>



                                                                <div class="card border-0">
                                                                <p class="fs-10">Default Header Info</p>
                                                                <p>  <span class="text-primary ">                       
                                                                  <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                                                      </span>
                                                                <span class="mx-2 fs-14" > inculde Info in Defult Header </span></p> 
                                                                </div>

                                                            <div class="mb-3">
                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Company Name</label>
                                                                    <input type="text" className="form-control" placeholder="Company Photo Booth Name" id="fullName"  required />
                                                                  </div>

                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Name</label>
                                                                    <input type="text" className="form-control" id="fullName" placeholder="Ruben Esquivel" required />
                                                                  </div>

                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Phone #</label>
                                                                    <input type="text" className="form-control" id="fullName" placeholder="214-555-5555" required />
                                                                  </div>

                                                                  <div class="mb-3 ">
                                                                    <label for="fullName" className="form-label">Email </label>
                                                                    <input type="text" className="form-control" id="fullName" placeholder="name@companyinfo.com" required />
                                                                  </div>
                                                          </div>

                                                          </div>

                                                              <div class="mb-3 col-md-6">
                                                              <p className="fs-5">Header Preview</p>

                                                              <div class="mb-3 h-30  headermainsection">
                                                                  <div class="HeaderPreview justify-content-center"> 
                                                                      <div className="center-cirlce-header">
                                                                              <div className="CUSTOMERLOGO">
                                                                            CUSTOMER LOGO
                                                                            </div>
                                                                      </div>
                                                                      <span class="leftsidecut"></span>
                                                                      <span class="headerinner">HEADER</span>
                                                                      <span class="innserimage">IMAGE</span>
                                                                      <span class="rightsidecut"></span>
                                                                      <p className="p-fs-10">Company Photo Booth Name</p>
                                                                      <p className="p-fs-15">Ruben Esquivel | 214-555-5555 | name@companyinfo.com</p>
                                                                   
                                                                  </div>


                                                                  <div className="section-content my-3" >
                                                                        <div class="section-content1 mx-3 my-4">
                                                                                <p class="section1"></p>
                                                                                <p class="section2"></p>
                                                                                <p class="section3"></p>
                                                                                <p class="section2"></p>
                                                                        </div>

                                                                        <div class="section-content1  mx-3 my-4">
                                                                                <p class="section1"></p>
                                                                                <p class="section2"></p>
                                                                                <p class="section3"></p>
                                                                                <p class="section2"></p>
                                                                        </div>

                                                                        <div class="section-content1  mx-3 my-4">
                                                                                <p class="section1"></p>
                                                                                <p class="section2"></p>
                                                                                <p class="section3"></p>
                                                                                <p class="section2"></p>
                                                                        </div>

                                                                  </div>
                                                                 
                                                               </div>

                                                                 
                                                                <div class="mb-3 ">
                                                                  <p class="fs-12 m-0" >Brand color:</p>
                                                                    <p class="fs-18 m-0">Your brand color will be used in button in email, your contact form, your client portal and much more. </p>
                                                                    
                                                                    <div className="m-2 border-custom-colour d-flex" >
                                                                    <p class="cricledot"></p>
                                                                      <p class="colourcode">  #000000  <i class="fa-solid fa-pencil"></i>  </p>
                                                                    {/* <input type="text" value="#000000" className="w-20 left border-0  circular-input" /> */}
                                                                    </div>
                                                                </div>
                                                              </div>
                                        
                                                          </div>

                                              {/* company brand section-2  end  */}

                                               {/* company brand section-3  start */}

                                             <div class="my-3  row  col-md-12  company-setting-box">
                                                          <div class="mt-3 "> 
                                                                <p className="fw-bolder fs-4 ">Email Signature </p> 
                                                                <p>Your personalized signature will apper on all communication and email Templates </p>
                                                            </div>

                                                            <div class=" col-md-6">
                                                              <p className="m-0 fs-6">john jones </p>
                                                              <p className="m-0 fs-6">Rentals / Photo booths </p>
                                                              <p className="m-0 fs-6">John Photo Booth Company </p>
                                                              <p className="m-0 fs-6"> (972) 123-55555 </p>

                                                            <div className=" mt-4 text-center pt-2">
                                                              <button
                                                                              id="submit-btn"
                                                                              type="button"
                                                                              className="px-5 rounded-pill btn btn-primary btn-lg text-uppercase"
                                                                      >
                                                                              EDIT EMAIL SIGNATURE 
                                                                            </button>
                                                              </div>
                                        
                                                          </div>
                                                      </div>
                                            {/* company brand section-3  end  */}


                                  
                                    </div>
                              
                                </div>
                         </div>
                      </div>
                  <div class="tab-pane fade" id="content2">


                                  <div className="companysetting-window-container ">
                                  <div class="container">
                                      <div class="row"  > 

                                          {/* company brand section-1  start */}

                                           <div class="mb-3 row col-md-12 bg-white company-setting-box rounded  my-4">
                                                          <div class="mb-3 col-md-8  pl-5 border-left "> 
                                                                <p className="fw-bolder fs-4" >Company Notifications </p> 
                                                                <p className=" fs-14" > Select thr Notifications that you and team member will recive via email </p> 
                                                            </div>
                                                          <hr/>

                      <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     <div class="card border-0 ">
                              <div class="row d-flex d-inline my-1" >
                                            <div class="col-1">
                                              <span className="text-primary ">                       
                                                <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                              </span>
                                            </div>
                                            <div class="col-2">
                                                    <select class="form-select" aria-label="Default select example" name="" id="">
                                                <option selected>1 day</option>
                                              </select>
                                            </div>
                                            <div class="col-9">
                                            <span class="fs-15">Notifications me by email if client has not viewdan email i send with a file 
                                            </span>
                                            </div>
                            </div>
                            <hr/>
                     </div>
                     
                                                          
                                                          </div>
                                             {/* company brand section-1  end  */}

                                  
                                    </div>
                              
                                 </div>
                            </div>




                  </div>
                  <div class="tab-pane fade" id="content3">
                     {/* payment section end  */}
                        <div className="row " >
                                        {/* Payment Method  section-1  start */}
                                          <div class="mb-3 row col-md-12 mainsection  rounded ">
                                                    <div class=" paymentgateway col-md-5 col-lg-5  mx-2">
                                                    <img src="img/square.png" alt="square" class="img-fluidcard  img-fluid" />
                                                    <div class="paymentgatewaybtn  d-flex justify-content-between">
                                                      <span class="d-sm-inline-block  text-start ">Connect</span>
                                                      <span class="d-md-inline-block  text-end Creditbtn ">Credit Cards</span>
                                                        </div>
                                                    </div>
                                                    <div class=" paymentgateway col-md-5 col-lg-5  mx-2">
                                                      <img src="img/stripe.png" alt="stripe" class=" img-fluidcard img-fluid" />
                                                      <div class="paymentgatewaybtn d-flex justify-content-between">
                                                      <span class="d-sm-inline-block  text-start ">Connect</span>
                                                      <span class="d-md-inline-block  text-end Creditbtn ">Credit Cards</span>
                                                        </div>
                                                      </div>
                                                    <div class="  paymentgateway col-md-5 col-lg-5  mx-2">
                                                      <img src="img/paypal.png" alt="paypal" class=" img-fluidcard img-fluid" />
                                                      <div class="paymentgatewaybtn  d-flex justify-content-between">
                                                      <span class="d-sm-inline-block  text-start ">Connect</span>
                                                      <span class="d-md-inline-block  text-end Creditbtn ">Credit Cards</span>
                                                        </div>
                                                  </div>
                                              </div>
                                        {/* payment method  section-1  end  */}
                                        {/* payment method  section-2  start  */} 
                                      <div class=" col-md-12 border company-setting-box  my-2">
                                          <div class="mb-3 col-md-6 my-5"> 
                                          
                                                <h5 className="bold">Client Payment Methods   </h5> 
                                            </div>

                                              <table class="table">
                                                    <thead>
                                                      <tr>
                                                        <th></th>
                                                        <th>Payment Method </th>
                                                        <th>Connected To</th>
                                                        <th>Button Label</th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <th scope="row">
                                                        <i class="fa-solid fa-bars"></i></th>
                                                        <td>Square</td>
                                                        <td>Tom jones (Photo Booth Owner)</td>
                                                        <td>Pay by Credit Card </td>
                                                        <td>
                                                          <a class="btn editbtn btn-md m-1 " href="#" role="button">edit </a>
                                                          <a class="btn  btn-md  deletebtn m-1" href="#" role="button">delete </a>
                                                          </td>
                                                      </tr>
                                                      
                                                    </tbody>
                                                  </table>
                        
                                          </div>
                                      {/* payment method  section-2  end  */}
                          </div>
                      {/* payment section end  */}
                  </div>


                  <div class="tab-pane fade" id="content4">
                     {/* Team section end  */}
                    
                        <div className="row" >
                        <p className=" fw-bolder fs30 ">BUILD UP YOUR PROFESSIONAL PRESENCE </p>
                              <p className=" fs16  m-0">Only visible to admin</p>
             
                                        {/* Payment Method  section-1  start */}
                            <div class="  col-md-12  company-setting-box rounded my-4 bg-white">

                            <h3 className="my-5">Photo Booth Attendants </h3>
                              <b>Attendant 1</b>

                              <form class="row g-3 needs-validation" novalidate>
                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="validationCustom01" 
                                            value="" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="validationCustom02"
                                             value="" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>


                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Phone # </label>
                                            <input type="text" class="form-control" id="validationCustom01" 
                                            value="214-555-5555" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Email</label>
                                            <input type="text" class="form-control" id="validationCustom02"
                                             value="name@companyinfo.com" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>

                                          <hr/>

                                          <b>Attendant 2</b>

                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="validationCustom01" 
                                            value="" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="validationCustom02"
                                             value="" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>


                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Phone # </label>
                                            <input type="text" class="form-control" id="validationCustom01" 
                                            value="214-555-5555" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Email</label>
                                            <input type="text" class="form-control" id="validationCustom02"
                                             value="name@companyinfo.com" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>

                                          <hr/>
                                          <b>Attendant 3</b>

                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="validationCustom01" 
                                            value="" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="validationCustom02"
                                             value="" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>


                                          <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Phone # </label>
                                            <input type="text" class="form-control" id="validationCustom01" 
                                            value="214-555-5555" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <label for="validationCustom02" class="form-label">Email</label>
                                            <input type="text" class="form-control" id="validationCustom02"
                                             value="name@companyinfo.com" required />
                                            <div class="valid-feedback">
                                              Looks good!
                                            </div>
                                          </div>

                                          <div class="col-12 my-5">
                                               <a class="btn btn-primary border rounded-circle btn-sm " href="#" role="button">
                                                   <i class="fa-solid fa-plus"></i> 
                                               </a> Add Attendant
                                          </div>
                                        </form>
                                </div>
                                        {/* Team section-1  end  */}
                                        {/* Team section-2  start  */}
                                      <div class="mb-3 col-md-12 border bg-white company-setting-box rounded p-lg-3 p-md-2 p-2 my-4">
                                          <div class="mb-3 col-md-6 my-5"> 
                                          
                                                <h5 className="bold">Select What Info To Share With Attendants</h5> 
                                            </div>
                                            <hr/>
                                            <div class="card border-0 ">
                                                      <div class="row d-flex d-inline my-1" >
                                                    <div class="col-1">
                                                      <span className="text-primary ">                       
                                                        <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                                      </span>
                                                    </div>
                                                    <div class="col-11">
                                                    <span class="fs-15">Customer Name
                                                    </span>
                                                    </div>
                                                  </div>
                                                    <hr/>
                                          </div>

                                          <div class="card border-0 ">
                                                      <div class="row d-flex d-inline my-1" >
                                                    <div class="col-1">
                                                      <span className="text-primary ">                       
                                                        <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                                      </span>
                                                    </div>
                                                    <div class="col-11">
                                                    <span class="fs-15">Event Address
                                                    </span>
                                                    </div>
                                                  </div>
                                                    <hr/>
                                          </div>

                                          <div class="card border-0 ">
                                                      <div class="row d-flex d-inline my-1" >
                                                    <div class="col-1">
                                                      <span className="text-primary ">                       
                                                        <i class="fa-solid  fa-toggle-on fs-1"></i> 
                                                      </span>
                                                    </div>
                                                    <div class="col-11">
                                                    <span class="fs-15">Customer’s Phone Number
                                                    </span>
                                                    </div>
                                                  </div>
                                                    <hr/>
                                          </div>

                                          <div class="card border-0 ">
                                                      <div class="row d-flex d-inline my-1" >
                                                    <div class="col-1">
                                                      <span className="text-primary ">                       
                                                        <i class="fa-solid  fa-toggle-off fs-1"></i> 
                                                      </span>
                                                    </div>
                                                    <div class="col-11">
                                                    <span class="fs-15">Customer balance due on the day of the event.
                                                    </span>
                                                    </div>
                                                  </div>
                                          </div>

                                          </div>
                                      {/* payment method  section-2  end  */}
                          </div>
                      {/* team  section end  */}
                  </div>

                </div>
              </div>
            </div>
          </div>
                              {/* Company tab left end  */}

            
            </div>
          </div>
          </div>
                      {/* ========== Company setting   =================== */}
                    
                    </div>


                    
                    </div>

          </div>
       
  
          {/* ================= *****  TEMPLATES BODY JSX ***** ================= */}
        </div>
      </div>
    );
  }

export { CompanySetting };

