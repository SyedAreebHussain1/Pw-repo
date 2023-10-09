import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import logo from "../../components/images/modal/0.2.png"
import { useDispatch, useSelector } from "react-redux";
import { postPopup } from "../../store/action/contactUsAction";
import swal from "sweetalert";


const ModalPopup = (props) => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const [show, setShow] = useState(false);
    const handleClose = () => {
        // console.log("running");
        sessionStorage.setItem('visitor', 'true');

        setShow(false)
    };
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.popup_modal);
    const [body, setBody] = useState({
        name: '',
        phoneNo: '+92',
        email: ''
    })
    let [respon, setRespon] = useState('')
    useEffect(() => {
        // console.log(sessionStorage.getItem('visitor'));
        // console.log(localStorage.getItem('formSubmit'));
        if (localStorage.getItem('formSubmit') != "true" && sessionStorage.getItem('visitor') != "true") {
            setTimeout(() => {
                handleShow()
            }, 5000)
        }

    }, [])
    // console.log(state)
    const onSuccuess = (success) => {
        // console.log('success', success)
        // swal("Submit", success, "success")
        if (success == 'phoneNo must be a valid phone number') {
            setRespon('Phone No must be a valid phone number')
        } else if (success == "Successfully created") {
            setRespon('Successfully Submit')

            handleClose()
            swal("Submit", success, "success")
            localStorage.setItem('formSubmit', "true")
            setBody({
                name: '',
                phoneNo: '+92',
                email: '',
            })
        }
    }
    const onFailur = (fail) => {

        // console.log('fail', fail)
        // swal("Sorry!", fail, "error")
    }
    const userDataSubmitModal = (e) => {
        e.preventDefault()
        if (body.name !== "" && body.phoneNo !== "" && body.email !== "") {
            dispatch(postPopup(body, onSuccuess, onFailur));
        } else {
            swal("Sorry!", "All fields are required", "error");
            // swal("Sorry!", "All fields are required", "error");
        }
    }
    return (
        <div className=''>

            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} className="modal-head"
                style={{
                    padding: "", marginTop: "", zIndex: "9999", height: "100vh", fontFamily: "Poppins", width: ""
                }}>
                <Modal.Header className="" closeButton style={{ padding: "15px", margin: "", justifyContent: "", textAlign: "", alignItems: "", border: "" }}>
                </Modal.Header>
                <Modal.Body style={{
                    padding: "", margin: "", zIndex: "999", marginTop: "",


                }}>
                    <div style={{ border: "", textAlign: "center", }}>
                        <div >
                            <img
                                // className="logo-mobile"
                                style={{ width: "20%", height: "" }}
                                src={logo}
                                alt="Logo"
                            />
                            {/* <Modal.Title style={{}}>DON'T MISS THE CHANCE!</Modal.Title> */}
                            <div style={{
                                color: '#28a3a3',
                                clear: 'both',
                                // font- family: var(--ltn__heading-font);
                                fontWeight: '700',
                                linHeight: '1.3',
                                marginBottom: '15px',
                                fontSize: "1.5rem",
                                //  marginBottom: "-1rem"
                            }}>Have any questions ? Feel free to contact us.</div>
                            {/* <div style={{ fontWeight: "", fontSize: "1rem" }}>Be the first to know when Property Wallet is available. You won't want to miss this!</div> */}
                            {/* <div style={{ fontWeight: "", fontSize: "1rem" }}>Have any questions ? Feel free to contact us.</div> */}
                        </div>
                        <form
                            id="contact-form"
                            action={publicUrl + "mail.php"}
                            method="post"
                        >
                            <div className="row" >
                                <div className="col-md-12">
                                    <div className="input-item input-item-name ltn__custom-icon">
                                        <input
                                            value={body.name}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
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
                                <div className="col-md-12">
                                    <div className="input-item input-item-email ltn__custom-icon">
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
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="input-item input-item-phone ltn__custom-icon">
                                        <input
                                            value={body.phoneNo}
                                            type="text"
                                            name="phoneNo"
                                            maxLength="13"
                                            // onChange={(event) => setBody({ ...body, phoneNo: event.target.value })}
                                            onChange={(e) => {
                                                // var xxx = xxx.replace(/[^0-9,.]+/g, "")
                                                let valNum = e.target.value;
                                                valNum = valNum.replace(/[^0-9,.+]+/g, "")
                                                setBody({ ...body, phoneNo: valNum });
                                            }}
                                            placeholder="Phone"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p style={respon == 'Phone No must be a valid phone number' ? { color: 'red' } : { color: 'green' }}>{respon}</p>
                            <div className="btn-wrapper mt-0">
                                <button
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase btnLearnmore"
                                    // type="submit"
                                    onClick={userDataSubmitModal}
                                // disabled={body.name !== "" && body.phoneNo !== "" && body.email !== "" ? false : true}
                                >
                                  Submit
                                </button>
                            </div>
                            <p className="form-messege mb-0 mt-20" />

                            <div style={{ fontWeight: "", fontSize: "1rem" }}> Become a Property Wallet Pro</div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default ModalPopup