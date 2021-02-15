import React from 'react'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Pageheader from "../Components/Areawise/Pageheader"
import { Container, Row, Col, Card } from "react-bootstrap";
import Datatable from "./Areawise/Datatable";
import "./Areawise/Table.css";

function Commongrid({title,p1,p2,header}) {
    return (
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
              {title}
              </h4>
              <hr />
              <div className="d-flex">
                <p>{p1}
                </p>
                <p className="mx-1">{">"}</p>
                <p>{p2}</p>
              </div>
              <Pageheader/>
              
              <Row>
                <Col md={12}>
                  <Card style={{ overflow: "scroll" }}>
                    <Card.Header>{header}</Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={12}>
                          <Datatable id={0}/>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    )
}

export default Commongrid
