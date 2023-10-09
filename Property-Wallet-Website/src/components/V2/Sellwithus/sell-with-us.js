import React, { useEffect, useState } from "react"
import NavbarV2 from '../../global-components/navbar-v2'
import NavbarV2Areeb from "../../global-components/navbarV1areebcrm";
import Footer from "../../global-components/footer";
import Navbar from "../../global-components/navbar-v2";
import NavbarV2areeb from "../../global-components/navbar-v-a2"
import SellWithUsHead from "./sell-with-us-head";
import { useLocation } from "react-router-dom";
import SellWithUsMobilize from "./sellwithus-mobilize";
import CurveCustom from "./sell-with-us-curve";
import SellWithUsChoose from "./sellwithus-choose";
import ImapactApp from "./impact-app";

import SellwithusPrice from "./sellwithus-price";
import SixBoxes from "./sell-with-six-box";
import AnalyticContent from "../analytic_content";
import FaqsOrText from "./sell-with-faqs-text";
import CallToActonSellWithUs from "./sell-with-us-cal-to-action";
import loadImg from "../../images/Screenshot11.png"
import './sellwithus.css'
import ContentImg from "./sellwithus-content-img";

const SellWithUs = (props) => {
    // const [load, setLoad] = useState(false)
    // let location = useLocation()
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (location.pathname == '/sell-with-us') {
    //             setLoad(true)
    //         }
    //     }, 1500);
    // }, [])

    const [title, setTitle] = useState("Property Wallet CRM | Property Wallet");
    useEffect(() => {
        if (props.location.pathname == "/sell-with-us") {
            setTitle("Property Wallet CRM | Property Wallet")
        } else {
            setTitle("Property Wallet CRM | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            {/* <Navbar /> */}
            {/* <SellWithUsMobilize /> */}
            {/* <CurveCustom /> */}
            {/* <SellwithusPrice /> */}
            {/* <ImapactApp /> */}

            {/* {load ?
                <div>
                    <NavbarV2Areeb />
                    <SellWithUsHead />
                    <SixBoxes />
                    <SellWithUsChoose />
                    <ContentImg />
                    <AnalyticContent />
                    <FaqsOrText />
                    <CallToActonSellWithUs />
                    <Footer />
                </div> : <img src={loadImg} className='backGround-img' alt="Loading" />
            } */}
            {/* <NavbarV2Areeb /> */}
            <NavbarV2/>
            <SellWithUsHead />
            <SixBoxes />
            <SellWithUsChoose />
            <ContentImg />
            <AnalyticContent />
            <FaqsOrText />
            <CallToActonSellWithUs />
            <Footer />
        </>
    )
}
export default SellWithUs