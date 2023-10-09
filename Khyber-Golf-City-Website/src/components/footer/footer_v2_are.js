import React, { useEffect } from "react";
import logo from "../../assets/whiteee.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillClockCircle,
  AiFillLock,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillPhone,
} from "react-icons/ai";
import {
  IoLocationOutline,
  IoLocationSharp,
  IoLocation,
} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, NavLink, useHistory } from "react-router-dom";
const MyfooterV = () => {
  const history = useHistory();
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  return (
    <div
      style={isAndroid || iOS ? { lineHeight: 2 } : {}}
      id="contact"
      data-aos="fade-up"
      className="FooterBg"
    >
      <div style={{ marginTop: 20, paddingTop: 20, marginBottom: -10 }}>
        <h1
          style={
            data == "en"
              ? { textAlign: "center", marginTop: "0%" }
              : {
                  textAlign: "center",
                  marginTop: "0%",
                  fontFamily: "JameelNoori",
                }
          }
        >
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            {t("contact1")}{" "}
            <span style={{ fontSize: "3.5vh", color: "white" }}>
              {t("contact2")}
            </span>{" "}
          </span>
          {/* <span className="promotxt">PROMO</span> */}
        </h1>
        <hr
          style={{
            maxWidth: "100%",
            marginLeft: "12%",
            marginRight: "12%",
            marginTop: "2%",
            color: "white",
            backgroundColor: "white",
            height: 0,
          }}
        />
        <div
          className="footuper"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <AiFillPhone size={20} style={{ margin: 2 }} />{" "}
          <span>+92 304 1115427</span>
        </div>
        <div
          className="footuper"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <AiOutlineMail size={20} style={{ margin: 2 }} />
          <a href="mailto:[info@karachihills.com]">
            <span> info@khybergolfcity.com</span>
          </a>
        </div>

        <div
          className="footuper"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <IoLocationOutline size={20} style={{ margin: 2 }} />{" "}
          <a
            onClick={() => {
              window.open(
                "https://www.google.com/maps/search/Miran+Mohammed+Shah+Road,+Muhammad+Ali+Chs+(Machs),+Karachi/@24.8757442,67.0895136,19.67z"
              );
            }}
          >
            {" "}
            <span>
              KARACHI OFFICE: B-6(A), Miran Mohammad Shah Road, MACHS, Karachi,
              Pakistan.
            </span>{" "}
          </a>
        </div>
        <div
          className="footuper"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <IoLocationOutline size={20} style={{ margin: 2 }} />{" "}
          <a
            onClick={() => {
              window.open(
                "https://www.google.com/maps?q=33.5972542,73.0484893&hl=en-PK&gl=pk&entry=gps&lucs=s2se,a2&shorturl=1"
              );
            }}
          >
            {" "}
            <span>
              ISLAMABAD/RAWALPINDI OFFICE: 33 Haider Road, Saddar, Behind AWT
              Plaza, Rawalpindi, Pakistan.
            </span>{" "}
          </a>
        </div>
        <div
          className="footuper"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <AiFillClockCircle size={20} style={{ margin: 2 }} />{" "}
          <span>MON - SAT | 09:00 AM to 05:00 PM</span>
        </div>
        <div
          onClick={() => history.push("/privacy")}
          className="footuper ppp"
          style={{
            cursor: "pointer",
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <AiFillLock size={20} style={{ margin: 2 }} />{" "}
          <span> Privacy Policy</span>
        </div>
        <div
          className="footuper"
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <a
            onClick={() => {
              window.open("https://www.facebook.com/KhyberGolfCity/");
              window.fbq("track", "Facebook-page-visited");
            }}
          >
            <AiOutlineFacebook size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open("https://www.instagram.com/khybergolfcity/");
              window.fbq("track", "Instagram-page-visited");
            }}
          >
            <AiOutlineInstagram size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UC97iUsx8ndbH1WfeWwBZaog"
              );
              window.fbq("track", "Youtube-page-visited");
            }}
          >
            <AiFillYoutube size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open("https://www.linkedin.com/company/khyber-golf-city/");
              window.fbq("track", "Linkedin-page-visited");
            }}
          >
            <AiFillLinkedin size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=923041115427&text=Tell+us+about+the+khyber+golf+city%3F&app_absent="
              );
              window.fbq("track", "Whatsapp-visited");
            }}
          >
            <AiOutlineWhatsApp size={20} style={{ margin: 2 }} />
          </a>
        </div>
        {/* <div className="footuper" style={{display:'flex',textAlign:'center',flexDirection:'row',margin:2,justifyContent:'center',marginTop:'1%'}}>
         <AiOutlineInstagram  size={20} style={{margin:2}} />   <a onClick={onClick} href="https://www.instagram.com/khybergolfcity/"><span  >
          {" "}  https://www.instagram.com/khybergolfcity/
          </span></a>
         </div> */}
        {/* <div className="footuper" style={{display:'flex',textAlign:'center',flexDirection:'row',margin:2,justifyContent:'center',marginTop:'1%'}}>
         <AiFillLinkedin  size={20} style={{margin:2}} />   <a onClick={onClick} href="https://www.linkedin.com/company/khyber-golf-city/"><span  >
          {" "}  https://www.linkedin.com/company/khyber-golf-city/
          </span></a>
         </div> */}
        {/* <div className="footuper" style={{display:'flex',textAlign:'center',flexDirection:'row',margin:2,justifyContent:'center',marginTop:'1%'}}>
         <AiFillYoutube  size={20} style={{margin:2}} />   <a onClick={onClick} href="https://www.youtube.com/channel/UC97iUsx8ndbH1WfeWwBZaog"><span  >
          {" "}  https://www.youtube.com/channel/UC97iUsx8ndbH1WfeWwBZaog
          </span></a>
         </div> */}

        {/* <div
          style={{
            display: "flex",
            flexDirection:'row',
            justifyContent:'space-between',
            // backgroundColor:'red',
            flexWrap:'wrap',
            marginLeft:'25%',
            marginRight:'25%',
            // justifyContent: "center",
            // alignSelf: "center",
            marginTop: "1%",
          }}
        >
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:2,}}>
         <AiOutlineMail color="white" size={20} style={{margin:2}} />   <div><span style={{ color: "white", fontSize: "16px" }}>
          {" "}  info@Khybergolfcity.com.pk
          </span></div>
         </div>

         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:2,}}>
         <AiFillClockCircle color="white" size={20} style={{margin:2}} />   <div><span style={{ color: "white", fontSize: "16px" }}>
        {" "} MON-SAT 09AM ⇾ 05PM
          </span></div>
         </div>

        </div>
        <div
          style={{
            display: "flex",
            flexDirection:'row',
            justifyContent:'space-between',
            // backgroundColor:'red',
            flexWrap:'wrap',
            marginLeft:'25%',
            marginRight:'25%',
            // justifyContent: "center",
            // alignSelf: "center",
            marginTop: "1%",
          }}
        >
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:2,}}>
         <AiOutlineFacebook color="white" size={20} style={{margin:2}} />   <div><span style={{ color: "white", fontSize: "16px" }}>
          {" "}  facebook.com/KhyberGolfCity
          </span></div>
         </div>

         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:2,}}>
         <AiOutlineInstagram color="white" size={20} style={{margin:2}} />   <div><span style={{ color: "white", fontSize: "16px" }}>
        {" "} instagram.com/khybergolfcity
          </span></div>
         </div>

        </div>
        <div
          style={{
            display: "flex",
            flexDirection:'row',
            justifyContent:'space-between',
            // backgroundColor:'red',
            flexWrap:'wrap',
            marginLeft:'2%',
            marginRight:'2%',
            // justifyContent: "center",
            // alignSelf: "center",
            marginTop: "1%",
          }}
        >
         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:2,}}>
         <AiFillLinkedin color="white" size={20} style={{margin:2}} />   <div><span style={{ color: "white", fontSize: "16px" }}>
          {" "}  linkedin.com/company/khyber-golf-city
          </span></div>
         </div>

         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:2,}}>
         <AiFillYoutube color="white" size={20} style={{margin:2}} />   <div><span style={{ color: "white", fontSize: "16px" }}>
        {" "}youtube.com/channel/UC97iUsx8ndbH1WfeWwBZaog 
          </span></div>
         </div>

        </div> */}

        {/* FOOTER 2 */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <span style={{ color: "white", marginTop: "1%", fontSize: "16px" }}>
            info@Khybergolfcity.com.pk
          </span>
        </div> */}

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "1%",
          }}
        >
          <AiFillClockCircle style={{ color: "white", fontSize: 20 }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <span style={{ color: "white", marginTop: "1%", fontSize: "16px" }}>
            MON-SAT 09AM ⇾ 05PM
          </span>
        </div> */}

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "1.4%",
          }}
        >
          <IoLocationOutline style={{ color: "white", fontSize: 20 }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <span style={{ color: "white", marginTop: "1%", fontSize: "16px" }}>
            MIRAN MUHAMMAD SHAH ROAD, M.A.C.H.S, KARACHI.
          </span>
        </div> */}

        {/*         
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <span style={{ color: "white", marginTop: "1%", fontSize: "16px" }}>
            Privacy Policy
          </span>
        </div> */}

        <hr
          style={{
            maxWidth: "100%",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "1%",
            color: "white",
            backgroundColor: "white",
            height: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <span
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "2%",
              fontSize: "16px",
              marginBottom: 20,
            }}
          >
            Powered by Square Foot Exchange
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyfooterV;