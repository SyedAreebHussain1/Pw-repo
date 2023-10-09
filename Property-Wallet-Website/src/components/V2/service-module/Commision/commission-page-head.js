import React, { useEffect } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import '../service_module.css'
import inventryVideo from '../../../images/InventoryVideo.m4v'
import commissionVideo from '../../../images/CommissionVideo.m4v'
import AOS from "aos";
import "aos/dist/aos.css";
const CommissionPageHead = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

    return (
        <>
            <div className="main-head-div"
            // data-aos="fade-up"
            >
                {/* <div style={{ width: '100%' }}> */}
                <div id="example1 " className="keyframe-animate">
                    <div
                        className="freature-link-hover marginAuto"
                        style={{
                            // margin: '35px auto',
                            width: '70%',
                            // border: '3px solid red',
                            // padding: '10px'
                        }}
                    >
                        <h1 className="text-white ">
                            Commission Management
                        </h1>
                        <p className=" text-white text-font-10px_media" style={{}}>Streamline Commission Management with Property Wallet</p>
                    </div>
                    {/* </div> */}
                </div>
                <div style={{ border: '', width: '100%' }}>
                    <video style={iOS || isAndroid ? { width: "" } : { width: '' }} className='video-class'  autoPlay playsInline muted >
                        <source src={commissionVideo} type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}
export default CommissionPageHead