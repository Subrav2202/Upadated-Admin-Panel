import React,{useState} from 'react'
import { Form,Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaRegWindowClose} from "react-icons/fa";
import { addDCenter } from "../Redux/Action";

function Dinsertmodal( { show, onHide } ) {
    const [centerstate, setcenterstate] = useState({
        Shop: "",
        Owner: "",
        Contact: "",
        Email: "",
        Lattitude: "",
        Longitude: "",
        Address: "",
        Landmark: "",
        City: "",
        State: "",
      });
      const centerChangeHandler = (e) => {
        const name=e.target.name;
        const value=e.target.value; 
        setcenterstate({...centerstate,[name]:value});
        console.log({[name]:value})
      };
      const dispatch = useDispatch();
    
      const centersubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addDCenter({centerstate}));
        setcenterstate({
        Shop:"",
        Owner:"",
        Contact:"",
        Email:"",
        Lattitude:"",
        Longitude:"",
        Address:"",
        Landmark:"",
        City:"",
        State:"",
        });
      };

    return (
        <Modal show={show} onHide={onHide}  size="lg">
        <Form onSubmit={centersubmitHandler}>
          <Modal.Header>
            <Modal.Title style={{ color: "#00bcd4", margin: "auto" }}>
              Areawise Service Centers
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container">
              <div className="row">
                <input type="hidden" name="" id="txtCenterId" />
                <div className="col-md-6">
                  <label for="txtCname">
                    <b>Shop</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtCname"
                    type="text"
                    placeholder="Enter Shop Name"
                    onChange={centerChangeHandler}
                    name="Shop"
                  />
                </div>

                <div className="col-md-6">
                  <label for="txtOwner">
                    <b>Owner</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtOwner"
                    type="text"
                    placeholder="Enter Owner Name"
                    onChange={centerChangeHandler}
                    name="Owner"
                  />
                </div>

                <div className="col-md-6">
                  <label for="txtContact">
                    <b>Contact</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtContact"
                    type="text"
                    placeholder="Enter contact Name"
                    onChange={centerChangeHandler}
                    name="Contact"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtEmail">
                    <b>Email</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtEmail"
                    type="text"
                    placeholder="Enter Email Name"
                    onChange={centerChangeHandler}
                    name="Email"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtLattitude">
                    <b>Latitude</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtLattitude"
                    type="latti"
                    placeholder="allow notification for lattitude"
                    onChange={centerChangeHandler}
                    name="Lattitude"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtLongitude">
                    <b>Longitude</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtLongitude"
                    type="text"
                    placeholder="Allow Notification for longitude"
                    onChange={centerChangeHandler}
                    name="Longitude"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtAddress">
                    <b>Address</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtAddress"
                    type="text"
                    placeholder="Enter Address Name"
                    onChange={centerChangeHandler}
                    name="Address"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtLocation">
                    <b>Landmark</b>
                  </label>
                  <input
                    className="form-control"
                    id="txtLocation"
                    type="text"
                    placeholder="Enter Address Name"
                    onChange={centerChangeHandler}
                    name="Landmark"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtCity">
                    <b>City</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter City Name"
                    id="txtCity"
                    onChange={centerChangeHandler}
                    name="City"
                  />
                </div>
                <div className="col-md-6">
                  <label for="txtState">
                    <b>State</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter State Name"
                    id="txtState"
                    onChange={centerChangeHandler}
                    name="State"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
          <input className="form-control" type="submit" value="Submit" style={{backgroundColor:"green"}} />

          <button onClick={onHide} className="form-control" style={{backgroundColor:"red"}}>
            <i>
              <FaRegWindowClose />
            </i>
            Cancel
          </button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
}

export default Dinsertmodal
