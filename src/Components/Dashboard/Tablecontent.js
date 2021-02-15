import React from "react";
import { Col, Card } from "react-bootstrap";
import { RiArrowDownCircleFill } from "react-icons/ri";
export const Tablecontent = ({ id }) => {
  return (
    
      <tr>
        <td>Campaign#{id}</td>
        <td>0</td>
        <td>$0</td>
      </tr>
   
  );
};

export const Sales = ({ heading, amount }) => {
  return (
    <Col md={3}>
    <div style={{borderTop:"primary"}}>
      <Card>
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>
            <span className="d-flex justify-content-between align-items-center">
              <span style={{ fontSize: "40px" }}>{amount}</span>
              <i>
                <RiArrowDownCircleFill color={"#eb3d63"} size={"30px"} />
                <strong style={{ color: "#eb3d63" }}>0.0%</strong>
              </i>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </Col>
  );
};
