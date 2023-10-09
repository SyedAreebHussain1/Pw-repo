import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import '../service_module.css'
import InventoryServices from "./inventory-service"
import InventoryPageHead from "./inventory-page-head"
import InventoryTestimonial from './inventory-testimonial'
import Footer from "../../../global-components/footer";

const InventoryManagement = (props) => {
    const [title, setTitle] = useState("Inventory Management | Property Wallet");

    let publicUrl = process.env.PUBLIC_URL + "/";

    let CustomClass = props.customClass ? props.customClass : "";

    var testClassvar = document.getElementsByClassName("testClass");
    useEffect(() => {
        for (var i = 0; i < testClassvar.length; i++) {
            testClassvar[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("activeTest");
                current[0].className = current[0].className.replace(" activeTest", "");
                this.className += " activeTest";
            });
        }
    }, [testClassvar]);


    useEffect(() => {
        if (props.location.pathname == "/inventory-management") {
            setTitle("Inventory Management | Property Wallet")
        } else {
            setTitle("Inventory Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <NavbarV2 />
            <InventoryPageHead />
            <InventoryServices />
            {/* <InventoryTestimonial /> */}
            <Footer />
        </>
    )
}
export default InventoryManagement