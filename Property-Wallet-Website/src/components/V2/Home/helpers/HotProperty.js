import React from "react";

const HotProperty = ({ data }) => {
  return (
    <div className=" topspace bottomspace ml-5 mr-5 mt-mobile mb-mobile">
      <div
        className=" gradiant2 container-figma "
        style={{
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div
          className="block-flex section-3-home"
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  color: "#292D35",
                  fontWeight: "700",
                  position: "relative",
                }}
                className="fs-three-box-head"
              >
                <span style={{ color: "#E23442" }}>{data.heading} </span>
                {data.heading2}
                <div
                  className="screen-view"
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "-15px",
                    width: "410px",
                  }}
                >
                  <img src={data.line} alt="" />
                </div>
              </span>
              <p
                style={{
                  fontWeight: "500",
                  color: "#292D35",
                  marginTop: "-1%",
                }}
                className="fs-three-box-head"
              >
                {data.headingBelow}
              </p>
              <div
                className="txetaligncenter mobile-view mb-img"
                style={{ width: "100%" }}
              >
                <img className="figma-side-img" src={data.img} alt="" />
              </div>
              <div style={{ color: "#3D4350" }}>
                <p
                  className="fs-three-box-p "
                  style={{
                    color: "#3D4350",
                  }}
                >
                  {data.peragraph}
                  <p
                    className="fs-three-box-p "
                    style={{
                      color: "#3D4350",
                      marginTop: "2%",
                    }}
                  >
                    {data.peragraph2}
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div
            className="txetaligncenter screen-view"
            style={{ width: "100%" }}
          >
            <img className="figma-side-img" src={data.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProperty;
