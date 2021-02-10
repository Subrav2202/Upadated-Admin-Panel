import React from "react";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import PageHeader from "./PageHeader";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import Datatable from "../../Areawise/Datatable";

function Serviceprovider() {
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
              Service provider Data Tables
            </h4>
            <hr />
            <Breadcrumb>
              <Breadcrumb.Item>Provider Request</Breadcrumb.Item>
              <Breadcrumb.Item active>Service Provider</Breadcrumb.Item>
            </Breadcrumb>
            <hr />
            <PageHeader />
            <Row>
              <Col md={12}>
                <Card style={{ overflow: "scroll" }}>
                  <Card.Header>Basic Table</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <Datatable id={2} />
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

export default Serviceprovider;
