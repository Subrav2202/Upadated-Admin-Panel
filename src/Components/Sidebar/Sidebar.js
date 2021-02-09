import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { IoPersonCircle } from "react-icons/io5";
import { RiMenuAddLine } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";
import {
  FaAlignCenter,
  FaUnlockAlt,
  FaTruck,
  FaStickyNote,
  FaTools,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="properties" style={{position:"fixed"}}>
      <h6 className="p-3 d-flex justify-content-start">Menu</h6>
      <Accordion>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="7">
            <div className="d-flex justify-content-between styling" style={{width:"100%"}}>
              <span>
                <i className="mr-2">
                  <IoPersonCircle />
                </i>
                Dashboard
              </span>
              <i>
                <BiDownArrow size={'10px'}/>
              </i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body className="cardbdalgn">
              <NavLink exact to="/dashboard">
                <p>Dashboard</p>
              </NavLink>
              <NavLink exact to="/login">
                <p>Login</p>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="1">
          <div className="d-flex justify-content-between" style={{width:"100%"}}>
            <span><i className="mr-2">
              <RiMenuAddLine />
            </i>
            Service
            </span>
            <i>
              <BiDownArrow size={'10px'}/>
              </i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="cardbdalgn">
              <NavLink exact to="/service">
                <p>Service List </p>
              </NavLink>
              <NavLink exact to="/service city">
                <p>Service City</p>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="2">
          <div className="d-flex justify-content-between" style={{width:"100%"}}>
           <span> <i className="mr-2">
              <FaAlignCenter />
            </i>
            Center Request
            </span>
            <i>
              <BiDownArrow size={'10px'}/>
              </i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="cardbdalgn">
              <NavLink exact to="/areawise">
                <p>Areawise</p>
              </NavLink>
              <NavLink
                exact
                to="/regional"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <p>Regional</p>
              </NavLink>
              <NavLink exact to="/divisional">
                <p>Divisional</p>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="3">
          <div className="d-flex justify-content-between" style={{width:"100%"}}>
<span>
            <i className="mr-2">
              <FaUnlockAlt />
            </i>
            Authorized Center
            </span>
            <i>
              <BiDownArrow size={'10px'}/>
              </i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="cardbdalgn">
              <NavLink exact to="/centers">
                <p>All Center's</p>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="4">
          <div className="d-flex justify-content-between" style={{width:"100%"}}>
<span>
            <i className="mr-2">
              <FaTruck />
            </i>
            Provider Request
            </span>
            <i>
              <BiDownArrow size={'10px'}/>
              </i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body className="cardbdalgn">
              <NavLink exact to="/category">
                <p>Category</p>
              </NavLink>
              <NavLink exact to="/provider request">
                <p>Service Provider</p>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <h6 className="p-3 d-flex justify-content-start">Reports</h6>
      <Accordion defaultActiveKey="0">
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="5">
          <div className="d-flex justify-content-between" style={{width:"100%"}}>
          <span>
            <i className="mr-2">
              <FaStickyNote />
            </i>
            Service Center
            </span>
            <i>
              <BiDownArrow size={'10px'}/>
              </i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body className="cardbdalgn">
              <NavLink exact to="/servicenters">
                <p>Invoice</p>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="cardbg">
          <Accordion.Toggle as={Card.Header} eventKey="6">
          <div className="d-flex justify-content-between" style={{width:"100%"}}>
            <span><i className="mr-2">
              <FaTools />
            </i>
            Service
            </span>
            <i>
              <BiDownArrow size={'10px'}/>
              </i>
            </div>
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
