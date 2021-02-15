import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Github from "./Assets/github.svg";
import Dribble from "./Assets/basketball.svg";
import Dropbox from "./Assets/dropbox.svg";
import Bitbucket from "./Assets/bitbucket.svg";
import Mail_Chimp from "./Assets/monkey.svg";
import Slack from "./Assets/slack.svg";
import { Container, Row, Col } from "react-bootstrap";

function Dashboardmenu(props) {

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
              <Col md="4" className="menuicons">
                <img src={Github} alt="img" style={styling}/>
                <p className="text-center">Github</p>
              </Col>
              <Col md="4" className="menuicons">
                <img src={Dribble} alt="img" style={styling} />
                <p className="text-center">Dribble</p>
              </Col>
              <Col
                md="4"
                className="menuicons"
              >
                <img src={Dropbox} alt="img" style={styling} />
                <p className="text-center">Dropbox</p>
              </Col>
              <Col
              md="4"
              className="menuicons"
             >
              <img src={Bitbucket} alt="img" style={styling} />
              <p className="text-center">Bitbucket</p>
            </Col>
              <Col
                md="4"
                className="menuicons"
              >
                <img src={Mail_Chimp} alt="img" style={styling} />
                <p className="text-center">Mail Chimp</p>
              </Col>

              <Col
                md="4"
                className="menuicons"
              >
                <img src={Slack} alt="img" style={styling} />
                <p className="text-center">Slack</p>
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
    </div>
  );
}

export default Dashboardmenu;

