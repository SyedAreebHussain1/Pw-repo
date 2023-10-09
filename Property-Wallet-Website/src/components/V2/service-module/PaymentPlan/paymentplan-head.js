import React, { useEffect } from "react"
import '../service_module.css'
// import inventryVideo from '../../../images/DigitaToolvedio.m4v'
import inventryVideo from '../../../images/DigitaToolvedio2.mp4'
// import paymentPlanVideo from '../../../images/InventoryVideo.m4v'
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentPlanHead = (props) => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])

    return (
        <>

            <div className="main-head-div"
            //  data-aos="fade-up"
            >
                {/* <div style={{ width: '100%' }}> */}
                <div id="example1 " className="keyframe-animate">
                    <div
                        className="freature-link-hover marginAuto"
                        style={{
                            // margin: '60px auto',
                            width: '70%',
                            // border: '3px solid green',
                            // padding: '10px'
                        }}
                    >
                        <h1 className="text-white">
                            Digital Tools
                        </h1>
                        <p className=" text-white text-font-10px_media" style={{}}>Get the Most Out of Your Workflow with Property Wallet Digital Tools</p>
                    </div>
                    {/* </div> */}
                </div>
                <div style={{ border: '', width: '100%' }}>
                    <video style={iOS || isAndroid ? { width: "" } : { width: '' }} className='video-class' playsInline autoPlay muted>
                        <source src={inventryVideo} type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}
export default PaymentPlanHead