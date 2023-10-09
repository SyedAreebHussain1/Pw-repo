import React, { useEffect, useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
// import img5 from "./6.jpg";
// import img6 from "./7.jpg";
// import img7 from "./8.jpg";
// import img8 from "./9.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";
const CommunityCenter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="flip-up"
      style={{ marginTop: "2%", marginLeft: "0%" }}
      className="pesharwarow"
    >
      <div className="moderninfracolumn">
        <img src={img1} alt="Snow" width="100%" style={{ borderRadius: 5 }} />
      </div>
      <div className="moderninfracolumn">
        <img src={img2} alt="Forest" width="100%" style={{ borderRadius: 5 }} />
      </div>
      <div className="moderninfracolumn">
        <img
          src={img3}
          alt="Mountains"
          width="100%"
          style={{ borderRadius: 5 }}
        />
      </div>
    </div>
  );
};
export default CommunityCenter;
