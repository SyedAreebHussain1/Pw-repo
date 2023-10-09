import React, { useEffect, useState } from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import AboutV4 from "./section-components/about-v4";
import Features from "./section-components/features-v1";
import Team from "./section-components/team-v1";
import Testimonial from "./section-components/testimonial-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Silder from "./V2/about-v2-a/about-slider";
import Footer from "./global-components/footer";
import { OurEthics } from "./section-components/our-ethics";
// import DownloadApp from "./section-components/download-app";

import PageHeaderV2 from "./V2/about-v2-a/page-headerV2";
import About_V2_aree from "./V2/about-v2-a/about-v2-aree";
import DetailsContent from "./V2/about-v2-a/details-content";
// import YoutubeSrc from "./V2/youtube-src-video";

const About_v1 = (props) => {
  // console.log('areeb props about', props)
  const [title, setTitle] = useState("About | Property Wallet");


  useEffect(() => {
    if (props.location.pathname == "/about") {
      setTitle("About | Property Wallet")
    } else {
      setTitle("About | Property Wallet")
    }
    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);


  return (
    <div>
      {/* <YoutubeSrc /> */}
      <Navbar />
      <PageHeaderV2
        headertitle="About Us"
        content=" Our mission is to provide complete convenience to all estate dealers through a safe, fast and reliable service that you can access anywhere, anytime,"
      />
      {/* zaman */}
      {/* <PageHeader
        headertitle="About Us"
        content="Our mission is to provide complete convenience to all estate dealers through a safe, fast and reliable service that you can access anywhere, anytime,"
      /> */}
      {/* <AboutV4 /> */}
      {/* zaman */}
      <About_V2_aree />
      <DetailsContent content='Close more deals with more convenience with the Property Wallet app, powered by Square Foot Exchange, where we help realtors manage and market their brands. Property Wallet is Pakistan’s 1st Real Estate mobile app that enables realtors to streamline their business processes. It is a free, easy-to-use and a 24/7 service that assists users with managing their staff, inventory, sales and much more on-the-go, with added effectiveness and efficiency. Property Wallet offers you a platform where you can manage and grow your business online and create and maintain healthy business relationships, all while protecting the confidentiality of your business data and information. We also aim to simplify all complexities for agents by managing and calculating their commissions for the properties they successfully sell. Property Wallet is 360 degree business management in your pocket.' />
      <OurEthics />
      {/* <Features customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" /> */}
      {/* <Team /> */}
      {/* <Testimonial /> */}
      {/* <BlogSlider /> */}
      {/* <CallToActionV1 /> */}
      {/* <Silder /> */}
      <Footer />
    </div>
  );
};

export default About_v1;
