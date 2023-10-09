import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
// import { postPopup } from "../../store/action/contactUsAction";
import { postCrmPopum } from "../../../store/action/contactUsAction";
import logo from "../../../components/images/modal/0.2.png"
import ballIcon from "../../images/bellicon.png"
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import AlertMessage from '../AlertMessage';


const CrmModalPopup = ({ setShow, show }) => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    var validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const numValidation= /^\d{11}$/
    const [isLoading, setisLoading] = useState(false)

    const dispatch = useDispatch();
    let [respon, setRespon] = useState('')
    const handleShow = () => {
        setShow(false);
    }
    const [message, setMessage] = useState({
        error: {
            colorAlert: '',
            msg: ''
        },
        success: {
            colorAlert: '',
            msg: ''
        }
    });
    const [body, setBody] = useState({
        name: '',
        phoneNo: '',
        email: '',
        message: ''
    })
    const handleClose = () => {
        setShow(false)
        setMessage({
            error: {
                msg: '',
                colorAlert: '',
            }
        })
        setBody({
            name: '',
            phoneNo: '',
            email: '',
            message: ''
        })
        setisLoading(false)
    };
    const onSuccuess = (success) => {
        console.log(success)
        if (success.message) {
            swal(`Your form has been submitted successfully. Thank you!`)
            handleClose()
            setBody({
                name: '',
                phoneNo: '',
                email: '',
                message: ''
            })
            setisLoading(false)
        }
    }
    const onFailur = (fail) => {
        // console.log(fail.message)
        if (fail) {
            setShow(true)
            setMessage({
                error: {
                    msg: `Sorry!, ${fail?.message}, error`,
                    colorAlert: 'danger',
                }
            })
            setisLoading(false)
        }
        setisLoading(false)
    }

    const userDataSubmitModal = (e) => {
        e.preventDefault()
        // console.log(body)
        if (body.name !== "" && body.phoneNo !== "" && body.email !== "" && body.message !== "") {
            if (validation.test(body.email) && numValidation.test(body.phoneNo)) {
                dispatch(postCrmPopum(body, onSuccuess, onFailur));
                setisLoading(true)
            } else {
                setShow(true)
                setMessage({
                    error: {
                        msg: !validation.test(body.email) ? 'You have entered an invalid email address!' : '' ? numValidation.test(body.phoneNo) : 'Plaese Enter Valid Phone Number',
                        colorAlert: 'danger',
                    }
                })
           

            }
        } else {
            setMessage({
                error: {
                    msg: `Sorry!, All fields are required, error`,
                    colorAlert: 'danger',
                }
            })
            setisLoading(false)
        }

    }
    return (
        <div >
            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                className="modal-head"
                style={{ zIndex: "9999", height: "100vh", fontFamily: "Poppins", }}>
                <Modal.Header closeButton style={{ padding: "15px", }}>
                </Modal.Header>
                <Modal.Body style={{ zIndex: "999", }}>
                    <div style={{ textAlign: "center", }}>
                        <div >
                            <img
                                // className="logo-mobile"
                                style={{ width: "20%", height: "" }}
                                src={ballIcon}
                                alt="Logo"
                            />
                            <div style={{
                                color: '#053857',
                                clear: 'both',
                                fontWeight: '700',
                                linHeight: '1.3',
                                marginBottom: '15px',
                                fontSize: "1.5rem",
                                //  marginBottom: "-1rem"
                            }}>Have any questions ? Feel free to contact us.</div>

                        </div>
                        <form
                            id="contact-form"
                            action={publicUrl + "mail.php"}
                            method="post"
                        >
                            <div className="row" >
                                <div className="col-md-12 ">
                                    <div className="input-item input-item1 input-item-name ltn__custom-icon ltn__custom-icon1">
                                        <input
                                            value={body.name}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={(e) => {
                                                let val = e.target.value;
                                                val = val.replace(/[^A-Za-z ]/gi, "")
                                                setBody({ ...body, name: val });
                                            }}
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="input-item input-item1 input-item-phone ltn__custom-icon ltn__custom-icon1">
                                        <input
                                            value={body.phoneNo}
                                            type="text"
                                            name="phoneNo"
                                            maxLength="11"
                                            onChange={(e) => {
                                                let valNum = e.target.value;
                                                valNum = valNum.replace(/[^0-9,.+]+/g, "")
                                                setBody({ ...body, phoneNo: valNum });
                                            }}
                                            placeholder="Phone"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="input-item input-item1 input-item-email ltn__custom-icon ltn__custom-icon1">
                                        <input
                                            value={body.email}
                                            type="email"
                                            name="email"
                                            // onChange={(event) => {
                                            //     let valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                            //     valEmail.setBody({ ...body, email: event.target.value })
                                            // }}
                                            onChange={(event) => setBody({ ...body, email: event.target.value })}
                                            placeholder="Email"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-item input-item1 input-item-textarea ltn__custom-icon ltn__custom-icon1">
                                        <textarea
                                            value={body?.message}
                                            type="text"
                                            name="message"
                                            onChange={(event) => setBody({ ...body, message: event.target.value })}
                                            placeholder="Message"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <AlertMessage
                                message={message} show={show}
                            />
                            <div className="btn-wrapper mt-0">
                                {
                                    isLoading ? <button style={{color:"white"}}
                                        className="btn btn-effect-1 text-uppercase btnLearnmore learnMores"
                                        disabled
                                    >
                                        Loading...
                                    </button> : <button style={{color:"white"}}
                                        className="btn btn-effect-1 text-uppercase btnLearnmore learnMores"
                                        onClick={userDataSubmitModal}
                                    >
                                        Submit
                                    </button>
                                }

                            </div>
                            <p className="form-messege mb-0 mt-20" />

                            <div style={{ fontWeight: "", fontSize: "1rem" }}> Become a Property Wallet CRM Pro</div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default CrmModalPopup