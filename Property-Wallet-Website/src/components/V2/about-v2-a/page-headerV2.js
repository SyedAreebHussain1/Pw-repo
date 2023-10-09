import React from "react";
import googlePlayBtn from "../../images/playstore-banner-btn.png";
import appStoreApple from "../../images/apple-banner-btn.png";
import "./aboutV2.css";

const PageHeaderV2 = (props) => {
  let HeaderTitle = props.headertitle;
  let content = props.content;
  let CustomClass = props.customclass ? props.customclass : "";
  let customClass = props.customClass ? props.customClass : "";
  return (
    <>
      <div
        className={"ltn__breadcrumb-area-pade-head bg-white " + customClass}
        data-aos="fade-up"
      >
        <div
          className={
            "ltn__breadcrumb-area-aree text-left bg-overlay-white-30-are areeb-show" +
            CustomClass
          }
        >
          <div className="width padding-content-head-page">
            <p style={{ color: "#fff", fontSize: "20px" }}>{content}</p>
          </div>
          <div className="width textAlign-center">
            {" "}
            <h1 className=" size-L" style={{ color: "#fff", fontSize: "40px" }}>
              {HeaderTitle}
            </h1>
          </div>
          <div className="width mobile-size-none textAlign-center">
            <div style={{ width: "100%" }}>
              <img src="https://www.computerhope.com/jargon/q/qr-code.gif" />
            </div>
            <div className="flex " style={{ justifyContent: "center" }}>
              <div>
                <a target="_blank" href="http://bit.ly/400UobD">
                  <img
                    className="cursr"
                    style={{
                      zIndex: 9999,
                      width: "110px",
                      height: "45px",
                    }}
                    src={appStoreApple}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a target="_blank" href="http://bit.ly/40cIpYz">
                  <img
                    className="cursr"
                    style={{
                      width: "110px",
                      height: "45px",
                    }}
                    src={googlePlayBtn}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE COMPONENT */}
        <div
          className={
            "ltn__breadcrumb-area-aree bg-overlay-white-30-are areeb-block" +
            CustomClass
          }
          style={{ border: "", marginTop: "", display: "none" }}
        >
          <div className="width textAlign-center" style={{ border: "" }}>
            {" "}
            <h1 className="vis-hide size-L" style={{ color: "#fff" }}>
              {HeaderTitle}
            </h1>
          </div>
          <div
            className="width padding-content-head-page textAlign-center"
            style={{ border: "" }}
          >
            <p className="" style={{ color: "#fff", fontSize: "17px" }}>
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeaderV2;
