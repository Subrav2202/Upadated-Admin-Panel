import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

function insertmodal({ show, onHide }) {
    
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header className="d-flex align-items-center justify-content-center">
          <h6>Areawise Service Centers</h6>
        </Modal.Header>
        <Modal.Body style={{ height: "60vh" }}>
          <Container>
            <Row>
              <Col>
                <Form>
                  <Form.Label>Shop</Form.Label>
                  <Form.Control type="text" placeholder="Enter Shop Name" />
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text" placeholder="Enter Contact Name" />
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control type="number" />
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" />
                  <Form.Label>city</Form.Label>
                  <Form.Control type="text" placeholder="Enter City Name" />
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Label>Owner</Form.Label>
                  <Form.Control type="text" placeholder="Enter Owner Name" />
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Email" />
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control type="number" />
                  <Form.Label>Landmark</Form.Label>
                  <Form.Control type="text" placeholder="Enter Landmark" />
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Enter State Name" />
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center" style={{ color:"white",
        backgroundColor: "green"}}>
          Save
        </Modal.Footer>
        <Modal.Footer
          onClick={onHide}
          className="d-flex align-items-center justify-content-center" style={{color:"white",
          backgroundColor: "red"}}
        >
        Cancel
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default insertmodal;
