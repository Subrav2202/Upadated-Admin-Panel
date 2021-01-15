import React,{useState} from "react"
import Modal from "react-bootstrap/Modal";
import insert from "./Assets/button.svg";
import authorise from "./Assets/user.svg";
import assign from "./Assets/assignment.svg";
import remove from "./Assets/delete.svg";
import { Container, Row, Col } from "react-bootstrap";
import Insertmodal from "./Insertmodal"

function Menumodal({ show, onHide }) {

  const [state,setState] = useState(false);

  const styling = {
    width: "50px",
    height: "60px",
  };
const position={
  width:"30rem",
  top: "6vh",
  left:"57rem"
 };

  console.log(show);
  return (
    <div>
      <Modal size="sm" show={show} onHide={onHide} style={position}>
        <Modal.Body>
          <Container>
            <Row className="d-flex align-items-center justify-content-center">
              <Col md="4" className="menuicons" onClick={() =>setState(true)}>
                <img src={insert} alt="img" style={styling}/>
                <p className='text-center'>insert</p>
              </Col>
              <Col md="4" className="menuicons" onClick={()=>alert("Select atleast one record.")}>
                <img src={remove} alt="img" style={styling} />
                <p className='text-center'>delete</p>
              </Col>
              <Col md="4" className="menuicons" onClick={()=>alert("Select atleast one record.")}>
                <img src={authorise} alt="img" style={styling} />
                <p className='text-center'>Authori..</p>
              </Col>
              
                <Col md="4" className="menuicons" onClick={()=>alert("Select atleast one record for Assign filed officer.")}>
                  <img src={assign} alt="img" style={styling} />
                  <p className='text-center'>Assign..</p>
                </Col>
                
              
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer
          className="d-flex align-items-center justify-content-center"
          style={{ color:"white", backgroundColor: "#364299" }}
        >
          <h6>More</h6>
        </Modal.Footer>
      </Modal>
      
      {state&& <Insertmodal show={state} onHide={() => setState(false)}/>}
    </div>
  );
}

export default Menumodal;
