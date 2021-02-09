import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import facebook from "./Assets/facebook.svg";
import google from "./Assets/google-plus.svg";
import instagram from "./Assets/instagram.svg";
import twitter from "./Assets/twitter.svg";
import pininterest from "./Assets/pinterest.svg";
import usa from "./Assets/united-states.svg";
import rus from "./Assets/russia.svg";
import can from "./Assets/canada.svg";
import ind from "./Assets/india.svg";
import fra from "./Assets/france.svg";

import { Tablecontent, Sales } from "./Tablecontent";
import {
  Linechart,
  Mixedlinechart,
  Donutchart,
  ProductSells,
  Areachart,
} from "./Chart";
import { FaSquareFull } from "react-icons/fa";
import Rowdata from "./Rowdata.js";

import { ImArrowDown, ImArrowUp } from "react-icons/im";
import {
  Container,
  Row,
  Col,
  Card,
  Breadcrumb,
  Table,
  Button,
  ListGroup,
} from "react-bootstrap";

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
                  <Card style={{ height: "50vh" }}>
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
                      <Linechart
                        linedata={{
                          data: [
                            [0, 5],
                            [1, 5],
                            [2, 7],
                            [3, 7],
                            [4, 9],
                            [5, 5],
                            [6, 3],
                            [7, 5],
                            [8, 2],
                            [9, 4],
                            [10, 6],
                            [11, 7],
                          ],
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{ height: "50vh" }}>
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
                      <Linechart
                        linedata={{
                          data: [
                            [0, 3],
                            [1, 7],
                            [2, 6],
                            [3, 4],
                            [4, 5],
                            [5, 4],
                            [6, 3],
                            [7, 5],
                            [8, 5],
                            [9, 2],
                            [10, 3],
                            [11, 1],
                          ],
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{ height: "50vh" }}>
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

                      <Linechart
                        linedata={{
                          data: [
                            [0, 5],
                            [1, 3],
                            [2, 4],
                            [3, 6],
                            [4, 5],
                            [5, 7],
                            [6, 9],
                            [7, 4],
                            [8, 3],
                            [9, 5],
                            [10, 6],
                            [11, 1],
                          ],
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{ height: "50vh" }}>
                    <Card.Body>
                      <Card.Title style={{ color: "#495a87" }}>
                        Avg. Revenue/User
                      </Card.Title>
                      <Card.Text
                        className="d-flex justify-content-between align-items-center"
                        style={{ color: "#202652" }}
                      >
                        <h3>-2.00%</h3>
                        <h5>-0.00%</h5>
                      </Card.Text>

                      <Linechart
                        linedata={{
                          data: [
                            [0, 6],
                            [1, 5],
                            [2, 3],
                            [3, 4],
                            [4, 2],
                            [5, 5],
                            [6, 3],
                            [7, 8],
                            [8, 6],
                            [9, 4],
                            [10, 5],
                            [11, 1],
                          ],
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/*=========================================End of 4 cards============================================================================= */}

              {/*=========================================recent orders============================================================================= */}

              <br></br>

              <Row>
                <Col md={9}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Recent Orders</Card.Title>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Order Time</th>
                            <th>Customer</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Rowdata
                            no={1}
                            quantity={20}
                            price={"$20"}
                            time={"27-08-2018 01:22:12"}
                            customer={"Patricia J. King"}
                            status={"InTransit"}
                          />
                          <Rowdata
                            no={2}
                            quantity={12}
                            price={"$49"}
                            time={"27-08-2019 01:22:12"}
                            customer={"Sujan"}
                            status={"Deliverd"}
                          />
                          <Rowdata
                            no={3}
                            quantity={30}
                            price={"$59"}
                            time={"27-08-2020 01:22:12"}
                            customer={"Kiron sharma"}
                            status={"Deliverd"}
                          />
                          <Rowdata
                            no={4}
                            quantity={70}
                            price={"$37"}
                            time={"27-08-2021 01:22:12"}
                            customer={"Patricia J. King"}
                            status={"Deliverd"}
                          />
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Customer Acquisition</Card.Title>
                      <Mixedlinechart />
                      <span className="d-flex justify-content-around">
                        <i>
                          <FaSquareFull color={"skyblue"} />
                          Returning
                        </i>
                        <i>
                          <FaSquareFull color={"#db4242"} />
                          First Time
                        </i>
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Product Category</Card.Title>
                      <hr />
                      <div style={{ width: "100%", height: "300px" }}>
                        <Donutchart
                          bardata={{
                            labels: ["MEN", "WOMEN", "ACCESSORIES"],
                            datasets: [
                              {
                                label: "Prodect category",
                                data: [60, 30, 30],
                                backgroundColor: [
                                  "#327da8",
                                  "#db4256",
                                  "#42db72",
                                ],
                              },
                            ],
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Product Sales</Card.Title>
                      <hr />
                      <ProductSells />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Top Performing Campaigns</Card.Title>

                      <Table
                        responsive
                        style={{ width: "100%", height: "200px" }}
                      >
                        <tbody>
                          <Tablecontent id={1} />
                          <Tablecontent id={2} />
                          <Tablecontent id={3} />
                          <Tablecontent id={4} />
                        </tbody>
                      </Table>
                      <div className="d-flex justify-content-end">
                      <Button
                      variant="light"
                    >
                      Details
                    </Button>
                    </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br></br>
              {/*====================================sales=========================================== */}
              <Row>
                <Sales heading={"Sales"} amount={"$0"} />
                <Sales heading={"New Customer"} amount={"0"} />
                <Sales heading={"Visitor"} amount={"0"} />
                <Sales heading={"Total Orders"} amount={"0"} />
              </Row>
              {/*====================================sales=========================================== */}
              <br></br>
              {/*====================================Category Revenue=========================================== */}

              <Row>
                <Col md={5}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Revenue by Category</Card.Title>

                      <div style={{ width: "100%", height: "350px" }}>
                        <Donutchart
                          bardata={{
                            labels: [
                              "MEN",
                              "WOMEN",
                              "ACCESSORIES",
                              "Children",
                              "Apperal",
                            ],
                            datasets: [
                              {
                                label: "Prodect category",
                                data: [100, 80, 50, 40, 20],
                                backgroundColor: [
                                  "#327da8",
                                  "#db4256",
                                  "#42db72",
                                  "#6ad9eb",
                                  "#bdd964",
                                ],
                              },
                            ],
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={7}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Total Revenue</Card.Title>
                      <div style={{ width: "100%", height: "270px" }}>
                        <Areachart
                          Areadata={{
                            labels: [
                              "2016 Q1",
                              "2016 Q2",
                              "2017 Q1",
                              "2017 Q2",
                              "2018 Q1",
                              "2018 Q2",
                            ],
                            datasets: [
                              {
                                label: ["Q1", "Q2", "Q3"],
                                data: [0, 7500, 10000, 22500, 25000, 40000],
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)",
                              },
                            ],
                          }}
                        />
                      </div>
                      <hr />
                      <span className="d-flex justify-content-between">
                        <strong style={{ color: "skyblue", fontSize: "30px" }}>
                          $0,000
                        </strong>
                        <strong style={{ color: "green", fontSize: "30px" }}>
                          0%
                        </strong>
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/*====================================Category Revenue=========================================== */}
              <br></br>
              <Row>
                <Col md={5}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Sales By Social Source</Card.Title>

                      <ListGroup>
                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={facebook}
                                style={{ width: "40px", height: "40px" }}
                                alt="img"
                              />
                              Facebook
                            </i>
                            120 Sales
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={twitter}
                                style={{ width: "40px", height: "40px" }}
                                alt="img"
                              />
                              Twitter
                            </i>
                            99 Sales
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={instagram}
                                style={{ width: "40px", height: "40px" }}
                                alt="img"
                              />
                              Instagram
                            </i>
                            76 Sales
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={pininterest}
                                style={{ width: "40px", height: "40px" }}
                                alt="img"
                              />
                              Pininterest
                            </i>
                            56 Sales
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={google}
                                style={{ width: "40px", height: "40px" }}
                                alt="img"
                              />
                              Google
                            </i>
                            36 Sales
                          </span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Sales By Traffic Source</Card.Title>
                      <ListGroup>
                        <ListGroup.Item>
                          <span className="d-flex justify-content-around">
                            <span>Direct</span>$4000.00
                            <i style={{ color: "green" }}>
                              <ImArrowUp />
                              5.86%
                            </i>
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-around">
                            <span>Search</span>$3123.00
                            <i style={{ color: "green" }}>
                              <ImArrowUp />
                              5.86%
                            </i>
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-around">
                            <span>Social</span>$3099.00{" "}
                            <i style={{ color: "green" }}>
                              <ImArrowUp />
                              5.86%
                            </i>
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-around">
                            <span>Referral</span>$2200.00
                            <i style={{ color: "red" }}>
                              <ImArrowDown />
                              4.02%
                            </i>
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-around">
                            <span>Email</span>$1500.00
                            <i style={{ color: "red" }}>
                              <ImArrowDown />
                              4.02%
                            </i>
                          </span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Sales By Country Traffic Source</Card.Title>

                      <ListGroup>
                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={usa}
                                style={{ width: "20px", height: "20px" }}
                                alt="img"
                              />
                              USA
                            </i>
                            78%
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={can}
                                style={{ width: "20px", height: "20px" }}
                                alt="img"
                              />
                              Canada
                            </i>
                            9%
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={rus}
                                style={{ width: "20px", height: "20px" }}
                                alt="img"
                              />
                              Russia
                            </i>
                            76%
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={ind}
                                style={{ width: "20px", height: "20px" }}
                                alt="img"
                              />
                              India
                            </i>
                            34%
                          </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <span className="d-flex justify-content-between">
                            <i>
                              <img
                                src={fra}
                                style={{ width: "20px", height: "20px" }}
                                alt="img"
                              />
                              France
                            </i>
                            21%
                          </span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <br />
              <br />
              <Row style={{ backgroundColor: "white" }}>
                <Col md={9} className="py-3">
                  Copyright © 2018 Concept. All rights reserved. Dashboard by
                  Colorlib.
                </Col>
                <Col md={3} className="d-flex justify-content-around py-3">
                  <span>About </span>
                  <span>Support</span>
                  <span>Contact Us</span>
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
