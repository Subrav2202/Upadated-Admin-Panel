import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProvider} from "../../Redux/Action";
import { FaRegWindowClose} from "react-icons/fa";

function Insertmodal({ show, onHide }) {
    const dispatch = useDispatch();
    const [providerstate, setproviderstate] = useState({
      Name: "",
      Contact: "",
      Email: "",
      Lattitude: "",
      Longitude: "",
      Address: "",
      Landmark: "",
      City: "",
      State: "",
      Selcenter:""
    });
    const providerChangeHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value; 
      setproviderstate({...providerstate,[name]:value});
      console.log({[name]:value})
  }
  const providersubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addProvider(providerstate));
    setproviderstate({
      Name: "",
      Contact: "",
      Email: "",
      Lattitude: "",
      Longitude: "",
      Address: "",
      Landmark: "",
      City: "",
      State: "",
      Selcenter:""
    });
  };
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg">
        <form onSubmit={providersubmitHandler}>
          <Modal.Header>
            <Modal.Title>Request</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <input type="hidden" name="txtrequestId" />
              <input type="hidden" name="txtcenterId" />
              <input type="hidden" name="txtid" />
              <input type="hidden" name="txtproviderId" />
              <Row>
                <input type="hidden" name="txtCenterId" />
                <Col md={6}>
                  <label>
                    <b>Provider Name</b>
                  </label>
                  <input
                    className="form-control"
                    name="Name"
                    type="text"
                    placeholder="Enter Owner Name"
                    onChange={providerChangeHandler}
                  />
                </Col>

                <Col md={6}>
                  <label>
                    <b>Contact</b>
                  </label>
                  <input
                    className="form-control"
                    name="Contact"
                    type="text"
                    placeholder="Enter contact Name"
                    onChange={providerChangeHandler}
                  />
                </Col>

                <Col md={6}>
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    className="form-control"
                    name="Email"
                    type="text"
                    placeholder="Enter Email Name"
                    onChange={providerChangeHandler}
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>Latitude</b>
                  </label>
                  <input
                    className="form-control"
                    name="Lattitude"
                    type="text"
                    placeholder="Latitude"
                    onChange={providerChangeHandler}
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>Longitude</b>
                  </label>
                  <input
                    className="form-control"
                    name="Longitude"
                    type="text"
                    placeholder="longitude"
                    onChange={providerChangeHandler}
                    readOnly
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>Address</b>
                  </label>
                  <input
                    className="form-control"
                    name="Address"
                    type="text"
                    onChange={providerChangeHandler}
                    onchange="validate.charonly"
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>Landmark</b>
                  </label>
                  <input
                    className="form-control"
                    name="Landmark"
                    type="text"
                    onChange={providerChangeHandler}
                    onchange="validate.charonly"
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>City</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter City Name"
                    name="City"
                    onChange={providerChangeHandler}
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>State</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter State Name"
                    name="State"
                    onChange={providerChangeHandler}
                  />
                </Col>
                <Col md={6}>
                  <label>
                    <b>Select center</b>
                  </label>
                  <select
                    className="form-control"
                    name="selcenter"
                  ></select>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
          <input className="form-control" type="submit" value="Submit" style={{backgroundColor:"green"}} />

          <button onClick={onHide} className="form-control" style={{backgroundColor:"red"}}>
            <i>
              <FaRegWindowClose />
            </i>
            Cancel
          </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Insertmodal;
