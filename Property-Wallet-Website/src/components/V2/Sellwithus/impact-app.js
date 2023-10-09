import React, { useEffect } from "react"
import './sellwithus.css'
import downloadImg from '../../images/downloadscreenshot.png'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerService from "../../images/Service2.m4v"


const ImapactApp = (props) => {

    let publicUrl = process.env.PUBLIC_URL + "/";

    let CustomClass = props.customClass ? props.customClass : "";
    const usersTestingFeedback = "Take your real estate agency to greater heights!";
    const fastImpossiblysimple = "Avail our services to manage your property business at your convenience.";

    const headingLarge = 'Ready to put your property on the market? Let us help you make it a reality!'
    const pera = 'Property wallet CRM is here to make your transition as smooth and stress-free as possible. We want you to get the best return on your investment while avoiding costly surprises down the line. '

    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <>
            {/* <br /> */}
            <div className={"container bg-white " + CustomClass} style={{ border: '', marginLeft: "", marginRight: '', marginTop: "5%" }}>
                <div className="row ltn__custom-gutter--- justify-content-center go-top bg-white" style={{ border: '', marginLeft: "1%", marginRight: '1%' }}
                // data-aos="flip-up"
                >
                    <div className=" col-lg-6 col-sm-12 col-12"
                    data-aos="flip-right"

                    >
                        <div className="ltn__feature-item ">
                            <div className="ltn__feature-info">
                                <div 
                                style={{
                                    // marginLeft:"140px"
                                border:""}}>
                                    <h6 style={{ color: "#053857",fontSize:"2rem" }}>What includes in Property Wallet CRM </h6>
                                    <ol className="">
                                        <li>Inventory Management</li>
                                        <li>Property documentation</li>
                                        <li>Basic Finance</li>
                                        <li>Recovery Management</li>
                                        <li>Reporting Management</li>
                                        <li>Campaigns Management</li>
                                    </ol>
                                    <div className="">
                                        Unlock the potential of your projects with Property Wallet CRM! Our all-in-one CRM solution makes it easier for you to manage recovery, inventory, finance, campaigns, documents and analytics. Get a clear overview of your project and stay on top of progress with powerful reporting and analytics. Say goodbye to tedious manual processes - save valuable time and money with Property Wallet CRM.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-12">
                        <div className="ltn__feature-item">
                            {/* <div className="ltn__feature-info">
                                <h3>
                                    <h1
                                        className="text_Quick"
                                        style={{ color: "#27a3a3", fontSize: "3rem" }}
                                    // to="/service-details"
                                    >
                                        {headingLarge}
                                        <div className="curve"></div>
                                    </h1>
                                </h3>
                                <p className="bold" style={{ fontSize: "1rem", marginTop: '5%', color: "black" }}>
                                    {pera}
                                </p>
                            </div> */}
                            {/* <div
                                style={{
                                    // display: "flex",
                                    // justifyContent: "center",
                                    // marginTop: '-20px'
                                    // marginLeft: '0.6rem'
                                }}
                                className="btn-wrapper animated"
                            >
                                <Link
                                    to="/contact"
                                    className="theme-btn-1 btn btn-effect-1 learnMore"
                                >Try It
                                </Link>
                                <Link
                                    to="/how-to-use"
                                    className="theme-btn-1 btn btn-effect-1 learnMore"
                                >Watch Demo
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImapactApp