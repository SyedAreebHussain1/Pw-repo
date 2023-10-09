import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegisteredUsersForPwWebAction,
  getReportsInfoAction,
} from "../../../../store/action/traficAction";
// import sideVideo from "../../../images/finalizeddone.mp4";
import finalizeMobileview from "../../../images/finalizeddone.mp4";
// import modileViewVideoBanner from "../../../images/modileViewVideoBanner.mp4";

const PwAgent = () => {
  const dispatch = useDispatch();
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  const { getRegisteredUsersForPwWeb, getReportsInfo } = useSelector(
    (state) => state?.trafic
  );
  useEffect(() => {
    dispatch(getRegisteredUsersForPwWebAction());
    dispatch(getReportsInfoAction());
  }, [dispatch]);
  return (
    <div
      className=" topspace bottomspace  "
      style={{ marginLeft: "3%", marginRight: "3%" }}
    >
      <div className="row ltn__custom-gutter--- justify-content-center go-top bg-white">
        <div className=" col-lg-6 col-sm-12 col-12">
          <div className="ltn__feature-item ">
            <div className="ltn__feature-info">
              <div
                className=""
                style={{
                  margin: 0,
                  padding: 0,
                  boxSizing: "border-box",
                  scrollBehavior: "smooth",
                  width: "100%",
                  //   height:"70vh"
                }}
              >
                <video
                  style={iOS ? { width: "100%" } : { width: "100%" }}
                  className="videoTag"
                  playsInline
                  autoPlay
                  loop
                  muted
                >
                  <source src={finalizeMobileview} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-8 col-12">
          <div className="ltn__feature-item">
            <div className="ltn__feature-info">
              <h3>
                <div
                  style={{
                    // color: "#292D35",
                    // fontWeight: "700",
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#343f52",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.5rem",
                  }}
                  className="fs-three-box-head"
                >
                  {" "}
                  Navigating Success Through Our Vast Agent Network
                </div>
              </h3>
              {/* <p
                className="mb-7 fs-three-box-p"
                style={{
                  color: "#3D4350",
                }}
              >
                Property Wallet has established a significant real estate agent
                network that spans the entirety of Pakistan. This extensive
                network serves to seamlessly connect agents, resulting in a much
                faster and remarkably efficient experience when it comes to
                selling properties. This achievement demonstrates the potential
                for innovation to reshape the real estate industry.
              </p> */}
              <br/>
              <div className="row r gy-6 " style={{marginTop:'10%'}}>
                <div className="col-md-4">
                  <h3
                    // style={{ fontSize: "2rem", color: "#27a3a3" }}
                    className="count-style"
                  >{`${
                    getReportsInfo ? getReportsInfo["Install events"] : 39970
                  }+`}</h3>
                  <p
                    style={{
                      marginTop: "-2%",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                  >
                    Total Downloads
                  </p>
                </div>
                <div className="col-md-4">
                  <h3
                    // style={{ fontSize: "2rem", color: "#27a3a3" }}
                    className="count-style"
                  >
                    {getRegisteredUsersForPwWeb?.data
                      ? getRegisteredUsersForPwWeb?.data
                      : 6435}
                    +
                  </h3>
                  <p
                    style={{
                      marginTop: "-2%",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                  >
                    Total Signup
                  </p>
                </div>
                <div className="col-md-4">
                  <h3
                    // style={{ fontSize: "2rem", color: "#27a3a3" }}
                    className="count-style"
                  >
                    {getRegisteredUsersForPwWeb?.agencyDetail
                      ? getRegisteredUsersForPwWeb?.agencyDetail?.AllAgency
                      : 2342}
                    +
                  </h3>
                  <p
                    style={{
                      marginTop: "-2%",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                  >
                    Agency Registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PwAgent;
