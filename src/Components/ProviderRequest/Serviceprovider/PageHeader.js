import React, { useState } from "react";
import { Modal, Col, Container, Row } from "react-bootstrap";
import {ProviderReason} from "../../Redux/Action";
import {useDispatch} from "react-redux";

function PageHeader() {
  /*-----------------------------------------states for Modal close button----------------------------------------------------------------------- */

  const Styles = {
    inputNormal: { display: "inline" },
    inputClicked: { display: "none" },
  };
  // const [state1, setstate1] = useState({ clicked: true });
  const [state2, setstate2] = useState({ clicked: true });
  const [state3, setstate3] = useState({ clicked: true });
  const [state4, setstate4] = useState({ clicked: true });
  const [state5, setstate5] = useState({ clicked: true });
  const [state6, setstate6] = useState({ clicked: true });

  // const styleHandler1 = () => {
  //   setstate1({ clicked: false });
  // };
  const styleHandler2 = () => {
    setstate2({ clicked: false });
  };
  const styleHandler3 = () => {
    setstate3({ clicked: false });
  };
  const styleHandler4 = () => {
    setstate4({ clicked: false });
  };
  const styleHandler5 = () => {
    setstate5({ clicked: false });
  };
  const styleHandler6 = () => {
    setstate6({ clicked: false });
  };

  /*-----------------------------------------End of states for Modal close button----------------------------------------------------------------------- */
 /**=========================================provider data state ========================================== */
  const dispatch = useDispatch();
//   const [providerstate, setproviderstate] = useState({
//     Name: "",
//     Contact: "",
//     Email: "",
//     Lattitude: "",
//     Longitude: "",
//     Address: "",
//     Landmark: "",
//     City: "",
//     State: "",
//     Selcenter:""
//   });
//   const providerChangeHandler=(e)=>{
//     const name=e.target.name;
//     const value=e.target.value; 
//     setproviderstate({...providerstate,[name]:value});
//     console.log({[name]:value})
// }
// const providersubmitHandler = (e) => {
//   e.preventDefault();
//   dispatch(addProvider(providerstate));
//   setproviderstate({
//     Name: "",
//     Contact: "",
//     Email: "",
//     Lattitude: "",
//     Longitude: "",
//     Address: "",
//     Landmark: "",
//     City: "",
//     State: "",
//     Selcenter:""
//   });
// };
/**============================================end of provider data state==================================== */
 /** ==============================================reason handeling===================================== */
const [providerreasonstate, setproviderreasonstate] = useState("")
const providerReasonHandler=(e)=>{
const Reason=e.target.value;
setproviderreasonstate(Reason);
}
const providerReasonSubmitHandler=(e)=>{
  e.preventDefault(); 
  dispatch(ProviderReason(providerreasonstate));
}
 /** ==============================================End of reason handeling===================================== */


return (
    <Container fluid>
      {/*==================================================1 modal========================================= */}
      {/* <Modal.Dialog 
      //   size="lg"
      //   style={state1.clicked ? Styles.inputNormal : Styles.inputClicked}
      // >
      //   <form onSubmit={providersubmitHandler}>
      //     <Modal.Header>
      //       <Modal.Title>Request</Modal.Title>
      //     </Modal.Header>

      //     <Modal.Body>
      //       <Container>
      //         <input type="hidden" name="txtrequestId" />
      //         <input type="hidden" name="txtcenterId" />
      //         <input type="hidden" name="txtid" />
      //         <input type="hidden" name="txtproviderId" />
      //         <Row>
      //           <input type="hidden" name="txtCenterId" />
      //           <Col md={6}>
      //             <label>
      //               <b>Provider Name</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Name"
      //               type="text"
      //               value={providerstate.Name}
      //               placeholder="Enter Owner Name"
      //               onChange={providerChangeHandler}
      //             />
      //           </Col>

      //           <Col md={6}>
      //             <label>
      //               <b>Contact</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Contact"
      //               type="text"
      //               value={providerstate.Contact}
      //               placeholder="Enter contact Name"
      //               onChange={providerChangeHandler}
      //             />
      //           </Col>

      //           <Col md={6}>
      //             <label>
      //               <b>Email</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Email"
      //               type="text"
      //               value={providerstate.Email}
      //               placeholder="Enter Email Name"
      //               onChange={providerChangeHandler}
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>Latitude</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Lattitude"
      //               type="text"
      //               value={providerstate.Lattitude}
      //               placeholder="Latitude" onChange={providerChangeHandler}
      //               readOnly
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>Longitude</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Longitude"
      //               type="text"
      //               value={providerstate.Longitude}
      //               placeholder="longitude"
      //               onChange={providerChangeHandler}
      //               readOnly
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>Address</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Address"
      //               type="text"
      //               value={providerstate.Address}
      //               onChange={providerChangeHandler}
      //               onchange="validate.charonly"
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>Landmark</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               name="Landmark"
      //               type="text"
      //               value={providerstate.Landmark}
      //               onChange={providerChangeHandler}
      //               onchange="validate.charonly"
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>City</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               type="text"
      //               value={providerstate.City}
      //               placeholder="Enter City Name"
      //               name="City"
      //               onChange={providerChangeHandler}
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>State</b>
      //             </label>
      //             <input
      //               className="form-control"
      //               type="text"
      //               value={providerstate.State}
      //               placeholder="Enter State Name"
      //               name="State"
      //               onChange={providerChangeHandler}
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>
      //               <b>Select center</b>
      //             </label>
      //             <select className="form-control" name="selcenter" value={providerstate.Selcenter}></select>
      //           </Col>
      //         </Row>
      //       </Container>
      //     </Modal.Body>
      //     <Modal.Footer>
      //       <button type="submit" className="form-button-save">
             
      //         Save
      //       </button>
      //       <button
      //         type="button"
      //         className="form-button-close"
      //         onClick={styleHandler1}
      //       >
             
      //         Cancel
      //       </button>
      //     </Modal.Footer>
      //   </form>
      // </Modal.Dialog>
      // <br></br>*/}
      {/*=================================================end of 1st =============================== */}

      {/**================================================2nd=========================================== */}
      <Modal.Dialog
        size="lg"
        style={state2.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form>
          <Modal.Header>
            <Modal.Title>verification status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={6}>
                  <label>
                    <b>center verification status:</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="txtcenterverificationstatus"
                    style={{ border: "none" }}
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>center verify date</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="txtcenterverifiydate"
                    style={{ border: "none" }}
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label for="txtcenterverifiyuser">
                    <b>center verify user</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtcenterverifiyuser"
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label for="txtverifiydate">
                    <b>verification date</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="txtverifiydate"
                    style={{ border: "none" }}
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label for="txtStatus">
                    <b>verification status</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="txtStatus"
                    style={{ border: "none" }}
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label for="txtverifyuser">
                    <b>verification user</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="txtverifyuser"
                    style={{ border: "none" }}
                    readOnly
                  />
                </Col>
              </Row>
              <br></br>
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
      {/**===========================================end of 2nd============================================== */}
      {/**====================================================3rd========================================== */}
      <Modal.Dialog
        size="lg"
        style={state3.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form encType="multipart/form-data">
          <Modal.Header>
            <Modal.Title> Provider Bank Details</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Row>
                <Col md={6}>
                  <label for="txtbankaccountno">
                    <b>Bank Account No:</b>
                  </label>
                  <br></br>
                  <input
                    className="form-control"
                    type="text"
                    name="txtbankaccountno"
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label for="txtbankifccode">
                    <b>Bank IFSC code</b>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    className="form-control"
                    name="txtbankifccode"
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label for="txtbankname">
                    <b>Bank Name</b>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    className="form-control"
                    name="txtbankname"
                    readOnly
                  />
                </Col>
              </Row>
              <br></br>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <button className="form-button-close" onClick={styleHandler3}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/**===================================================4th========================= */}
      <Modal.Dialog
        size="lg"
        style={state4.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form encType="multipart/form-data" onSubmit={providerReasonSubmitHandler}>
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
                  onChange={providerReasonHandler}
                />
              </center>
            </Container>
            <br></br>
          </Modal.Body>
          <Modal.Footer>
            <button name="btnSave" className="form-button-save" type="submit">
              Submit
            </button>
            <button className="form-button-close" onClick={styleHandler4}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/**=============================================== 5Th ================================================== */}
      <Modal.Dialog
        size="lg"
        style={state5.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form encType="multipart/form-data">
          <Modal.Body>
            <Container>
              <center>
                <h4 style={{ color: "red" }}>Error..!</h4>
                <span name="lblMessage" style={{ color: "red" }}></span>
              </center>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <button className="form-button-close" onClick={styleHandler5}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/**================================================ 6th ============================================= */}
      <Modal.Dialog
        size="lg"
        style={state6.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form encType="multipart/form-data">
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
            <button className="form-button-close" onClick={styleHandler6}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/**==================================================7th=========================================== */}
    </Container>
  );
}

export default PageHeader;
