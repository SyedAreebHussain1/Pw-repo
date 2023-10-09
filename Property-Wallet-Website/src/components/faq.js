import React ,{useEffect,useState}from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import Faq from "./section-components/faq-v1";
import Counter from "./section-components/counter-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const FaqV1 = (props) => {
  const [title, setTitle] = useState("FAQ's | Property Wallet");
  useEffect(() => {
    if (props.location.pathname == "/faq") {
      setTitle("FAQ's | Property Wallet")
    } else {
      setTitle("FAQ's | Property Wallet")
    }
    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Frequently asked questions" subheader="FAQ" />
      <Faq />
      {/* <Counter /> */}
      {/* <BlogSlider sectionClass="pt-120" /> */}
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default FaqV1;
