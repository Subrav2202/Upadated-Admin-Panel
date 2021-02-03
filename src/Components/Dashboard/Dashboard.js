import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import  Linechart  from "./Linechart";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
function Dashboard() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col
            md={2}
            id="sidebar-wrapper"
            style={{ backgroundColor: "#050545" }}
          >
            <Sidebar />
          </Col>
          <Col
            md={10}
            id="page-content-wrapper"
            style={{ backgroundColor: "#ebfaf8" }}
          >
            <Container fluid>
              <Row className="d-block">
                <h4 className="pt-3">Dashboard</h4>
                <hr />
                <Breadcrumb>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    E-Commerce Dashboard Template
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Row>
              <Row>
                <Col md={3}>
                  <Card style={{height:"40vh"}}>
                    <Card.Body>
                      <Card.Title style={{ color: "#495a87" }}>
                        Total Revenue
                      </Card.Title>
                      <Card.Text
                        className="d-flex justify-content-between"
                        style={{ color: "#202652" }}
                      >
                        <h3>$0.000</h3>
                        <span
                          className="d-flex align-items-center"
                          style={{ color: "#e62b20" }}
                        >
                          <ImArrowDown />
                          <h5>-0.00%</h5>
                        </span>
                      </Card.Text>
                      <canvas><Linechart/></canvas>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{height:"40vh"}}>
                    <Card.Body>
                      <Card.Title style={{ color: "#495a87" }}>
                        Affiliate Revenue
                      </Card.Title>
                      <Card.Text
                        className="d-flex justify-content-between"
                        style={{ color: "#202652" }}
                      >
                        <h3>$0.000</h3>
                        <span
                          className="d-flex justify-content-between align-items-center"
                          style={{ color: "#e62b20" }}
                        >
                          <ImArrowUp />
                          <h5 className="m-0">-0.00%</h5>
                        </span>
                      </Card.Text>
                      <canvas></canvas>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{height:"40vh"}}>
                    <Card.Body>
                      <Card.Title style={{ color: "#495a87" }}>
                        Refunds
                      </Card.Title>
                      <Card.Text
                        className="d-flex justify-content-between align-items-center"
                        style={{ color: "#202652" }}
                      >
                        <h3>0.00 </h3>
                        <h5>N/A</h5>
                      </Card.Text>
                    </Card.Body>
                    <canvas></canvas>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{height:"40vh"}}>
                    <Card.Body>
                      <Card.Title style={{ color: "#495a87" }}>
                        Avg. Revenue Per User
                      </Card.Title>
                      <Card.Text
                        className="d-flex justify-content-between align-items-center"
                        style={{ color: "#202652" }}
                      >
                        <h3>-2.00%</h3>
                        <h5>-0.00%</h5>
                      </Card.Text>
                      <canvas></canvas>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
