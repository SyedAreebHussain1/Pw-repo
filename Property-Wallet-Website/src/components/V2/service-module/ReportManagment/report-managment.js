import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import ReportPageHead from "./report-page-head";
import ReportServices from "./report-services";
import ReportTestimonial from "./report-testimonial";

const ReportManagement = (props) => {

    const [title, setTitle] = useState("Report Management | Property Wallet");
    useEffect(() => {
        if (props.location.pathname == "/report-management") {
            setTitle("Report Management | Property Wallet")
        } else {
            setTitle("Report Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <NavbarV2 />
            <ReportPageHead />
            <ReportServices />
            {/* <ReportTestimonial /> */}
            <Footer />
        </>
    )
}
export default ReportManagement