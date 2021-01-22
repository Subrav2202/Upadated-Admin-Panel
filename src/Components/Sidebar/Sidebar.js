import React from "react";
import {Accordion,Card} from "react-bootstrap";
import {IoPersonCircle} from "react-icons/io5";
import { RiMenuAddLine} from "react-icons/ri";
import { FaAlignCenter,FaUnlockAlt,FaTruck,FaStickyNote,FaTools} from "react-icons/fa";
function Sidebar() {
  return (
    <div className="properties">
    <h6 className="p-3 d-flex justify-content-start">Menu</h6>
      <Accordion defaultActiveKey="0">
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="0">
           <i className="mr-2"><IoPersonCircle/></i>Dashboard
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="cardbdalgn">
            <p>Dashboard</p>
            <p>Login</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="1">
           <i className="mr-2"><RiMenuAddLine/></i>  Service
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="cardbdalgn">
            <p>Service List </p>
            <p>Service City</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="2">
          <i className="mr-2"><FaAlignCenter/></i>Center Request
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="cardbdalgn">
            <p>Areawise</p>
            <p>Regional</p>
            <p>Divisional</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="3">
          <i className="mr-2"><FaUnlockAlt/></i>Authorized Center
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="cardbdalgn">
            <p>All Center's</p>
            
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
        <Accordion.Toggle as={Card.Header} eventKey="4">
        <i className="mr-2"><FaTruck/></i>Provider Request
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="cardbdalgn">
          <p>Category</p>
          <p>Service Provider</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>
    
      <h6 className="p-3 d-flex justify-content-start">Reports</h6>
      <Accordion defaultActiveKey="0">
      <Card className="cardbg">
        <Accordion.Toggle as={Card.Header} eventKey="5">
        <i className="mr-2"><FaStickyNote/></i>Service Center
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body className="cardbdalgn">
          <p>Invoice</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="cardbg">
      <Accordion.Toggle as={Card.Header} eventKey="6">
      <i className="mr-2"><FaTools/></i>Service 
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="6">
        <Card.Body className="cardbdalgn">
        <p>Inbox</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
      </Accordion>

    </div>
  );
}

export default Sidebar;
