import React from "react";
import iccon from "../images/iconn.png";
import { Link } from "react-router-dom";
import TestimonialServicePage from "./Testimonials/testimonials-service-page";
import "../V2/Sellwithus/sellwithus.css"

// icon
import compaign from "../images//Services-analytic-icon/campaign.png";
import documentation from "../images//Services-analytic-icon/documentation.png";
import finance from "../images//Services-analytic-icon/finance.png";
import inventory from "../images//Services-analytic-icon/inventory.png";
import recovery from "../images//Services-analytic-icon/recovery.png";
import report from "../images//Services-analytic-icon/report.png";
// 



const AnalyticContent = (props) => {
  const connectDirectlyText = "Are you ready to take the next major step in your business?";
  const completeDesktopText = "Join property wallet today and start selling with us!";
  let publicUrl = process.env.PUBLIC_URL + "/";
  let customClass = props.customClass ? props.customClass : "";
  return (
    <>
      
      {/* <div className=" border padding-1rem container">
        <div>
          <div className="text-skyblue bold">
            {connectDirectlyText.toUpperCase()}
          </div>
          <div className="completeDesktopText  font-size-1_6rem bold" >
            {completeDesktopText}
          </div>
        </div>
        <div className="row ltn__custom-gutter--- justify-content-center go-top">
          <div className="col-lg-4 col-sm-6 col-12">
            <div
              className="ltn__feature-item  border"
              style={{ height: "500px" }}
            >
              <div className="ltn__feature-info">
                <div className="flexs">
                  <img src={iccon} className="height-2_rem border" />
                  <div className="margin-left_12px bold font-1rem bold text-black marginTop-7px">Digital Campaigns Management</div>
                </div>
                <p className="font-1rem marginTop-10px"> Managing digital campaigns doesn’t have to be complicated! Here at property wallet crm, we have the perfect solution for anyone who wants to launch effective and successful campaigns</p>
              </div>
              <br />
              <br />
              <br />
              <div className="ltn__feature-info">
                <div className="flexs">
                  <img src={iccon} className="height-2_rem " />
                  <div className="margin-left_12px bold font-1rem text-black marginTop-7px">Property Documentation</div>
                </div>
                <p className="font-1rem marginTop-10px">
                  Keeping up with the paperwork for any property can be tricky and time consuming. But it doesn’t have to be! Introducing Property wallet CRM - the safe, secure, and efficient way to manage your property documentation with ease
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div
              className="ltn__feature-item border"
              style={{ height: "500px" }}
            >
              <div className="ltn__feature-info">
                <div className="flexs">
                  <img src={iccon} className="height-2_rem " />
                  <div className="margin-left_12px bold font-1rem text-black marginTop-7px">  Reporting Management</div>
                </div>
                <p className="font-1rem marginTop-10px">



                  It’s time to drop the manual reporting, and upgrade to a modern, automated reporting system.⁣ With Property wallet CRM, you’ll be able to access up-to-date insights about your business all in one place

                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="ltn__feature-info">
                <div className="flexs">
                  <img src={iccon} className="height-2_rem " />
                  <div className="margin-left_12px bold font-1rem text-black marginTop-7px">Inventory Management</div>
                </div>
                <p className="font-1rem marginTop-10px">
                  Say goodbye to time-consuming paperwork and manual mistakes. You can keep track of every asset quickly and accurately with the Property wallet CRM inventory management system</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item  border"
              style={{ height: "500px" }}>
              <div className="ltn__feature-info">
                <div className="flexs">
                  <img src={iccon} className="height-2_rem " />
                  <div className="margin-left_12px bold font-1rem text-black marginTop-7px">Recovery Management</div>
                </div>
                <p className="font-1rem marginTop-10px">
                  Don’t bear the stress of it all alone! With property wallet CRM, we make property recovery management easy - and fast
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="ltn__feature-info">
                <div className="flexs">
                  <img src={iccon} className="height-2_rem " />
                  <div className="margin-left_12px bold font-1rem text-black marginTop-7px">Basic Finance Management </div>
                </div>
                <p className="font-1rem marginTop-10px">
                  Are you fed up with your financial problems? We've got your back! Welcome to Property Wallet CRM, a financial planner developed to assist you with property buying and selling calculations and revenue
                </p>
              </div>
            </div>
          </div>
          <div className="flexs border">
            <div
              style={{
                // display: "flex",
                // justifyContent: "center",
                // marginTop: '-20px'
              }}
              className="btn-wrapper animated"
            >
              <Link
                to=""
                className="theme-btn-1 btn btn-effect-1 getStartedNow bold sans-serif">
                {getStartedNow.toUpperCase()}
              </Link>
            </div>
            <div
              style={{
                // display: "flex",
                // justifyContent: "center",
                // marginTop: '-20px'
                marginLeft: '1rem'
              }}
              className="btn-wrapper animated border"
            >
              <Link
                to=""
                className="theme-btn-1 btn btn-effect-1 learnMore"
              >
                {learnMore.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      </div> */}



      <div className={customClass} style={{marginTop:"10%"}}>
        <div className="container"
          data-aos="fade-up"
        >
          <div
            className="row ltn__custom-gutter--- justify-content-center go-top"
          >
            <div style={{ textAlign: "center",marginTop:'-7%' }}>
              <h6 className=" bold" style={{color:"#053857",fontSize:"1rem"}}>
                {connectDirectlyText.toUpperCase()}
              </h6>
              <div className="completeDesktopText  font-size-1_6rem bold" >
                {completeDesktopText}
              </div>
            </div>
            <br />
            <div className="col-lg-4 col-sm-6 col-12">
              <div
                // style={{ backgroundColor: "#E9EAEC" }}
                className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1 features_v1_height"
              >
                {/* <div className="ltn__feature-icon">
                  <img src={icon2} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  {/* <h3> */}
                  {/* <div
                      className="freature-link-hover"
                      style={{ color: "black" }}
                    > Digital Campaigns Management */}
                  <div className="flexs">
                    <img src={compaign} className="height-2_rem " />
                    <div className="margin-left_12px bold marginTop-7px" style={{color:"#053857"}}>Campaigns Management</div>
                  </div>
                  {/* </div> */}
                  {/* </h3> */}
                  <p className="text-gray-ad" style={{  fontSize: "15px" }}>
                  Managing digital campaigns doesn’t have to be complicated! Here at property wallet crm, we have the perfect solution for anyone who wants to launch effective and successful campaigns.
                  </p>
                </div>
                <br/>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div
                // style={{ backgroundColor: "#E9EAEC" }}
                className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1 features_v1_height"
              >
                {/* <div className="ltn__feature-icon">
                  <img src={icon2} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  {/* <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}
                    // to="/service-details"
                    >
                  
                      Property Documentation
                    </div>
                  </h3> */}
                  <div className="flexs">
                    <img src={documentation} className="height-2_rem " />
                    <div className="margin-left_12px bold marginTop-7px" style={{color:"#053857"}}>Property Documentation</div>
                  </div>
                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    Keeping up with the paperwork for any property can be tricky and time consuming. But it doesn’t have to be! Introducing Property wallet CRM - the safe, secure, and efficient way to manage your property documentation with ease.
                  </p>
                  {/* <Link className="ltn__service-btn" to="/service-details">
                    Find A Home <i className="flaticon-right-arrow" />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1 features_v1_height">
                {/* <div className="ltn__feature-icon">
                  <img src={icon3} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  {/* <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}
                    // to="/service-details"
                    >
                     
                      Basic Finance Management
                    </div>
                  </h3> */}
                  <div className="flexs">
                    <img src={finance} className="height-2_rem " />
                    <div className="margin-left_12px bold marginTop-7px" style={{color:"#053857"}}>Basic Finance Management</div>
                  </div>
                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    Are you fed up with your financial problems? We've got your back! Welcome to Property Wallet CRM, a financial planner developed to assist you with property buying and selling calculations and revenue.
                  </p>
                </div>
                <br/>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1 features_v1_height">
                {/* <div className="ltn__feature-icon">
                  <img src={icon3} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  {/* <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}
                    // to="/service-details"
                    >
                      
                      Inventory Management
                    </div>
                  </h3> */}
                   <div className="flexs">
                    <img src={inventory} className="height-2_rem " />
                    <div className="margin-left_12px bold marginTop-7px" style={{color:"#053857"}}>Inventory Management</div>
                  </div>
                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    Say goodbye to time-consuming paperwork and manual mistakes. You can keep track of every asset quickly and accurately with the Property wallet CRM inventory management system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1 features_v1_height">
                {/* <div className="ltn__feature-icon">
                  <img src={icon3} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  {/* <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}
                    // to="/service-details"
                    >
                     
                      Reporting Management
                    </div>
                  </h3> */}
                  <div className="flexs">
                    <img src={report} className="height-2_rem " />
                    <div className="margin-left_12px bold marginTop-7px" style={{color:"#053857"}}>Reporting Management</div>
                  </div>
                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    It’s time to drop the manual reporting, and upgrade to a modern, automated reporting system.⁣ With Property wallet CRM, you’ll be able to access up-to-date insights about your business all in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1 features_v1_height">
                {/* <div className="ltn__feature-icon">
                  <img src={icon3} alt="#" />
                </div> */}
                <div className="ltn__feature-info">
                  {/* <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}
                    // to="/service-details"
                    >
                      
                      Recovery Management
                    </div>
                  </h3> */}
                   <div className="flexs">
                    <img src={recovery} className="height-2_rem " />
                    <div className="margin-left_12px bold marginTop-7px" style={{color:"#053857"}}> Recovery Management</div>
                  </div>
                  <p className="text-gray-ad" style={{  fontSize: "15px" }}>
                    Don’t bear the stress of it all alone! With property wallet CRM, we make property recovery management easy - and fast. learn more about our amazing Property Recovery Management services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
     
      {/*  */}
    </>
  );
};
export default AnalyticContent;
