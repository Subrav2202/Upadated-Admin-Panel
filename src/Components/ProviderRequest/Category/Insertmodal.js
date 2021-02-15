import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaRegWindowClose} from "react-icons/fa";
import { addCategory} from "../../Redux/Action";


function Insermodal({ show, onHide }) {


  const [categorystate, setcategorystate] = useState({
    "Name": "",
    "Description": "",
    "Place": "",
    "Options": "",
    "Image":""
  });
  // const [files, setfiles] = useState(null)

  const dispatch = useDispatch();
  const categoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setfiles(e.target.files);
    // const formData = new FormData();
    // files.formData.append("img",file);
    setcategorystate({ ...categorystate, [name]:value});
  };

  const saveCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory(categorystate));
    setcategorystate({
      "Name": "",
      "Description": "",
      "Place": "",
      "Options": "",
      "Image":""
    });
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg">
        <form onSubmit={saveCategory}>
          <Modal.Header>
            <Modal.Title>Categories</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "60vh" }}>
            <Container>
              <Row>
                <Col md={6}>
                  <label>Category Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Category Name"
                    name="Name"
                    onChange={categoryHandler}
                  />
                </Col>
                <Col md={6}>
                  <label>Category Description</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Category Description"
                    name="Description"
                    onChange={categoryHandler}
                  />
                </Col>

                <Col md={6}>
                  <label>Category Type</label>
                  <select
                    className="form-control"
                    name="Place"
                    onChange={categoryHandler}
                  >
                    <option value="select">--select--</option>
                    <option value="Home">Home</option>
                    <option value="Public">Public Places</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                  </select>
                </Col>

                <Col md={6}>
                  <label>Option</label>
                  <select
                    className="form-control"
                    name="Options"
                    onChange={categoryHandler}
                  >
                    <option value="select">--select--</option>
                    <option value="None">None</option>
                    <option value="Quantity">Quantity</option>
                    <option value="List">List</option>
                  </select>
                </Col>

                <Col md={12} className="my-3">
                  <label>Upload Image</label>
                  <input type="file" name="Image" onChange={categoryHandler}/>

                  <img
                    src=""
                    style={{ height: "100px", width: "100px" }}
                    alt="img"
                  />
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

export default Insermodal;
