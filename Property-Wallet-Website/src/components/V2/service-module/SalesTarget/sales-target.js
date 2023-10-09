import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import SalesTargetHead from "./salesTarget-page-head";
import SalesTargetServices from "./salesTarget-services";
import SalesTestimonial from "./salesTarget-testimonial";

const SalesTarget = (props) => {
    const [title, setTitle] = useState("Sales Target Management | Property Wallet");
    useEffect(() => {
        if (props.location.pathname == "/sales-target") {
            setTitle("Sales Target Management | Property Wallet")
        } else {
            setTitle("Sales Target Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);
    
    return (
        <>
            <NavbarV2 />
            <SalesTargetHead />
            <SalesTargetServices />
            {/* <SalesTestimonial /> */}
            <Footer />
        </>
    )
}
export default SalesTarget