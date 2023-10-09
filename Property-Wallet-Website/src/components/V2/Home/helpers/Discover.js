import React from "react";

const Discover = () => {
  return (
    <div className="container-figma topspace bottomspace ml-5 mr-5  mt-mobile mb-mobile">
      <div
        className="block-flex "
        style={{
          justifyContent: "space-between",
          gap: "87px",
        }}
      >
        <div style={{ width: "100%" }}>
          <p
            className="color27a3a3 essentials"
            style={{
           
            }}
          >
            ESSENTIALS
          </p>
          <h3
           className="discoverOur"
          >
            Discover Our
            <span className="color27a3a3"> Core Modules</span> for Simple,
            Powerful Functionality
          </h3>
        </div>
        <div
          className="p-20-figma"
          style={{
            width: "100%",
          }}
        >
          <p className="peragraph">
            We have a Property Wallet Inventory module where companies can
            inventory and sell properties. When a property is sold successfully
            through our platform,
            <p className="peragraph"
              style={{
                marginTop: "2%",
              }}
            >
              {" "}
              they earn a handsome amount of money. It is an easy and effective
              way for businesses to manage their property assets and generate
              revenue.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
