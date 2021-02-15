import Modal from "react-bootstrap/Modal";


function Notificationmodal({show,onHide}) {
 
  const styling={
    width:"30rem",
   top: "6vh",
   left:"52rem"
  }
  return (
    <div>
      <Modal show={show} onHide={onHide} size="sm" style={styling}>
      <Modal.Header className="d-flex align-items-center justify-content-center">
      <h6>Notification</h6>
    </Modal.Header>
        <Modal.Body style={{height:"30vh"}}>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center" style={{color:"white",backgroundColor:"#364299"}}>
        <h6>View all notifications</h6>
      </Modal.Footer>
        
      </Modal>
      
    </div>
  );
}

export default Notificationmodal;