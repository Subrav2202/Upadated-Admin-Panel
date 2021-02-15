import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import insert from "../../../Commoncomponents/Modals/Assets/button.svg";
import authorise from "../../../Commoncomponents/Modals/Assets/user.svg";
import remove from "../../../Commoncomponents/Modals/Assets/delete.svg";
import status from "../../../Commoncomponents/Modals/Assets/status.svg";
import bank from "../../../Commoncomponents/Modals/Assets/bank.svg";
import { Container, Row, Col } from "react-bootstrap";
import Insertmodal from "./Insertmodal";

function Serviceprovidermenu(props) {
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
                <p className="text-center">insert</p>
              </Col>
              <Col md="4" className="menuicons">
                <img src={status} alt="img" style={styling} />
                <p className="text-center">status</p>
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
              <img src={bank} alt="img" style={styling} />
              <p className="text-center">Bank Det..</p>
            </Col>
              <Col
                md="4"
                className="menuicons"
                onClick={() => alert("Select atleast one record.")}
              >
                <img src={authorise} alt="img" style={styling} />
                <p className="text-center">Authori..</p>
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
    )
}

export default Serviceprovidermenu

