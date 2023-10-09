import React, { useState, useEffect } from "react";

// import { useLocation } from "react-router-dom";
import Footer from "../../global-components/footer";
import ModalPopup from "../../V2/ModalPopup.js";
// import Subscribe from "../../V2/Homev2/ModalVideo/Subscribe";
// import NavbarNew from "../../global-components/NavbarNew";
// import MainVideoBanner from "../../V2/MainVideoBanner";
// import PropertyWalletAgent from './helpers/PropertyWalletAgent';
// import EsayUsing from './helpers/EsayUsing';

// import PwEasyToUse from './helpers/PwEasyToUse';
// import FeaturesPw from "./helpers/FeaturesPw";
// import ThreeBox from "./helpers/ThreeBox";
// import Process from "./helpers/Process";
// import SandBox from './helpers/SandBox';
import PwAgent from "./helpers/PwAgent";
// import Heading from "./helpers/Heading";

// icons
import sellfaster from "../../images/sellfaster01.png";
import hour24 from "../../images/24serives01.png";
import easytouse from "../../images/easytouse01.png";
// import NavbarNewTwo from "../../global-components/NavbarNewTwo";
// import PwSide from "./helpers/PwSide";
import NavbarSand from "../../global-components/NavbarSand";
// import PropertyWalletAgent from "./helpers/PropertyWalletAgent";
// import ViewAllFeature from "./helpers/ViewAllFeature";
// import { useHistory } from "react-router-dom";
import "./helpers/Home.css";
import { FeaturesCarsoul } from "./helpers/FeaturesCarsoul";
// import CoverBanner from "./helpers/CoverBanner";
// import Join from "./helpers/Join";
// import Discover from "./helpers/Discover";
// import BigOnFeature from "./helpers/BigOnFeature";
// import Streamlined from "./helpers/Streamlined";
// import HotProperty from "./helpers/HotProperty";

import phone1 from "../../images/figma/iPhone1.png";
import phone2 from "../../images/figma/iPhone2.png";
import phone3 from "../../images/figma/iPhone3.png";

import lineBlue from "../../images/figma/lineBlue.png";
import linegreen from "../../images/figma/linegreen.png";
import linered from "../../images/figma/redline.png";
// import ThreeBox from "./helpers/ThreeBox";
// import HeadingEss from "./helpers/HeadingEss";
// import HandPicks from "./helpers/HandPicks";
// import VideoBg from "./helpers/VideoBg";

// import appstore from "../../images/appstorebtn.png";
// import playstore from "../../images/googleplaystorebtn.png";
// import Revolutionize from "./helpers/Revolutionize";
import CuttingEdge from "./helpers/CuttingEdge";
import PwSide from "./helpers/PwSide";
import VideoBanner2 from "../videobanner2";
import BannerVideoView from "./helpers/BannerVideoView";
import BannerVideoMain from "./helpers/BannerVideoMain";
// import VideoBanner2 from "../videobanner2";

