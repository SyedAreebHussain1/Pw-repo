import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import CommissionPageHead from "./commission-page-head";
import CommissionServices from "./commission-services";
import CommissionTestimonial from "./commission-testimonial";

const CommissionManagement = (props) => {
    const [title, setTitle] = useState("Commission Management | Property Wallet");
    
    useEffect(() => {
        if (props.location.pathname == "/commission-management") {
            setTitle("Commission Management | Property Wallet")
        } else {
            setTitle("Commission Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <NavbarV2 />
            <CommissionPageHead />
            <CommissionServices />
            {/* <CommissionTestimonial /> */}
            <Footer />
        </>
    )
}
export default CommissionManagement