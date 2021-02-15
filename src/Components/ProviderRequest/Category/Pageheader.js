import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container,Modal } from "react-bootstrap";
import user from "./Assets/user.jpg";
import {FaEdit } from "react-icons/fa";
import { addCategorydata,addCategoryReason} from "../../Redux/Action";
function Pageheader() {
  /*============================================states to close the Modal======================== */

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
  // const styleHandler1 = (e) => {
  //   e.preventDefault();
  //   setstate1({ clicked: false });
  // };
  const styleHandler2 = (e) => {
    e.preventDefault();
    setstate2({ clicked: false });
  };
  const styleHandler3 = (e) => {
    e.preventDefault();
    setstate3({ clicked: false });
  };
  const styleHandler4 = (e) => {
    e.preventDefault();
    setstate4({ clicked: false });
  };
  const styleHandler5 = (e) => {
    e.preventDefault();
    setstate5({ clicked: false });
  };
  const styleHandler6 = (e) => {
    e.preventDefault();
    setstate6({ clicked: false });
  };

  /*============================================states to close the Modal======================== */

  /*==================================state for modal profile edit button==================  */
  const [disablestate, setdisable] = useState({ disabled: true });
  const disableHandler = (e) => {
    e.preventDefault();
    setdisable({ disabled: !disablestate.disabled });
  };

  /*=====================================end of edit=================================== */

  /*===========================================state handeling of 1st modal================= */

  // const [categorystate, setcategorystate] = useState({
  //   "Category Name": "",
  //   "Category Description": "",
  //   Place: "",
  //   Options: "",
  // });
   const dispatch = useDispatch();
  // const categoryHandler = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   let files = e.target.files;
  //   const formData = new FormData();
  //   formData.append("img",files);
  //   setcategorystate({ ...categorystate, [name]:value});
  // };

  // const saveCategory = (e) => {
  //   e.preventDefault();
  //   dispatch(addCategory(categorystate));
  //   setcategorystate({
  //     "Category Name": "",
  //     "Category Description": "",
  //     Place: "",
  //     Options: "",
  //     "Category image": "",
  //   });
  // };

/*===========================================end of state handeling of 1st modal================= */ 
/*===========================================state handeling of 2nd modal================= */
  const [cdata, setcdatastate] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Address: "",
    Landmark: "",
    City: "",
    State:"",
    Country: "",
    Username: "",
    Type:"",
    Status: ""  
  });
  const dataHandler=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setcdatastate({ ...cdata,[name]:value});
  };
  const dataSubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(addCategorydata(cdata));
    setcdatastate({
      Name: "",
      Contact: "",
      Email: "",
      Address: "",
      Landmark: "",
      City: "",
      State:"",
      Country: "",
      Username: "",
      Type:"",
      Status: ""  
    })
    
  }

  
