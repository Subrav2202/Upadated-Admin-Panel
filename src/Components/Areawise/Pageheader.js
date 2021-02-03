import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { FaSave, FaEdit } from "react-icons/fa";
import img1 from "./Assets/user.jpg";
import { addCenter, addProfile, addReason, addMessage } from "../Redux/Action";

function Pageheader() {

  /*-----------------------------------------states for center Modal Save button----------------------------------------------------------------------- */
  const [centerstate, setcenterstate] = useState({
    Shop: "",
    Owner: "",
    Contact: "",
    Email: "",
    Lattitude: "",
    Longitude: "",
    Address: "",
    Landmark: "",
    City: "",
    State: "",
  });
  const centerChangeHandler = (e) => {
    const name=e.target.name;
    const value=e.target.value; 
    setcenterstate({...centerstate,[name]:value});
    console.log({[name]:value})
  };
  const dispatch = useDispatch();

  const centersubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addCenter({centerstate}));
    setcenterstate({
    Shop:"",
    Owner:"",
    Contact:"",
    Email:"",
    Lattitude:"",
    Longitude:"",
    Address:"",
    Landmark:"",
    City:"",
    State:"",
    });
  };

  const [profilestate, setprofilestate] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Address: "",
    Landmark: "",
    City: "",
    Country: "",
    username: "",
    Status: "",
  });

  const profileChangeHandler = (event) => {
    const {
      target: { name, value },
    } = event;
    setprofilestate({ [name]: value });
    console.log({ [name]: value })
  };

  const profilesubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addProfile({profilestate}));
    setprofilestate({
      Name: "",
      Contact: "",
      Email: "",
      Address: "",
      Landmark: "",
      City: "",
      Country: "",
      name: "",
      Status: "",
    });
  };

  const [reasonstate, setreasonstate] = useState({ Reason: "" });
  const reasonChangeHandler = (event) => {
    const {
      target: { name, value },
    } = event;
    setreasonstate({ [name]: value });
    console.log({ [name]: value })
  };

  const reasonsubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addReason({reasonstate}));
    setreasonstate({ Reason: "" });
  };

  const [messagestate, setmessagestate] = useState({ Message: "" });
  const messageChangeHandler = (event) => {
    const {
      target: { name, value },
    } = event;
    setmessagestate({ [name]: value });
    console.log({ [name]: value })
  };
  const messagesubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addMessage({messagestate}));
    setmessagestate({ Message: "" });
  };
  /*-----------------------------------------end of states for Modal Save button----------------------------------------------------------------------- */

  /*-----------------------------------------states for Modal close button----------------------------------------------------------------------- */

  const Styles = {
    inputNormal: { display: "inline" },
    inputClicked: { display: "none" },
  };
  const [state1, setstate1] = useState({ clicked: true });
  const [state2, setstate2] = useState({ clicked: true });
  const [state3, setstate3] = useState({ clicked: true });
  const [state4, setstate4] = useState({ clicked: true });
  const [state5, setstate5] = useState({ clicked: true });
  const [state6, setstate6] = useState({ clicked: true });

  const styleHandler1 = () => {
    setstate1({ clicked: false });
  };
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
  
  /*-----------------------------------------End of states for Modal edit button----------------------------------------------------------------------- */
