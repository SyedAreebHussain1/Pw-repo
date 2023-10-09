import React from "react";

const HeadingEss = ({ top, heading, headingBelow, content, download }) => {
  return (
    <div className="container topspace bottomspace mt-mobile mb-mobile">
      <div className="component-heading">
        <p className="color27a3a3 essentials">{top}</p>
        <h6
          className={download ? "color27a3a3  bigonfeature " : "revolutionize"}
        >
          {heading}
        </h6>
        <h6
          className=" color292d35 deceptivelysimple "
          style={{ marginTop: "-2%" }}
        >
          {headingBelow}
        </h6>
        <p className="deceptively-p color3D4350 deceptively-mt">
          {content?.contentTop}
          <p className="deceptively-p color3D4350"> {content?.contentBelow}</p>
        </p>
        {download ? (
          <div
            className="flex"
            style={{ justifyContent: "center", gap: "12px", marginTop: "2%" }}
          >
            <div>
              <a href="http://bit.ly/400UobD" target="_blank">
                <img
                  width={"145px"}
                  height={"45px"}
                  src={download?.appStore}
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="http://bit.ly/40cIpYz" target="_blank">
                <img
                  width={"145px"}
                  height={"45px"}
                  src={download?.playStore}
                  alt=""
                />
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeadingEss;
