import React from "react";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Pageheader from "./Pageheader";
import { Container, Row, Col, Card } from "react-bootstrap";
import Datatable from "../../Areawise/Datatable";

function Category() {
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
            <h4 className="d-flex justify-content-start pt-2">
              Category Data Tables
            </h4>
            <hr />
            <div className="d-flex">
              <p>Center Request</p>
              <p className="mx-1">{">"}</p>
              <p>Category Data Table</p>
            </div>
            <hr/>
             <Pageheader />

            <Row>
              <Col md={12}>
                <Card style={{ overflow: "scroll" }}>
                  <Card.Header>Basic Table</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <Datatable id={2}/>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;
