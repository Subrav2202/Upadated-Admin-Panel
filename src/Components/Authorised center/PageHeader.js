import React,{useState} from "react";
import { Modal,Container} from "react-bootstrap";
import {AllCenterReason} from "../Redux/Action";
import {useDispatch} from "react-redux";
function PageHeader() {

    const Styles = {
        inputNormal: { display: "inline" },
        inputClicked: { display: "none" },
      };
      const [state1, setstate1] = useState({ clicked: true });
      const [state2, setstate2] = useState({ clicked: true });
      const [state3, setstate3] = useState({ clicked: true });

      const styleHandler1 = () => {
        setstate1({ clicked: false });
      };
      const styleHandler2 = () => {
        setstate2({ clicked: false });
      };
      const styleHandler3 = () => {
        setstate3({ clicked: false });
      };
const dispatch = useDispatch();
const [Allcentersreasonstate, setAllcentersreasonstate] = useState("")
const AllcentersReasonHandler=(e)=>{
const Reason=e.target.value;
setAllcentersreasonstate(Reason);
}
const AllcentersReasonSubmitHandler=(e)=>{
  e.preventDefault(); 
  dispatch(AllCenterReason(Allcentersreasonstate));
}

  return (
    <Container fluid>
{/**===================================================1st modal========================= */}
      <Modal.Dialog
        size="lg"
        style={state1.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form
          enctype="multipart/form-data"
          onSubmit={AllcentersReasonSubmitHandler}
        >
          <Modal.Body>
            <Container>
              <center>
                <br></br>
                <label for="txtReason">
                  <b>Enter Reason</b>
                </label>
                <br></br>
                <input
                  name="txtReason"
                  type="text"
                  placeholder="Enter Reason"
                  className="form-control"
                  onChange={AllcentersReasonHandler}
                />
              </center>
            </Container>
            <br></br>
          </Modal.Body>
          <Modal.Footer>
            <button name="btnSave" className="form-button-save" type="submit">
              Submit
            </button>
            <button className="form-button-close" onClick={styleHandler1}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/**=============================================== 2nd modal ================================================== */}
      <Modal.Dialog
        size="lg"
        style={state2.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form enctype="multipart/form-data">
          <Modal.Body>
            <Container>
              <center>
                <h4 style={{ color: "red" }}>Error..!</h4>
                <span name="lblMessage" style={{ color: "red" }}></span>
              </center>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <button className="form-button-close" onClick={styleHandler2}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
{/*======================================= 3rd ================================================ */}
      <Modal.Dialog
      size="lg"
      style={state3.clicked ? Styles.inputNormal : Styles.inputClicked}
    >
      <form enctype="multipart/form-data">
        <Modal.Body>
          <Container>
            <center>
              <b>Select Field Officer</b>
              <select
                name="selFieldOfficer"
                className="form-control"
              ></select>
              <br></br>
              <label for="txtmessage">
                <b>Message</b>
              </label>
              <br></br>
              <input
                name="txtmessage"
                className="form-control"
                type="text"
                placeholder="Enter Here"
              />
            </center>
          </Container>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit">Assign</button>
          <button className="form-button-close" onClick={styleHandler3}>
            Cancel
          </button>
        </Modal.Footer>
      </form>
    </Modal.Dialog>
    <br></br>
    </Container>
  );
}

export default PageHeader;
