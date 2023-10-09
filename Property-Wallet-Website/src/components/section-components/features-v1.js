import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";


const FeaturesV1 = (props) => {

  const [title, setTitle] = useState("Default Title");
  // let location = useLocation()

  let publicUrl = process.env.PUBLIC_URL + "/";

  let customClass = props.customClass ? props.customClass : "";





  const changeTitle = (event) => {
    // setTitle(event.target.value);

    // if()
  };


 

 


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])



  return (
    <div className={customClass}>
      <div className="container"
        data-aos="fade-up"
      >
        <div
          className="row ltn__custom-gutter--- justify-content-center go-top" style={{ border: "" }}
        >
          <div className="col-lg-4 col-sm-6 col-12">
            <div
              // style={{ backgroundColor: "#E9EAEC" }}
              className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height" style={{ border: "", height: "190px" }}
            >
              {/* <div className="ltn__feature-icon">
                  <img src={icon2} alt="#" />
                </div> */}
              <div className="ltn__feature-info">
                <h3>
                  <div
                    className="freature-link-hover"
                    style={{ color: "black" }}
                  // to="/service-details"
                  >
                    {/* Consumer<br/> Insights */}
                    Easy to use
                  </div>
                </h3>
                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                  You can easily navigate through our app without being a tech specialist.
                </p>
                {/* <Link className="ltn__service-btn" to="/service-details">
                    Find A Home <i className="flaticon-right-arrow" />
                  </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div
              // style={{ backgroundColor: "#E9EAEC" }}
              className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height" style={{ border: "", height: "190px" }}
            >
              {/* <div className="ltn__feature-icon">
                  <img src={icon2} alt="#" />
                </div> */}
              <div className="ltn__feature-info">
                <h3>
                  <div
                    className="freature-link-hover"
                    style={{ color: "black" }}
                  // to="/service-details"
                  >
                    {/* Emerging <br/> Ideas */}
                    Free
                  </div>
                </h3>
                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                  Avail all our services free of charge and manage your property business with the utmost ease.
                </p>
                {/* <Link className="ltn__service-btn" to="/service-details">
                    Find A Home <i className="flaticon-right-arrow" />
                  </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 bg-white box-shadow-1 features_v1_height" style={{ border: "", height: "190px" }}>
              {/* <div className="ltn__feature-icon">
                  <img src={icon3} alt="#" />
                </div> */}
              <div className="ltn__feature-info">
                <h3>
                  <div
                    className="freature-link-hover"
                    style={{ color: "black" }}
                  // to="/service-details"
                  >
                    {/* Thought<br />
                      Leadership */}
                    24/7 Service
                  </div>
                </h3>
                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                  We’re never offline, hence, you can manage your properties online, anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <div >
        <input
          type="text"
          onChange={changeTitle}
          value={title}
        // style={styles.input}
        />
      </div> */}
    </div>




    // //
    // 
    // <div className={customClass}>
    //   <div className="container">
    //     {/* <div className="row">
    //       <div className="col-lg-12">
    //         <div className="section-title-area ltn__section-title-2--- text-center">
    //           <h6
    //             style={{ color: "black" }}
    //             className="section-subtitle section-subtitle-2 "
    //           >
    //             Our Services
    //           </h6>
    //           <h1 className="section-title">Our Main Focus</h1>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="row ltn__custom-gutter--- justify-content-center go-top">
    //       <div className="col-lg-4 col-sm-6 col-12">
    //         <div
    //           // style={{ backgroundColor: "#E9EAEC" }}
    //           className="ltn__feature-item ltn__feature-item-6 text-center bg-grey  box-shadow-1 active"
    //         >
    //           <div className="ltn__feature-icon">
    //             <img src={icon2} alt="#" />
    //           </div>
    //           <div className="ltn__feature-info">
    //             <h3>
    //               <Link
    //                 className="freature-link-hover"
    //                 style={{ color: "#27A3A3" }}
    //                 to="/service-details"
    //               >
    //                 Easy to use
    //               </Link>
    //             </h3>
    //             <p style={{ color: "#27A3A3", fontSize: "20px" }}>
    //               You can easily navigate through our app without being a tech
    //               specialist.
    //             </p>
    //             {/* <Link className="ltn__service-btn" to="/service-details">
    //               Find A Home <i className="flaticon-right-arrow" />
    //             </Link> */}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-sm-6 col-12">
    //         <div className="ltn__feature-item ltn__feature-item-6 ltn__feature-item-free text-center bg-dark-green  box-shadow-1">
    //           <div className="ltn__feature-icon">
    //             <img src={icon1} alt="#" />
    //           </div>
    //           <div className="ltn__feature-info">
    //             <h3>
    //               <Link style={{ color: "white" }} to="/service-details">
    //                 Free
    //               </Link>
    //             </h3>
    //             <p style={{ color: "white", fontSize: "20px" }}>
    //               Avail all our services for free to manage your business
    //               smoother than ever.
    //             </p>
    //             {/* <Link className="ltn__service-btn" to="/service-details">
    //               Find A Home <i className="flaticon-right-arrow" />
    //             </Link> */}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-sm-6 col-12">
    //         <div className="ltn__feature-item ltn__feature-item-6 text-center bg-grey  box-shadow-1">
    //           <div className="ltn__feature-icon">
    //             <img src={icon3} alt="#" />
    //           </div>
    //           <div className="ltn__feature-info">
    //             <h3>
    //               <Link
    //                 className="freature-link-hover"
    //                 style={{ color: "#27A3A3" }}
    //                 to="/service-details"
    //               >
    //                 24/7 Service
    //               </Link>
    //             </h3>
    //             <p style={{ color: "#27A3A3", fontSize: "20px" }}>
    //               Adding to your convenience by helping you manage your
    //               business online at all times.
    //             </p>
    //             {/* <Link className="ltn__service-btn" to="/service-details">
    //               Find A Home <i className="flaticon-right-arrow" />
    //             </Link> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}


export default FeaturesV1;
