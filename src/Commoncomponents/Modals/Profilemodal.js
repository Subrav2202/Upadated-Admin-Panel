import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdSettings} from 'react-icons/io';
import {IoMdLogOut} from 'react-icons/io';

function Profilemodal({show,onHide}) {
 const styling={
   width:"10rem",
  top: "6vh",
  left:"75rem"
 }
 
  return (
    <div>
      <Modal show={show} onHide={onHide} size="sm" style={styling}>
      
        <Modal.Body style={{width:"100%",height:"100%"}}>
         <div className="d-flex align-items-center profileicons"><BsFillPersonFill/><h6>Account</h6></div> 
          <div className="d-flex align-items-center profileicons"><IoMdSettings/><h6>Setting</h6></div>
          <div className="d-flex align-items-center profileicons"><IoMdLogOut/><h6>Logout</h6></div>
        </Modal.Body>
        
      </Modal>
      
    </div>
  );
}

export default Profilemodal;