/*===========================================end of state handeling of 2nd modal================= */
/*=========================================== state handeling of 3rd modal================= */
const [reasonstate, setreasonstate] = useState({reason:''})
const reasonchangehandler=(e)=>{
  const value=e.target.value;
  setreasonstate(value);
}
const reasonHandler=(e)=>{
e.preventDefault();
  dispatch(addCategoryReason(reasonstate));
  setreasonstate({reason:""});
}
/*===========================================end of state handeling of 3rd modal================= */


  return (
    <Container fluid>
      {/*</Container><Modal.Dialog
      //   size="lg"
      //   style={state1.clicked ? Styles.inputNormal : Styles.inputClicked}
      // >
      //   <form onSubmit={saveCategory}>
      //     <Modal.Header>
      //       <Modal.Title>Categories</Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>
      //       <Container>
      //         <Row>
      //           <Col md={6}>
      //             <label>Category Name</label>
      //             <input
      //               className="form-control"
      //               type="text"
      //               placeholder="Category Name"
      //               name="Category Name"
      //               onChange={categoryHandler}
      //             />
      //           </Col>
      //           <Col md={6}>
      //             <label>Category Description</label>
      //             <input
      //               className="form-control"
      //               type="text"
      //               placeholder="Enter Category Description"
      //               name="Category Description"
      //               onChange={categoryHandler}
      //             />
      //           </Col>

      //           <Col md={6}>
      //             <label>Category Type</label>
      //             <select
      //               className="form-control"
      //               name="Place"
      //               onChange={categoryHandler}
      //             >
      //               <option value="select">--select--</option>
      //               <option value="Home">Home</option>
      //               <option value="Public">Public Places</option>
      //               <option value="Office">Office</option>
      //               <option value="Other">Other</option>
      //             </select>
      //           </Col>

      //           <Col md={6}>
      //             <label>Option</label>
      //             <select
      //               className="form-control"
      //               name="Options"
      //               onChange={categoryHandler}
      //             >
      //               <option value="select">--select--</option>
      //               <option value="None">None</option>
      //               <option value="Quantity">Quantity</option>
      //               <option value="List">List</option>
      //             </select>
      //           </Col>

      //           <Col md={12} className="my-3">
      //             <label>Upload Image</label>
      //             <input
      //               type="file"
      //               onChange={categoryHandler}
      //               name="img"
      //             />

      //             <img
      //               src=""
      //               style={{ height: "100px", width: "100px" }}
      //               alt="img"
      //               name="Category image"
      //             />
      //           </Col>
      //         </Row>
      //       </Container>
      //     </Modal.Body>
      //     <Modal.Footer>
      //       <input type="submit" value="Submit" />

      //       <button onClick={styleHandler1}>
      //         <i>
      //           <FaRegWindowClose />
      //         </i>
      //         Cancel
      //       </button>
      //     </Modal.Footer>
      //   </form>
      // </Modal.Dialog>
      // <br></br>/*}
      {/*========================================End of 1======================================================= */}
      {/*=============================================2=======================================================*/}
      <Modal.Dialog
        size="lg"
        style={state2.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <form onSubmit={dataSubmitHandler}>
          <Modal.Body>
            <div className="imgcontainer">
              <img
                src={user}
                style={{ width: "30px", height: "30px" }}
                alt="avatar"
              />
              <button onClick={disableHandler}>
                <i>
                  <FaEdit />
                </i>
                Edit Profile
              </button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label for="name">
                    <b>Name:</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Name"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="address">
                    <b>Address</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Address"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="Contact number">
                    <b>Contact number</b>
                  </label>
                  <input
                    type="text"
                    name="Contact"
                    onChange={dataHandler}
                    className="form-control form-readonly"
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Email</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Email"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="">
                    <b>City</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="City"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Landmark</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Landmark"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtState">
                    <b>state</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="State"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Country</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Country"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Username</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Username"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Type</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="type"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtverifyuser">
                    <b>Authorized Status:</b>
                  </label>
                  <input
                    className="form-control form-readonly"
                    type="text"
                    name="Status"
                    onChange={dataHandler}
                    disabled={disablestate.disabled ? "disabled" : ""}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button  disabled={disablestate.disabled ? "disabled" : ""} type="submit">Update</button>
            <button onClick={styleHandler2}>Close</button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/*==================================================End of 2========================================== */}
      {/*==================================================3========================================== */}

      <Modal.Dialog
        size="lg"
        style={state3.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form onSubmit={reasonHandler}>
          <Modal.Body>
            <div className="container">
              <center>
                <label for="txtReason">
                  <b>Enter Reason</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Reason"
                  className="form-control"
                  onChange={reasonchangehandler}
                />
              </center>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit">Submit</button>
            <button onClick={styleHandler3}>Cancel</button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/*=====================================End of 3=============================================== */}
      {/*=====================================4======================================================== */}
      <Modal.Dialog
        size="lg"
        style={state4.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form>
          <Modal.Body>
            <div className="container">
              <h4 style={{ color: "red" }}>Error..!</h4>
              <span id="lblMessage" style={{ color: "red" }}></span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={styleHandler4}>Cancel</button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/*===========================================end of 4================================================== */}
      {/*=========================================== 5 ================================================== */}

      <Modal.Dialog
        size="lg"
        style={state5.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form>
          <Modal.Body>
            <div className="container">
              <center>
                <b>Select Field Officer</b>
                <select id="selFieldOfficer" className="form-control"></select>
                <label for="txtmessage">
                  <b>Message</b>
                </label>
                <input
                  id="txtmessage"
                  className="form-control"
                  type="text"
                  placeholder="Enter Here"
                />
              </center>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit">Assign</button>
            <button onClick={styleHandler5}>Cancel</button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
      {/**==========================================end of 5 =================================================== */}
      {/**======================================6====================================== */}
      <Modal.Dialog
        size="lg"
        style={state6.clicked ? Styles.inputNormal : Styles.inputClicked}
      >
        <form>
          <div className="container">
            <p id="demo"></p>
          </div>
          <Modal.Footer>
            <button onClick={styleHandler6}>Cancel</button>
          </Modal.Footer>
        </form>
      </Modal.Dialog>
      <br></br>
    </Container>
  );
}

export default Pageheader;
