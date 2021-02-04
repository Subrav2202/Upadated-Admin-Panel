import React, { useState } from "react";
import Helmet from "react-helmet";
import { Form, Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Areawise from "../Areawise/Areawise"
import { useDispatch } from "react-redux";
import { Logindetails } from "../Redux/Action";
import image from "./Assets/login.svg";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setshow] = useState(true);
  const showPassword = () => {
    setshow(!show);
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      Logindetails(`
    Email: ${email}
    Password: ${password}
  `)
    );
    history.push("/Areawise");
  };
  
  const title = "Help&Earn Login Page";
  return (
    <div className="bg-info">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div onload="sessionStorage.clear()">
        <Container>
          <Row
            className="align-items-center"
            style={{ height: "100vh", width: "100wh" }}
          >
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <div className="d-flex justify-content-center">
                  <img
                    variant="top"
                    src={image}
                    alt="img"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">H&E</Card.Title>
                </Card.Body>
                <Container>
                  <Form onSubmit={formsubmitHandler}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="Emailid"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        placeholder="Password"
                        name="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type={show ? "password" : "text"}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Show Password"
                        onClick={showPassword}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Sign In
                    </Button>
                    <Form.Group>
                      <Link to="/#">
                        <br></br>Forgot the password?
                      </Link>
                    </Form.Group>
                  </Form>
                </Container>
                <Card.Body>
                  <Form></Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
