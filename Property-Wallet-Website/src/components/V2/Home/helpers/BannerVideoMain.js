import React from "react";
import bannerVideo from "../../../images/homebannervideo.mp4";
import googlePlayBtn from "../../../images/playstore-banner-btn.png";
import appStoreApple from "../../../images/apple-banner-btn.png";
const BannerVideoMain = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", bottom: "25%", right: "5%" }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ width: "10vw", cursor: "pointer", zIndex: "1" }}>
              <a target="_blank" href="http://bit.ly/400UobD">
                <img src={appStoreApple} />
              </a>
            </div>
            <div style={{ width: "10vw", cursor: "pointer", zIndex: "1" }}>
              <a target="_blank" href="http://bit.ly/40cIpYz">
                <img src={googlePlayBtn} />
              </a>
            </div>
          </div>
        </div>
        <video className="videoTag" playsInline autoPlay loop muted>
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BannerVideoMain;
