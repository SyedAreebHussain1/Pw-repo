import React from "react";
import pwCertificateLogo from "../../../../api/images/pwLogoCertificate.jpg";

const CertificatePrint = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="firstGrayBackground" />
      <div className="secondGrayBackground" />
      <div className="firstGreenBackground" />
      <div className="secondGreenBackground" />
      <div className="certificateMainContainer">
        <div className="certificateMainChild">
          {/* img div */}
          <div style={{ marginTop: "20px" }}>
            <img style={{ height: "80px" }} src={pwCertificateLogo} alt="" />{" "}
          </div>
          <div style={{ marginTop: "50px" }}>
            <h1 style={{ fontSize: "50px", lineHeight: "15px" }}>
              CERTIFICATE OF SALE ACHIEVEMENT
            </h1>
            <h2 style={{ letterSpacing: "5px" }}>
              <span
                className="bg-gray-light"
                style={{
                  padding: "0px 5px",
                  fontWeight: "600",
                  fontSize: "23px",
                }}
              >
                {" "}
                Sales Pro
              </span>
            </h2>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "21px",
                letterSpacing: "3px",
              }}
            >
              THIS CERTIFICATE PRESENTED TO
            </h3>
          </div>
          <div>
            <h1 style={{ fontSize: "50px", color: "#FFF" }}>
              <span
                style={{
                  background: "#27a3a3",
                  padding: "0px 10px",
                }}
              >
                AZLAN TARIQ
              </span>
            </h1>
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>
              Offers efficient tools and resources to accelerate property sales,
              reducing listing-to-sale timelines significantly.
            </p>
            <h1>Property Wallet</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePrint;
