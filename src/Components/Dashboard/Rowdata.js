import React  from "react";
import image from "./Assets/product.png";
import { GoPrimitiveDot } from "react-icons/go";

function Rowdata({ no, quantity, price, time, customer, status }) {
 
  return (
    <tr>
      <td>{no}</td>
      <td>
        <img src={image} alt="img" style={{ width: "40px", height: "40px" }} />
      </td>
      <td>Product #{no}</td>
      <td>id00000{no}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{time}</td>
      <td>{customer}</td>
      <td>
        <i>
          <GoPrimitiveDot />
        </i>
        {status}
      </td>
    </tr>
  );
}

export default Rowdata;
