import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import img from '../images/commision.jpg'
import bannerVideo from "../images/HomeBanner1.mp4";
import bannerVideo2 from "../images/Homebanner4.m4v";
import comingSoonMain from "../images/coming-soon-main.m4v";
import bannerMobilevideo from "../images/Mobile-Banner.m4v";
import bannerMobilevideocomming from "../images/coming-soon.m4v";
import MainJ from "../images/MainJF.gif"
import appleImg from "../images/apple-footer.png";
import googleImg from "../images/google-footer.png";

import googlePlayBtn from "../images/playstore-banner-btn.png"
import appStoreApple from "../images/apple-banner-btn.png"

// import check from "../images/2.jpg"
import "./videobanner.css"

const VideoBanner = () => {
    let [ww, setW] = useState(true)


    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    useEffect(() => {
        setW(true)
    }, [])





    return (
        <>
            <div className='modile-size-hide' style={{
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                scrollBehavior: 'smooth',
                width: '100%',
            }}>
                <video style={iOS || isAndroid ? { width: '100%' } : { width: '100%' }} className='videoTag' playsInline autoPlay loop muted>
                    <source src={bannerVideo2} type='video/mp4' />
                </video>

                {/* <div
                        className='app-store-btn-main-container'
                    >
                        <div>
                            <a
                                target="_blank"
                            >
                                <img
                                    style={{
                                        // width: "180px", height: "65px", 
                                        cursor: "pointer"
                                    }}
                                    src={googlePlayBtn}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                style={{ zIndex: "999" }}
                            >
                                <img
                                    style={{
                                        // width: "180px",
                                        // marginLeft: "10%",
                                        // height: "65px",
                                        cursor: "pointer"
                                    }}
                                    src={appStoreApple}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div> */}
            </div>
            <div className='banner-mobile-show'
                style={{
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                    scrollBehavior: 'smooth',
                    width: '100%',
                    objectFit: 'contain',
                    marginTop: "-8%"

                    // border:"2px solid green"

                }}>
                {/* <img src={check} /> */}
                {iOS ? <img src={MainJ} /> : <video style={iOS || isAndroid ? { width: '100%' } : { width: '100%' }} className='videoTag'
                    autoPlay
                    loop
                    muted
                    // preload=''
                    // controls="true"
                    // playsInline
                    // playsInline autoPlay loop muted
                    //  autoplay muted loop playsinline 
                    playsInline
                // poster=''
                >
                    <source src={bannerMobilevideo} type='video/mp4' />
                </video>
                }
                {/* <div

                        className='app-store-btn-main-mobile-container'
                        style={{ display: 'flex', justifyContent: 'center', zIndex: "999" }}
                    >
                        <div>
                            <a
                                target="_blank"
                                style={{ zIndex: "999" }}
                            >
                                <img
                                    style={iOS ? {
                                        cursor: "pointer",
                                        zIndex: 9999,
                                    } : {
                                        // width: "180px", height: "65px", 
                                        cursor: "pointer"
                                    }}
                                    src={googlePlayBtn}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                            >
                                <img
                                    style={{
                                        // width: "180px",
                                        // marginLeft: "10%",
                                        // height: "65px",
                                        cursor: "pointer"
                                    }}
                                    src={appStoreApple}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div> */}
            </div>
        </>
    )
}


export default VideoBanner