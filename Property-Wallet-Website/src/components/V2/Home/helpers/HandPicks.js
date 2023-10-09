import React from "react";
import handpicked from "../../../images/Handpicked.png";
const HandPicks = () => {
  return (
    <div className="topspace bottomspace  mt-mobile mb-mobile">
      <div
        className="p-all-side"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div
          className="block-flex section-7-home"
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            className="screen-view p-10px"
            style={
              {
                //   width: "100%",
                //   borderRadius: "10px",
              }
            }
          >
            <img src={handpicked} alt="" />
          </div>
          <div className="content-handpicks mr-5">
            <div>
              <span
                style={{
                  color: "#292D35",
                  fontWeight: "700",
                  position: "relative",
                }}
                className="fs-three-box-head"
              >
                <span
                // style={type ? { color: "#27a3a3" } : { color: "#176FEA" }}
                >
                  Handpicked Homes
                </span>
              </span>

              <p
                style={{
                  fontWeight: "500",
                  color: "#292D35",
                  marginTop: "-1%",
                }}
                className="fs-three-box-head"
              >
                Discover Your Perfect Match with{" "}
                <span style={{ color: "#27A3A3" }}>
                  AI-Powered Recommendations!
                </span>
              </p>
              <div
                className="mobile-view mb-img"
                style={{ width: "100%", textAlign: "center" }}
              >
                <img src={handpicked} alt="" />
              </div>
              <div style={{ color: "#27a3a3" }} className=" fs-three-box-p">
                <p
                  className="fs-three-box-p"
                  style={{
                    color: "#3D4350",
                  }}
                >
                  We have a Property Wallet Inventory module where companies can
                  inventory and sell properties. When a property is sold
                  successfully through our platform,
                  <p
                    className="fs-three-box-p"
                    style={{
                      marginTop: "2%",
                    }}
                  >
                    they earn a handsome amount of money. It is an easy and
                    effective way for businesses to manage their property assets
                    and generate revenue.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandPicks;
