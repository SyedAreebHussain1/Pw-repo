import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import cities from "../../utils/cities.json";

import '../V2/styleareeb.css'
import { useDispatch, useSelector } from "react-redux";

// import {postContact} from "../../components/section-components/contact-form.js"

import { postContact } from "../../store/action/contactUsAction";
import swal from "sweetalert";


const ContactForm = (props) => {
  // componentDidMount() {
  //   const $ = window.$;

  //   // Get the form.
  //   var form = $("#contact-form");

  //   // Get the messages div.
  //   var formMessages = $(".form-messege");

  //   // Set up an event listener for the contact form.
  //   $(form).submit(function (e) {
  //     // Stop the browser from submitting the form.
  //     e.preventDefault();

  //     // Serialize the form data.
  //     var formData = $(form).serialize();

  //     // Submit the form using AJAX.
  //     $.ajax({
  //       type: "POST",
  //       url: $(form).attr("action"),
  //       data: formData,
  //     })
  //       .done(function (response) {
  //         // Make sure that the formMessages div has the 'success' class.
  //         $(formMessages).removeClass("error");
  //         $(formMessages).addClass("success");

  //         // Set the message text.
  //         $(formMessages).text(response);

  //         // Clear the form.
  //         $("#contact-form input,#contact-form textarea").val("");
  //       })
  //       .fail(function (data) {
  //         // Make sure that the formMessages div has the 'error' class.
  //         $(formMessages).removeClass("success");
  //         $(formMessages).addClass("error");

  //         // Set the message text.
  //         if (data.responseText !== "") {
  //           $(formMessages).text(data.responseText);
  //         } else {
  //           $(formMessages).text(
  //             "Oops! An error occured and your message could not be sent."
  //           );
  //         }
  //       });
  //   });
  // }

  // render() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  // console.log("TTILE", this.props?.title);
  const [body, setBody] = useState({
    name: '',
    phoneNo: '',
    email: '',
    subject: '',
    message: ''
  })
  // console.log(state)
  const dispatch = useDispatch();
  const state = useSelector((state) => state.contact_us);
  console.log(state)
  const onSuccuess = (success) => {
    swal("Submit", success, "success")
    setBody({
      name: '',
      phoneNo: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  const onFailur = (fail) => {
    swal("Sorry!", fail, "error")
  }
  const userDataSubmit = (e) => {
    e.preventDefault()
    if (body.name !== "" && body.phoneNo !== "" && body.email !== "" && body.subject !== "" && body.message !== "") {
      dispatch(postContact(body, onSuccuess, onFailur));

    } else {
      swal("Sorry!", "All fields are required", "error");
    }
  }

  return (
    <div
      style={
        props?.title?.trim().length > 0
          ? { marginBottom: "2%" }
          : { marginTop: "-2%" }
      }
      className="ltn__contact-message-area " data-aos="fade-up"
    >
      <div className="margin-top-fix-1 container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">
                {props?.title?.trim().length > 0
                  ? props.title
                  : "Have any questions ? Feel free to contact us."}
              </h4>
              <form
                id="contact-form"
                action={publicUrl + "mail.php"}
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        value={body?.name}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        // onChange={(event) => setBody({ ...body, name: event.target.value })}
                        onChange={(e) => {
                          let val = e.target.value;
                          val = val.replace(/[^A-Za-z ]/gi, "")
                          setBody({ ...body, name: val });
                        }}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        value={body?.email}
                        type="email"
                        name="email"
                        // onChange={(event) => { let valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        //   valEmail.setBody({ ...body, email: event.target.value })}}

                        onChange={(event) => setBody({ ...body, email: event.target.value })}
                        placeholder="Enter email address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  {/* {this.props?.title?.trim().length > 0 ? null : (
                      <div className="col-md-6">
                        <div className="input-item">
                          <select className="nice-select" name="service">
                            <option>Select City</option>
                            {cities.cities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )} */}
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        value={body?.phoneNo}
                        type="text"
                        name="phoneNo"
                        maxLength="11"
                        // onChange={(event) => setBody({ ...body, phoneNo: event.target.value })}
                        onChange={(e) => {
                          // var xxx = xxx.replace(/[^0-9,.]+/g, "")
                          let valNum = e.target.value;
                          valNum = valNum.replace(/[^0-9,.]+/g, "")
                          setBody({ ...body, phoneNo: valNum });
                        }}
                        placeholder="Phone"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-subject ltn__custom-icon">
                      <input
                        value={body?.subject}
                        type="text"
                        name="subject"
                        onChange={(event) => setBody({ ...body, subject: event.target.value })}
                        placeholder="Subject"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-item input-item-message ltn__custom-icon">
                      <textarea
                        value={body?.message}
                        type="text"
                        name="message"
                        onChange={(event) => setBody({ ...body, message: event.target.value })}
                        placeholder="Message"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      placeholder="Enter message"
                      defaultValue={""}
                    />
                  </div>
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" name="agree" /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                  </p> */}
                <div className="btn-wrapper mt-0">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase btnLearnmore"
                    type="submit"
                    onClick={userDataSubmit}
                    disabled={body.name !== "" && body.phoneNo !== "" && body.email !== "" && body.subject !== "" && body.message !== "" ? false : true}
                  >
                    Submit
                  </button>
                </div>
                <p className="form-messege mb-0 mt-20" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ContactForm;
