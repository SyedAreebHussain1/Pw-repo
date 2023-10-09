import React, { useEffect } from "react";

import finalizeddone from "../../../images/finalizeddone.mp4";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegisteredUsersForPwWebAction,
  getReportsInfoAction,
} from "../../../../store/action/traficAction";
const VideoBg = () => {
  const dispatch = useDispatch();
  const { getRegisteredUsersForPwWeb, getReportsInfo } = useSelector(
    (state) => state?.trafic
  );
  useEffect(() => {
    dispatch(getRegisteredUsersForPwWebAction());
    dispatch(getReportsInfoAction());
  }, [dispatch]);
  return (
    <div
      style={{ position: "relative", borderRadius: "10px", top: "10%" }}
      className="topspace bottomspace ml-5 mr-5 mt-mobile mb-mobile screen-view"
    >
      <div className="main-video ">
        <video
          className="mask"
          style={{
            borderRadius: "8px",
            position: "absolute",
          }}
          // className="overlay-video"
          src={finalizeddone}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="content-video " style={{ opacity: "0.9" }}>
          <div className="block-flex p-108px gap-video-section">
            <div style={{ width: "100%" }} className="">
              <span
                style={{
                  color: "#292D35",
                  fontWeight: "700",
                  position: "relative",
                }}
                className="fs-three-box-head"
              >
                Navigating Success Through <br />
                <span style={{ color: "#27a3a3" }}>Our Vast Agent Network</span>
              </span>
              <div style={{ color: "#3D4350" }} className=" fs-three-box-p">
                <p
                  className="fs-three-box-p"
                  style={{
                    color: "#3D4350",
                  }}
                >
                  We have a Property Wallet Inventory module where companies can
                  inventory and sell properties. When a property is sold
                  successfully through our platform,
                </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div
                className="flex"
                style={{
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <div style={{ width: "100%" }}>
                  <h4 className="color27a3a3 count-total">
                    {getReportsInfo ? getReportsInfo["Install events"] : 39970}+
                  </h4>
                  <h4 className="count-name color3D4350">Total Downloads</h4>
                </div>
                <div
                  className="screen-view"
                  style={{
                    borderLeft: "2px solid #858D9D",
                    height: "70px",
                    width: "20%",
                    margin: "20px",
                  }}
                ></div>

                <div style={{ width: "100%" }}>
                  <h4 className="color27a3a3 count-total">
                    {" "}
                    {getRegisteredUsersForPwWeb?.data
                      ? getRegisteredUsersForPwWeb?.data
                      : 6435}
                    +
                  </h4>
                  <h4 className="count-name color3D4350">Total SignUp</h4>
                </div>
              </div>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "100%" }}>
                  <h4 className="color27a3a3 count-total">
                    {getRegisteredUsersForPwWeb?.agencyDetail
                      ? getRegisteredUsersForPwWeb?.agencyDetail?.AllAgency
                      : 2342}
                    +
                  </h4>
                  <h4 className="count-name color3D4350">Agency Registered</h4>
                </div>
                <div
                  className="screen-view"
                  style={{
                    borderLeft: "2px solid #858D9D",
                    height: "70px",
                    width: "20%",
                    margin: "20px",
                  }}
                ></div>
                <div style={{ width: "100%" }}>
                  <h4 className="color27a3a3 count-total">4000+</h4>
                  <h4 className="count-name color3D4350">Listings </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBg;
