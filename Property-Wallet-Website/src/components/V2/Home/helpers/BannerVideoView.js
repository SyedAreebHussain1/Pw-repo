import React, { useEffect, useState } from "react";
// import bannerVideo from "../images/BannerTwo.mp4";
import bannerVideo from "../../../images/banner15.mp4";
import propertyicon from "../../../images/propertyicon.png";
import MainJ from "../../../images/MainGif.gif";
import AOS from "aos";
import googlePlayBtn from "../../../images/playstore-banner-btn.png";
import appStoreApple from "../../../images/apple-banner-btn.png";
import "../../videobanner.css";

const BannerVideoView = () => {
  let [ww, setW] = useState(true);
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  useEffect(() => {
    setW(true);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {/* BannerTwo */}
      {iOS ? (
        <div className="block-flex">
          <div style={{ width: "100%" }}>
            <div>
              <img src={MainJ} />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "-6%",
                justifyContent: "center",
              }}
            >
              <div
                style={{ zIndex: "", border: "", width: "7rem" }}
                className="btn-android"
              >
                <a target="_blank" href="http://bit.ly/400UobD">
                  <img src={appStoreApple} />
                </a>
              </div>
              <div
                className="btn-android"
                style={{ width: "7rem", cursor: "pointer", zIndex: "" }}
              >
                <a target="_blank" href="http://bit.ly/40cIpYz">
                  <img src={googlePlayBtn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="block-flex">
          <div style={{ width: "100%" }}>
            <video
              style={
                iOS || isAndroid
                  ? {
                      width: "100%",
                      outline: "none",
                      clipPath: "inset(10px 10px)",
                    }
                  : {
                      width: "100%",
                      outline: "none",
                      clipPath: "inset(10px 10px)",
                    }
              }
              className="videoTag"
              playsInline
              autoPlay
              loop
              muted
            >
              <source src={bannerVideo} type="video/mp4" />
            </video>
          </div>

          <div
            className="mian-content"
            style={{
              width: "100%",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "end",
              textAlign: "end",
            }}
          >
            <div className="p-70" style={{ color: "black", padding: "" }}>
              <div
                data-aos-delay="500"
                data-aos="fade-left"
                className="modile-size-hide"
                style={{
                  display: "flex",
                  fontWeight: "bold",
                  justifyContent: "end",
                }}
              >
                {" "}
                <div>
                  {" "}
                  <img src={propertyicon} />{" "}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "4%",
                  }}
                >
                  Property wallet
                </h3>{" "}
              </div>
              <h1
                data-aos-delay="1000"
                data-aos="fade-left"
                className="fontSize-9"
                style={{ fontSize: "3rem" }}
              >
                Manage Your
              </h1>
              <h1
                data-aos-delay="1200"
                data-aos="fade-left"
                className="fontSize-9"
                style={{ fontSize: "3rem", color: "#27a3a3" }}
              >
                Real Estate Business
              </h1>
              <h1
                data-aos-delay="1300"
                data-aos="fade-left"
                className="fontSize-9"
                style={{ fontSize: "3rem" }}
              >
                Anytime, Anywhere
              </h1>

              <div
                className="mian-content"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  textAlign: "end",
                  marginTop: "5%",
                }}
              >
                <div style={{ width: "10rem", cursor: "pointer" }}>
                  <a target="_blank" href="http://bit.ly/400UobD">
                    <img src={appStoreApple} />
                  </a>
                </div>
                <div style={{ width: "10rem", cursor: "pointer" }}>
                  <a target="_blank" href="http://bit.ly/40cIpYz">
                    <img src={googlePlayBtn} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerVideoView;
