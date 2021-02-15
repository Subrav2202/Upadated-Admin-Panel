import React from "react";
import Header from "../Header/Header";
import Commongrid from "../Commongrid"
import Sidebar from "../Sidebar/Sidebar";
import Pageheader from "./Pageheader";
import { Container, Row, Col, Card } from "react-bootstrap";
import Datatable from "./Datatable";

function Areawise() {
  return (
    <div>
      <Header id="areawise"/>
      <Commongrid title={"Areawise Data Tables"} p1={"Center Request"} p2={"Areawise Data Table"} header={"Basic Table"}/>
      {/* <Container fluid>
      //   <Row>
      //     <Col
      //       md={2}
      //       id="sidebar-wrapper"
      //       style={{ backgroundColor: "#050545" }}
      //     >
      //       <Sidebar />
      //     </Col>
      //     <Col
      //       md={10}
      //       id="page-content-wrapper"
      //       style={{ backgroundColor: "#ebfaf8" }}
      //     >
      //       <h4 className="d-flex justify-content-start pt-2">
      //         Areawise Data Tables
      //       </h4>
      //       <hr />
      //       <div className="d-flex">
      //         <p>Center Request</p>
      //         <p className="mx-1">{">"}</p>
      //         <p>Areawise Data Table</p>
      //       </div>
      //       <Pageheader />

      //       <Row>
      //         <Col md={12}>
      //           <Card style={{ overflow: "scroll" }}>
      //             <Card.Header>Basic Table</Card.Header>
      //             <Card.Body>
      //               <Row>
      //                 <Col md={12}>
      //                   <Datatable id={0}/>
      //                 </Col>
      //               </Row>
      //             </Card.Body>
      //           </Card>
      //         </Col>
      //       </Row>
      //     </Col>
      //   </Row>
      // </Container> */}
    </div>
  );
}

export default Areawise;
