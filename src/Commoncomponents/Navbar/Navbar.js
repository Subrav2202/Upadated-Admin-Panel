import React,{useState} from "react";
import {Container,Row,Col} from "react-bootstrap";
import notification from "../Assets/bell.svg";
import menu from "../Assets/menu.svg"
import Profile from "../Assets/Profile.jpg"
//import Menumodal from "../Modals/Menumodal"
import  Whichmenumodal  from "./Whichmenumodal";
import Notificationmodal from "../Modals/Notificationmodal"
import Profilemodal from "../Modals/Profilemodal"

function Navbar({id}) {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
  
    const styling={
        width:"20px",height:"20px"
    };
    const border={
        borderLeft:"2px ridge"
    }
    
    return (
        <div>
        <Container fluid>
        <Row style={{height:"10vh"}} className=" align-items-center">
            <Col md="8" className="d-flex justify-content-start">
                <h2 style={{color:"#4263f5"}}>H&E</h2>
            </Col>
            <Col md='2' className="d-flex justify-content-start">
                <input type="text" placeholder="SEARCH..." />
            </Col>
            <Col md='2'>
            <Row className="d-flex justify-content-center align-items-center">
                    <Col md="4" className="py-2" style={border}>
                    <img src={notification}  alt="notification" style={styling} onClick={()=>setShow1(true)}/>
                    </Col>
                    <Col md="4" className="py-2" style={border}>
                    <img src={menu} alt="notification" style={styling} onClick={()=>setShow2(true)}/>
                    </Col>
                    <Col md="4" style={border}>
                    <img src={Profile} alt="notification" style={{ width:"40px",
                    height:"40px",
                    borderRadius:"50%"}} onClick={()=>setShow3(true)}/>
                    </Col>
                </Row>
                </Col>
            </Row>
      </Container>
      {show1 && <Notificationmodal show={show1} onHide={() => setShow1(false)}/>}
      {show2 && <Whichmenumodal id={id} show={show2} onHide={() => setShow2(false)}/>}
      {show3 && <Profilemodal show={show3} onHide={() => setShow3(false)}/>}
        </div>
    )
}

export default Navbar
