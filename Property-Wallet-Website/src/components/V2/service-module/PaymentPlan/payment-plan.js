import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import PaymentPlanHead from "./paymentplan-head"
import PaymentPlanServices from "./paymentplan-services"
import PaymentPlanTestimonial from "./paymentplan-testimonial"
import Footer from "../../../global-components/footer";


const PaymentPlan = (props) => {
    const [title, setTitle] = useState("Digital Tools Management | Property Wallet");
    useEffect(() => {
        if (props.location.pathname == "/digital-tools") {
            setTitle("Digital Tools Management | Property Wallet")
        } else {
            setTitle("Digital Tools Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <NavbarV2 />
            <PaymentPlanHead />
            <PaymentPlanServices />
            {/* <PaymentPlanTestimonial /> */}
            <Footer />
        </>
    )
}
export default PaymentPlan