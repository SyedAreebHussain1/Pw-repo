import React, { useEffect, useState } from "react";
import Navbar from "./global-components/navbar-v2";
import Banner from "./section-components/banner-v2";
import Aboutv3 from "./section-components/about-v3";
import Video from "./section-components/video-v2";
import Features from "./section-components/features-v1";
import UpComingProduct from "./section-components/upcoming-product-v1";
import ApartmentV2 from "./section-components/apartment-v2";
import ProductSlider from "./section-components/product-slider-v2";
import Availability from "./section-components/availability";
import Neighbour from "./section-components/neighbour";
import Cateogory from "./section-components/category-v2";
import Testimonial from "./section-components/testimonial-v2";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import DownloadApp from "./section-components/download-app";
import Main from "./carousel/Main";
import VideoV1 from "./section-components/video-v1";
import VideoBanner from "./V2/VideoBanner";
import HomeSilder from "./V2/home-slider";
import Login from "./section-components/login";
import Team from "./section-components/team-v1";
import ShopDetails from "./shop-components/shop-details";
import { useLocation } from "react-router-dom";
import ModalPopup from "./V2/ModalPopup.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Home_V2 = (props) => {
  let location = useLocation()
  const [load, setLoad] = useState(true)
  const [title, setTitle] = useState("Pakistan’s 1st Real Estate App | Property Wallet");
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    if (props.location.pathname == "/") {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet")
    } else {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet")
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {load ?
        <div>
          <ModalPopup />
          <Navbar />
          {/* <VideoV1 /> */}
          <VideoBanner />

          {/* <Banner /> */}
          {/* <Main /> */}
          {/* <Aboutv3 /> */}
          {/* <Video /> */}

          <Features customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />


          {/* <UpComingProduct /> */}
          <ApartmentV2 customClass="margin-top-fix-1" />


          {/* <Main /> */}
          {/* <HomeSilder /> */}
          {/* <DownloadApp customClass="margin-top-fix-2" /> */}
          {/* <ProductSlider /> */}
          {/* <Availability /> */}
          {/* <Neighbour /> */}
          {/* <Cateogory /> */}
          {/* <Team /> */}
          {/* <BlogSlider /> */}
          {/* <Testimonial /> */}
          {/* <CallToActionV1 /> */}
          {/* <Login /> */}
          {/* <ShopDetails/> */}
          <Footer />
        </div> :
        <div style={{ height: "100vh", background: "#27a3a3", width: "100%" }}>
          <div style={{ margin: "auto", width: "50%", border: '', padding: '200px', textAlign: "center" }}>
            <h2>Coming Soon</h2>
          </div>
        </div>}
    </>
  );
};

export default Home_V2;