const [disablestate, setdisable] = useState({disabled:true})
  const disableHandler= () => {
    setdisable({disabled:!(disablestate.disabled)});
}
  /*-----------------------------------------End of states for Modal edit button----------------------------------------------------------------------- */
  return (
    <div className="container-fluid">
      {/*----------------------------------------------1---------------------------------------------*/}
      <Modal.Dialog
        size="lg"
        style={state1.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Form onSubmit={centersubmitHandler}>
          <Modal.Header>
            <Modal.Title style={{ color: "#00bcd4", margin: "auto" }}>
              Areawise Service Centers
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container">
              <div className="row">
                <input type="hidden" name="" id="txtCenterId" />
                <div className="col-md-6">
                  <label for="txtCname">
                    <b>Shop</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtCname"
                    type="text"
                    placeholder="Enter Shop Name"
                    onChange={centerChangeHandler}
                    value={centerstate.Shop}
                    name="Shop"
                  />
                </div>

                <div className="col-md-6">
                  <label for="txtOwner">
                    <b>Owner</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtOwner"
                    type="text"
                    placeholder="Enter Owner Name"
                    onChange={centerChangeHandler}
                    value={centerstate.Owner}
                    name="Owner"
                  />
                </div>

                <div className="col-md-6">
                  <label for="txtContact">
                    <b>Contact</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtContact"
                    type="text"
                    placeholder="Enter contact Name"
                    onChange={centerChangeHandler}
                    value={centerstate.Contact}
                    name="Contact"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtEmail">
                    <b>Email</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtEmail"
                    type="text"
                    placeholder="Enter Email Name"
                    onChange={centerChangeHandler}
                    value={centerstate.Email}
                    name="Email"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtLattitude">
                    <b>Latitude</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtLattitude"
                    type="latti"
                    placeholder="allow notification for lattitude"
                    onChange={centerChangeHandler}
                    value={centerstate.Lattitude}
                    name="Lattitude"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtLongitude">
                    <b>Longitude</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtLongitude"
                    type="text"
                    placeholder="Allow Notification for longitude"
                    onChange={centerChangeHandler}
                    value={centerstate.Longitude}
                    name="Longitude"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtAddress">
                    <b>Address</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtAddress"
                    type="text"
                    placeholder="Enter Address Name"
                    onChange={centerChangeHandler}
                    value={centerstate.Address}
                    name="Address"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtLocation">
                    <b>Landmark</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtLocation"
                    type="text"
                    placeholder="Enter Address Name"
                    onChange={centerChangeHandler}
                    value={centerstate.Landmark}
                    name="Landmark"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtCity">
                    <b>City</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter City Name"
                    id="txtCity"
                    onChange={centerChangeHandler}
                    value={centerstate.City}
                    name="City"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtState">
                    <b>State</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter State Name"
                    id="txtState"
                    onChange={centerChangeHandler}
                    value={centerstate.State}
                    name="State"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={styleHandler1}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              <i>
                <FaSave />
                Save
              </i>
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
      {/*----------------------------------------------1 end---------------------------------------------*/}
      {/*----------------------------------------------2---------------------------------------------*/}

      <Modal.Dialog
        size="lg"
        style={state2.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Form onSubmit={profilesubmitHandler}>
          <Modal.Header>
            <Modal.Title>
              <span style={{ color: "#00bcd4", margin: "auto" }}>
                <img
                  className="avatar"
                  src={img1}
                  alt="avatar"
                  style={{ width: "30px", height: "30px" }}
                />
                <button onClick={disableHandler}>
                  <i className="mr-2">
                    <FaEdit />
                  </i>
                  Edit Profile
                </button>
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container" id="details">
              <div className="row">
                <div className="col-md-6">
                  <label for="name">
                    <b>Name:</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="txtname"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Name}
                    name="Name"
                  />
                </div>
                <div className="col-md-6">
                  <label for="address">
                    <b>Address</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="txtaddress"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Address}
                    name="Address"
                  />
                </div>
                <div className="col-md-6">
                  <label for="Contact number">
                    <b>Contact number</b>
                  </label>
                  <input
                    type="text"
                    className="form-control form-readOnly"
                    id="txtcontactnumber"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Contact}
                    name="Contact"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Email</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="TXTEmail"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Email}
                    name="Email"
                  />
                </div>
                <div className="col-md-6">
                  <label for="">
                    <b>City</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="txtcity"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.City}
                    name="City"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Landmark</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="txtLandmark"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Landmark}
                    name="Landmark"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtState">
                    <b>state</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="TXTState"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.State}
                    name="State"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Country</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="txtCountry"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Country}
                    name="Country"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Username</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="txtusername"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Username}
                    name="Username"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Authorized Status:</b>
                  </label>
                  <input
                    className="form-control form-readOnly"
                    type="text"
                    id="txtAuthorized"
                    disabled={(disablestate.disabled)? "disabled" : ""}
                    onChange={profileChangeHandler}
                    value={profilestate.Status}
                    name="Status"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button className="form-button-save" id="btnupdate" disabled>
              Update
            </Button>
            <Button className="form-button-close" onClick={styleHandler2}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
      {/*----------------------------------------------2 end---------------------------------------------*/}
      {/*----------------------------------------------3---------------------------------------------*/}

      <Modal.Dialog
        size="lg"
        style={state3.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Form onSubmit={reasonsubmitHandler}>
          <Modal.Header>
            <Modal.Title>Areawise</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <center>
                    <select id="selregional" className="form-control"></select>
                    <label for="txtReason">
                      <b>Enter Reason</b>
                    </label>
                    <input
                      className="form-control"
                      type="txtReason"
                      placeholder="Enter Reason"
                      onChange={reasonChangeHandler}
                      value={reasonstate.Reason}
                      name="Reason"
                    />
                  </center>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button id="btnSave" class="form-button-save" type="submit">
              Submit
            </Button>
            <Button className="form-button-close" onClick={styleHandler3}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
      {/*----------------------------------------------3 end---------------------------------------------*/}
      {/*----------------------------------------------4---------------------------------------------*/}

      <Modal.Dialog
        size="lg"
        style={state4.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Form>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div class="row">
              <div id="messageBox" class="messagebox">
                <div class="container">
                  <center>
                    <h4 style={{ color: "red" }}>Error..!</h4>
                    <span id="lblMessage" style={{ color: "red" }}></span>
                  </center>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={styleHandler4}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
      {/*----------------------------------------------4 end---------------------------------------------*/}
      {/*----------------------------------------------5---------------------------------------------*/}

      <Modal.Dialog
        size="lg"
        style={state5.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Form onSubmit={messagesubmitHandler}>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container">
              <div className="row">
                <center>
                  <b>Select Field Officer</b>
                  <select
                    id="selFieldOfficer"
                    className="form-control"
                  ></select>
                  <label for="txtmessage">
                    <b>Message</b>
                  </label>
                  <input
                    id="txtmessage"
                    className="form-control"
                    type="text"
                    placeholder="Enter Here"
                    onChange={messageChangeHandler}
                    value={messagestate.Message}
                    name="Message"
                  />
                </center>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit">Assign</Button>
            <Button onClick={styleHandler5}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
      {/*----------------------------------------------5 end---------------------------------------------*/}
      {/*----------------------------------------------6---------------------------------------------*/}

      <Modal.Dialog
        size="lg"
        style={state6.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Form>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container">
              <div className="row">
                <p id="demo"></p>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={styleHandler6}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
      {/*----------------------------------------------6 end---------------------------------------------*/}
    </div>
  );
}

export default Pageheader;
