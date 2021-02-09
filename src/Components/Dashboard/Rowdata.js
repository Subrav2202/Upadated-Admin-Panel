import React, { useState } from "react";
import image from "./Assets/product.png";
import { GoPrimitiveDot } from "react-icons/go";

function Rowdata({ no, quantity, price, time, customer, status}) {
  const [state, setstate] = useState({ color: "green" });
//   const colorseter=()=>{
//       setstate({color:"yellow"})
//   }
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
          <GoPrimitiveDot color={state.color} />
        </i>
        {status}
      </td>
    </tr>
  );
}

export default Rowdata;
