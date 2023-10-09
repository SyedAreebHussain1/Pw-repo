import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const CallToActonSellWithUs = () => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    return (
        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" style={{}}>
            <div className="container" style={{ border: "" }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg-areeb position-relative " style={{ justifyContent: "center", border: "" }}>
                            <div className="coll-to-info text-color-white" style={{ justifyContent: "center" }} >
                                <h1 style={{ color: "#053857" }}>Improved Sales. Faster Growth.</h1>
                                <div
                                    style={{
                                        // display: "flex",
                                        // justifyContent: "center",
                                        // marginTop: '-20px'
                                        // marginLeft: '0.6rem'
                                        textAlign: "center"
                                    }}
                                    className="btn-wrapper animated"
                                > <Link
                                    to="#"
                                    className="theme-btn-1 btn btn-effect-1 learnMoress"
                                >Watch Tutorial</Link>
                                </div>
                                {/* <div style={{color:"#053857"}}>Lorem ipsum Hello world</div> */}
                            </div>
                            <div className="btn-wrapper go-top">
                                {/* <Link className="btn btn-effect-3 btn-white" to="/contact">
                    Explore Properties <i className="icon-next" />
                  </Link> */}
                                <div className="btn-wrapper animated">
                                    {/* <Link
                              to="/about"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              Download App
                            </Link> */}
                                    {/* <a
                                        className="ltn__video-play-btn bg-white"
                                        href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                                        data-rel="lightcase"
                                    >
                                        <i className="icon-play" style={{ color: "#27A3A3" }} />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CallToActonSellWithUs;
