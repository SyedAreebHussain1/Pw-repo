import React, { useEffect, useState } from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import AboutV5 from "./section-components/about-v5";
import ServiceV1 from "./section-components/service-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import MoreServices from "./shop-components/more-services";
import AnalyticContent from "./V2/analytic_content";
import TestimonialServicePage from "./V2/Testimonials/testimonials-service-page";
import ServicesPropertyWal from "./V2/services-property";
import TestimonialV2 from "./section-components/testimonial-v2";
// import YoutubeSrc from "./V2/youtube-src-video";


const Service_V1 = (props) => {
  const [title, setTitle] = useState("Service | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/service") {
      setTitle("Service | Property Wallet")
    } else {
      setTitle("Service | Property Wallet")
    }
    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Navbar />
      {/* <YoutubeSrc /> */}
      {/* <PageHeader   headertitle="Services"
        content="Property Wallet is pleased to offer you a platform which will contribute to your property business success through fostering collaboration between agents."
        subheader="Services"
      /> */}
      {/* <PageHeader
        headertitle="We have the perfect tools to help your business grow!"
        content="Property Wallet is pleased to offer you a platform which will contribute to your property business success through fostering collaboration between agents."
        subheader="Services"
      /> */}
      <MoreServices />
      <ServicesPropertyWal />

      {/* <AnalyticContent /> */}

      {/* <TestimonialServicePage /> */}

      {/* <AboutV5 /> */}
      {/* <ServiceV1 /> */}

      {/* <BlogSlider sectionClass="pt-120" /> */}
      {/* <TestimonialV2/> */}
      {/* <CallToActionV1 /> */}

      <Footer />
    </div>
  );
};

export default Service_V1;
