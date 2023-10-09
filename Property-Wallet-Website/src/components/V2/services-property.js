import React, { useState, useEffect } from "react";
// import downloadImgsc from "../../components/images/downloadimg.png";
// import downloadImg from "../../components/images/downloadscreenshot.png";
import downloadImgsc from "../../components/images/downloadimg.png";
// import downloadImg from "../../components/images/downloadscreenshot.png";

import inventory from "../../components/images//services-six-img/inventory.jpg";
import report from "../../components/images//services-six-img/report.jpg";
import saleTarget from "../../components/images//services-six-img/saletarget.jpg";
import commission from "../../components/images//services-six-img/commission.jpg";
import tools from "../../components/images//services-six-img/tools.jpg";
import staffMan from "../../components/images//services-six-img/staff.jpg";

import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch, Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPropertyWal = (props) => {
    const items = [
        {
            key: "1",
            heading: "Inventory Management",
            title: "Inventory Managment",
            img: inventory,
            content:
                "Stressed out about inventory management? We've got the perfect solution! Property wallet takes the chaos of inventory tracking off your plate.",
            path: "/inventory-management"
        },
        {
            key: "2",
            heading: "Staff Management",
            title: "Staff Managment",
            img: staffMan,
            path: "/staff-management",
            content:
                "We understand the struggle and we’re here to help! With our streamlined staff management solution, you can achieve more while staying organized.",
        },
        {
            key: "3",
            heading: "Commission Management",
            title: "Commision Management",
            path: "/commission-management",
            img: commission,
            content:
                "If you want to take your real estate agency operations to the next level, let property wallet show you how with our automated commission management solutions.",
        },
        {
            key: "4",
            heading: "Report Management",
            title: "Report Management",
            path: "/report-management",
            img: report,
            content:
                "We make it easy to streamline and simplify your reporting process. Whether you need to track sales for each project, sales by manager or team member.",
        }, {
            key: "5",
            heading: "Digital Tools ",
            path: "/digital-tools",
            title: "Digital Tools ",
            img: tools,
            content:
                "Our advanced digital tools can help improve organization, efficiency, and productivity - all from the convenience of your home or office.",
        }, {
            key: "6",
            heading: "Target Sales Management",
            path: "/sales-target",
            title: "Target Sales Management",
            img: saleTarget,
            content:
                "Say goodbye to manual entry and tedious processes, the complete sales management solution that can help you reach your goals.",
        },
    ];

    const usersTestingFeedback = "Take your real estate agency to greater heights!";
    const fastImpossiblysimple = "Avail our services to manage your property business at your convenience.";

   
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = props.customClass ? props.customClass : "";
    let CustomClass = props.customclass ? props.customclass : "";
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div
                className="para-service container"
                style={{ marginTop: "7%", border: '', width: "" }}
            >
                <div className="text-align-center margin-bottom-60px go-top" >
                    <div className="text-skyblue bold font-size-L">
                        {usersTestingFeedback.toUpperCase()}
                    </div>
                    <div className="font-size-1_8rem fastImpossiblysimple bold text-black">{fastImpossiblysimple}</div>
                </div>
                <div className="row ltn__custom-gutter--- justify-content-center">
                    {items.map((itemv, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-sm-6 col-12 go-top"
                                data-aos="flip-right"
                            >
                                <div className="ltn__feature-item text-align-center height-440px">
                                    <Link to={itemv.path}><img src={itemv.img} className="width-300px" /></Link>
                                    <div
                                        className="ltn__feature-info marginTop-15px"
                                    >
                                        <Link to={itemv.path}> <h5>{itemv.heading}</h5></Link>
                                        <p className="font-15px text-gray-ad">
                                            {itemv.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ServicesPropertyWal;
