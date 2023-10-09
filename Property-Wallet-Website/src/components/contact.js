import React, { useEffect, useState } from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import ContactInfo from "./section-components/contact-info";
import ContactForm from "./section-components/contact-form";
import Map from "./section-components/map";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
// import YoutubeSrc from "./V2/youtube-src-video";


const ContactV1 = (props) => {
  const [title, setTitle] = useState("Contact | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/contact") {
      setTitle("Contact | Property Wallet")
    } else {
      setTitle("Contact | Property Wallet")
    }
    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      {/* <YoutubeSrc /> */}
      <Navbar />
      <PageHeader headertitle="Contact Us" subheader="Contact" />
      <ContactForm />
      <ContactInfo />
      <Map />
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default ContactV1;
