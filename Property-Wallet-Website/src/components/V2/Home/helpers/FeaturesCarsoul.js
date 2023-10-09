import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import aiIcon from "../../../images/features/ai.png";
import earnIcon from "../../../images//features/EarnExtraCommission.png";
import sellFasterIcon from "../../../images//features/SellPropertiesFaster.png";
import exclusiveIcon from "../../../images//features/ExclusiveProjects.png";
import hotListingIcon from "../../../images//features/HotListing.png";
import smoothIcon from "../../../images//features/SmoothDigitalTransactions.png";
import completeManagementIcon from "../../../images//features/CompleteRealEstateManagement.png";
import pwLeadIcon from "../../../images//features/PropertyWalletLeadsCenter.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../SmartPoint/helpers/smartPoint.css";
import ViewAllFeature from "./ViewAllFeature";

export const FeaturesCarsoul = (name, handleNavigate) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div
      className="card11 shadow-lg "
      // style={{ margin: "10px", padding: "18px", height: "400px" }}
    >
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={aiIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h5>Property Wallet Integrated with AI</h5>
        </div>
        <ul>
          <li>
            Utilizes artificial intelligence to enhance property management,
            analysis, and customer interactions.
          </li>
        </ul>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      // style={{ margin: "10px", padding: "18px", height: "400px" }}
    >
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={earnIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h5>
            Earn High <br />
            Commission
          </h5>
        </div>
        <ul>
          <li>
            Provides opportunities for agents to earn additional commissions and
            successful transactions within the platform.
          </li>
        </ul>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      // style={{ margin: "10px", padding: "18px", height: "400px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "" }}>
        <div className="textAlignCenter">
          <img
            src={sellFasterIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h5>
            Sell Properties 2X <br />
            Faster
          </h5>
        </div>
        <ul>
          <li>
            Offers efficient tools and resources to accelerate property sales,
            reducing listing-to-sale timelines significantly.
          </li>
        </ul>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      // style={{ margin: "10px", padding: "18px", height: "400px" }}
    >
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={exclusiveIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h5>
            Exclusive <br />
            Projects
          </h5>
        </div>
        <ul>
          <li>
            Showcases exclusive real estate projects, granting users access to
            unique and high-value opportunities.
          </li>
        </ul>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      // style={{ margin: "10px", padding: "18px", height: "400px" }}
    >
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={hotListingIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h4>
            Hot
            <br /> Listing
          </h4>
        </div>
        <ul>
          <li>
            Highlights top-performing and high-demand properties, increasing
            visibility and attracting potential buyers.
          </li>
        </ul>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      // style={{ margin: "10px", padding: "18px", height: "400px" }}
    >
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={smoothIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h4>
            Smooth Digital <br />
            Transactions
          </h4>
        </div>
        <ul>
          <li>
            Facilitates seamless and secure digital transactions for property
            purchases, minimizing paperwork and complexities.
          </li>
        </ul>
      </div>
    </div>,
    <div className="card11 shadow-lg " style={{}}>
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={completeManagementIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h4>
            Complete Real <br />
            Estate Management
          </h4>
        </div>
        <ul>
          <li>
            Provides comprehensive tools for real estate agencies to manage
            listings, transactions, agents, and clients efficiently.
          </li>
        </ul>
      </div>
    </div>,
    <div className="card11 shadow-lg ">
      <div className="card-body-carsoul">
        <div className="textAlignCenter">
          <img
            src={pwLeadIcon}
            className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            alt=""
          />
          <h4>
            Property Wallet <br /> Leads Center
          </h4>
        </div>
        <ul>
          <li>
            Centralizes and organizes leads generated from various sources,
            optimizing lead management and conversion processes.
          </li>
        </ul>
      </div>
    </div>,
  ];
  return (
    <>
      <div className="Main-cont container">
        <div className="carous">
          <AliceCarousel
            animationDuration={2000}
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            autoPlay={true}
            keyboardNavigation={true}
            renderPrevButton={() => {
              return (
                <div
                  className="carsoul-btn"
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "100%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 22px",
                  }}
                >
                  {" "}
                  <ArrowLeftOutlined
                    style={{ paddingRight: "9px", paddingLeft: "4px" }}
                  />{" "}
                </div>
              );
            }}
            renderNextButton={() => {
              return (
                <div
                  className="carsoul-btn"
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "100%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  {" "}
                  <ArrowRightOutlined style={{ marginLeft: "20%" }} />{" "}
                </div>
              );
            }}
            infinite
          />
        </div>
      </div>
      {/* <div style={{ textAlign: "center" }}>
        <ViewAllFeature
          name="View All Features"
          handleNavigate={handleNavigate}
        />
      </div> */}
    </>
  );
};
