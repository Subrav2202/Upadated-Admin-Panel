import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import insert from "../../../Commoncomponents/Modals/Assets/button.svg";
import authorise from "../../../Commoncomponents/Modals/Assets/user.svg";
import assign from "../../../Commoncomponents/Modals/Assets/assignment.svg";
import remove from "../../../Commoncomponents/Modals/Assets/delete.svg";
import modify from "../../../Commoncomponents/Modals/Assets/fix.svg";
import restore from "../../../Commoncomponents/Modals/Assets/backup.svg";
import { Container, Row, Col } from "react-bootstrap";
import Insertmodal from "./Insertmodal";

function Menumodal(props) {
  const insertpopup=()=>{
    setinsertState(true)
  }

  const [insertstate, setinsertState] = useState(false);

  const styling = {
    width: "50px",
    height: "60px",
  };
  const position = {
    width: "30rem",
    top: "6vh",
    left: "57rem",
  };

  return (
    <div>
      <Modal size="sm" show={props.view} onHide={props.close} style={position}>
        <Modal.Body>
          <Container>
            <Row className="d-flex align-items-center justify-content-center">
              <Col md="4" className="menuicons" onClick={insertpopup}>
                <img src={insert} alt="img" style={styling}/>
                <p className="text-center">insert category</p>
              </Col>
              <Col md="4" className="menuicons">
                <img src={modify} alt="img" style={styling} />
                <p className="text-center">Modify</p>
              </Col>
              <Col
                md="4"
                className="menuicons"
                onClick={() => alert("Select atleast one record.")}
              >
                <img src={remove} alt="img" style={styling} />
                <p className="text-center">delete</p>
              </Col>
              <Col
              md="4"
              className="menuicons"
              onClick={() => alert("Select atleast one record.")}
            >
              <img src={restore} alt="img" style={styling} />
              <p className="text-center">Restore</p>
            </Col>
              <Col
                md="4"
                className="menuicons"
                onClick={() => alert("Select atleast one record.")}
              >
                <img src={authorise} alt="img" style={styling} />
                <p className="text-center">Authori..</p>
              </Col>

              <Col
                md="4"
                className="menuicons"
                onClick={() =>
                  alert("Select atleast one record for Assign filed officer.")
                }
              >
                <img src={assign} alt="img" style={styling} />
                <p className="text-center">Unauthori..</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer
          className="d-flex align-items-center justify-content-center"
          style={{ color: "white", backgroundColor: "#364299" }}
        >
          <h6>More</h6>
        </Modal.Footer>
      </Modal>
      {insertstate && <Insertmodal show={insertstate} onHide={() => setinsertState(false)}/>}
      
    </div>
  );
}

export default Menumodal;
