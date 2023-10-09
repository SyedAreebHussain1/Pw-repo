import React from "react";

// img
import one from "../../../images/Home-mobile-screen/1.png";
import two from "../../../images/Home-mobile-screen/2.png";
import three from "../../../images/Home-mobile-screen/3.png";
import four from "../../../images/Home-mobile-screen/4.png";
import five from "../../../images/Home-mobile-screen/5.png";
const Revolutionize = () => {
  return (
    <div
      className="block-flex topspace bottomspace ml-5 mr-5 mt-mobile padding-mob"
      style={{ gap: "55.54px", textAlign: "center" }}
    >
      <div className="padding-mob">
        <img src={three} alt="" />
      </div>
      <div className="padding-mob">
        <img src={five} alt="" />
      </div>
      <div className="padding-mob" style={{ marginTop: "-3%" }}>
        <img src={two} alt="" />
      </div>
      <div className="padding-mob">
        <img src={one} alt="" />
      </div>
      <div className="padding-mob">
        <img src={four} alt="" />
      </div>
    </div>
  );
};

export default Revolutionize;
