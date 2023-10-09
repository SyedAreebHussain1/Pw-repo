import React from "react";
import maoukup from "../../../images/figma/phone_screen_mockup.png";

// icons
import verified from "../../../images/figma/verified.png";
import hours from "../../../images/figma/hours.png";
import free from "../../../images/figma/free.png";
import lead from "../../../images/figma/lead.png";
import earn from "../../../images/figma/lead.png";
import safe from "../../../images/figma/safe.png";

const BigOnFeature = () => {
  return (
    <div className="topspace bottomspace ml-5 mr-5 mt-mobile mb-mobile">
      <div className="block-flex p-all-side">
        <div>
          {/* <span>
              <img src={verified} alt="" />
              <span className="sec-four-heading">Verified Properties</span>{" "}
              <p className="sec-four-peragraph">
                We have a Property Wallet Inventory module where companies can
              </p>
            </span> */}
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div
              className="ltn__feature-info"
              style={{ display: "flex", gap: "12px" }}
            >
              <div className="">
                <img src={verified} alt="" />
              </div>
              <div>
                <div>
                  <h4>
                    <div>
                      <span style={{ display: "block" }}>
                        <span className="sec-four-heading">
                          Verified Properties
                        </span>
                      </span>
                    </div>
                  </h4>
                  <p className="sec-four-peragraph">
                    We have a Property Wallet Inventory module where companies
                    can
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            {/* <span>
              {" "}
              <img src={safe} alt="" />{" "}
              <span className="sec-four-heading">
                Safe & Secure Transactions
              </span>{" "}
            </span>
            <p className="sec-four-peragraph">
              We have a Property Wallet Inventory module where companies can
            </p> */}
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              <div
                className="ltn__feature-info"
                style={{ display: "flex", gap: "12px" }}
              >
                <div>
                  <img src={safe} alt="" />
                </div>
                <div>
                  <div>
                    <h4>
                      <div>
                        <span style={{ display: "block" }}>
                          <span className="sec-four-heading">
                            Safe & Secure Transactions
                          </span>
                        </span>
                      </div>
                    </h4>
                    <p className="sec-four-peragraph">
                      We have a Property Wallet Inventory module where companies
                      can
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              <div
                className="ltn__feature-info"
                style={{ display: "flex", gap: "12px" }}
              >
                <div>
                  <img src={lead} alt="" />
                </div>
                <div>
                  <div>
                    <h4>
                      <div>
                        <span style={{ display: "block" }}>
                          <span className="sec-four-heading">Leads Center</span>
                        </span>
                      </div>
                    </h4>
                    <p className="sec-four-peragraph">
                      We have a Property Wallet Inventory module where companies
                      can
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        {/* <div className="col-md-8 col-lg-6 mx-auto mb-n10 mb-lg-0">
          <figure className="mx-auto">
            <img src={maoukup} alt="" />
          </figure>
        </div> */}
        <div>
          <img src={maoukup} alt="" />
          </div>
        </div>
        <div>
          <div>
            {/* <span>
              {" "}
              <img src={earn} alt="" />{" "}
              <span className="sec-four-heading">Earn Handsome Commission</span>{" "}
            </span>
            <p className="sec-four-peragraph">
              We have a Property Wallet Inventory module where companies can
            </p> */}
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              <div
                className="ltn__feature-info"
                style={{ display: "flex", gap: "12px" }}
              >
                <div>
                  <img src={earn} alt="" />
                </div>
                <div>
                  <div>
                    <h4>
                      <div>
                        <span style={{ display: "block" }}>
                          <span className="sec-four-heading">
                            Earn Handsome Commission
                          </span>
                        </span>
                      </div>
                    </h4>
                    <p className="sec-four-peragraph">
                      We have a Property Wallet Inventory module where companies
                      can
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            {/* <span>
              {" "}
              <img src={free} alt="" />{" "}
              <span className="sec-four-heading">Free Marketing Tools</span>{" "}
            </span>
            <p className="sec-four-peragraph">
              We have a Property Wallet Inventory module where companies can
            </p> */}
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              <div
                className="ltn__feature-info"
                style={{ display: "flex", gap: "12px" }}
              >
                <div>
                  <img src={free} alt="" />
                </div>
                <div>
                  <div>
                    <h4>
                      <div>
                        <span style={{ display: "block" }}>
                          <span className="sec-four-heading">
                            Free Marketing Tools
                          </span>
                        </span>
                      </div>
                    </h4>
                    <p className="sec-four-peragraph">
                      We have a Property Wallet Inventory module where companies
                      can
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              <div
                className="ltn__feature-info"
                style={{ display: "flex", gap: "12px" }}
              >
                <div>
                  <img src={hours} alt="" />
                </div>
                <div>
                  <div>
                    <h4>
                      <div>
                        <span style={{ display: "block" }}>
                          <span className="sec-four-heading">
                            24/7 Customer Support
                          </span>
                        </span>
                      </div>
                    </h4>
                    <p className="sec-four-peragraph">
                      We have a Property Wallet Inventory module where companies
                      can
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigOnFeature;
