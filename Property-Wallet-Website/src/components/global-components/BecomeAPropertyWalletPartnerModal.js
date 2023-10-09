import Modal from "react-bootstrap/Modal";

function BecomeAPropertyWalletPartnerModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-head"
        style={{ zIndex: "9999", height: "100vh", fontFamily: "Poppins" }}
      >
        <Modal.Header
          closeButton
          style={{ padding: "10px 20px 10px 10px" }}
        ></Modal.Header>
        <Modal.Body>
          <div
            className="flex-block"
            style={{ textAlign: "center", justifyContent: "space-between" }}
          >
            <div className=" shadow-lg areYouA">
              <div className="card-body-carsoul">
                <div className="textAlignCenter">
                  <img
                    // src={pwLeadIcon}
                    className="svg-inject icon-svg icon-svg-md text-blue mb-3"
                    alt=""
                  />
                  <h4>Are you a State Agent</h4>
                </div>
              </div>
            </div>
            <div className=" shadow-lg areYouA">
              <div className="card-body-carsoul">
                <div className="textAlignCenter">
                  <img
                    // src={pwLeadIcon}
                    className="svg-inject icon-svg icon-svg-md text-blue mb-3"
                    alt=""
                  />
                  <h4>Are you a Freelancer</h4>
                </div>
              </div>
            </div>
            <div className=" shadow-lg areYouA">
              <div className="card-body-carsoul">
                <div className="textAlignCenter">
                  <img
                    // src={pwLeadIcon}
                    className="svg-inject icon-svg icon-svg-md text-blue mb-3"
                    alt=""
                  />
                  <h4>Are you a Builder</h4>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default BecomeAPropertyWalletPartnerModal;