const Home = (props) => {
  // let location = useLocation();
  // const history = useHistory();
  const [title, setTitle] = useState(
    "Pakistan’s 1st Real Estate App | Property Wallet"
  );

  useEffect(() => {
    if (props.location.pathname === "/") {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet");
    } else {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  const contentArry = [
    {
      title: "Easy to use",
      content:
        "You can easily navigate through our app without being a tech specialist.",
      icon: easytouse,
    },
    {
      title: "Sell Property 2X Faster",
      content: "Properties Sold Twice as Fast with Our Innovative Approach!",
      icon: sellfaster,
    },
    {
      title: "24/7 Service",
      content:
        "We’re never offline, hence, you can manage your properties online, anytime, anywhere.",
      icon: hour24,
    },
  ];
  const data = {
    streamlined: {
      heading: "Streamlined Inventory",
      heading2: "Control:",
      headingBelow: "Add, Customize, Flourish",
      peragraph:
        "We have a Property Wallet Inventory module where companies can  inventory and sell properties. When a property is sold successfully through our platform,",
      peragraph2:
        "they earn a handsome amount of money. It is an easy and effective way for businesses to manage their property assets  and generate revenue.",
      img: phone1,
      line: lineBlue,
    },
    hotProperty: {
      heading: "Hot Property",
      heading2: "Showcase:",
      headingBelow: "List Your Properties in the Spotlight",
      peragraph:
        "We have a Property Wallet Inventory module where companies can  inventory and sell properties. When a property is sold successfully through our platform,",
      peragraph2:
        "they earn a handsome amount of money. It is an easy and effective way for businesses to manage their property assets  and generate revenue.",
      line: linered,
      img: phone2,
    },
    propertyWallet: {
      heading: "Property Wallet",
      heading2: "Inventory:",
      headingBelow: "Manage Your Inventory Like Never Before",
      peragraph:
        "We have a Property Wallet Inventory module where companies can  inventory and sell properties. When a property is sold successfully through our platform,",
      peragraph2:
        "they earn a handsome amount of money. It is an easy and effective way for businesses to manage their property assets  and generate revenue.",
      line: linegreen,
      img: phone3,
    },
  };

  return (
    <>
      <ModalPopup />
      <NavbarSand />
      {/* <BannerVideoView /> */}
      <BannerVideoMain />
      <CuttingEdge />
      <PwAgent />
      <PwSide
        // content="Property Wallet is designed to make your property journey easy and efficient. Our platform offers intuitive features that guide you every step of the way. To begin, sign up for a free account on our mobile app. After logging in, you'll have access to free tools. You can upgrade to a premium account to unlock more features like:"
        heading="Property Management & Selling Made Easy"
        listItem={{
          arrFirst: [
            "Property Wallet Listings",
            "Wide Range of Inventories",
            "Streamlined Transactions",
            "Agency Management",
          ],
          arrSecond: [
            "AI Powered Tools",
            "Verified Properties",
            "Hot Listings",
            "Marketing and Lead Generation",
          ],
        }}
        name="View All Features"
        // handleNavigate={() => handleNavigate("/property-wallet-app")}
        btn="View All Features"
      />
      <FeaturesCarsoul
        name="View All Features"
        // handleNavigate={() => handleNavigate("/property-wallet-app")}
      />

      {/* <Discover />
      <Streamlined data={data.streamlined} />
      <HotProperty data={data.hotProperty} />
      <Streamlined data={data.propertyWallet} type="pw" />
      <HeadingEss
        top="ESSENTIALS"
        heading="Big on features."
        headingBelow="Deceptively simple."
        content={{
          contentTop:
            "We have a Property Wallet Inventory module where companies can inventory and sell properties.",
          contentBelow:
            "When a property is sold successfully through our platform,",
        }}
      />
      <BigOnFeature />
      <HandPicks />
      <PwAgent />
      <VideoBg />

      <HeadingEss
        top="DOWNLOAD"
        heading="Revolutionize Real "
        headingBelow="Estate with Our Powerful App!"
        content={{
          contentTop:
            "Our groundbreaking app is set to transform the real estate landscape. Packed with powerful",
          contentBelow:
            "features and intuitive tools, it empowers users to navigate the property market with ease.",
        }}
        download={{ playStore: playstore, appStore: appstore }}
      /> */}
      {/* <ThreeBox
          locationType={props?.location?.pathname}
          contentArry={contentArry}
          customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"
        /> */}
      {/* <Subscribe /> */}
      {/* <CoverBanner /> */}
      {/* <PwSide
        content="Property Wallet is designed to make your property journey easy and efficient. Our platform offers intuitive features that guide you every step of the way. To begin, sign up for a free account on our mobile app. After logging in, you'll have access to free tools. You can upgrade to a premium account to unlock more features like:"
        heading="Property Management & Selling Made Easy"
        listItem={{
          arrFirst: [
            "Property Wallet Listings",
            "Wide Range of Inventories",
            "Streamlined Transactions",
            "Agency Management",
          ],
          arrSecond: [
            "AI Powered Tools",
            "Verified Properties",
            "Hot Listings",
            "Marketing and Lead Generation",
          ],
        }}
        name="View All Features"
        handleNavigate={() => handleNavigate("/property-wallet-app")}
        btn="View All Features"
      />  */}
      {/* <Process /> */}
      {/* <Heading Heading="Our Features" /> */}
      {/* <FeaturesCarsoul
        name="View All Features"
        handleNavigate={() => handleNavigate("/property-wallet-app")}
      /> */}
      {/* <NavbarNew /> */}
      {/* <Navbar /> */}
      {/* <PwEasyToUse /> */}
      {/* <VideoV1 /> */}
      {/* <NavbarNewTwo /> */}
      {/* <Heading Heading="Providing Exclusive Real Estate Inventory" /> */}
      {/* <ThreeBox
          locationType={props?.location?.pathname}
          contentArry={contentArry}
          customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"
        /> */}
      {/* <Subscribe /> */}
      {/* <CoverBanner /> */}
      {/* <FeaturesPw /> */}
      {/* <ViewAllFeature
        name="View All Features"
        handleNavigate={() => handleNavigate("/property-wallet-app")}
      /> */}
      {/* <Heading Heading="Feature-Rich Property Management & Selling" />
            <SandBox /> */}
      {/* <EsayUsing />
            <PropertyWalletAgent /> */}
      {/* <PwSide
        contentBelow="You only need to quickly fill out a form to sign up as a Property Wallet partner to start your journey. For those looking to make a handsome income, we have a premium account that gives you access to a lot of extra features."
        content="Property Wallet introduces a new solution aimed at transforming your real estate experiences. Our user-friendly platform has been carefully designed to make each stage of your real estate adventure easier and more enriching. When you join the Property Wallet community, you gain access to a number of user-friendly features that ensure a smooth journey from start to finish."
        heading="Join Property Wallet to Become Pro Realtor"
        name="Become a Property Wallet Partner"
        handleNavigate={() => handleNavigate("/pricing")}
      /> */}
      {/* <Join /> */}
      {/* <Revolutionize /> */}
      <Footer />
    </>
  );
};

export default Home;
