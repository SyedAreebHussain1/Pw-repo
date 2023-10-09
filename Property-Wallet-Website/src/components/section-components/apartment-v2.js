import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import img1 from "../images/inventory.jpg";
import img2 from "../images/staff.jpg";
import img3 from "../images/commision.jpg";
import img4 from "../images/calculator.jpg";
import SelectBox from "../V2/select";
import "../V2/styleareeb.css";
import iconsss from "../images/iconn.png";

import commissionIcon from '../images/commission.png'
import finalizeSaleIcon from '../images/finalize sale.png'
import stafficon from '../images/stafficon.png'
import inventoryIcon from '../images/inventory.png'
import reportIcon from '../images/report.png'
import targetIcon from '../images/target.png'
import digitalToolsIcon from '../images/DigitalToolsIcon.png'




// import inventoryImg from "../images/hh.png";
import inventoryImg from "../images/inventeryImg.png";
import staffImg from "../images/StaffHomeImg.png";
import commissionImg from "../images/CommissionHomeImg.png";
import reportHomeImg from "../images/ReportHomeImg.png";
import digitalTools from "../images/TOOLS.png";
import SaleTargetImg from "../images/SaleTargetImg.png";


import AOS from "aos";
import "aos/dist/aos.css";


const ApartmentV2 = (props) => {
  // console.log(props,'<==')
  let publicUrl = process.env.PUBLIC_URL + "/";

  let CustomClass = props.customClass ? props.customClass : "";

  var testClassvar = document.getElementsByClassName("testClass");
  useEffect(() => {
    for (var i = 0; i < testClassvar.length; i++) {
      testClassvar[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeTest");
        current[0].className = current[0].className.replace(" activeTest", "");
        this.className += " activeTest";
      });
    }
  }, [testClassvar]);


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])


  return (
    <div className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
      data-aos="fade-up"
      style={{ marginBottom: "" }}>
      <div className="container services-aprt-none" style={{ display: "flex" }}>
        <div className="ltn__tab-menu">
          <div
            className="nav anchorTagNav"
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
              // height: "500px",
            }}
          >
            <a
              className="testClass activeTest show anchorTag"
              data-bs-toggle="tab"
              href="#liton_tab_3_1"
            >
              <div className="flexs imgandp">
                <img className="iconpng" src={inventoryIcon} alt="logo" />
                <p className="text-inven">Inventory Management</p>
              </div>
            </a>
            <a
              className="anchorTag testClass"
              data-bs-toggle="tab"
              href="#liton_tab_3_2"
            >
              <div className="flexs imgandp">
                <img className="iconpng" src={stafficon} alt="logo" />
                <p className="text-inven">Staff Management</p>
              </div>
            </a>
            <a
              className="anchorTag testClass"
              data-bs-toggle="tab"
              href="#liton_tab_3_3"
            >
              <div className="flexs imgandp">
                <img className="iconpng" src={commissionIcon} alt="logo" />
                <p className="text-inven">Commission Management</p>
              </div>
            </a>
            <a
              className="anchorTag testClass"
              data-bs-toggle="tab"
              href="#liton_tab_3_4"
            >
              <div className="flexs imgandp">
                <img className="iconpng" src={reportIcon} alt="logo" />
                <p className="text-inven">Report&nbsp;&nbsp; Management</p>
              </div>
            </a>
            <a
              className="anchorTag testClass"
              data-bs-toggle="tab"
              href="#liton_tab_3_5"
            >
              <div className="flexs imgandp">
                <img className="iconpng" src={digitalToolsIcon} alt="logo" />
                <p className="text-inven">Digital Tools</p>
              </div>
            </a>
            <a
              className="anchorTag testClass"
              data-bs-toggle="tab"
              href="#liton_tab_3_6"
            >
              <div className="flexs imgandp">
                <img className="iconpng" src={targetIcon} alt="logo" />
                <p className="text-inven saleText">Target Sales Management</p>
              </div>
            </a>
          </div>
        </div>

        <div className="tab-content" >
          <div className="tab-pane fade  active show" id="liton_tab_3_1">
            <div>
              <div
                className="flext-text"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className="imgDiv">
                  <img className="imgIphoneScreen marginTop-30px " src={inventoryImg} alt="img" style={{ marginTop: '' }} />
                </div>
                <div className="marginleft-350px" style={{
                  width: "100%",
                  // marginLeft: "-350px",
                }}>
                  <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                    <div className="ltn__feature-info">
                      <h3>
                        <div
                          className="freature-link-hover"
                          style={{ color: "black" }}
                        // to="/service-details"
                        >
                          <h1>Inventory Management</h1>
                        </div>
                      </h3>
                      <p className="text-gray-ad" style={{ fontSize: "1rem" }}>
                      Inventory management is an essential part of any business.Take control of your inventory with our inventory management system. Get real-time insights into your business and make data-driven decisions with our powerful inventory management system. Realtors are now able to manage their inventories more efficiently.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to="/inventory-management"
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_tab_3_2">
            <div className="ltn__product-tab-content-inner">
              <div
                className="flext-text"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className=" imgDiv">
                  <img className="imgIphoneScreen  marginTop-30px" src={staffImg} alt="img" />
                </div>
                <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                  <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                    <div className="ltn__feature-info">
                      <h3>
                        <div
                          className="freature-link-hover"
                          style={{ color: "black" }}
                        // to="/staffmanagement"
                        >
                          <h1>Staff Management</h1>
                        </div>
                      </h3>
                      <p className="text-gray-ad" style={{ fontSize: "1rem" }}>
                      With the property wallet staff management system, real estate agencies can effectively manage their staff and ensure that they are working efficiently and productively. It allows them to track staff performance, assign tasks, and schedule meetings. Our Staff management system is simple to use.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to="/staff-management"
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_tab_3_3">
            <div className="ltn__product-tab-content-inner">
              <div
                className="flext-text"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className=" imgDiv">
                  <img className="imgIphoneScreen  marginTop-30px" src={commissionImg} alt="img" />
                </div>
                <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                  <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                    <div className="ltn__feature-info">
                      <h3>
                        <div
                          className="freature-link-hover"
                          style={{ color: "black" }}
                        // to="/service-details"
                        >
                          <h1>Commission Management</h1>
                        </div>
                      </h3>
                      <p className="text-gray-ad" style={{  fontSize: "1rem" }}>
                      The process of tracking, calculating, and distributing commissions is known as commission management. Our commission management systems provide a full platform for handling commission payments from start to finish, including payment tracking, proper commission calculation, and timely payment distribution.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to="/commission-management"
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_tab_3_4">
            <div className="ltn__product-tab-content-inner">
              <div
                className="flext-text"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className=" imgDiv">
                  <img className="imgIphoneScreen marginTop-30px" src={reportHomeImg} alt="img" />
                </div>
                <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                  <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                    <div className="ltn__feature-info">
                      <h3>
                        <div
                          className="freature-link-hover"
                          style={{ color: "black" }}
                        // to="/service-details"
                        >
                          <h1>Report Management</h1>
                        </div>
                      </h3>
                      <p className="text-gray-ad" style={{ fontSize: "1rem" }}>
                      Say goodbye to tedious report management - make the switch today with property wallet for your hassle-free solution! We understand how important accurate and timely reports are to help you succeed, so our intuitive system will help you create, organize, and distribute reports with ease in no time!
                      </p>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to="/report-management"
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_tab_3_5">
            <div className="ltn__product-tab-content-inner">
              <div
                className="flext-text"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className="imgDiv">
                  <img className="imgIphoneScreen marginTop-30px" src={digitalTools} alt="img" />
                </div>
                <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                  <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                    <div className="ltn__feature-info">
                      <h3>
                        <div
                          className="freature-link-hover"
                          style={{ color: "black" }}
                        // to="/service-details"
                        >
                          <h1>Digital Tools</h1>
                        </div>
                      </h3>
                      <p className="text-gray-ad" style={{ fontSize: "1rem" }}>
                      Say goodbye to manual processes, streamline operations and achieve greater outcomes faster and easier. Digital tools are the way to take your business on the road to success! ⁣⁣ Technology advances, but it's up to us how we use it. Property wallet equips you with the digital tools you need for success.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to="/digital-tools"
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_tab_3_6">
            <div className="ltn__product-tab-content-inner">
              <div
                className="flext-text"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className=" imgDiv">
                  <img className="imgIphoneScreen marginTop-30px" src={SaleTargetImg} alt="img" />
                </div>
                <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                  <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                    <div className="ltn__feature-info">
                      <h3>
                        <div
                          className="freature-link-hover"
                          style={{ color: "black" }}
                        >
                          <h1>Target Sales Management</h1>
                        </div>
                      </h3>
                      <p className="text-gray-ad" style={{ fontSize: "1rem" }}>
                      Taking your business to the next level requires more than just effort, Change the way you manage business the smarter way. Property wallet makes it easy for you to plan out strategies for achieving success. Plus, you’ll always have access to real-time analytics and insights to follow up on your progress.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to="/sales-target"
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectBox />
    </div>
    //{" "}
    // </div>
    //
    // //
    // <div
    //   className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
    // >
    //   <div className="container">
    //     <div className="mainContanier_areeb">
    //       <div>
    //         <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Inventory Management</a>
    //         <a data-bs-toggle="tab" href="#liton_tab_3_1">Staff Management</a>
    //         <a data-bs-toggle="tab" href="#liton_tab_3_3">Commission Management</a>
    //       </div>
    //       <div className="img5mobile" >
    //         <img src={img5} alt="img" />
    //       </div>
    //       <div
    //         style={{ marginTop: "4%" }}
    //         className="col-lg-6 margin-top-fix-0"
    //       >
    //         <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //           <h2 style={{ fontSize: "22px" }}>
    //             Get the best digital tools for property businesses
    //             all-in-one app!
    //           </h2>
    //           <p>
    //             This includes Payment Plan Creator, ROI Calculator,
    //             Commission Calculator, Property Document Creator,
    //             Rental Affordability Calculator.
    //           </p>
    //           <div
    //             style={{
    //               display: "flex",
    //               justifyContent: "center",
    //             }}
    //             className="btn-wrapper animated"
    //           >
    //             <Link
    //               to="/about"
    //               className="theme-btn-1 btn btn-effect-1"
    //             >
    //               Learn more
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // //
    // //
    // <div
    //   className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
    // >
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-12">
    //         {/* <div className="section-title-area ltn__section-title-2--- text-center">
    //           <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
    //             Apartment Sketch
    //           </h6>
    //           <h1 className="section-title">Apartments Plan</h1>
    //         </div> */}
    //         <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
    //           <div className="nav">
    //             <a
    //               className="active show"
    //               data-bs-toggle="tab"
    //               href="#liton_tab_3_2"
    //             >
    //               Inventory Management
    //             </a>
    //             <a data-bs-toggle="tab" href="#liton_tab_3_1">
    //               Staff Management
    //             </a>

    //             <a data-bs-toggle="tab" href="#liton_tab_3_3">
    //               Commission Management
    //             </a>
    //             <a data-bs-toggle="tab" href="#liton_tab_3_4">
    //               Rental Management
    //             </a>
    //             <a data-bs-toggle="tab" href="#liton_tab_3_5">
    //               Digital Tools
    //             </a>
    //           </div>
    //         </div>
    //         <div className="tab-content">
    //           <div className="tab-pane fade" id="liton_tab_3_1">
    //             <div className="ltn__apartments-tab-content-inner">
    //               <div className="row">
    //                 <div className="col-lg-6">
    //                   <div className="apartments-plan-img">
    //                     <img
    //                       src={
    //                         img2
    //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
    //                       }
    //                       alt="#"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div
    //                   style={{ marginTop: "5%" }}
    //                   className="margin-top-fix-0 col-lg-6"
    //                 >
    //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //                     <h2>Oversee your team of agents on-the go!</h2>
    //                     <p>
    //                       Manage, coordinate and communicate with your
    //                       subordinates easily with the Property Wallet app.
    //                     </p>
    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         justifyContent: "center",
    //                       }}
    //                       className="btn-wrapper animated"
    //                     >
    //                       <Link
    //                         to="/about"
    //                         className="theme-btn-1 btn btn-effect-1"
    //                       >
    //                         Learn more
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="tab-pane fade active show" id="liton_tab_3_2">
    //             <div className="ltn__product-tab-content-inner">
    //               <div className="row">
    //                 <div className="col-lg-6">
    //                   <div className="apartments-plan-img">
    //                     <img
    //                       src={
    //                         img1
    //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
    //                       }
    //                       alt="#"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div
    //                   style={{ marginTop: "7%" }}
    //                   className="margin-top-fix-0 col-lg-6"
    //                 >
    //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //                     <h2>Leave no stone unturned!</h2>
    //                     <p>
    //                       Stay up-to-date with your available inventory to
    //                       manage your operations in real-time smoother than
    //                       ever.
    //                     </p>
    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         justifyContent: "center",
    //                       }}
    //                       className="btn-wrapper animated"
    //                     >
    //                       <Link
    //                         to="/about"
    //                         className="theme-btn-1 btn btn-effect-1"
    //                       >
    //                         Learn more
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="tab-pane fade" id="liton_tab_3_3">
    //             <div className="ltn__product-tab-content-inner">
    //               <div className="row">
    //                 <div className="col-lg-6">
    //                   <div className="apartments-plan-img">
    //                     <img
    //                       src={
    //                         img3
    //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
    //                       }
    //                       alt="#"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div
    //                   style={{ marginTop: "5%" }}
    //                   className="col-lg-6 margin-top-fix-0"
    //                 >
    //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //                     <h2>Quickest way to calculate commissions!</h2>
    //                     <p>
    //                       Calculate and record all commissions on a property
    //                       that you and your agents deserve as they sell.
    //                     </p>
    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         justifyContent: "center",
    //                       }}
    //                       className="btn-wrapper animated"
    //                     >
    //                       <Link
    //                         to="/about"
    //                         className="theme-btn-1 btn btn-effect-1"
    //                       >
    //                         Learn more
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="tab-pane fade" id="liton_tab_3_4">
    //             <div className="ltn__product-tab-content-inner">
    //               <div className="row">
    //                 <div className="col-lg-6">
    //                   <div className="apartments-plan-img">
    //                     <img
    //                       src={
    //                         img4
    //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
    //                       }
    //                       alt="#"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div
    //                   style={{ marginTop: "5%" }}
    //                   className="col-lg-6 margin-top-fix-0"
    //                 >
    //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //                     <h2>
    //                       Mediating tenant-owner relationships in all ways!
    //                     </h2>
    //                     <p>
    //                       Digitalizing ledger, agreements and helping you keep
    //                       track of all your client’s cash flows.
    //                     </p>
    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         justifyContent: "center",
    //                       }}
    //                       className="btn-wrapper animated"
    //                     >
    //                       <Link
    //                         to="/about"
    //                         className="theme-btn-1 btn btn-effect-1"
    //                       >
    //                         Learn more
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="tab-pane fade" id="liton_tab_3_5">
    //             <div className="ltn__product-tab-content-inner">
    //               <div className="row">
    //                 <div className="col-lg-6">
    //                   <div className="apartments-plan-img">
    //                     <img
    //                       src={
    //                         img1
    //                         // "https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/slider/62.jpg"
    //                       }
    //                       alt="#"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div
    //                   style={{ marginTop: "4%" }}
    //                   className="col-lg-6 margin-top-fix-0"
    //                 >
    //                   <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //                     <h2 style={{ fontSize: "22px" }}>
    //                       Get the best digital tools for property businesses
    //                       all-in-one app!
    //                     </h2>
    //                     <p>
    //                       This includes Payment Plan Creator, ROI Calculator,
    //                       Commission Calculator, Property Document Creator,
    //                       Rental Affordability Calculator.
    //                     </p>
    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         justifyContent: "center",
    //                       }}
    //                       className="btn-wrapper animated"
    //                     >
    //                       <Link
    //                         to="/about"
    //                         className="theme-btn-1 btn btn-effect-1"
    //                       >
    //                         Learn more
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // //  <div className="tab-pane fade" id="liton_tab_3_5">
    //   <div className="ltn__product-tab-content-inner">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
    //           <h2>Double Height</h2>
    //           <p>
    //             Enimad minim veniam quis nostrud exercitation
    //             ullamco laboris. Lorem ipsum dolor sit amet cons
    //             aetetur adipisicing elit sedo eiusmod
    //             tempor.Incididunt labore et dolore magna aliqua. sed
    //             ayd minim veniam.
    //           </p>
    //           <div className="apartments-info-list apartments-info-list-color mt-40">
    //             <ul>
    //               <li>
    //                 <label>Total Area</label>{" "}
    //                 <span>2800 Sq. Ft</span>
    //               </li>
    //               <li>
    //                 <label>Bedroom</label> <span>150 Sq. Ft</span>
    //               </li>
    //               <li>
    //                 <label>Bathroom</label> <span>45 Sq. Ft</span>
    //               </li>
    //               <li>
    //                 <label>Belcony/Pets</label> <span>Allowed</span>
    //               </li>
    //               <li>
    //                 <label>Lounge</label> <span>650 Sq. Ft</span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="apartments-plan-img">
    //           <img
    //             src={publicUrl + "assets/img/others/10.png"}
    //             alt="#"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ApartmentV2;
