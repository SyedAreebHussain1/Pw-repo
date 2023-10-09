import React from "react"
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch, Link
} from "react-router-dom";

const SellWithUsChoose = () => {
    const items = [
        {
            key: "1",
            heading: "We Provide You Potential Buyers",
            title: "We Provide You Potential Buyers",
            // img: inventory,
            content:
                "Now is the moment to act and capture greater options; let us assist you in getting in front of the right customer. We can guide you to a prosperous future with our unique approach and professional advice.",
            path: "/inventory-management"
        },
        {
            key: "2",
            heading: "We provide you an all-in-one solution",
            title: "We provide you an all-in-one solution",
            path: "/commission-management",
            // img: commission,
            content:
                "An all-in-one CRM solution can be very beneficial to projects. Property Wallet CRM includes capabilities such as recovery management, inventory management, basic finance, property documentation, and reporting and analytics.",
        },
        {
            key: "3",
            heading: "We have a huge amount of dealers",
            title: "We have a huge amount of dealers",
            // img: staffMan,
            path: "/staff-management",
            content:
                "We are having a large number of real estate dealers can be helpful for a project since it allows them to have a larger reach and a diversified set of agents who can help sell properties to a variety of buyers.",
        },

    ];
    return (
        <>
            <div
                className="para-service container" style={{ marginTop: "7%", border: '', width: "" }} >
                <div className="text-align-center margin-bottom-60px go-top" data-aos="flip-up" >
                    <h6 className="text-Align-center bold" style={{ color: "#053857",fontSize:"2rem" }}>
                        Why Choose Property Wallet CRM
                    </h6>
                    <p className="font-16px bold text-Align-center" style={{ color: "black" }}>
                        From assessing potential buyers, to promotions and marketing, we’ve got it all covered
                    </p>
                </div>
                <div className="row ltn__custom-gutter--- justify-content-center">
                    {items.map((itemv, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-sm-6 col-12 go-top"
                                data-aos="flip-right"
                            >
                                <div className="ltn__feature-item">
                                    {/* <Link to={itemv.path}><img src={itemv.img} className="width-300px" /></Link> */}
                                    <div
                                        className="ltn__feature-info marginTop-15px"
                                    >

                                        <h3 style={{ color: "#053857" }}>{itemv.heading}</h3>

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
    )
}
export default SellWithUsChoose